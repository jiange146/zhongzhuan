const $ = Env('书旗小说')
let ReadTimes = 0;
let vediogold = 0;
let drawgold = 0;

//             书旗极速版 
//签到 api/activity/xapi/signin/v5/signInAction
let jssqxssigninhd={"Host":"ocean.shuqireader.com","content-length":"93","accept":"application/json, text/plain, */*","user-agent":"Dalvik/2.1.0 (Linux; U; Android 10; SEA-AL10 Build/HUAWEISEA-AL10)","content-type":"application/json;charset=UTF-8","origin":"https://render-web.shuqireader.com","x-requested-with":"com.shuqi.controller.lite","sec-fetch-site":"same-site","sec-fetch-mode":"cors","referer":"https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210311&subVer=sqrelease&appVer=1.0.8.8&platform=115&placeid=60001&imei=1615884449416549&oaid=&sdk=29&wh=1080x2259&msv=3&enc=821511615893788340&sn=1615884449416549&vc=8ab5&mod=SEA-AL10&manufacturer=HUAWEI&brand=HUAWEI&net_type=wifi&first_placeid=src60001&aak=b6408f&user_id=2010134451&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDEwMTM0NDUxIiwidXRkaWQiOiJmYXN0X1lGQndvVDVZODAwREFJVUQxbHpyeFJPZCIsImltZWkiOiJmYXN0XzE2MTU4ODQ0NDk0MTY1NDkiLCJzbiI6ImZhc3RfMTYxNTg4NDQ0OTQxNjU0OSIsImV4cCI6MTYxNjQwMzM0NywidXNlcklkIjoiMjAxMDEzNDQ1MSIsImlhdCI6MTYxNTg4NDk0Nywib2FpZCI6ImZhc3RfOGVlZjc1ODMtNmVkYy00ZmQyLWJiZjAtZGZhZWQxY2NmZDEyIiwicGxhdGZvcm0iOiIxMTUifQ.1GFYbahKDPtm1zDx8BmuqmmTlQrRNITmwtyZESGfug-CxvgWAQM_n3IAS8sAkH1lFEdeCOs-Pw3tSL2C7MY4_w&utype=vip&net=4&net_env=4&isp=46000&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WUFiRi9NTVJISTREQUl5UnBDNytjZHlO&umidtoken=8xpLleNLOvk7ATV4Osy1qMgvODFWlxqS&permissionType=3&writer_switch=1&appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210311&subVer=sqrelease&appVer=1.0.8.8&platform=115&placeid=60001&imei=1615884449416549&oaid=&sdk=29&wh=1080x2259&msv=3&enc=821511615893788340&sn=1615884449416549&vc=8ab5&mod=SEA-AL10&manufacturer=HUAWEI&brand=HUAWEI&net_type=wifi&first_placeid=src60001&aak=b6408f&user_id=2010134451&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDEwMTM0NDUxIiwidXRkaWQiOiJmYXN0X1lGQndvVDVZODAwREFJVUQxbHpyeFJPZCIsImltZWkiOiJmYXN0XzE2MTU4ODQ0NDk0MTY1NDkiLCJzbiI6ImZhc3RfMTYxNTg4NDQ0OTQxNjU0OSIsImV4cCI6MTYxNjQwMzM0NywidXNlcklkIjoiMjAxMDEzNDQ1MSIsImlhdCI6MTYxNTg4NDk0Nywib2FpZCI6ImZhc3RfOGVlZjc1ODMtNmVkYy00ZmQyLWJiZjAtZGZhZWQxY2NmZDEyIiwicGxhdGZvcm0iOiIxMTUifQ.1GFYbahKDPtm1zDx8BmuqmmTlQrRNITmwtyZESGfug-CxvgWAQM_n3IAS8sAkH1lFEdeCOs-Pw3tSL2C7MY4_w&utype=vip&net=4&net_env=4&isp=46000&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WUFiRi9NTVJISTREQUl5UnBDNytjZHlO&umidtoken=8xpLleNLOvk7ATV4Osy1qMgvODFWlxqS&permissionType=3&writer_switch=1&from=ShuqiTab&serviceWorkerOn=1&spm=a2o558.page_personal&spm=a2o558.page_personal","accept-encoding":"gzip","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
// 看书 api/activity/v1/activity/pendant/lottery
let jssqxsckhd={"Host":"ocean.shuqireader.com","content-type":"application/x-www-form-urlencoded","content-length":"1916","accept-encoding":"gzip","user-agent":"okhttp/3.7.0"}
let jsvediogoldprizehd={"Host":"ocean.shuqireader.com","content-type":"application/x-www-form-urlencoded","content-length":"1977","accept-encoding":"gzip","user-agent":"okhttp/3.7.0"}
!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


async function all() {
    //nodejs运行
    if ($.isNode()) {
        $.log(`\n============书旗小说=============`);
        ReadTimes = 0;
        vediogold = 0;
        drawgold = 0;
        //签到
        await sqxssignin()
        //看视频奖励抽奖次数
        await vediodrawprize(0);
        //看视频奖励金币
        await vediogoldprize(0);
        //阅读
        await readbook();
        $.log(`\n============书旗小说极速版=============`)
        await jsqxssignin()
        //极速看书
            await jsreadbook();
        //极速视频
             await jsvediogoldprize();
             $.log(`\n============书旗小说&极速版=============`)
        //收集阅读金币
        await receivecoin();
        //个人信息
        await userinfo();


    }
}
function sqxssignin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";

        const request = {
            url: url,
            headers: sqxssigninhd,
            body: sqxssigninbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("【书旗签到】失败");
                    await $.wait(1000);                    
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                         $.log("【书旗签到】成功，"+result.copyWriting);
                        await $.wait(1000);
                    }
                     else {                        
                            $.log("【书旗签到】失败," + result.message );
                            await $.wait(1000);              
                           //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsqxssignin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";

        const request = {
            url: url,
            headers: jssqxssigninhd,
            body: jssqxssigninbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("【书旗签到】失败");
                    await $.wait(1000);                    
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                         $.log("【书旗签到】成功，"+result.copyWriting);
                        await $.wait(1000);
                    }
                     else {                        
                            $.log("【书旗签到】失败," + result.message );
                            await $.wait(1000);              
                           //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function readbook() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";

        const request = {
            url: url,
            headers: sqxsckhd[0],
            body: sqxsckbd[0]
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("阅读请求失败,再次尝试阅读");
                    await $.wait(1000);
                    await readbook();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        ReadTimes++;
                        $.log("【阅读任务】第" + ReadTimes + "次阅读成功，获得3金币");
                        await $.wait(1000);
                        await readbook();
                    } else {

                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【阅读任务】阅读失败，" + result.message + ",再次尝试阅读");
                            await $.wait(1000);
                            await readbook();
                        } else
                            $.log("【阅读任务】阅读失败，" + result.message);

                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function receivecoin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";

        const request = {
            url: url,
            headers: receivecoinckhd,
            body: receivecoinckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("收集阅读金币请求失败,再次尝试收集阅读金币");
                    await $.wait(1000);
                    await receivecoin();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {

                        $.log("【收集金币】收集阅读金币成功");

                    } else {
                        $.log("【收集金币】收集阅读金币失败," + result.message);
                        //$.log(data);
                    }
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function vediogoldprize(j) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: vediogoldprizehd,
            body: vediogoldprizebd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("视频金币请求失败,再次尝试视频金币");
                    await $.wait(1000);
                    await vediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        j++;
                        $.log("【视频金币】观看第" + j + "个视频成功，获得250金币，等待30s观看下一个视频");
                        vediogold += 250;
                        await $.wait(30000);
                        await vediogoldprize(j);
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【视频金币】观看失败，" + result.message + ",再次尝试视频金币");
                            await $.wait(30000);
                            await vediogoldprize(j);
                        } else
                            $.log("【视频金币】观看失败," + result.message);
                        //$.log(data);

                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function vediodrawprize(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";

        const request = {
            url: url,
            headers: vediodrawprizeckhd,
            body: vediodrawprizeckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("视频抽奖请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await vediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        k++;
                        $.log("【视频抽奖】观看第" + k + "个视频成功，获得一次抽奖机会");
                        await $.wait(1000);
                        await draw(k);
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【视频抽奖】观看失败，" + result.message + ",再次尝试视频抽奖");
                            await $.wait(1000);
                            await vediodrawprize(k);
                        } else
                            $.log("【视频抽奖】观看失败," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function draw(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";

        const request = {
            url: url,
            headers: drawckhd,
            body: drawckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("抽奖任务请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await draw();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        $.log("【抽奖任务】抽奖成功，获得" + result.data.prizeList[0].prizeName);
                        drawgold += parseInt(result.data.prizeList[0].prizeName);
                        await $.wait(1000);
                        await vediodrawprize(k);
                    } else {
                        $.log("【抽奖任务】抽奖失败," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function userinfo() {
    return new Promise((resolve, reject) => {
        const request = {
            url: userurl,
            headers: {},
            body: ""
        };

        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("用户信息请求失败,再次尝试用户信息请求");
                    await $.wait(1000);
                    await userinfo();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {
                        // $.log("【阅读任务】本次共获得" + ReadTimes * 3 + "金币");
                        // $.log("【视频任务】本次共获得" + vediogold + "金币");
                        // $.log("【抽奖任务】本次共获得" + drawgold + "金币");
                        $.log("【金币总数】" + result.data.gold);
                        $.log("【总计收益】" + result.data.income + "元");
                    } else {
                        $.log("【金币总数】数据异常," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsreadbook() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery";

        const request = {
            url: url,
            headers: jssqxsckhd,
            body: jssqxsckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("极速阅读请求失败,再次尝试阅读");
                    await $.wait(1000);
                    await jsreadbook();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.data.awardStatus == 1) {
                        ReadTimes++;
                        $.log("【极速阅读任务】第" + ReadTimes + "次阅读成功，获得3金币");
                        await $.wait(1000);
                        await jsreadbook();
                    } else {

                        if (result.data.awardStatus == null) {
                            $.log("【极速阅读任务】阅读失败，领取达到每日上限，请明天再来");
                            await $.wait(1000);
                            //await jsreadbook();
                        } else
                            $.log("【极速阅读任务】阅读失败，" + result.message);
                        //await jsreadbook();
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsvediogoldprize() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: jsvediogoldprizehd,
            body: jsvediogoldprizebd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("极速视频金币请求失败,再次尝试视频金币");
                    await $.wait(1000);
                    await jsvediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        $.log("【极速视频金币】观看视频成功,"+result.data.awardMessage+",等待30s观看下一个");
                        vediogold += 250;
                        await $.wait(30000);
                        await jsvediogoldprize();
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【极速视频金币】观看失败，" + result.message + ",再次尝试视频金币");
                            await $.wait(30000);
                            await jsvediogoldprize();
                        } else
                            $.log("【极速视频金币】观看失败," + result.message);
                        //$.log(data);

                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}



