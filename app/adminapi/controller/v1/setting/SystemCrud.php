<?php
/**
 *  +----------------------------------------------------------------------
 *  | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
 *  +----------------------------------------------------------------------
 *  | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
 *  +----------------------------------------------------------------------
 *  | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
 *  +----------------------------------------------------------------------
 *  | Author: CRMEB Team <admin@crmeb.com>
 *  +----------------------------------------------------------------------
 */

namespace app\adminapi\controller\v1\setting;


use app\adminapi\controller\AuthController;
use app\Request;
use app\services\system\log\SystemFileServices;
use app\services\system\SystemCrudServices;
use app\services\system\SystemMenusServices;
use crmeb\services\CacheService;
use crmeb\services\crud\Make;
use crmeb\services\FileService;
use crmeb\utils\Terminal;
use think\facade\App;
use think\helper\Str;
use think\Response;

/**
 * Class SystemCrud
 * @author 等风来
 * @email 136327134@qq.com
 * @date 2023/4/6
 * @package app\adminapi\controller\v1\setting
 */
class SystemCrud extends AuthController
{

    /**
     * SystemCrud constructor.
     * @param App $app
     * @param SystemCrudServices $services
     */
    public function __construct(App $app, SystemCrudServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * @return \think\Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/11
     */
    public function index()
    {
        return app('json')->success($this->services->getList());
    }

    /**
     * @return \think\Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/11
     */
    public function save($id = 0)
    {
        $data = $this->request->postMore([
            ['pid', 0],//上级菜单id
            ['menuName', ''],//菜单名
            ['tableName', ''],//表名
            ['modelName', ''],//模块名称
            ['tableComment', ''],//表备注
            ['tableField', []],//表字段
            ['tableIndex', []],//索引
            ['filePath', []],//生成文件位置
            ['isTable', 0],//是否生成表
            ['deleteField', []],//删除的表字段
        ]);

        $fromField = $columnField = [];
        foreach ($data['tableField'] as $item) {
            //判断字段长度
            if (in_array($item['field_type'], ['datetime', 'timestamp', 'time', 'date', 'year']) && $item['limit'] > 6) {
                return app('json')->fail('字段' . $item['field'] . '长度不能大于6');
            }
            //收集列表展示数据
            if ($item['is_table'] && !in_array($item['field_type'], ['primaryKey', 'addSoftDelete', 'addSoftDelete'])) {
                if (isset($item['primaryKey']) && !$item['primaryKey']) {
                    $columnField[] = [
                        'field' => $item['field'],
                        'name' => $item['table_name'],
                        'type' => $item['from_type'],
                    ];
                }
            }
            //收集表单展示数据
            if ($item['from_type']) {
                $name = $item['table_name'] ?: $item['comment'];
                $option = $item['options'] ?? [];
                if (!$name) {
                    return app('json')->fail(500048, [], ['field' => $item['field']]);
                }
                if (!$option && in_array($item['from_type'], ['radio', 'select'])) {
                    return app('json')->fail('表单类型为radio或select时,options字段不能为空');
                }
                $fromField[] = [
                    'field' => $item['field'],
                    'type' => $item['from_type'],
                    'name' => $name,
                    'required' => $item['required'],
                    'option' => $option,
                ];
            }
        }
        if (!$fromField) {
            return app('json')->fail(500046);
        }
        if (!$columnField) {
            return app('json')->fail(500047);
        }
        $data['fromField'] = $fromField;
        $data['columnField'] = $columnField;
        if (!$data['tableName']) {
            return app('json')->fail(500042);
        }

        $this->services->createCrud($id, $data);

        return app('json')->success(500043);
    }

    /**
     * 获取创建文件的目录存放位置
     * @return \think\Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/11
     */
    public function getFilePath()
    {
        [$tableName] = $this->request->postMore([
            ['tableName', ''],
        ], true);

        if (!$tableName) {
            return app('json')->fail(500042);
        }

        if (in_array($tableName, SystemCrudServices::NOT_CRUD_TABANAME)) {
            return app('json')->fail(500041);
        }

        $routeName = 'crud/' . Str::snake($tableName);

        $key = 'id';
        $tableField = [];

        $field = $this->services->getColumnNamesList($tableName);
        foreach ($field as $item) {
            if ($item['primaryKey']) {
                $key = $item['name'];
            }
            $tableField[] = [
                'field' => $item['name'],
                'field_type' => $item['type'],
                'primaryKey' => (bool)$item['primaryKey'],
                'default' => $item['default'],
                'limit' => $item['limit'],
                'comment' => $item['comment'],
                'required' => false,
                'is_table' => false,
                'table_name' => '',
                'from_type' => '',
            ];
        }

        $make = $this->services->makeFile($tableName, $routeName, false, [
            'menuName' => '',
            'key' => $key,
            'fromField' => [],
            'columnField' => [],
        ]);

        $makePath = [];
        foreach ($make as $k => $item) {
            $makePath[$k] = $item['path'];
        }

        return app('json')->success(compact('makePath', 'tableField'));
    }

    /**
     * @param $id
     * @return \think\Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/12
     */
    public function read($id)
    {
        if (!$id) {
            return app('json')->fail(500035);
        }

        $info = $this->services->get($id);
        if (!$info) {
            return app('json')->fail(100026);
        }

        $routeName = 'crud/' . Str::snake($info->table_name);

        $column = $this->services->getColumnNamesList($info->table_name);
        $key = 'id';
        foreach ($column as $value) {
            if ($value['primaryKey']) {
                $key = $value['name'];
                break;
            }
        }

        $softDelete = false;

        foreach ((array)$info->field['tableField'] as $item) {
            if (isset($item['field_type']) && $item['field_type'] === 'addSoftDelete') {
                $softDelete = true;
                break;
            }
        }

        $make = $this->services->makeFile($info->table_name, $routeName, false, [
            'menuName' => $info->name,
            'modelName' => $info->model_name,
            'key' => $key,
            'softDelete' => $softDelete,
            'fromField' => $info->field['fromField'] ?? [],
            'columnField' => $info->field['columnField'] ?? [],
        ]);

        $data = [];
        foreach ($make as $key => $item) {
            if (in_array($key, ['pages', 'router', 'api'])) {
                $path = Make::adminTemplatePath() . $item['path'];
            } else {
                $path = app()->getRootPath() . $item['path'];
            }
            $item['name'] = $item['path'];
            try {
                $item['content'] = file_get_contents($path, LOCK_EX);
                $data[$key] = $item;
            } catch (\Throwable $e) {

            }
        }

        //调整排序
        $makeData = [];
        $names = [
            'controller' => '控制器',
            'validate' => '验证器',
            'service' => '逻辑层',
            'dao' => '数据库操作',
            'model' => '模型层',
            'route' => '后端路由',
            'router' => '前端路由',
            'api' => '前端接口',
            'pages' => '前端页面'
        ];
        foreach ($names as $name => $value) {
            if (isset($data[$name])) {
                $data[$name]['file_name'] = $value;
                $makeData[] = $data[$name];
            }
        }
        $data = $makeData;

        $info = $info->toArray();
        //记录没有修改之前的数据
        foreach ((array)$info['field']['tableField'] as $key => $item) {
            $item['default_field'] = $item['field'];
            $item['default_limit'] = $item['limit'];
            $item['default_field_type'] = $item['field_type'];
            $item['default_comment'] = $item['comment'];
            $item['default_default'] = $item['default'];
            $item['is_table'] = !!$item['is_table'];
            $item['required'] = !!$item['required'];
            $item['primaryKey'] = isset($item['primaryKey']) ? (int)$item['primaryKey'] : 0;
            $info['field']['tableField'][$key] = $item;
        }
        //对比数据库,是否有新增字段
        $newColumn = [];
        $fieldAll = array_column($info['field']['tableField'], 'field');
        foreach ($column as $value) {
            if (!in_array($value['name'], $fieldAll)) {
                $newColumn[] = [
                    'field' => $value['name'],
                    'field_type' => $value['type'],
                    'primaryKey' => $value['primaryKey'] ? 1 : 0,
                    'default' => $value['default'],
                    'limit' => $value['limit'],
                    'comment' => $value['comment'],
                    'required' => '',
                    'is_table' => '',
                    'table_name' => '',
                    'from_type' => '',
                    'default_field' => $value['name'],
                    'default_limit' => $value['limit'],
                    'default_field_type' => $value['type'],
                    'default_comment' => $value['comment'],
                    'default_default' => $value['default'],
                ];
            }
        }

        if ($newColumn) {
            $info['field']['tableField'] = array_merge($newColumn, $info['field']['tableField']);
        }

        $keyInfo = $deleteInfo = $createInfo = $updateInfo = [];
        $tableField = [];
        foreach ($info['field']['tableField'] as $item) {
            if ($item['primaryKey']) {
                $keyInfo = $item;
                continue;
            }
            if ($item['field_type'] == 'timestamp' && $item['field'] === 'delete_time') {
                $deleteInfo = $item;
                continue;
            }
            if ($item['field_type'] == 'timestamp' && $item['field'] === 'create_time') {
                $createInfo = $item;
                continue;
            }
            if ($item['field_type'] == 'timestamp' && $item['field'] === 'update_time') {
                $updateInfo = $item;
                continue;
            }
            $tableField[] = $item;
        }
        if ($keyInfo) {
            array_unshift($tableField, $keyInfo);
        }
        if ($createInfo) {
            array_push($tableField, $createInfo);
        }
        if ($updateInfo) {
            array_push($tableField, $updateInfo);
        }
        if ($deleteInfo) {
            array_push($tableField, $deleteInfo);
        }
        $info['field']['tableField'] = $tableField;
        $info['field']['pid'] = (int)$info['field']['pid'];
        return app('json')->success(['file' => $data, 'crudInfo' => $info]);
    }

    /**
     * @param Request $request
     * @param SystemFileServices $service
     * @param $id
     * @return Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/24
     */
    public function savefile(Request $request, SystemFileServices $service, $id)
    {
        $comment = $request->param('comment');
        $filepath = $request->param('filepath');
        $pwd = $request->param('pwd');

        if ($pwd == '') {
            return app('json')->fail('请输入文件管理密码');
        }
        if (config('filesystem.password') != $pwd) {
            return app('json')->fail('文件管理密码错误');
        }

        if (empty($filepath) || !$id) {
            return app('json')->fail(410087);
        }
        $crudInfo = $this->services->get($id, ['make_path']);
        if (!$crudInfo) {
            return app('json')->fail('修改的CRUD文件不存在');
        }

        $makeFilepath = '';
        foreach ($crudInfo->make_path as $key => $item) {
            $path = $item;
            if (in_array($key, ['pages', 'router', 'api'])) {
                $item = Make::adminTemplatePath() . $item;
            } else {
                $item = app()->getRootPath() . $item;
            }
            if ($filepath == $path) {
                $makeFilepath = $item;
                break;
            }
        }
        if (!$makeFilepath || !in_array($filepath, $crudInfo->make_path)) {
            return app('json')->fail('您没有权限修改此文件');
        }
        $res = $service->savefile($makeFilepath, $comment);
        if ($res) {
            return app('json')->success(100000);
        } else {
            return app('json')->fail(100006);
        }
    }

    /**
     * 获取tree菜单
     * @return \think\Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/11
     */
    public function getMenus()
    {
        return app('json')->success(app()->make(SystemMenusServices::class)
            ->getList(['auth_type' => 1, 'is_show' => 1], ['auth_type', 'pid', 'id', 'menu_name as label', 'id as value']));
    }

    /**
     * 获取创建表数据类型
     * @return \think\Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/11
     */
    public function columnType()
    {
        return app('json')->success($this->services->getTabelRule());
    }

    /**
     * @param SystemMenusServices $services
     * @param $id
     * @return \think\Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/11
     */
    public function delete(SystemMenusServices $services, $id)
    {
        if (!$id) {
            return app('json')->fail(500035);
        }

        $info = $this->services->get($id);
        if (!$info) {
            return app('json')->fail(100026);
        }

        $services->transaction(function () use ($services, $info) {
            if ($info->menu_ids) {
                $services->deleteMenus($info->menu_ids);
            }

            $info->delete();
        });

        if ($info->make_path) {
            $errorFile = [];
            foreach ($info->make_path as $key => $item) {
                if (in_array($key, ['pages', 'router', 'api'])) {
                    $item = Make::adminTemplatePath() . $item;
                } else {
                    $item = app()->getRootPath() . $item;
                }
                try {
                    unlink($item);
                } catch (\Throwable $e) {
                    $errorFile[] = $item;
                }
            }
            if ($errorFile) {
                return app('json')->success(500040, [], [
                    'message' => '文件：' . implode("\n", $errorFile) . ';无法被删除!'
                ]);
            }
        }


        return app('json')->success(100002);
    }

    /**
     * 下载文件
     * @param $id
     * @return Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/15
     */
    public function download($id)
    {
        if (!$id) {
            return app('json')->fail(500035);
        }

        $info = $this->services->get($id);
        if (!$info) {
            return app('json')->fail(100026);
        }
        $zipPath = app()->getRootPath() . 'backup' . DS . Str::camel($info->table_name);
        $zipName = app()->getRootPath() . 'backup' . DS . Str::camel($info->table_name) . '.zip';
        if (is_file($zipName)) {
            unlink($zipName);
        }
        $makePath = $info->make_path ?? [];
        foreach ($makePath as $key => $item) {
            if (in_array($key, ['pages', 'router', 'api'])) {
                $item = $zipPath . str_replace(dirname(app()->getRootPath()), '', Make::adminTemplatePath()) . $item;
            } else {
                $item = $zipPath . DS . $item;
            }
            $makePath[$key] = $item;
        }

        $routeName = 'crud/' . Str::snake($info->table_name);

        $column = $this->services->getColumnNamesList($info->table_name);
        $key = 'id';
        foreach ($column as $value) {
            if ($value['primaryKey']) {
                $key = $value['name'];
                break;
            }
        }

        $softDelete = false;

        foreach ((array)$info->field['tableField'] as $item) {
            if (isset($item['field_type']) && $item['field_type'] === 'addSoftDelete') {
                $softDelete = true;
                break;
            }
        }

        $this->services->makeFile($info->table_name, $routeName, true, [
            'menuName' => $info->name,
            'key' => $key,
            'softDelete' => $softDelete,
            'fromField' => $info->field['fromField'] ?? [],
            'columnField' => $info->field['columnField'] ?? [],
        ], $makePath, $zipPath);

        if (!extension_loaded('zip')) {
            return app('json')->fail(500039);
        }

        $fileService = new FileService();
        $fileService->addZip($zipPath, $zipName, app()->getRootPath() . 'backup');

        $key = md5($zipName);
        CacheService::set($key, [
            'path' => $zipName,
            'fileName' => Str::camel($info->table_name) . '.zip',
        ], 300);
        return app('json')->success(['download_url' => sys_config('site_url') . '/adminapi/download/' . $key]);
    }

    /**
     * 获取权限路由
     * @param $tableName
     * @return Response
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/20
     */
    public function getRouteList($tableName)
    {
        $info = $this->services->get(['table_name' => $tableName]);
        if (!$info) {
            return app('json')->fail('crud详情查询失败');
        }

        $routeList = app()->make(SystemMenusServices::class)->getColumn([
            ['id', 'in', $info->menu_ids],
            ['auth_type', '=', 2]
        ], 'methods,api_url');

        $newRoute = [];
        foreach ($routeList as $item) {
            if ($item['methods'] == 'GET') {
                if (strstr($item['api_url'], 'create')) {
                    $newRoute['create'] = $item['api_url'];
                } else if (strstr($item['api_url'], 'edit')) {
                    $newRoute['edit'] = $item['api_url'];
                } else {
                    $newRoute['index'] = $item['api_url'];
                }
            } else if ($item['methods'] == 'DELETE') {
                $newRoute['delete'] = $item['api_url'];
            }
        }

        $column = $this->services->getColumnNamesList($info->table_name);
        $key = 'id';
        foreach ($column as $value) {
            if ($value['primaryKey']) {
                $key = $value['name'];
                break;
            }
        }

        $columns = [
            [
                'title' => 'ID',
                'key' => $key,
                'from_type' => '',
            ]
        ];
        foreach ((array)$info->field['tableField'] as $item) {
            if (isset($item['primaryKey']) && $item['primaryKey']) {
                continue;
            }
            if (isset($item['is_table']) && $item['is_table']) {
                if (in_array($item['from_type'], ['frameImageOne', 'frameImages'])) {
                    $keyName = 'slot';
                } else {
                    $keyName = 'key';
                }
                $columns[] = [
                    'title' => $item['table_name'] ?: $item['comment'],
                    $keyName => $item['field'],
                    'from_type' => $item['from_type'],
                ];
            }
        }
        $route = $newRoute;
        return app('json')->success(compact('key', 'route', 'columns'));
    }

    /**
     * @return string
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/14
     */
    public function npm()
    {
        $terminal = new Terminal();

        $adminPath = $terminal->adminTemplatePath();

        $adminPath = dirname($adminPath);

        try {
            $dir = $adminPath . DS . 'node_modules';
            if (!is_dir($dir)) {
//                $terminal->run('npm-install');
            }

//            $res = $terminal->run('npm-build');
        } catch (\Throwable $e) {
            $terminal->echoOutputFlag($e->getMessage());
        }

        if (!is_dir($adminPath . DS . 'dist')) {
            echo Response::create([
                'message' => '打包失败',
            ], 'json')->getContent();
        }

        $build = public_path() . config('app.admin_prefix');

//        $this->app->make(FileService::class)->copyDir($adminPath . DS . 'dist', $build);

//        echo $res;
    }
}
