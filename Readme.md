
# 需求说明

- 实现创建投票表单
- 显示创建的表单
- 删除查看在线表单
- 实现投票的功能
- 最后显示投票的结果
- 通过IP来标识用户

# 开发文档

## API 文档

### 创建投票表单

POST`/api/v1/createForm`

Req:body

```js
{
    pwd:String, //密码
    title:String, //标题
    form:{
            title:String,//标题
            options:[
                {
                    value:"选项1"
                }
            ]
    }
}
```

Res

```js
{
    url:String, //链接 如http://localhost/forms/8222
}
```

### 获取所有创建的投票

GET `/api/v1/forms`

Req:Params

```js
{
    pageNum:Number, //页码
    pageSize:Number, //每页几个
}
```

Res

```js
{
    data:[
        {
            title:String,//标题
            options:[
                {
                    value:"选项1",
                    number:100 //票数,第一次没有，投票后才有
                }
            ]
        }
    ]
}
```



### 打开一个投票

GET `/api/v1/forms/:formId`

Req:Params

```js
{
    pwd:String,//密码
}
```

Res

```js
{
    data:{
            title:String,//标题
            options:[
                {
                    value:"选项1",
                    number:100 //票数,第一次没有，投票后才有
                }
            ]
        }
}
```



### 提交一个表单

POST `/api/v1/submitForm`

Req:Params

```js
{
    select:[
        0, //第一个 选项
        1, //第二个 选项
        2
    ],
    ip:String
}
```

Res

```js
{
    data:[
        {
            title:String,//标题
            options:[
                {
                    value:"选项1",
                    number:100 //票数
                }
            ]
        }
    ]
}
```



