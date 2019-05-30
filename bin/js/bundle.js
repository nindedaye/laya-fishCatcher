var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingView_1 = require("./view/LoadingView");
var GameView_1 = require("./view/GameView");
var Loader = Laya.Loader;
var AnalysisXML_1 = require("./data/AnalysisXML");
var Game = /** @class */ (function () {
    function Game() {
        this.res = [
            { url: "res/atlas/img.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/img.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/load.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/load.png", type: Laya.Loader.IMAGE },
            { url: "load/lading_bg1.png", type: Laya.Loader.IMAGE }
        ];
        Laya.init(1280, 720, Laya.WebGL);
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.screenMode = "horizontal";
        Laya.loader.load(this.res, Laya.Handler.create(this, this.onLoaded));
    }
    Game.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Game();
        }
        return this.instance;
    };
    Game.prototype.onLoaded = function () {
        this.Ld = new LoadingView_1.LoadingView();
        Laya.stage.addChild(this.Ld);
        this.Ld.once("startgame", this, this.startGame);
        Laya.SoundManager.playMusic("./res/sound/HallScene.mp3");
        this.loadOtherAsset();
    };
    Game.prototype.loadOtherAsset = function () {
        var assets = [
            ///加载子弹素材
            { url: "res/atlas/fish/bullet/bullet1.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet2.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet3.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet4.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet5.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet6.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet7.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet8.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/bullet/bullet9.atlas", type: Laya.Loader.ATLAS },
            ///鱼动画资源
            { url: "res/atlas/fish/fishimg/fish1/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish1/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish2/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish2/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish3/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish3/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish4/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish4/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish5/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish5/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish6/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish6/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish7/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish7/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish8/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish8/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish9/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish9/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish10/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish10/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish11/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish11/dead.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish12/live.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fish/fishimg/fish12/dead.atlas", type: Laya.Loader.ATLAS },
            //tips
            { url: "res/atlas/fish/tip.atlas", type: Loader.ATLAS },
            //大炮
            { url: "res/atlas/fish/cannon/cannon1.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/cannon/cannon2.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/cannon/cannon3.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/cannon/cannon4.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/cannon/cannon5.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/cannon/cannon6.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/cannon/cannon7.atlas", type: Loader.ATLAS },
            //其他素材
            { url: "res/atlas/fish/img.atlas", type: Loader.ATLAS },
            //海藻
            { url: "res/atlas/fish/seaweed/seaweed1.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/seaweed/seaweed2.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/seaweed/seaweed3.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/seaweed/seaweed4.atlas", type: Loader.ATLAS },
            //金币
            { url: "res/atlas/fish/money/coin.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/money/silver.atlas", type: Loader.ATLAS },
            //道具
            //炸弹
            { url: "res/atlas/fish/tools/boom.atlas", type: Loader.ATLAS },
            { url: "res/atlas/fish/tools.atlas", type: Loader.ATLAS },
            //特效
            { url: "res/atlas/fish/effect/flash.atlas", type: Loader.ATLAS },
            ///鱼数据xml
            { url: "res/xml/fish.xml", type: Loader.XML },
            { url: "res/xml/bullet.xml", type: Loader.XML },
        ];
        Laya.loader.load(assets, Laya.Handler.create(this, this.loadComs), Laya.Handler.create(this, this.loadProgress, null, false));
    };
    Game.prototype.loadComs = function () {
        AnalysisXML_1.AnalysisXML.getInstance().analysisFishData();
        AnalysisXML_1.AnalysisXML.getInstance().analysisBulletData();
    };
    Game.prototype.loadProgress = function (val) {
        if (this.Ld) {
            this.Ld.setData(val);
        }
    };
    Game.prototype.startGame = function () {
        Laya.stage.removeChildren();
        var Gv = new GameView_1.GameView();
        Laya.stage.addChild(Gv);
        Laya.SoundManager.playMusic("./res/sound/FishMatrix.mp3");
    };
    return Game;
}());
exports.Game = Game;
var game = new Game();
},{"./data/AnalysisXML":3,"./view/GameView":21,"./view/LoadingView":22}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
        this.totalWidth = 1280; //总宽度
        this.totalHeight = 700; //总长度
        this.bottomSpace = 50; //距离底部空隙
        this.bulletMoveSpeed = 15; //子弹移动速度
        this.ISPAUSE = false; //是否暂停
        this.ISOVER = false; //是否结束
        //子弹修正值
        this.bulletOneValue = 40;
        this.bulletOtherValue = 160;
        this.totalFishNum = 30; //屏幕中最多fish
        this.totalSocre = 1000; //初始总分数
        this._lvlnum = 1; //当前的关卡
        this.lvlAddValue = 0; //关卡增加速度系数
        this.getPowerNum = 0; //获取到的能量
        this.shootInterTime = 1; //子弹发射间隔 
        this.shootPower = 1; //子弹威力    
    }
    Global.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Global();
        }
        return this.instance;
    };
    Object.defineProperty(Global.prototype, "lvlnum", {
        get: function () {
            return this._lvlnum;
        },
        set: function (val) {
            this._lvlnum = val;
            this._lvlnum = Math.min(this._lvlnum, 40);
            this.lvlAddValue = 1 + this._lvlnum * 0.05;
        },
        enumerable: true,
        configurable: true
    });
    return Global;
}());
exports.Global = Global;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FishVo_1 = require("./FishVo");
var DataProxy_1 = require("./DataProxy");
var BulletVo_1 = require("./BulletVo");
var AnalysisXML = /** @class */ (function () {
    function AnalysisXML() {
    }
    AnalysisXML.getInstance = function () {
        if (this.instance == null) {
            this.instance = new AnalysisXML();
        }
        return this.instance;
    };
    AnalysisXML.prototype.analysisFishData = function () {
        var fishList = [
            { "name": "小丑鱼", "id": 0, "liveUrl": "fish\fishimg\fish12\live.atlas", "deadUrl": "fish\fishimg\fish12\dead.atlas", "grade": 1, "blood_min": 2, "blood_Max": 2, "score": 5, "speed": 4, "hitValue": 1 },
            { "name": "蜻蜓鱼", "id": 1, "liveUrl": "fish\fishimg\fish8\live.atlas", "deadUrl": "fish\fishimg\fish8\dead.atlas", "grade": 1, "blood_min": 4, "blood_Max": 4, "score": 9, "speed": 4, "hitValue": 1 },
            { "name": "黄鱼", "id": 2, "liveUrl": "fish\fishimg\fish5\live.atlas", "deadUrl": "fish\fishimg\fish5\dead.atlas", "grade": 1, "blood_min": 5, "blood_Max": 10, "score": 8, "speed": 5, "hitValue": 1 },
            { "name": "热带鱼", "id": 3, "liveUrl": "fish\fishimg\fish9\live.atlas", "deadUrl": "fish\fishimg\fish9\dead.atlas", "grade": 1, "blood_min": 4, "blood_Max": 12, "score": 20, "speed": 5, "hitValue": 1 },
            { "name": "金枪鱼", "id": 4, "liveUrl": "fish\fishimg\fish7\live.atlas", "deadUrl": "fish\fishimg\fish7\dead.atlas", "grade": 1, "blood_min": 20, "blood_Max": 40, "score": 30, "speed": 3, "hitValue": 10 },
            { "name": "水母", "id": 5, "liveUrl": "fish\fishimg\fish10\live.atlas", "deadUrl": "fish\fishimg\fish10\dead.atlas", "grade": 2, "blood_min": 20, "blood_Max": 30, "score": 30, "speed": 2, "hitValue": 10 },
            { "name": "鳄鱼", "id": 6, "liveUrl": "fish\fishimg\fish2\live.atlas", "deadUrl": "fish\fishimg\fish2\dead.atlas", "grade": 3, "blood_min": 200, "blood_Max": 300, "score": 50, "speed": 8, "hitValue": 20 },
            { "name": "大乌龟", "id": 7, "liveUrl": "fish\fishimg\fish11\live.atlas", "deadUrl": "fish\fishimg\fish11\dead.atlas", "grade": 3, "blood_min": 300, "blood_Max": 400, "score": 60, "speed": 1.5, "hitValue": 20 },
            { "name": "海豚", "id": 8, "liveUrl": "fish\fishimg\fish4\live.atlas", "deadUrl": "fish\fishimg\fish4\dead.atlas", "grade": 5, "blood_min": 450, "blood_Max": 600, "score": 250, "speed": 1, "hitValue": 20 },
            { "name": "鲸鱼", "id": 9, "liveUrl": "fish\fishimg\fish6\live.atlas", "deadUrl": "fish\fishimg\fish6\dead.atlas", "grade": 4, "blood_min": 400, "blood_Max": 500, "score": 200, "speed": 0.5, "hitValue": 50 },
            { "name": "海胆鱼", "id": 10, "liveUrl": "fish\fishimg\fish3\live.atlas", "deadUrl": "fish\fishimg\fish3\dead.atlas", "grade": 4, "blood_min": 90, "blood_Max": 230, "score": 45, "speed": 1, "hitValue": 5 },
            { "name": "灯笼鱼", "id": 11, "liveUrl": "fish\fishimg\fish1\live.atlas", "deadUrl": "fish\fishimg\fish1\dead.atlas", "grade": 4, "blood_min": 100, "blood_Max": 200, "score": 40, "speed": 1, "hitValue": 5 }
        ];
        for (var i = 0; i < fishList.length; i++) {
            var node = fishList[i];
            var fishVo = new FishVo_1.FishVo;
            fishVo.name = node["name"];
            fishVo.id = node["id"];
            fishVo.liveUrl = node["liveUrl"];
            fishVo.deadUrl = node["deadUrl"];
            fishVo.grade = node["grade"];
            fishVo.blood_min = node["blood_min"];
            fishVo.blood_Max = node["blood_Max"];
            fishVo.score = node["score"];
            fishVo.speed = node["speed"];
            fishVo.hitValue = node["hitValue"];
            DataProxy_1.DataProxy.getInstance().fishDataDic.set(fishVo.id, fishVo);
        }
    };
    AnalysisXML.prototype.analysisBulletData = function () {
        var bulletList = [
            { "type": 1, "powerRadius": 10, "boomRadius": 20, "speed": 15, "power": 1 },
            { "type": 2, "powerRadius": 10, "boomRadius": 75, "speed": 15, "power": 2 },
            { "type": 3, "powerRadius": 10, "boomRadius": 75, "speed": 15, "power": 3 },
            { "type": 4, "powerRadius": 10, "boomRadius": 75, "speed": 15, "power": 4 },
            { "type": 5, "powerRadius": 10, "boomRadius": 75, "speed": 15, "power": 5 },
            { "type": 6, "powerRadius": 10, "boomRadius": 75, "speed": 15, "power": 6 },
            { "type": 7, "powerRadius": 10, "boomRadius": 75, "speed": 15, "power": 7 },
        ];
        for (var i = 0; i < bulletList.length; i++) {
            var node = bulletList[i];
            var bulletVo = new BulletVo_1.BulletVo();
            bulletVo.type = node["type"];
            bulletVo.powerRadius = node["powerRadius"];
            bulletVo.boomRadius = node["boomRadius"];
            bulletVo.speed = node["speed"];
            bulletVo.power = node["power"];
            DataProxy_1.DataProxy.getInstance().bulletDataDic.set(bulletVo.type, bulletVo);
        }
    };
    return AnalysisXML;
}());
exports.AnalysisXML = AnalysisXML;
},{"./BulletVo":4,"./DataProxy":5,"./FishVo":7}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BulletVo = /** @class */ (function () {
    function BulletVo() {
    }
    return BulletVo;
}());
exports.BulletVo = BulletVo;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("./Dictionary");
var DataProxy = /** @class */ (function () {
    function DataProxy() {
        this.fishDataDic = new Dictionary_1.Dictionary();
        this.bulletDataDic = new Dictionary_1.Dictionary();
    }
    DataProxy.getInstance = function () {
        if (!this.instance) {
            this.instance = new DataProxy();
        }
        return this.instance;
    };
    ;
    //鱼相关数据
    DataProxy.prototype.getDataById = function (id) {
        return this.fishDataDic.get(id);
    };
    //bullet data
    DataProxy.prototype.getDataByType = function (type) {
        return this.bulletDataDic.get(type);
    };
    DataProxy.instance = null;
    return DataProxy;
}());
exports.DataProxy = DataProxy;
},{"./Dictionary":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this._values = [];
        this._keys = [];
    }
    Object.defineProperty(Dictionary.prototype, "values", {
        /**
         * 获取所有的子元素列表。
         */
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "keys", {
        /**
         * 获取所有的子元素键名列表。
         */
        get: function () {
            return this._keys;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 给指定的键名设置值。
     * @param   key 键名。
     * @param   value 值。
     */
    Dictionary.prototype.set = function (key, value) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
            return;
        }
        this._keys.push(key);
        this._values.push(value);
    };
    /**
     * 获取指定对象的键名索引。
     * @param   key 键名对象。
     * @return 键名索引。
     */
    Dictionary.prototype.indexOf = function (key) {
        var index = this._keys.indexOf(key);
        if (index >= 0)
            return index;
        // key = (typeof(key) String) ? Number(key) : ((key is Number) ? key.toString() : key);
        return this._keys.indexOf(key);
    };
    /**
     * 返回指定键名的值。
     * @param   key 键名对象。
     * @return 指定键名的值。
     */
    Dictionary.prototype.get = function (key) {
        var index = this.indexOf(key);
        return index < 0 ? null : this._values[index];
    };
    /**
     * 移除指定键名的值。
     * @param   key 键名对象。
     * @return 是否成功移除。
     */
    Dictionary.prototype.remove = function (key) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * 清除此对象的键名列表和键值列表。
     */
    Dictionary.prototype.clear = function () {
        this._values.length = 0;
        this._keys.length = 0;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FishVo = /** @class */ (function () {
    function FishVo() {
        this.id = 0; //id
        this.name = ""; //鱼名字
        this.grade = 0; //等级
        this.score = 0; //得分
        this.speed = 0; //速度
        this.blood_min = 0; //最小血
        this.blood_Max = 0; //最大血
        this.liveUrl = ""; //游动动画路径
        this.deadUrl = ""; //死亡动画路径
        this.hitValue = 0; //碰撞区域修正值
        this.fishInfo = ""; //缓存标识
        this.leveAn = ""; //离开动画
        this.deadAn = ""; //死亡动画
    }
    return FishVo;
}());
exports.FishVo = FishVo;
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = laya.display.Animation;
var Point = laya.maths.Point;
var Global_1 = require("../../Global");
var BulletFather = /** @class */ (function (_super) {
    __extends(BulletFather, _super);
    function BulletFather() {
        var _this = _super.call(this) || this;
        _this.BOOM_COM = "boom_com"; //爆炸结束，在做一次碰撞检测
        _this._type = 0;
        _this.deaded = false; //子弹是否存活
        _this.sign = ""; //子弹类型标识
        _this.flyAn = ""; //飞行
        _this.boomAn = ""; //爆炸
        _this.selfWidth = 0; //内容宽高
        _this.selfHeight = 0;
        _this.hitPoint = new Point(); //碰撞中心点（局部坐标
        _this.isHitFish = false; //是否碰到鱼
        _this.isHitTool = false; //是否碰撞到道具
        _this.tempAngle = 0; //临时记录角度
        _this.initData();
        _this.initView();
        _this.initEvent();
        return _this;
    }
    BulletFather.getInstance = function () {
        if (this.instance == null) {
            this.instance = new BulletFather();
        }
        return this.instance;
    };
    ;
    BulletFather.prototype.initData = function () { };
    ;
    BulletFather.prototype.initView = function () {
        if (!this.animationBody) {
            this.animationBody = new Animation();
            this.addChild(this.animationBody);
        }
    };
    BulletFather.prototype.initEvent = function () { };
    Object.defineProperty(BulletFather.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            this.animationBody.play(0, false, this.flyAn);
            this.animationBody.x = -(this.animationBody.getBounds().width / 2);
            this.animationBody.y = -this.animationBody.getBounds().height + 100;
            this.selfWidth = this.animationBody.getBounds().width;
            this.selfHeight = this.animationBody.getBounds().height; //中心点修正
            this.hitRadius = this.dataVo.powerRadius;
            this.setHitPoint();
        },
        enumerable: true,
        configurable: true
    });
    BulletFather.prototype.setHitPoint = function () {
        if (this.type == 1) {
            this.hitPoint.setTo(0, this.animationBody.y + Global_1.Global.getInstance().bulletOneValue / 2);
        }
        else {
            this.hitPoint.setTo(0, this.animationBody.y + Global_1.Global.getInstance().bulletOtherValue / 2 + 30);
        }
    };
    BulletFather.prototype.init = function () {
        this.deaded = false;
        this.isHitFish = false;
        this.isHitTool = false;
        this.hitRadius = this.dataVo.powerRadius;
        Laya.timer.frameLoop(1, this, this.loopHand);
    };
    BulletFather.prototype.loopHand = function () {
        if (Global_1.Global.getInstance().ISPAUSE)
            return;
        this.tempAngle = this.rotation - 90;
        this.x += Math.cos(this.tempAngle * Math.PI / 180) * this.dataVo.speed;
        this.y += Math.sin(this.tempAngle * Math.PI / 180) * this.dataVo.speed;
        this.setHitPoint();
        if (this.hitBorder() || this.isHitFish || this.isHitTool) {
            this.boom();
            Laya.timer.clear(this, this.loopHand);
        }
    };
    /**
     * 爆炸
     */
    BulletFather.prototype.boom = function () {
        laya.media.SoundManager.playSound('res/sound/bullet_boom.mp3');
        this.animationBody.play(0, false, this.boomAn);
        this.animationBody.once(Laya.Event.COMPLETE, this, this.boomCom);
    };
    /**
     * 爆炸动画播放完成
     */
    BulletFather.prototype.boomCom = function () {
        this.hitRadius = this.dataVo.boomRadius;
        this.event(this.BOOM_COM, [this]);
    };
    /**
     * 是否碰撞到边界
     * @return
     */
    BulletFather.prototype.hitBorder = function () {
        var global = this.localToGlobal(this.hitPoint, true);
        var val = 10;
        if (global.x < val || global.x > Global_1.Global.getInstance().totalWidth - val || global.y < val || global.y > Global_1.Global.getInstance().totalHeight - 10) {
            return true;
        }
        return false;
    };
    /**
         * 获取碰撞矩形
         * @return
         */
    BulletFather.prototype.getHitRectangle = function () {
        var global = this.localToGlobal(new Point(this.hitPoint.x - this.hitRadius, this.hitPoint.y - this.hitRadius), true);
        var local = this.globalToLocal(global, true);
        var rec = new Laya.Rectangle(local.x, local.y, this.hitRadius * 2, this.hitRadius * 2);
        return rec;
    };
    BulletFather.prototype.getCenter = function () {
        var global = this.localToGlobal(this.hitPoint, true);
        return global;
    };
    return BulletFather;
}(Laya.Sprite));
exports.BulletFather = BulletFather;
},{"../../Global":2}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = laya.display.Animation;
var SoundManager = laya.media.SoundManager;
var Pool = laya.utils.Pool;
var BulletFather_1 = require("./BulletFather");
var DataProxy_1 = require("../../data/DataProxy");
var BulletManager = /** @class */ (function () {
    function BulletManager() {
        //爆炸动画名称
        this.BULLET_BOOM_1 = "bullet_boom_1";
        this.BULLET_BOOM_2 = "bullet_boom_2";
        this.BULLET_BOOM_3 = "bullet_boom_3";
        this.BULLET_BOOM_4 = "bullet_boom_4";
        this.BULLET_BOOM_5 = "bullet_boom_5";
        this.BULLET_BOOM_6 = "bullet_boom_6";
        this.BULLET_BOOM_7 = "bullet_boom_7";
        this.BULLET_BOOM_8 = "bullet_boom_8";
        this.BULLET_BOOM_9 = "bullet_boom_9";
        //子弹飞行动画
        this.BULLET_FLY_1 = "bullet_fly_1";
        this.BULLET_FLY_2 = "bullet_fly_2";
        this.BULLET_FLY_3 = "bullet_fly_3";
        this.BULLET_FLY_4 = "bullet_fly_4";
        this.BULLET_FLY_5 = "bullet_fly_5";
        this.BULLET_FLY_6 = "bullet_fly_6";
        this.BULLET_FLY_7 = "bullet_fly_7";
        this.BULLET_FLY_8 = "bullet_fly_8";
        this.BULLET_FLY_9 = "bullet_fly_9";
        //子弹
        this.BULLET_INFO_1 = "bullet_info_1";
        this.BULLET_INFO_2 = "bullet_info_2";
        this.BULLET_INFO_3 = "bullet_info_3";
        this.BULLET_INFO_4 = "bullet_info_4";
        this.BULLET_INFO_5 = "bullet_info_5";
        this.BULLET_INFO_6 = "bullet_info_6";
        this.BULLET_INFO_7 = "bullet_info_7";
        this.BULLET_INFO_8 = "bullet_info_8";
        this.BULLET_INFO_9 = "bullet_info_9";
    }
    BulletManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new BulletManager;
        }
        return this.instance;
    };
    ;
    /**
 * 缓存子弹爆炸效果
 */
    BulletManager.prototype.cacheAnimation = function () {
        //子弹1飞行动画
        Animation.createFrames(["fish/bullet/bullet1/bullet0001.png"], this.BULLET_FLY_1);
        //子弹1爆炸动画
        Animation.createFrames([
            "fish/bullet/bullet1/bullet0001.png", "fish/bullet/bullet1/bullet0002.png", "fish/bullet/bullet1/bullet0003.png",
            "fish/bullet/bullet1/bullet0004.png", "fish/bullet/bullet1/bullet0005.png", "fish/bullet/bullet1/bullet0006.png",
            "fish/bullet/bullet1/bullet0007.png", "fish/bullet/bullet1/bullet0008.png", "fish/bullet/bullet1/bullet0009.png"
        ], this.BULLET_BOOM_1);
        //子弹2飞行动画
        Animation.createFrames(["fish/bullet/bullet2/bullet20001.png"], this.BULLET_FLY_2);
        Animation.createFrames([
            "fish/bullet/bullet2/bullet20001.png", "fish/bullet/bullet2/bullet20002.png", "fish/bullet/bullet2/bullet20003.png",
            "fish/bullet/bullet2/bullet20004.png", "fish/bullet/bullet2/bullet20005.png", "fish/bullet/bullet2/bullet20006.png",
            "fish/bullet/bullet2/bullet20007.png", "fish/bullet/bullet2/bullet20008.png", "fish/bullet/bullet2/bullet20009.png"
        ], this.BULLET_BOOM_2);
        //子弹3飞行动画
        Animation.createFrames(["fish/bullet/bullet3/bullet30001.png"], this.BULLET_FLY_3);
        Animation.createFrames([
            "fish/bullet/bullet3/bullet30001.png", "fish/bullet/bullet3/bullet30002.png", "fish/bullet/bullet3/bullet30003.png",
            "fish/bullet/bullet3/bullet30004.png", "fish/bullet/bullet3/bullet30005.png", "fish/bullet/bullet3/bullet30006.png",
            "fish/bullet/bullet3/bullet30007.png", "fish/bullet/bullet3/bullet30008.png", "fish/bullet/bullet3/bullet30009.png"
        ], this.BULLET_BOOM_3);
        //子弹4飞行动画
        Animation.createFrames(["fish/bullet/bullet4/bullet40001.png"], this.BULLET_FLY_4);
        Animation.createFrames([
            "fish/bullet/bullet4/bullet40001.png", "fish/bullet/bullet4/bullet40002.png", "fish/bullet/bullet4/bullet40003.png",
            "fish/bullet/bullet4/bullet40004.png", "fish/bullet/bullet4/bullet40005.png", "fish/bullet/bullet4/bullet40006.png",
            "fish/bullet/bullet4/bullet40007.png", "fish/bullet/bullet4/bullet40008.png", "fish/bullet/bullet4/bullet40009.png"
        ], this.BULLET_BOOM_4);
        //子弹5飞行动画
        Animation.createFrames(["fish/bullet/bullet5/bullet50001.png"], this.BULLET_FLY_5);
        Animation.createFrames([
            "fish/bullet/bullet5/bullet50001.png", "fish/bullet/bullet5/bullet50002.png", "fish/bullet/bullet5/bullet50003.png",
            "fish/bullet/bullet5/bullet50004.png", "fish/bullet/bullet5/bullet50005.png", "fish/bullet/bullet5/bullet50006.png",
            "fish/bullet/bullet5/bullet50007.png", "fish/bullet/bullet5/bullet50008.png", "fish/bullet/bullet5/bullet50009.png"
        ], this.BULLET_BOOM_5);
        //子弹6飞行动画
        Animation.createFrames(["fish/bullet/bullet6/bullet60001.png"], this.BULLET_FLY_6);
        Animation.createFrames([
            "fish/bullet/bullet6/bullet60001.png", "fish/bullet/bullet6/bullet60002.png", "fish/bullet/bullet6/bullet60003.png",
            "fish/bullet/bullet6/bullet60004.png", "fish/bullet/bullet6/bullet60005.png", "fish/bullet/bullet6/bullet60006.png",
            "fish/bullet/bullet6/bullet60007.png", "fish/bullet/bullet6/bullet60008.png", "fish/bullet/bullet6/bullet60009.png"
        ], this.BULLET_BOOM_6);
        //子弹7飞行动画
        Animation.createFrames(["fish/bullet/bullet7/bullet70001.png"], this.BULLET_FLY_7);
        Animation.createFrames([
            "fish/bullet/bullet7/bullet70001.png", "fish/bullet/bullet7/bullet70002.png", "fish/bullet/bullet7/bullet70003.png",
            "fish/bullet/bullet7/bullet70004.png", "fish/bullet/bullet7/bullet70005.png", "fish/bullet/bullet7/bullet70006.png",
            "fish/bullet/bullet7/bullet70007.png", "fish/bullet/bullet7/bullet70008.png", "fish/bullet/bullet7/bullet70009.png"
        ], this.BULLET_BOOM_7);
        //子弹8飞行动画
        Animation.createFrames(["fish/bullet/bullet8/bullet80001.png"], this.BULLET_FLY_8);
        Animation.createFrames([
            "fish/bullet/bullet8/bullet80001.png", "fish/bullet/bullet8/bullet80002.png", "fish/bullet/bullet8/bullet80003.png",
            "fish/bullet/bullet8/bullet80004.png", "fish/bullet/bullet8/bullet80005.png", "fish/bullet/bullet8/bullet80006.png",
            "fish/bullet/bullet8/bullet80007.png", "fish/bullet/bullet8/bullet80008.png", "fish/bullet/bullet8/bullet80009.png"
        ], this.BULLET_BOOM_8);
        //子弹9飞行动画
        Animation.createFrames(["fish/bullet/bullet9/bullet90001.png"], this.BULLET_FLY_9);
        Animation.createFrames([
            "fish/bullet/bullet9/bullet90001.png", "fish/bullet/bullet9/bullet90002.png", "fish/bullet/bullet9/bullet90003.png",
            "fish/bullet/bullet9/bullet90004.png", "fish/bullet/bullet9/bullet90005.png", "fish/bullet/bullet9/bullet90006.png",
            "fish/bullet/bullet9/bullet90007.png", "fish/bullet/bullet9/bullet90008.png", "fish/bullet/bullet9/bullet90009.png"
        ], this.BULLET_BOOM_9);
    };
    /**
     * 创建一颗子弹
     * @param	type
     * @return
     */
    BulletManager.prototype.createBulletByType = function (type) {
        var bullet;
        if (type == 1) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_1, BulletFather_1.BulletFather);
        }
        else if (type == 2) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_2, BulletFather_1.BulletFather);
        }
        else if (type == 3) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_3, BulletFather_1.BulletFather);
        }
        else if (type == 4) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_4, BulletFather_1.BulletFather);
        }
        else if (type == 5) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_5, BulletFather_1.BulletFather);
        }
        else if (type == 6) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_6, BulletFather_1.BulletFather);
        }
        else if (type == 7) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_7, BulletFather_1.BulletFather);
        }
        else if (type == 8) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_8, BulletFather_1.BulletFather);
        }
        else if (type == 9) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_9, BulletFather_1.BulletFather);
        }
        bullet.sign = "bullet_info_" + type;
        bullet.flyAn = "bullet_fly_" + type;
        bullet.boomAn = "bullet_boom_" + type;
        bullet.dataVo = DataProxy_1.DataProxy.getInstance().getDataByType(type);
        bullet.type = type;
        SoundManager.playSound("res/sound/bullet_normal1.mp3");
        return bullet;
    };
    /**
     * 回收子弹
     * @param	bullet
     */
    BulletManager.prototype.recoverBullerByType = function (bullet) {
        Pool.recover(bullet.sign, bullet);
    };
    return BulletManager;
}());
exports.BulletManager = BulletManager;
},{"../../data/DataProxy":5,"./BulletFather":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tween = laya.utils.Tween;
var Global_1 = require("../../Global");
var CannonManager_1 = require("./CannonManager");
var CannonFather = /** @class */ (function (_super) {
    __extends(CannonFather, _super);
    function CannonFather() {
        var _this = _super.call(this) || this;
        _this.MIN_TYPE = 1; //最小类型
        _this.MAX_TYPE = 7; //最大类型
        _this.shootTime = 0; //记录上次发射时间
        _this.shootInterval = 250; //发射间隔 ms
        _this.selfWidth = 0; //内容宽高
        _this.selfHeight = 0;
        _this.xiuVal = 25; //中心点修正值
        _this.strongIng = false; //是否增强中
        _this._strongTime = 0; //增强时间
        _this._type = 0;
        _this.strongScale = 1;
        _this.CannonFather();
        return _this;
    }
    CannonFather.getInstance = function () {
        if (this.instance == null) {
            this.instance = new CannonFather;
        }
        return this.instance;
    };
    ;
    Object.defineProperty(CannonFather.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            this.animationBody.play(0, false, "cannon_normal_" + this._type);
            this.animationBody.pos(-35, -90);
            this.selfWidth = this.animationBody.getBounds().width;
            this.selfHeight = this.animationBody.getBounds().height; //中心点修正
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CannonFather.prototype, "strongTime", {
        get: function () {
            return this._strongTime;
        },
        set: function (val) {
            this._strongTime = val;
            this._strongTime = Math.max(0, this._strongTime);
            if (this._strongTime == 0) {
                this.strongIng = false;
                this.time.clear(this, this.loop);
                this.showflash(false);
                Global_1.Global.getInstance().shootInterTime = 1;
                Global_1.Global.getInstance().shootPower;
            }
            else if (!this.strongIng) {
                this.time.clear(this, this.loop);
                this.time.loop(1000, this, this.loop);
                this.strongIng = true;
                this.showflash(true);
                Global_1.Global.getInstance().shootInterTime = 0.5;
                Global_1.Global.getInstance().shootPower = 2;
            }
        },
        enumerable: true,
        configurable: true
    });
    CannonFather.prototype.CannonFather = function () {
        this.initData();
        this.initView();
        this.initEvent();
    };
    CannonFather.prototype.initData = function () {
        this.time = new Laya.Timer();
    };
    CannonFather.prototype.loop = function () {
        this.strongTime--;
    };
    CannonFather.prototype.initView = function () {
        if (!this.animationBody) {
            this.animationBody = new laya.display.Animation();
            this.addChild(this.animationBody);
        }
        if (!this.effectBody) {
            this.effectBody = new laya.display.Animation();
            this.addChild(this.effectBody);
        }
    };
    CannonFather.prototype.initEvent = function () {
    };
    CannonFather.prototype.shootAn = function () {
        this.animationBody.play(0, false, "cannon_shoot_" + this.type);
    };
    CannonFather.prototype.rotateAn = function (rotate) {
        this.rotation = rotate;
        //var tween:Tween = new Tween();
        //tween.to(this, { rotation:rotate }, 100, Ease.cubicOut, Handler.create(this, function() { 
        //tween.clear();
        //} ));
    };
    CannonFather.prototype.showflash = function (boo) {
        if (boo) {
            this.strongScale = 1.3;
            this.effectBody.play(0, true, CannonManager_1.CannonManager.getInstance().EFFECT_FLASH);
            this.effectBody.pos(-this.effectBody.getBounds().width / 2 - 10, -this.effectBody.getBounds().height / 2 - 20);
            Tween.to(this, { scaleX: this.strongScale, scaleY: this.strongScale }, 200, laya.utils.Ease.backOut);
        }
        else {
            this.strongScale = 1;
            this.effectBody.clear();
            Tween.to(this, { scaleX: this.strongScale, scaleY: this.strongScale }, 200, laya.utils.Ease.backIn);
        }
    };
    return CannonFather;
}(Laya.Sprite));
exports.CannonFather = CannonFather;
},{"../../Global":2,"./CannonManager":11}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CannonFather_1 = require("./CannonFather");
var CannonManager = /** @class */ (function () {
    function CannonManager() {
        //大炮正常
        this.CANNON_NORMAL_1 = "cannon_normal_1";
        this.CANNON_NORMAL_2 = "cannon_normal_2";
        this.CANNON_NORMAL_3 = "cannon_normal_3";
        this.CANNON_NORMAL_4 = "cannon_normal_4";
        this.CANNON_NORMAL_5 = "cannon_normal_5";
        this.CANNON_NORMAL_6 = "cannon_normal_6";
        this.CANNON_NORMAL_7 = "cannon_normal_7";
        //大炮射击
        this.CANNON_SHOOT_1 = "cannon_shoot_1";
        this.CANNON_SHOOT_2 = "cannon_shoot_2";
        this.CANNON_SHOOT_3 = "cannon_shoot_3";
        this.CANNON_SHOOT_4 = "cannon_shoot_4";
        this.CANNON_SHOOT_5 = "cannon_shoot_5";
        this.CANNON_SHOOT_6 = "cannon_shoot_6";
        this.CANNON_SHOOT_7 = "cannon_shoot_7";
        //闪电特效
        this.EFFECT_FLASH = "effect_flash";
    }
    CannonManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new CannonManager();
        }
        return this.instance;
    };
    CannonManager.prototype.cacheAnimation = function () {
        ///大炮 1
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon1/cannon10001.png"], this.CANNON_NORMAL_1);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon1.atlas", this.CANNON_SHOOT_1);
        ///大炮 2
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon2/cannon20001.png"], this.CANNON_NORMAL_2);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon2.atlas", this.CANNON_SHOOT_2);
        ///大炮 3
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon3/cannon30001.png"], this.CANNON_NORMAL_3);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon3.atlas", this.CANNON_SHOOT_3);
        ///大炮 4
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon4/cannon40001.png"], this.CANNON_NORMAL_4);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon4.atlas", this.CANNON_SHOOT_4);
        ///大炮 5
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon5/cannon50001.png"], this.CANNON_NORMAL_5);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon5.atlas", this.CANNON_SHOOT_5);
        ///大炮 6
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon6/cannon60001.png"], this.CANNON_NORMAL_6);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon6.atlas", this.CANNON_SHOOT_6);
        ///大炮 7
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon7/cannon70001.png"], this.CANNON_NORMAL_7);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon7.atlas", this.CANNON_SHOOT_7);
        //闪电特效
        laya.display.Animation.createFrames("res/atlas/fish/effect/flash.atlas", this.EFFECT_FLASH);
    };
    CannonManager.prototype.createCannon = function (container, xx, yy) {
        if (!this.cannon) {
            this.cannon = new CannonFather_1.CannonFather();
            container.addChild(this.cannon);
            this.cannon.pos(xx, yy);
        }
        return this.cannon;
    };
    return CannonManager;
}());
exports.CannonManager = CannonManager;
},{"./CannonFather":10}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tween = laya.utils.Tween;
var ease = laya.utils.Ease;
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super.call(this) || this;
        _this.MOVE_END = "move_end"; //移动结束
        _this._type = ""; //类型 金币 银币
        _this.initView();
        return _this;
    }
    Coin.getInstance = function () {
        if (!this.instance) {
            this.instance = new Coin;
        }
        return this.instance;
    };
    Object.defineProperty(Coin.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (ts) {
            this._type = ts;
            this.animationBody.play(0, true, this._type);
            this.animationBody.pos(-this.animationBody.getBounds().width / 2, -this.animationBody.getBounds().height / 2);
            this.size(this.animationBody.getBounds().width, this.animationBody.getBounds().height);
        },
        enumerable: true,
        configurable: true
    });
    Coin.prototype.initView = function () {
        if (!this.animationBody) {
            this.animationBody = new laya.display.Animation();
            this.addChild(this.animationBody);
        }
    };
    Coin.prototype.moveToPos = function (xx, yy, delay) {
        Laya.timer.once(delay, this, function () {
            Tween.to(this, { x: xx, y: yy }, 200, ease.linearIn, new Laya.Handler(this, function () {
                this.event(this.MOVE_END, [this]);
            }));
        });
    };
    return Coin;
}(Laya.Sprite));
exports.Coin = Coin;
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = laya.display.Animation;
var Pool = laya.utils.Pool;
var SoundManager = laya.media.SoundManager;
var Coin_1 = require("./Coin");
var Global_1 = require("../../Global");
var CoinManager = /** @class */ (function () {
    function CoinManager() {
        this.COIN = "coin"; //金币
        this.SILVER = "silver"; //银币
    }
    CoinManager.getInstance = function () {
        return this.instance;
    };
    ;
    CoinManager.prototype.cacheAnimation = function () {
        Animation.createFrames("res/atlas/fish/money/coin.atlas", this.COIN);
        Animation.createFrames("res/atlas/fish/money/silver.atlas", this.SILVER);
    };
    /**
     * 创建钱币
     * @param type
     */
    CoinManager.prototype.createCoin = function (type) {
        var coin = Pool.getItemByClass(type, Coin_1.Coin);
        coin.type = type;
        return coin;
    };
    /**
     * 添加金币
     * @param fish
     * @param con
     */
    CoinManager.prototype.createMoreCoin = function (fish, con) {
        var score = fish.isInOrder ? fish.fishVo.score * 2 : fish.fishVo.score;
        var coinType;
        var coinNum = 0;
        if (score >= 10) {
            coinType = this.COIN;
            coinNum = Math.floor(score / 10);
        }
        else {
            coinType = this.SILVER;
            coinNum = score;
        }
        this.addCoin(coinNum, coinType, fish.x, fish.y, con);
    };
    /**
     * 添加金币
     * @param coinNum
     * @param coinType
     * @param sx
     * @param sy
     * @param con
     */
    CoinManager.prototype.addCoin = function (coinNum, coinType, sx, sy, con) {
        var coin;
        var yy = 0;
        var xx = 0;
        var delayTime = 200;
        if (coinNum > 5) {
            SoundManager.playSound("res/sound/coin_more.mp3");
        }
        else {
            SoundManager.playSound("res/sound/coin2.mp3");
        }
        for (var i = 0; i < coinNum; i++) {
            coin = this.createCoin(coinType);
            coin.once(Coin_1.Coin.getInstance().MOVE_END, this, this.moveEnd);
            coin.pos(sx + coin.width * xx, sy + yy * coin.height);
            con.addChild(coin);
            xx++;
            if (xx % 6 == 0) {
                yy++;
                xx = 0;
            }
            delayTime += 20;
            coin.moveToPos(100, Global_1.Global.getInstance().totalHeight + 50, delayTime);
        }
    };
    /**
     *
     * @param coin 移动完成
     */
    CoinManager.prototype.moveEnd = function (coin) {
        coin.removeSelf();
        this.recoverCoin(coin);
    };
    /**
     * 回收钱币
     * @param coin
     */
    CoinManager.prototype.recoverCoin = function (coin) {
        Pool.recover(coin.type, coin);
    };
    CoinManager.instance = new CoinManager();
    return CoinManager;
}());
exports.CoinManager = CoinManager;
},{"../../Global":2,"./Coin":12}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = laya.display.Animation;
var Global_1 = require("../../Global");
var FishFather = /** @class */ (function (_super) {
    __extends(FishFather, _super);
    function FishFather() {
        var _this = _super.call(this) || this;
        _this.FISH_DEAD = "fish_dead"; //鱼死亡
        _this.FISH_DEAD_SELF = "fish_dead_self"; //自身死亡
        _this.dirStr = ""; //游向
        _this.selfWidth = 0; //内容宽高
        _this.selfHeight = 0;
        _this.dead = false;
        _this.isInOrder = false;
        _this.initData();
        _this.initView();
        _this.initEvent();
        return _this;
    }
    FishFather.getInstance = function () {
        if (this.instance == null) {
            this.instance = new FishFather;
        }
        return this.instance;
    };
    Object.defineProperty(FishFather.prototype, "fishVo", {
        get: function () {
            return this._fishVo;
        },
        set: function (vo) {
            this._fishVo = vo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FishFather.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
            this.animationBody.play(0, true, this.fishVo.leveAn);
            this.selfWidth = this.animationBody.getBounds().width;
            this.selfHeight = this.animationBody.getBounds().height;
            this.animationBody.pivot(this.selfWidth / 2, this.selfHeight / 2);
            this.animationBody.pos(0, 0);
            // this.hpSlider.slider.width = this.selfWidth;
            // this.hpSlider.slider.height = 5;
            // this.hpSlider.size(this.selfWidth, 5);
            // this.hpSlider.pos(-this.hpSlider.width / 2, -(this.selfHeight-this.fishVo.hitValue)/2);
            var maxHp = Math.floor(this.fishVo.blood_min + Math.random() * (this.fishVo.blood_Max - this.fishVo.blood_min)); //血量
            // this.hpSlider.max = maxHp;
            this.hp = maxHp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FishFather.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (val) {
            this._hp = val;
            // this.hpSlider.showSelf(this._hp);
            if (this._hp <= 0) {
                this.fishDead();
            }
        },
        enumerable: true,
        configurable: true
    });
    FishFather.prototype.initData = function () {
    };
    FishFather.prototype.initView = function () {
        if (!this.animationBody) {
            this.animationBody = new Animation();
            this.animationBody.interval = 100;
            this.addChild(this.animationBody);
        }
        // this.hpSlider = new HpSlider();
        // this.addChild(this.hpSlider);
    };
    FishFather.prototype.initEvent = function () {
    };
    /**
     * 初始化
     * @param dir  出现位置在屏幕两侧 left right
     * @param spos 起始坐标，不设置则随机
     */
    FishFather.prototype.init = function (dir, spos, order) {
        if (dir === void 0) { dir = "right"; }
        if (spos === void 0) { spos = null; }
        if (order === void 0) { order = false; }
        this.dead = false;
        this.isInOrder = order;
        // this.hp = this.hpSlider.max;
        this.dirStr = dir;
        this.animationBody.rotation = (dir == "right") ? 0 : 180;
        var times;
        if (!spos) {
            //打乱出现次序
            times = Math.random() * 1000;
            this.resetPos();
        }
        else {
            times = 1000;
            this.pos(spos.x, spos.y);
        }
        // Laya.timer.once(times, this, function(){
        //     Laya.timer.frameLoop(1, this, this.loopHand);
        // })
        Laya.timer.frameLoop(1, this, this.loopHand);
    };
    FishFather.prototype.loopHand = function () {
        if (Global_1.Global.getInstance().ISPAUSE)
            return;
        this.moveOver();
    };
    ;
    FishFather.prototype.moveOver = function () {
        if (this.dirStr == "right") {
            this.x += this.fishVo.speed * Global_1.Global.getInstance().lvlAddValue;
            if (this.x >= Global_1.Global.getInstance().totalWidth + this.selfWidth) {
                if (this.isInOrder) {
                    this.selfDed();
                }
                else {
                    this.resetPos();
                }
            }
        }
        else if (this.dirStr == "left") {
            this.x -= this.fishVo.speed * Global_1.Global.getInstance().lvlAddValue;
            if (this.x <= -this.selfWidth * 2) {
                if (this.isInOrder) {
                    this.selfDed();
                }
                else {
                    this.resetPos();
                }
            }
        }
    };
    /**
     * 重置初始位置
     */
    FishFather.prototype.resetPos = function () {
        var startx;
        var starty = 50 + (Global_1.Global.getInstance().totalHeight - 150) * Math.random();
        if (this.dirStr == "right") {
            startx = -this.selfWidth - Math.random() * 200;
        }
        else if (this.dirStr == "left") {
            startx = Global_1.Global.getInstance().totalWidth + this.selfWidth + Math.random() * 200;
        }
        this.pos(startx, starty);
    };
    FishFather.prototype.fishDead = function () {
        this.dead = true;
        this.animationBody.play(0, false, this.fishVo.deadAn);
        this.animationBody.once(Laya.Event.COMPLETE, this, this.deadCom);
        Laya.timer.clear(this, this.loopHand);
    };
    /**
     * 死亡动画播放完成
     */
    FishFather.prototype.deadCom = function () {
        this.removeSelf();
        this.event(this.FISH_DEAD, [this]);
        laya.utils.Pool.recover(this.fishVo.fishInfo, this);
    };
    /**
     * 自身死亡，不是被击中死亡
     */
    FishFather.prototype.selfDed = function () {
        this.removeSelf();
        this.event(this.FISH_DEAD_SELF, [this]);
        laya.utils.Pool.recover(this.fishVo.fishInfo, this);
        Laya.timer.clear(this, this.loopHand);
    };
    /**
     * 获取碰撞矩形
     * @return
     */
    FishFather.prototype.getHitRectangle = function () {
        var global = this.localToGlobal(new laya.maths.Point(-this.selfWidth / 2, -this.selfHeight / 2 + this.fishVo.hitValue), true);
        var rec = new laya.maths.Rectangle(global.x, global.y, this.selfWidth, this.selfHeight - this.fishVo.hitValue * 2);
        return rec;
    };
    return FishFather;
}(Laya.Sprite));
exports.FishFather = FishFather;
},{"../../Global":2}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = laya.display.Animation;
var FishFather_1 = require("./FishFather");
var DataProxy_1 = require("../../data/DataProxy");
var Point = laya.maths.Point;
var FishManager = /** @class */ (function () {
    function FishManager() {
        //鱼正常状态
        this.FISH_NORMAL_1 = "fish_normal_1";
        this.FISH_NORMAL_2 = "fish_normal_2";
        this.FISH_NORMAL_3 = "fish_normal_3";
        this.FISH_NORMAL_4 = "fish_normal_4";
        this.FISH_NORMAL_5 = "fish_normal_5";
        this.FISH_NORMAL_6 = "fish_normal_6";
        this.FISH_NORMAL_7 = "fish_normal_7";
        this.FISH_NORMAL_8 = "fish_normal_8";
        this.FISH_NORMAL_9 = "fish_normal_9";
        this.FISH_NORMAL_10 = "fish_normal_10";
        this.FISH_NORMAL_11 = "fish_normal_11";
        this.FISH_NORMAL_12 = "fish_normal_12";
        //鱼死亡状态
        this.FISH_DEAD_1 = "fish_dead_1";
        this.FISH_DEAD_2 = "fish_dead_2";
        this.FISH_DEAD_3 = "fish_dead_3";
        this.FISH_DEAD_4 = "fish_dead_4";
        this.FISH_DEAD_5 = "fish_dead_5";
        this.FISH_DEAD_6 = "fish_dead_6";
        this.FISH_DEAD_7 = "fish_dead_7";
        this.FISH_DEAD_8 = "fish_dead_8";
        this.FISH_DEAD_9 = "fish_dead_9";
        this.FISH_DEAD_10 = "fish_dead_10";
        this.FISH_DEAD_11 = "fish_dead_11";
        this.FISH_DEAD_12 = "fish_dead_12";
    }
    FishManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new FishManager;
        }
        return this.instance;
    };
    ;
    FishManager.prototype.cacheAnimation = function () {
        ///id 0 小丑鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish12/live.atlas", this.FISH_NORMAL_1);
        Animation.createFrames("res/atlas/fish/fishimg/fish12/dead.atlas", this.FISH_DEAD_1);
        ///id 1 蜻蜓鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish8/live.atlas", this.FISH_NORMAL_2);
        Animation.createFrames("res/atlas/fish/fishimg/fish8/dead.atlas", this.FISH_DEAD_2);
        ///id 2 黄鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish5/live.atlas", this.FISH_NORMAL_3);
        Animation.createFrames("res/atlas/fish/fishimg/fish5/dead.atlas", this.FISH_DEAD_3);
        ///id 3 热带鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish9/live.atlas", this.FISH_NORMAL_4);
        Animation.createFrames("res/atlas/fish/fishimg/fish9/dead.atlas", this.FISH_DEAD_4);
        ///id 4 金枪鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish7/live.atlas", this.FISH_NORMAL_5);
        Animation.createFrames("res/atlas/fish/fishimg/fish7/dead.atlas", this.FISH_DEAD_5);
        ///id 5 水母
        Animation.createFrames("res/atlas/fish/fishimg/fish10/live.atlas", this.FISH_NORMAL_6);
        Animation.createFrames("res/atlas/fish/fishimg/fish10/dead.atlas", this.FISH_DEAD_6);
        ///id 6 鳄鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish2/live.atlas", this.FISH_NORMAL_7);
        Animation.createFrames("res/atlas/fish/fishimg/fish2/dead.atlas", this.FISH_DEAD_7);
        ///id 7 大乌龟
        Animation.createFrames("res/atlas/fish/fishimg/fish11/live.atlas", this.FISH_NORMAL_8);
        Animation.createFrames("res/atlas/fish/fishimg/fish11/dead.atlas", this.FISH_DEAD_8);
        ///id 8 海豚
        Animation.createFrames("res/atlas/fish/fishimg/fish4/live.atlas", this.FISH_NORMAL_9);
        Animation.createFrames("res/atlas/fish/fishimg/fish4/dead.atlas", this.FISH_DEAD_9);
        ///id 9 鲸鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish6/live.atlas", this.FISH_NORMAL_10);
        Animation.createFrames("res/atlas/fish/fishimg/fish6/dead.atlas", this.FISH_DEAD_10);
        ///id 10 海胆鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish3/live.atlas", this.FISH_NORMAL_11);
        Animation.createFrames("res/atlas/fish/fishimg/fish3/dead.atlas", this.FISH_DEAD_11);
        ///id 11 灯笼鱼
        Animation.createFrames("res/atlas/fish/fishimg/fish1/live.atlas", this.FISH_NORMAL_12);
        Animation.createFrames("res/atlas/fish/fishimg/fish1/dead.atlas", this.FISH_DEAD_12);
    };
    FishManager.prototype.createFishById = function (id) {
        var fish;
        var fishVo = DataProxy_1.DataProxy.getInstance().getDataById(id);
        fish = laya.utils.Pool.getItemByClass("fish_info_" + (id + 1) + "", FishFather_1.FishFather);
        fishVo.fishInfo = "fish_info_" + (id + 1) + "";
        fishVo.leveAn = "fish_normal_" + (id + 1) + "";
        fishVo.deadAn = "fish_dead_" + (id + 1) + "";
        fish.fishVo = fishVo;
        fish.id = id;
        return fish;
    };
    FishManager.prototype.recoverfish = function (fish) {
        laya.utils.Pool.recover(fish.fishVo.fishInfo, fish);
    };
    /**
     * 获取心形路径点
     * @param	dis  大小
     * @param	mj   点密集度
     * @return
     */
    FishManager.prototype.heartPathDot = function (dis, mj) {
        if (dis === void 0) { dis = 150; }
        if (mj === void 0) { mj = 10; }
        var angle; //储存极角
        var p;
        var rarr = [];
        var sin;
        var cos;
        var heartX = 0; //心形中点的坐标
        var heartY = 0;
        var heartSize = dis; //心形的大小
        var A = Math.PI / 4;
        var X;
        var Y;
        var lastX;
        for (var i = 0; i <= 360; i += mj) {
            //计算极角和极径
            angle = Math.PI * i / 180;
            //心形
            X = 2 * Math.cos(angle) * Math.cos(A) - Math.sin(angle) * Math.sin(A);
            Y = 2 * Math.cos(angle) * Math.sin(A) + Math.sin(angle) * Math.cos(A);
            if (X > 0) {
                Y = -Y;
            }
            p = new laya.maths.Point(heartX + X * heartSize, heartY + Y * heartSize);
            rarr.push(p);
            lastX = X;
        }
        return rarr;
    };
    /**
     * 矩形路径点
     * @param	rows
     * @param	cols
     * @param	space
     * @return
     */
    FishManager.prototype.rectPathDot = function (rows, cols, space) {
        if (rows === void 0) { rows = 4; }
        if (cols === void 0) { cols = 8; }
        if (space === void 0) { space = 80; }
        var p;
        var arr = [];
        var xx = 0;
        var yy = 0;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                p = new Point(xx, yy);
                xx += space;
                arr.push(p);
            }
            xx = 0;
            yy += space;
        }
        return arr;
    };
    /**
     * 菱形路径点
     * @param	rows
     * @param	cols
     * @param	space
     * @return
     */
    FishManager.prototype.rhombPathDot = function (rows, cols, space) {
        if (rows === void 0) { rows = 7; }
        if (cols === void 0) { cols = 7; }
        if (space === void 0) { space = 80; }
        var val = Math.floor(cols / 2); //开始空的格数
        var p;
        var arr = [];
        var xx = 0;
        var yy = 0;
        var flag = 1; //1将序  2升序
        for (var i = 0; i < rows; i++) {
            if (val < 0) {
                flag = 2;
                val = 1;
            }
            for (var j = val; j < val + (cols - val * 2); j++) {
                xx = j * space;
                p = new Point(xx, yy);
                arr.push(p);
            }
            if (flag == 1) {
                val--;
            }
            else if (flag == 2) {
                val++;
            }
            yy += space;
        }
        return arr;
    };
    /**
     * 圆形路径
     * @param	count 几环
     * @param	space 半径间距
     * @param	angleSpace 角度间距
     * @return
     */
    FishManager.prototype.circlePathDot = function (count, space, angleSpace) {
        if (count === void 0) { count = 3; }
        if (space === void 0) { space = 80; }
        if (angleSpace === void 0) { angleSpace = 30; }
        var radius = 0;
        var angle;
        var p;
        var arr = [];
        var xx = 0;
        var yy = 0;
        for (var i = 1; i <= count; i++) {
            radius = i * space;
            for (var j = 0; j < 360; j += angleSpace) {
                xx = Math.cos(j * Math.PI / 180) * radius;
                yy = Math.sin(j * Math.PI / 180) * radius;
                p = new Point(xx, yy);
                arr.push(p);
            }
        }
        return arr;
    };
    return FishManager;
}());
exports.FishManager = FishManager;
},{"../../data/DataProxy":5,"./FishFather":14}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = laya.display.Animation;
var Tween = laya.utils.Tween;
var Point = laya.maths.Point;
var Rectangle = laya.maths.Rectangle;
var Ease = laya.utils.Ease;
var Global_1 = require("../../Global");
var Tools = /** @class */ (function (_super) {
    __extends(Tools, _super);
    function Tools() {
        var _this = _super.call(this) || this;
        _this.DEAD_OVER = "dead_over"; //死亡动画播放完成
        _this.DEADED = 'deaded'; //死亡
        _this.DEAD_SELF = 'dead_self'; //自毁
        _this.deadSelfTime = 10000;
        _this.deaded = false;
        //获取碰撞矩形区域修正值
        _this.xval = 0;
        _this.yval = 0;
        _this.wval = 0;
        _this.hval = 0;
        _this.Tools();
        return _this;
    }
    Tools.getInstance = function () {
        if (!this.instance) {
            this.instance = new Tools;
        }
        return this.instance;
    };
    Object.defineProperty(Tools.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            this.anBody.play(0, true, this.normalAn);
            this.anBody.pos(-this.anBody.getBounds().width / 2, -this.anBody.getBounds().height / 2);
            this.selfWidth = this.anBody.getBounds().width;
            this.selfHeight = this.anBody.getBounds().height;
            //this.graphics.drawRect( -selfWidth / 2+xval, -selfHeight / 2+yval, selfWidth-wval, selfHeight-hval,"#ff0000");
        },
        enumerable: true,
        configurable: true
    });
    Tools.prototype.Tools = function () {
        this.anBody = new Animation();
        this.addChild(this.anBody);
    };
    /**
     * 初始化
     */
    Tools.prototype.init = function () {
        this.deaded = false;
        this.scale(0, 0);
        Tween.to(this, { scaleX: 2, scaleY: 2 }, 150, Ease.backOut, Laya.Handler.create(this, function () {
            Tween.to(this, { scaleX: 1, scaleY: 1 }, 150, Ease.backIn);
        }));
        this.deadSelfH();
    };
    /**
     * 开始自毁
     */
    Tools.prototype.deadSelfH = function () {
        Laya.timer.once(this.deadSelfTime, this, this.dh);
    };
    Tools.prototype.dh = function () {
        this.deaded = true;
        this.deadSelfS();
    };
    /**
     * 自毁操作
     */
    Tools.prototype.deadSelfS = function () {
        Tween.to(this, { scaleX: 0, scaleY: 0 }, 200, Ease.backIn, Laya.Handler.create(this, function () {
            this.event(this.DEAD_SELF, [this]);
        }));
    };
    /**
     * 死亡
     */
    Tools.prototype.disposeS = function () {
        Global_1.Global.getInstance().ISPAUSE = true;
        this.deaded = true;
        this.anBody.play(0, false, this.deadAn);
        Laya.timer.clear(this, this.dh);
        this.anBody.on(Laya.Event.COMPLETE, this, this.deadAnCom);
        this.event(this.DEADED, [this]);
    };
    /**
     * 死亡动画播放完
     */
    Tools.prototype.deadAnCom = function () {
        this.removeSelf();
        this.event(this.DEAD_OVER, [this]);
    };
    /**
     * 获取碰撞矩形
     */
    Tools.prototype.getHitRectangle = function () {
        var global = this.localToGlobal(new Point(-this.selfWidth / 2, -this.selfHeight / 2), true);
        var rec = new Rectangle(global.x + this.xval, global.y + this.yval, this.selfWidth - this.wval, this.selfHeight - this.hval);
        return rec;
    };
    return Tools;
}(Laya.Sprite));
exports.Tools = Tools;
},{"../../Global":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = laya.display.Animation;
var SoundManager = laya.media.SoundManager;
var Pool = laya.utils.Pool;
var Tools_1 = require("./Tools");
var ToolsManager = /** @class */ (function () {
    function ToolsManager() {
        //动画标识
        //鱼雷
        this.BOMB_NORMAL = "bomb_normal";
        this.BOMB_BOOM = "bomb_boom";
        //宝箱
        this.BOX_NORMAL = "box_normal";
        this.BOX_OPEN = "box_open";
        //力量
        this.POWER_NORMAL = "power_normal";
        this.POWER_OPEN = "power_open";
        //鱼饵
        this.FOOD_NORMAL = "food_normal";
        this.FOOD_EAT = "food_eat";
        //类型
        this.TYPE_BOOM = 1;
        this.TYPE_BOX = 2;
        this.TYPE_POWER = 3;
        this.TYPE_Food = 4;
        //道具集合
        this.toolArr = [];
    }
    ToolsManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new ToolsManager;
        }
        return this.instance;
    };
    ;
    /**
     * 缓存动画
     */
    ToolsManager.prototype.cacheAnimation = function () {
        //bomb
        Animation.createFrames("res/atlas/fish/tools/boom.json", this.BOMB_BOOM);
        Animation.createFrames(["fish/tools/boom/boom0001.png"], this.BOMB_NORMAL);
        //宝箱
        Animation.createFrames(["fish/tools/bx.png"], this.BOX_NORMAL);
        Animation.createFrames(["fish/tools/bx.png"], this.BOX_OPEN);
        //力量
        Animation.createFrames(["fish/tools/power.png"], this.POWER_NORMAL);
        Animation.createFrames(["fish/tools/power.png"], this.POWER_OPEN);
        //鱼饵
        Animation.createFrames(["fish/tools/fishfood.png"], this.FOOD_NORMAL);
        Animation.createFrames(["fish/tools/fishfood.png"], this.FOOD_EAT);
    };
    /**
     * 创建
     * @param	type
     * @return
     */
    ToolsManager.prototype.createToolByType = function (type) {
        var tool = Pool.getItemByClass("" + type, Tools_1.Tools);
        switch (type) {
            case 1:
                tool.normalAn = this.BOMB_NORMAL;
                tool.deadAn = this.BOMB_BOOM;
                tool.xval = 40;
                tool.yval = 40;
                tool.wval = 90;
                tool.hval = 60;
                break;
            case 2:
                tool.normalAn = this.BOX_NORMAL;
                tool.deadAn = this.BOX_OPEN;
                break;
            case 3:
                tool.normalAn = this.POWER_NORMAL;
                tool.deadAn = this.POWER_OPEN;
                break;
            case 4:
                tool.normalAn = this.FOOD_NORMAL;
                tool.deadAn = this.FOOD_EAT;
                break;
        }
        tool.type = type;
        tool.once(Tools_1.Tools.getInstance().DEAD_OVER, this, this.deadAnOver);
        tool.once(Tools_1.Tools.getInstance().DEADED, this, this.deadedOver);
        tool.once(Tools_1.Tools.getInstance().DEAD_SELF, this, this.deadedSelfOver);
        tool.init();
        this.toolArr.push(tool);
        SoundManager.playSound("res/sound/tool.mp3");
        return tool;
    };
    /**
     * 死亡动画结束
     * @param tools
     */
    ToolsManager.prototype.deadAnOver = function (tools) {
        var index = this.toolArr.indexOf(tools);
        this.toolArr.splice(index, 1);
    };
    ToolsManager.prototype.deadedOver = function (tools) {
    };
    /**
     * 自毁结束
     * @param tools
     */
    ToolsManager.prototype.deadedSelfOver = function (tools) {
        var index = this.toolArr.indexOf(tools);
        this.toolArr.splice(index, 1);
    };
    ToolsManager.prototype.recover = function (tool) {
        tool.removeSelf();
        Pool.recover("" + tool.type, tool);
    };
    return ToolsManager;
}());
exports.ToolsManager = ToolsManager;
},{"./Tools":16}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var View = Laya.View;
var REG = Laya.ClassUtils.regClass;
var ui;
(function (ui) {
    var GameViewUI = /** @class */ (function (_super) {
        __extends(GameViewUI, _super);
        function GameViewUI() {
            return _super.call(this) || this;
        }
        GameViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(GameViewUI.uiView);
        };
        GameViewUI.uiView = { "type": "View", "props": { "width": 1280, "height": 700 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": -10, "x": -2, "texture": "img/BG01.png", "name": "bg" }, "compId": 3 }, { "type": "Box", "props": { "y": 534, "x": 0, "width": 410, "name": "player1", "height": 176 }, "compId": 4, "child": [{ "type": "Image", "props": { "y": 97, "x": 0, "width": 201, "skin": "img/Image_doudizhu_touxiangdikuang.png", "height": 79 }, "compId": 5, "child": [{ "type": "Image", "props": { "y": 5, "x": 0, "width": 73, "skin": "img/Image_doudizhu_touxiangkuang.png", "height": 74 }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 3, "x": 4, "width": 65, "skin": "img/icon_default.png", "height": 62 }, "compId": 7 }] }] }, { "type": "Image", "props": { "y": 108.5, "x": 80, "width": 108, "skin": "img/Image_doudizhu_paixing.png", "height": 28 }, "compId": 8 }, { "type": "Image", "props": { "y": 140, "x": 80, "width": 108, "skin": "img/Image_doudizhu_paixing.png", "height": 28 }, "compId": 9 }, { "type": "Image", "props": { "y": 108.5, "x": 80, "skin": "img/jp_jb.png" }, "compId": 10 }, { "type": "Image", "props": { "y": 142, "x": 80, "width": 25, "skin": "img/zuanshi_01.png", "height": 24 }, "compId": 11 }, { "type": "Label", "props": { "y": 109, "x": 114, "width": 62, "valign": "middle", "text": "0", "name": "coinNum", "height": 26, "fontSize": 18, "font": "Helvetica", "color": "#deb925", "bold": true, "align": "center" }, "compId": 12 }, { "type": "Label", "props": { "y": 140, "x": 114, "width": 62, "valign": "middle", "text": "0", "name": "diamondNum", "height": 26, "fontSize": 18, "font": "Helvetica", "color": "#deb925", "bold": true, "align": "center" }, "compId": 13 }, { "type": "Box", "props": { "y": 97, "x": 201, "width": 189, "name": "cannon", "height": 81 }, "compId": 14, "child": [{ "type": "Image", "props": { "y": 27, "x": 0, "width": 188, "skin": "img/dz1.png", "name": "paotai", "height": 54 }, "compId": 15 }, { "type": "Button", "props": { "y": 54, "x": 137, "width": 29, "skin": "img/button_arrow.png", "name": "btn_next", "height": 22 }, "compId": 17 }, { "type": "Button", "props": { "y": 76, "x": 50, "width": 29, "skin": "img/button_arrow.png", "rotation": 180, "name": "btn_pre", "height": 22 }, "compId": 18 }] }] }, { "type": "Button", "props": { "y": 9, "x": 11, "width": 50, "stateNum": 2, "skin": "img/merge_Image_paizhuonei_fanhui.png", "height": 50 }, "compId": 16 }], "loadList": ["img/BG01.png", "img/Image_doudizhu_touxiangdikuang.png", "img/Image_doudizhu_touxiangkuang.png", "img/icon_default.png", "img/Image_doudizhu_paixing.png", "img/jp_jb.png", "img/zuanshi_01.png", "img/dz1.png", "img/button_arrow.png", "img/merge_Image_paizhuonei_fanhui.png"], "loadList3D": [] };
        return GameViewUI;
    }(View));
    ui.GameViewUI = GameViewUI;
    REG("ui.GameViewUI", GameViewUI);
    var LoadingViewUI = /** @class */ (function (_super) {
        __extends(LoadingViewUI, _super);
        function LoadingViewUI() {
            return _super.call(this) || this;
        }
        LoadingViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(LoadingViewUI.uiView);
        };
        LoadingViewUI.uiView = { "type": "View", "props": { "width": 1280, "height": 700 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "load/lading_bg1.png" }, "compId": 4 }, { "type": "Button", "props": { "y": 523, "x": 494, "width": 291, "visible": true, "stateNum": 3, "skin": "load/button_star.png", "name": "start", "height": 134 }, "compId": 3 }, { "type": "Image", "props": { "y": 412, "x": 427.5, "skin": "load/linebg.png" }, "compId": 7 }, { "type": "Image", "props": { "y": 439, "x": 454, "width": 32, "skin": "load/bars.png", "name": "dot", "height": 47 }, "compId": 8 }], "loadList": ["load/lading_bg1.png", "load/button_star.png", "load/linebg.png", "load/bars.png"], "loadList3D": [] };
        return LoadingViewUI;
    }(View));
    ui.LoadingViewUI = LoadingViewUI;
    REG("ui.LoadingViewUI", LoadingViewUI);
})(ui = exports.ui || (exports.ui = {}));
},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite = laya.display.Sprite;
var Image = laya.ui.Image;
var Label = laya.ui.Label;
var TipsData_1 = require("./TipsData");
var CustomTips = /** @class */ (function (_super) {
    __extends(CustomTips, _super);
    function CustomTips() {
        var _this = _super.call(this) || this;
        _this.opeDelSelf = false;
        _this.exitTime = 40;
        _this.currTime = 0;
        _this.tempW = 1;
        return _this;
    }
    CustomTips.getInstance = function () {
        if (this.instance == null) {
            this.instance = new CustomTips;
        }
        return this.instance;
    };
    /**
     * 添加tip
     * @param	container  容器
     * @param	content    内容
     * @param	logoflag   图标
     * @param	isCenter   是否横向居中
     * @param	posy    纵向位置
     * @param	posx    横向位置
     * @param	antime    动画运动时间
     * @param	isAllExist  是否不自动消失
     * @param	etime  存在多久自动销毁 20*etime 毫秒
     * @param	logotype  logo类型 = 对错号   1 表情
     * @param	bond  粗体
     * @param	size  字号
     * @param	font  字体
     */
    CustomTips.prototype.AddTip = function (container, content, logoflag, isCenter, posy, posx, antime, isAllExist, etime, logotype, bond, size, font) {
        if (content === void 0) { content = "333434"; }
        if (logoflag === void 0) { logoflag = "right"; }
        if (isCenter === void 0) { isCenter = true; }
        if (posy === void 0) { posy = 150; }
        if (posx === void 0) { posx = 100; }
        if (antime === void 0) { antime = 300; }
        if (isAllExist === void 0) { isAllExist = false; }
        if (etime === void 0) { etime = 40; }
        if (logotype === void 0) { logotype = 0; }
        if (bond === void 0) { bond = true; }
        if (size === void 0) { size = 24; }
        if (font === void 0) { font = "方正卡通简体"; }
        this.exitTime = etime;
        if (!container.contains(this)) {
            container.addChild(this);
        }
        if (!this.firstTip) {
            this.firstTip = this.CreateLogoTip(content, logoflag, logotype, bond, size, font);
            this.an_in(this.firstTip, antime);
            this.add(this, this.firstTip);
            if (this.tempW == -1) {
                this.tempW = this.firstTip.width;
            }
        }
        else if (!this.secondTip) {
            this.an_out(this.firstTip, antime);
            this.secondTip = this.CreateLogoTip(content, logoflag, logotype, bond, size, font);
            this.add(this, this.secondTip);
            this.an_in_1(this.secondTip, antime);
            this.secondTip.x = this.firstTip.x;
        }
        if (isCenter) {
            this.centers(container, posy);
        }
        else {
            this.pos(posx, posy);
        }
        this.
            ///实时检测自毁事件
            currTime = 0;
        if (!this.opeDelSelf && !isAllExist) {
            this.opeDelSelf = true;
            Laya.timer.loop(20, this, this.loopHand);
        }
    };
    /**
     * 清除自己
     */
    CustomTips.prototype.disposSelf = function () {
        this.tempW = -1;
        this.currTime = 0;
        this.removeSelf();
        Laya.timer.clearAll(this);
    };
    /**
     * 居中
     * @param	container
     * @param	posy
     */
    CustomTips.prototype.centers = function (container, posy) {
        this.pos((container.width - this.tempW) / 2, posy);
    };
    /**
     * 检测自毁时间
     */
    CustomTips.prototype.loopHand = function () {
        this.currTime++;
        if (this.currTime >= this.exitTime) {
            this.del();
        }
    };
    CustomTips.prototype.del = function () {
        this.opeDelSelf = false;
        Laya.timer.clearAll(this);
        this.an_dl(this.firstTip);
        this.currTime = 0;
    };
    /**
     * 消除自身
     */
    CustomTips.prototype.disposeSelf = function () {
        this.del();
    };
    /**
     * 出 动画
     * @param	target
     * @param	anTime
     */
    CustomTips.prototype.an_out = function (target, anTime) {
        if (anTime === void 0) { anTime = 400; }
        target.alpha = 1;
        var timeLine = new laya.utils.TimeLine();
        timeLine.addLabel("aa", 0).to(target, { y: -target.height / 2 }, anTime, laya.utils.Ease.cubicOut)
            .addLabel("bb", 0).to(target, { alpha: 0 }, anTime, laya.utils.Ease.cubicOut);
        timeLine.play(0);
        timeLine.on(Laya.Event.COMPLETE, this, function () {
            timeLine.destroy();
            target.removeSelf();
            target = null;
        });
    };
    /**
     * 自毁动画
     * @param	target
     * @param	anTime
     */
    CustomTips.prototype.an_dl = function (target, anTime) {
        if (anTime === void 0) { anTime = 400; }
        if (!target)
            return;
        laya.utils.Tween.to(target, { alpha: 0 }, anTime, laya.utils.Ease.cubicOut, new laya.utils.Handler(this, function () {
            target.removeSelf();
            if (target === this.firstTip) {
                target = null;
                this.firstTip = null;
            }
            if (this.firstTip == null && this.secondTip == null) {
                this.disposSelf();
            }
        }));
    };
    /**
     * firstTip动画
     * @param	target
     * @param	anTime
     */
    CustomTips.prototype.an_in = function (target, anTime) {
        if (anTime === void 0) { anTime = 400; }
        target.alpha = 0;
        laya.utils.Tween.to(target, { alpha: 1 }, anTime, laya.utils.Ease.cubicIn);
    };
    /**
     * secondTip 入 动画
     * @param	target
     * @param	anTime
     */
    CustomTips.prototype.an_in_1 = function (target, anTime) {
        if (anTime === void 0) { anTime = 400; }
        target.scaleY = 0;
        var self = this;
        laya.utils.Tween.to(target, { scaleY: 1 }, anTime, laya.utils.Ease.cubicIn, new laya.utils.Handler(this, function () {
            self.firstTip = self.secondTip;
            self.secondTip = null;
        }));
    };
    /**
     * 添加子对象，自判断
     * @param	father
     * @param	sun
     */
    CustomTips.prototype.add = function (father, sun) {
        if (sun && !father.contains(sun)) {
            father.addChild(sun);
            sun.pos(sun.width / 2, sun.height / 2);
        }
    };
    /**
     * 创建tip内容
     * @param	content
     * @param	logoflag
     * @param	logotype
     * @param	bond
     * @param	size
     * @param	font
     * @return
     */
    CustomTips.prototype.CreateLogoTip = function (content, logoflag, logotype, bond, size, font) {
        if (logoflag === void 0) { logoflag = "right"; }
        if (logotype === void 0) { logotype = 0; }
        if (bond === void 0) { bond = false; }
        if (size === void 0) { size = 22; }
        if (font === void 0) { font = "微软雅黑"; }
        var tipContainer = new Sprite();
        var infoContaienr = new Sprite();
        var logoImg = new Image();
        var bgImg = new Image();
        bgImg.sizeGrid = "33,26,28,30";
        var label = new Label();
        label.text = content;
        label.font = font;
        label.fontSize = size;
        label.height = 50;
        if (logoflag == "right") {
            logoImg.skin = TipsData_1.TipsData.getInstance().logoRightArr[logotype];
            bgImg.skin = TipsData_1.TipsData.getInstance().tipRightArr[logotype];
            label.color = TipsData_1.TipsData.getInstance().rightColorArr[logotype];
        }
        else if (logoflag == "wrong") {
            logoImg.skin = TipsData_1.TipsData.getInstance().logoWrongArr[logotype];
            bgImg.skin = TipsData_1.TipsData.getInstance().tipWrongArr[logotype];
            label.color = TipsData_1.TipsData.getInstance().wrongColorArr[logotype];
        }
        else if (logoflag == "warn") {
            logoImg.skin = TipsData_1.TipsData.getInstance().logoWarnArr[logotype];
            bgImg.skin = TipsData_1.TipsData.getInstance().tipWarnArr[logotype];
            label.color = TipsData_1.TipsData.getInstance().warnColorArr[logotype];
        }
        bgImg.size(label.width + 200, 50);
        infoContaienr.width = bgImg.width;
        label.pos((bgImg.width - label.textField.textWidth) / 2, (bgImg.height - label.textField.textHeight) / 2);
        tipContainer.addChild(infoContaienr);
        infoContaienr.addChild(bgImg);
        infoContaienr.addChild(label);
        infoContaienr.pos(logoImg.width - 1, 0);
        tipContainer.addChild(logoImg);
        tipContainer.size(logoImg.width + bgImg.width, logoImg.height);
        tipContainer.pivot(tipContainer.width / 2, tipContainer.height / 2);
        return tipContainer;
    };
    return CustomTips;
}(Laya.Sprite));
exports.CustomTips = CustomTips;
},{"./TipsData":20}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**tip 数据管理
 * ...
 * @author MXL
 */
var TipsData = /** @class */ (function () {
    function TipsData() {
        ///logo tip 素材管理  0 对错号   1是表情
        this.logoRightArr = ["fish/tip/right.png", "fish/tip/face_right.png", "fish/tip/face2_right.png", "fish/tip/fish3_3.png"];
        this.logoWrongArr = ["fish/tip/wrong.png", "fish/tip/face_wrong.png", "fish/tip/face2_wrong.png", "fish/tip/fish3_2.png"];
        this.logoWarnArr = ["fish/tip/warn.png", "fish/tip/face_warn.png", "fish/tip/face2_warn.png", "fish/tip/fish3_1.png"];
        ///bg
        this.tipRightArr = ["fish/tip/right_bg.png", "fish/tip/right_bg.png", "fish/tip/bg3.png", "fish/tip/bg4.png"];
        this.tipWrongArr = ["fish/tip/wrong_bg.png", "fish/tip/wrong_bg.png", "fish/tip/bg3.png", "fish/tip/bg4.png"];
        this.tipWarnArr = ["fish/tip/warn_bg.png", "fish/tip/warn_bg.png", "fish/tip/bg3.png", "fish/tip/bg4.png"];
        ///color
        this.rightColorArr = ["#006666", "#006666", "#ffffff", "#ffffff"];
        this.wrongColorArr = ["#cc0000", "#cc0000", "#ffffff", "#ffffff"];
        this.warnColorArr = ["#CC6600", "#CC6600", "#ffffff", "#ffffff"];
    }
    TipsData.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TipsData();
        }
        return this.instance;
    };
    return TipsData;
}());
exports.TipsData = TipsData;
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("../ui/layaMaxUI");
var CannonFather_1 = require("../element/cannon/CannonFather");
var CannonManager_1 = require("../element/cannon/CannonManager");
var Global_1 = require("../Global");
var DataProxy_1 = require("../data/DataProxy");
var CustomTips_1 = require("../util/tips/CustomTips");
var BulletFather_1 = require("../element/bullet/BulletFather");
var BulletManager_1 = require("../element/bullet/BulletManager");
var FishManager_1 = require("../element/fish/FishManager");
var FishFather_1 = require("../element/fish/FishFather");
var Point = laya.maths.Point;
var TimeLine = laya.utils.TimeLine;
var SoundManager = laya.media.SoundManager;
var CoinManager_1 = require("../element/coin/CoinManager");
var Tools_1 = require("../element/tools/Tools");
var ToolsManager_1 = require("../element/tools/ToolsManager");
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this._cannonType = 0; //大炮类型
        _this.bulletArr = []; //子弹数组
        _this.deadBullet = []; //死亡子弹
        _this.fishArr = []; //鱼数组
        _this.coinNum = _this.getChildByName("player1").getChildByName("coinNum");
        _this.btn_pre = _this.getChildByName("player1").getChildByName("cannon").getChildByName("btn_pre");
        _this.btn_next = _this.getChildByName("player1").getChildByName("cannon").getChildByName("btn_next");
        _this.initData();
        _this.initView();
        _this.initEvent();
        return _this;
    }
    GameView.getInstance = function () {
        if (this.instance == null) {
            this.instance = new GameView();
            return this.instance;
        }
    };
    GameView.prototype.initData = function () {
        CannonManager_1.CannonManager.getInstance().cacheAnimation();
        BulletManager_1.BulletManager.getInstance().cacheAnimation();
        FishManager_1.FishManager.getInstance().cacheAnimation();
        CoinManager_1.CoinManager.getInstance().cacheAnimation();
        ToolsManager_1.ToolsManager.getInstance().cacheAnimation();
    };
    GameView.prototype.initView = function () {
        this.cannon = CannonManager_1.CannonManager.getInstance().createCannon(this, 295, 694);
        this.cannonType = 5;
        this.coinNum.text = 1000;
        Global_1.Global.getInstance().lvlnum = 1;
        this.createFish(Global_1.Global.getInstance().totalFishNum);
    };
    Object.defineProperty(GameView.prototype, "cannonType", {
        get: function () {
            return this._cannonType;
        },
        set: function (val) {
            this._cannonType = val;
            this._cannonType = Math.min(Math.max(this._cannonType, CannonFather_1.CannonFather.getInstance().MIN_TYPE), CannonFather_1.CannonFather.getInstance().MAX_TYPE);
            this.cannon.type = this._cannonType;
        },
        enumerable: true,
        configurable: true
    });
    GameView.prototype.initEvent = function () {
        this.on(Laya.Event.MOUSE_DOWN, this, this.DownHand);
        this.btn_pre.on(Laya.Event.MOUSE_DOWN, this, this.powBtnHand);
        this.btn_next.on(Laya.Event.MOUSE_DOWN, this, this.powBtnHand);
        Laya.timer.frameLoop(1, this, this.loopHand);
    };
    /**
     * 循环函数
     */
    GameView.prototype.loopHand = function () {
        this.checkHitFish2();
        this.checkHitTools();
    };
    /**
     * 子弹碰撞到鱼
     */
    GameView.prototype.checkHitFish2 = function () {
        var bullet;
        var fish;
        var i = 0;
        var j = 0;
        var frect;
        for (i = 0; i < this.bulletArr.length; i++) {
            bullet = this.bulletArr[i];
            if (!bullet || !bullet.parent)
                continue;
            for (j = 0; j < this.fishArr.length; j++) {
                fish = this.fishArr[j];
                if (!fish || !fish.parent)
                    continue;
                frect = fish.getHitRectangle();
                if (!bullet.isHitFish && !bullet.deaded && !fish.dead) {
                    if (this.checkOver(frect, bullet)) {
                        bullet.isHitFish = true;
                        fish.hp -= this.getBulletHard(bullet) * Math.random() * 5;
                    }
                }
            }
        }
    };
    /**
     * 子弹碰撞道具
     */
    GameView.prototype.checkHitTools = function () {
        var bullet;
        var tool;
        var i = 0;
        var j = 0;
        var frect;
        for (i = 0; i < this.bulletArr.length; i++) {
            bullet = this.bulletArr[i];
            if (!bullet || !bullet.parent)
                continue;
            for (j = 0; j < ToolsManager_1.ToolsManager.getInstance().toolArr.length; j++) {
                tool = ToolsManager_1.ToolsManager.getInstance().toolArr[j];
                if (!tool || !tool.parent)
                    continue;
                frect = tool.getHitRectangle();
                if (!bullet.isHitTool && !bullet.deaded && !tool.deaded) {
                    if (this.checkOver(frect, bullet)) {
                        bullet.isHitTool = true;
                        tool.disposeS();
                    }
                }
            }
        }
    };
    /**
     * 检查是否相交
     * @param	fullet
     * @param	fish
     */
    GameView.prototype.checkOver = function (frect, bullet) {
        var bc = bullet.getCenter();
        var br = bullet.hitRadius;
        var xv = 10; //修正范围
        var p1 = new Point(frect.x + xv, frect.y + xv);
        var p2 = new Point(frect.x + xv + frect.width - xv * 2, frect.y + xv);
        var p3 = new Point(frect.x + xv, frect.y + xv + frect.height - xv * 2);
        var p4 = new Point(frect.x + xv + frect.width - xv * 2, frect.y + xv + frect.height - xv * 2);
        var arr4 = this.getNode(p1, p2, bc, br);
        var arr3 = this.getNode(p1, p3, bc, br);
        var arr2 = this.getNode(p2, p4, bc, br);
        var arr1 = this.getNode(p3, p4, bc, br);
        var arr = arr1.concat(arr2).concat(arr3).concat(arr4);
        var boo = false;
        return this.isOver(frect, arr);
    };
    /**
         * 返回线跟圆的交点
         * @param	p1  点1
         * @param	p2  点2
         * @param	c   圆心
         * @param	r   半径
         * @return  两个交点
         */
    GameView.prototype.getNode = function (p1, p2, c, r) {
        var x1;
        var x2;
        var y1;
        var y2;
        var po1 = new Point(0, 0);
        var po2 = new Point(0, 0);
        if (p2.x - p1.x == 0) {
            x1 = p1.x;
            x2 = p1.x;
            y1 = Math.pow(r * r - Math.pow((p1.x - c.x), 2), 1 / 2) + c.y; //下面点
            y2 = -Math.pow(r * r - Math.pow((p1.x - c.x), 2), 1 / 2) + c.y; //上面点
        }
        else {
            var k = (p2.y - p1.y) / (p2.x - p1.x);
            var b = p1.y - (p2.y - p1.y) / (p2.x - p1.x) * p1.x;
            var m = b - c.y;
            var val = -2 * m * k * c.x - k * k * c.x * c.x + k * k * r * r - m * m + r * r;
            x1 = ((c.x - m * k) - Math.pow(val, 1 / 2)) / (k * k + 1); //左边点
            y1 = k * x1 + b;
            x2 = ((c.x - m * k) + Math.pow(val, 1 / 2)) / (k * k + 1); //右边点
            y2 = k * x1 + b;
        }
        po1.setTo(x1, y1);
        po2.setTo(x2, y2);
        return [po1, po2];
    };
    /**
     * 是否包含集合中的任意一个点
     * @param	frect
     * @param	parr
     * @return
     */
    GameView.prototype.isOver = function (frect, parr) {
        for (var i = 0; i < parr.length; i++) {
            var p = parr[i];
            if (frect.contains(p.x, p.y)) {
                return true;
            }
        }
        return false;
    };
    GameView.prototype.powBtnHand = function (e) {
        // e.stopPropagation();
        if (e.currentTarget == this.btn_pre) {
            this.cannonType--;
        }
        else {
            this.cannonType++;
        }
        laya.media.SoundManager.playSound("res/sound/ChangeGun.wav");
    };
    GameView.prototype.DownHand = function (e) {
        if (Global_1.Global.getInstance().ISPAUSE)
            return;
        if (this.mouseY <= Global_1.Global.getInstance().totalHeight - Global_1.Global.getInstance().bottomSpace) {
            if (!this.checkCanShoot(DataProxy_1.DataProxy.getInstance().getDataByType(this.cannon.type))) {
                return;
            }
            var time = laya.utils.Browser.now();
            if (time > this.cannon.shootTime * Global_1.Global.getInstance().shootInterTime) {
                var disy = (this.mouseY - this.cannon.y);
                var disx = (this.mouseX - this.cannon.x);
                this.cannon.rotateAn(Math.atan2(disy, disx) * 180 / Math.PI + 90);
                this.cannon.shootTime = time + this.cannon.shootInterval;
                this.cannon.shootAn();
                var bullet = BulletManager_1.BulletManager.getInstance().createBulletByType(this.cannon.type);
                var angle = this.cannon.rotation - 90;
                bullet.pos(this.cannon.x + Math.cos(angle * Math.PI / 180) * this.cannon.selfHeight, this.cannon.y + Math.sin(angle * Math.PI / 180) * this.cannon.selfHeight);
                bullet.rotation = this.cannon.rotation;
                this.addChild(bullet);
                bullet.init();
                this.coinNum.text = Number(this.coinNum.text) - bullet.dataVo.power;
                bullet.once(BulletFather_1.BulletFather.getInstance().BOOM_COM, this, this.bulletBoom);
                this.bulletArr.push(bullet);
            }
        }
    };
    /**
     * 子弹爆炸
     * @param bullet
     */
    GameView.prototype.bulletBoom = function (bullet) {
        // this.boomCheckHit(bullet);
        // this.boomCheckHitTool(bullet);
        var index = this.bulletArr.indexOf(bullet);
        this.bulletArr.splice(index, 1);
        bullet.removeSelf();
        bullet.deaded = true;
        BulletManager_1.BulletManager.getInstance().recoverBullerByType(bullet);
    };
    // /**
    //  * 子弹爆炸二次检测碰撞 交点碰撞，相对矩形精确一些
    //  * @param	bullet
    //  */
    // private boomCheckHitTool(bullet:BulletFather):void{
    //     var tool:Tools
    //     var j = 0;
    //     var frect:Laya.Rectangle;
    //     for (j = 0; j < ToolsManager.instance().toolArr.length; j++){
    //         tool = ToolsManager.instance().toolArr[j];
    //         if (!tool || !tool.parent) continue;
    //         frect = tool.getHitRectangle();
    //         if (!tool.deaded){
    //             if (this.checkOver(frect, bullet)){
    //                 tool.disposeS();
    //             }
    //         }
    //     }
    // }
    /**
         * 子弹爆炸二次检测碰撞 交点碰撞，相对矩形精确一些
         * @param	bullet
         */
    // private boomCheckHit(bullet:BulletFather):void{
    // 	var fish:FishFather;
    // 	var j = 0;
    //     var frect:Laya.Rectangle;
    // 	for (j = 0; j < this.fishArr.length; j++){
    //         fish = this.fishArr[j];
    // 		if (!fish || !fish.parent) continue;
    // 		frect = fish.getHitRectangle();
    // 		if (!fish.dead){
    // 			if (this.checkOver(frect, bullet)){
    // 				fish.hp -= this.getBulletHard(bullet);
    // 			}
    // 		}
    // 	}
    // }
    /**
     * 获取子弹伤害
     * @param	bullet
     * @return
     */
    GameView.prototype.getBulletHard = function (bullet) {
        var value = bullet.dataVo.power * Global_1.Global.getInstance().shootPower;
        var ran = Math.random();
        var min = 2;
        var max = 4;
        var bei = 1;
        if (ran > 0.9) {
            bei = min + Math.floor(Math.random() * max);
            // var crit:CritUtils = new CritUtils(bei);
            // this.addChild(crit);
            // crit.pos(bullet.x, bullet.y);
        }
        return value * bei;
    };
    GameView.prototype.checkCanShoot = function (vo) {
        if (this.coinNum.text - vo.power < 0) {
            CustomTips_1.CustomTips.getInstance().AddTip(this, "能量不足!!", "right", true, 100, 100, 300, false, 60, 3);
            laya.media.SoundManager.playSound("res/sound/crit.mp3");
            return false;
        }
        return true;
    };
    /**
     * 创建鱼
     * @param fishNum
     */
    GameView.prototype.createFish = function (fishNum) {
        var fish;
        var ranVal;
        var typeVal = 0;
        for (var i = 0; i < fishNum; i++) {
            ranVal = Math.random();
            if (ranVal > 0 && ranVal <= 0.92) { //0-5
                typeVal = Math.floor(Math.random() * 6);
            }
            else if (!this.hasFish(10) && !this.hasFish(11) && ranVal > 0.92 && ranVal <= 0.94) { //10，11
                typeVal = Math.random() > 0.5 ? 10 : 11;
            }
            else if (!this.hasFish(6) && !this.hasFish(7) && ranVal > 0.94 && ranVal <= 0.96) { //6.7
                typeVal = Math.random() > 0.5 ? 6 : 7;
            }
            else if (!this.hasFish(9) && ranVal > 0.96 && ranVal <= 0.98) { //8，9
                typeVal = 9;
            }
            else if (ranVal > 0.98 && !this.hasFish(8)) {
                typeVal = 8;
            }
            if (typeVal == 9) {
                CustomTips_1.CustomTips.getInstance().AddTip(this, "海底出现鲨鱼，击败它可以获得大量能量哦！！", "warn", true, 100, 100, 300, false, 100, 3);
            }
            else if (typeVal == 8) {
                CustomTips_1.CustomTips.getInstance().AddTip(this, "海豚出现啦！击败它掉落鱼雷哦！鱼雷只存在10秒钟！", "right", true, 100, 100, 300, false, 100, 3);
            }
            else if (typeVal == 6) {
                CustomTips_1.CustomTips.getInstance().AddTip(this, "鳄鱼来了！击败它掉落能量宝箱哦！宝箱只存在10秒钟！", "warn", true, 100, 100, 300, false, 100, 3);
            }
            else if (typeVal == 7) {
                CustomTips_1.CustomTips.getInstance().AddTip(this, "海龟出现！击败它掉落武器增强道具！", "warn", true, 100, 100, 300, false, 100, 3);
            }
            else if (typeVal == 11) {
                CustomTips_1.CustomTips.getInstance().AddTip(this, "灯笼鱼出现！击败它掉落鱼饵，鱼饵可以吸引来鱼群哦！", "warn", true, 100, 100, 300, false, 100, 3);
            }
            fish = FishManager_1.FishManager.getInstance().createFishById(typeVal);
            this.addChild(fish);
            fish.init(Math.random() > 0.5 ? "right" : "left");
            fish.once(FishFather_1.FishFather.getInstance().FISH_DEAD, this, this.fishDead);
            this.fishArr.push(fish);
        }
    };
    GameView.prototype.hasFish = function (val) {
        var fish;
        for (var i = 0; i < this.fishArr.length; i++) {
            fish = this.fishArr[i];
            if (fish.fishVo.id == val) {
                return true;
            }
        }
        return false;
    };
    /**
     * 创建队形
     * @param	flag 0心 1矩形 2菱形 3圆形
     * @param	type 鱼类型
     * @param	dirs 游向 left 向左游
     */
    GameView.prototype.createFishOrder = function (flag, type, dirs) {
        if (flag === void 0) { flag = 0; }
        if (type === void 0) { type = 0; }
        if (dirs === void 0) { dirs = "left"; }
        var pathArr = [];
        var fish;
        var p;
        var newp;
        var xiux = 0;
        var xiuy = 0;
        switch (flag) {
            case 0:
                pathArr = FishManager_1.FishManager.getInstance().heartPathDot();
                if (dirs == "right") {
                    xiux = -600;
                }
                else {
                    xiux = Global_1.Global.getInstance().totalWidth + 600;
                }
                xiuy = 400;
                break;
            case 1:
                pathArr = FishManager_1.FishManager.getInstance().rectPathDot();
                if (dirs == "right") {
                    xiux = -600;
                }
                else {
                    xiux = Global_1.Global.getInstance().totalWidth + 600;
                }
                xiuy = 250;
                break;
            case 2:
                pathArr = FishManager_1.FishManager.getInstance().rhombPathDot();
                if (dirs == "right") {
                    xiux = -600;
                }
                else {
                    xiux = Global_1.Global.getInstance().totalWidth + 600;
                }
                xiuy = 100;
                break;
            case 3:
                pathArr = FishManager_1.FishManager.getInstance().circlePathDot();
                if (dirs == "right") {
                    xiux = -400;
                }
                else {
                    xiux = Global_1.Global.getInstance().totalWidth + 400;
                }
                xiuy = 350;
                break;
        }
        var i = 0;
        for (i = 0; i < pathArr.length; i++) {
            p = pathArr[i];
            newp = new Point(p.x + xiux, p.y + xiuy);
            fish = FishManager_1.FishManager.getInstance().createFishById(type);
            this.addChild(fish);
            fish.init(dirs, newp, true);
            fish.once(FishFather_1.FishFather.getInstance().FISH_DEAD, this, this.fishDead);
            fish.once(FishFather_1.FishFather.getInstance().FISH_DEAD_SELF, this, this.fishDeadSelf);
            this.fishArr.push(fish);
        }
    };
    /**
     * 随机创建鱼群
     * @param	count
     */
    GameView.prototype.createOrder = function (count) {
        if (count === void 0) { count = 6; }
        laya.media.SoundManager.playSound("res/sound/mfish.mp3");
        CustomTips_1.CustomTips.getInstance().AddTip(this, "鱼群来袭!,鱼群中的鱼有双倍奖励哦！", "right", true, 100, 100, 300, false, 100, 3);
        var time = 3000;
        var dir = Math.random() > 0.5 ? "right" : "left";
        var timer;
        var fishtype = Math.floor(Math.random() * 4);
        for (var i = 0; i < count; i++) {
            timer = new laya.utils.Timer();
            timer.once(time + i * 3000, this, function () {
                this.createFishOrder(Math.floor(Math.random() * 4), fishtype, dir);
            });
        }
    };
    /**
     * fish dead
     * @param	fish
     */
    GameView.prototype.fishDead = function (fish) {
        var index = this.fishArr.indexOf(fish);
        this.fishArr.splice(index, 1);
        //队列中的鱼 奖励翻倍 杀死队列中的鱼不创建新鱼
        var val = 1;
        if (fish.isInOrder) {
            val = 2;
        }
        else {
            this.createFish(1);
        }
        CoinManager_1.CoinManager.getInstance().createMoreCoin(fish, this);
        this.coinNum.text = Number(this.coinNum.text) + fish.fishVo.score * val;
        Global_1.Global.getInstance().getPowerNum += fish.fishVo.score * val;
        // lvlSet();
        //掉落鱼雷
        if (fish.fishVo.id == 8) {
            this.createTools(1, fish.x, fish.y);
        }
        else if (fish.fishVo.id == 6) { //掉落宝箱
            this.createTools(2, fish.x, fish.y);
        }
        else if (fish.fishVo.id == 7) { //掉落增强道具
            this.createTools(3, fish.x, fish.y);
        }
        else if (fish.fishVo.id == 11) { //掉落鱼饵
            this.createTools(4, fish.x, fish.y);
        }
    };
    /**
     * 创建道具
     * @param type
     * @param xx
     * @param yy
     */
    GameView.prototype.createTools = function (type, xx, yy) {
        var tool = ToolsManager_1.ToolsManager.getInstance().createToolByType(type);
        tool.once(Tools_1.Tools.getInstance().DEAD_OVER, this, this.deadAnOver);
        tool.pos(xx, yy);
        this.addChild(tool);
    };
    GameView.prototype.deadAnOver = function (tool) {
        if (tool.type == 1) {
            this.killAllFish();
            //闪屏
            var timeline = new TimeLine();
            timeline
                .addLabel("right", 0).to(this, { alpha: 0.1 }, 80)
                .addLabel("left", 0).to(this, { alpha: 1 }, 80)
                .addLabel("right2", 0).to(this, { alpha: 0.1 }, 80)
                .addLabel("left2", 0).to(this, { alpha: 1 }, 80)
                .addLabel("right3", 0).to(this, { alpha: 0.1 }, 80)
                .addLabel("left3", 0).to(this, { alpha: 1 }, 80);
            timeline.play(0, false);
            timeline.once(Laya.Event.COMPLETE, this, function () {
                timeline.destroy();
                Global_1.Global.getInstance().ISPAUSE = false;
                this.alpha = 1;
            });
            SoundManager.playSound("res/sound/boom.wav");
        }
        else if (tool.type == 2) { //宝箱
            Global_1.Global.getInstance().ISPAUSE = false;
            CoinManager_1.CoinManager.getInstance().addCoin(500, "coin", tool.x, tool.y, this);
            Global_1.Global.getInstance().getPowerNum += 500;
            this.coinNum.text = Number(this.coinNum.text) + 500;
        }
        else if (tool.type == 3) { //武器道具
            Global_1.Global.getInstance().ISPAUSE = false;
            //startEffect();
            this.cannon.strongTime = 20;
            CustomTips_1.CustomTips.getInstance().AddTip(this, "武器增强！！", "warn", true, 100, 100, 300, false, 100, 3);
            SoundManager.playSound("res/sound/bullet_power.mp3");
        }
        else if (tool.type == 4) { //鱼饵
            Global_1.Global.getInstance().ISPAUSE = false;
            this.createOrder();
        }
    };
    GameView.prototype.killAllFish = function () {
        var fish;
        for (var i = 0; i < this.fishArr.length; i++) {
            fish = this.fishArr[i];
            fish.hp = 0;
        }
    };
    /**
     * 鱼自己死亡
     * @param	fish
     */
    GameView.prototype.fishDeadSelf = function (fish) {
        var index = this.fishArr.indexOf(fish);
        this.fishArr.splice(index, 1);
    };
    return GameView;
}(layaMaxUI_1.ui.GameViewUI));
exports.GameView = GameView;
},{"../Global":2,"../data/DataProxy":5,"../element/bullet/BulletFather":8,"../element/bullet/BulletManager":9,"../element/cannon/CannonFather":10,"../element/cannon/CannonManager":11,"../element/coin/CoinManager":13,"../element/fish/FishFather":14,"../element/fish/FishManager":15,"../element/tools/Tools":16,"../element/tools/ToolsManager":17,"../ui/layaMaxUI":18,"../util/tips/CustomTips":19}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("../ui/layaMaxUI");
var Tween = laya.utils.Tween;
var Ease = laya.utils.Ease;
var LoadingView = /** @class */ (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        var _this = _super.call(this) || this;
        _this.start = _this.getChildByName("start");
        _this.dot = _this.getChildByName("dot");
        _this.tw = 360;
        _this.init();
        return _this;
    }
    LoadingView.getInstance = function () {
        if (this.instance == null) {
            this.instance = new LoadingView();
        }
        return this.instance;
    };
    LoadingView.prototype.init = function () {
        this.start.visible = false;
        this.start.once(Laya.Event.CLICK, this, this.startHand);
    };
    LoadingView.prototype.startHand = function () {
        Tween.to(this, { alpha: 0 }, 120, Ease.strongOut, Laya.Handler.create(this, function () {
            this.event("startgame");
        }));
    };
    LoadingView.prototype.setData = function (val) {
        this.dot.width = val * this.tw;
        if (val >= 1) {
            this.start.visible = true;
        }
    };
    return LoadingView;
}(layaMaxUI_1.ui.LoadingViewUI));
exports.LoadingView = LoadingView;
},{"../ui/layaMaxUI":18}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0xheWEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0dhbWUudHMiLCJzcmMvR2xvYmFsLnRzIiwic3JjL2RhdGEvQW5hbHlzaXNYTUwudHMiLCJzcmMvZGF0YS9CdWxsZXRWby50cyIsInNyYy9kYXRhL0RhdGFQcm94eS50cyIsInNyYy9kYXRhL0RpY3Rpb25hcnkudHMiLCJzcmMvZGF0YS9GaXNoVm8udHMiLCJzcmMvZWxlbWVudC9idWxsZXQvQnVsbGV0RmF0aGVyLnRzIiwic3JjL2VsZW1lbnQvYnVsbGV0L0J1bGxldE1hbmFnZXIudHMiLCJzcmMvZWxlbWVudC9jYW5ub24vQ2Fubm9uRmF0aGVyLnRzIiwic3JjL2VsZW1lbnQvY2Fubm9uL0Nhbm5vbk1hbmFnZXIudHMiLCJzcmMvZWxlbWVudC9jb2luL0NvaW4udHMiLCJzcmMvZWxlbWVudC9jb2luL0NvaW5NYW5hZ2VyLnRzIiwic3JjL2VsZW1lbnQvZmlzaC9GaXNoRmF0aGVyLnRzIiwic3JjL2VsZW1lbnQvZmlzaC9GaXNoTWFuYWdlci50cyIsInNyYy9lbGVtZW50L3Rvb2xzL1Rvb2xzLnRzIiwic3JjL2VsZW1lbnQvdG9vbHMvVG9vbHNNYW5hZ2VyLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyIsInNyYy91dGlsL3RpcHMvQ3VzdG9tVGlwcy50cyIsInNyYy91dGlsL3RpcHMvVGlwc0RhdGEudHMiLCJzcmMvdmlldy9HYW1lVmlldy50cyIsInNyYy92aWV3L0xvYWRpbmdWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBLGtEQUFpRDtBQUVqRCw0Q0FBMEM7QUFDMUMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM1QixrREFBaUQ7QUFFakQ7SUFnQkk7UUFQUSxRQUFH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S0FBSyxFQUFDO1lBQ3ZELEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQztZQUV2RSxRQUFRO1lBQ2hCLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3pFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUV6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRXpFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3pFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUV6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRXpFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3pFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUV6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRXpFLEVBQUMsR0FBRyxFQUFFLDBDQUEwQyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxRSxFQUFDLEdBQUcsRUFBRSwwQ0FBMEMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFMUUsRUFBQyxHQUFHLEVBQUUsMENBQTBDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzFFLEVBQUMsR0FBRyxFQUFFLDBDQUEwQyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUUxRSxFQUFDLEdBQUcsRUFBRSwwQ0FBMEMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDOUQsRUFBQyxHQUFHLEVBQUUsMENBQTBDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRTFFLE1BQU07WUFDbEIsRUFBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFckQsSUFBSTtZQUNKLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRWhFLE1BQU07WUFDTixFQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUVyRCxJQUFJO1lBQ0osRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFL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YUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTtRQUVE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QUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsTUFBTTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENB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QU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLHdDQUF3QyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsc0NBQXNDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxzQkFBc0IsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxnQ0FBZ0MsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsZ0NBQWdDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxvQkFBb0IsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsdUNBQXVDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFD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LENBQUMsQ0FBQSxLQUFLO1NBQ3hEO2FBQUk7WUFDSixJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQVUsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsR0FBVSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNsRCxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBLEtBQUs7WUFDaEQsRUFBRSxHQUFHLENBQUMsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO1lBRVosRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFB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QyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBRU0sNkJBQU8sR0FBZCxVQUFlLEdBQVU7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0IsSUFBRyxHQUFHLElBQUksQ0FBQyxFQUFDO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQ2dDLGNBQUUsQ0FBQyxhQUFhLEdBbUNoRDtBQW5DWSxrQ0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBMb2FkaW5nVmlldyB9IGZyb20gXCIuL3ZpZXcvTG9hZGluZ1ZpZXdcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcclxuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi92aWV3L0dhbWVWaWV3XCJcclxuaW1wb3J0IExvYWRlciA9IExheWEuTG9hZGVyO1xyXG5pbXBvcnQgeyBBbmFseXNpc1hNTCB9IGZyb20gXCIuL2RhdGEvQW5hbHlzaXNYTUxcIjtcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1le1xyXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkdhbWU7XHJcblx0cHVibGljIExkOkxvYWRpbmdWaWV3O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkdhbWUge1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVzOkFycmF5PGFueT4gPSBbXHJcbiAgICAgICAge3VybDpcInJlcy9hdGxhcy9pbWcuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBU30sXHJcbiAgICAgICAge3VybDpcInJlcy9hdGxhcy9pbWcucG5nXCIsIHR5cGU6TGF5YS5Mb2FkZXIuSU1BR0V9LFxyXG4gICAgICAgIHt1cmw6XCJyZXMvYXRsYXMvbG9hZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTfSxcclxuICAgICAgICB7dXJsOlwicmVzL2F0bGFzL2xvYWQucG5nXCIsIHR5cGU6TGF5YS5Mb2FkZXIuSU1BR0V9LFxyXG4gICAgICAgIHt1cmw6XCJsb2FkL2xhZGluZ19iZzEucG5nXCIsIHR5cGU6TGF5YS5Mb2FkZXIuSU1BR0V9XHJcbiAgICBdXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIExheWEuaW5pdCgxMjgwLCA3MjAsIExheWEuV2ViR0wpO1xyXG5cclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IFwic2hvd2FsbFwiO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBcImhvcml6b250YWxcIjtcclxuXHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZCh0aGlzLnJlcywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uTG9hZGVkKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZGVkKCl7XHJcblx0XHR0aGlzLkxkID0gbmV3IExvYWRpbmdWaWV3KCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuTGQpO1xyXG5cdFx0dGhpcy5MZC5vbmNlKFwic3RhcnRnYW1lXCIsIHRoaXMsIHRoaXMuc3RhcnRHYW1lKTtcclxuXHRcdExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhcIi4vcmVzL3NvdW5kL0hhbGxTY2VuZS5tcDNcIik7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZE90aGVyQXNzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRPdGhlckFzc2V0KCl7XHJcbiAgICAgICAgdmFyIGFzc2V0czpBcnJheTxhbnk+ID0gW1xyXG4gICAgICAgICAgICAvLy/liqDovb3lrZDlvLnntKDmnZBcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2J1bGxldC9idWxsZXQxLmF0bGFzXCIsdHlwZTpMYXlhLkxvYWRlci5BVExBU30sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9idWxsZXQvYnVsbGV0Mi5hdGxhc1wiLHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvYnVsbGV0L2J1bGxldDMuYXRsYXNcIix0eXBlOkxheWEuTG9hZGVyLkFUTEFTfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2J1bGxldC9idWxsZXQ0LmF0bGFzXCIsdHlwZTpMYXlhLkxvYWRlci5BVExBU30sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9idWxsZXQvYnVsbGV0NS5hdGxhc1wiLHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvYnVsbGV0L2J1bGxldDYuYXRsYXNcIix0eXBlOkxheWEuTG9hZGVyLkFUTEFTfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2J1bGxldC9idWxsZXQ3LmF0bGFzXCIsdHlwZTpMYXlhLkxvYWRlci5BVExBU30sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9idWxsZXQvYnVsbGV0OC5hdGxhc1wiLHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG4gICAgICAgICAgICAgICAge3VybDogXCJyZXMvYXRsYXMvZmlzaC9idWxsZXQvYnVsbGV0OS5hdGxhc1wiLHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vL+mxvOWKqOeUu+i1hOa6kFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMS9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gyL2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMi9kZWFkLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDMvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gzL2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNC9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDQvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g1L2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNS9kZWFkLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDYvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g2L2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNy9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDcvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g4L2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoOC9kZWFkLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDkvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g5L2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTAvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxMC9kZWFkLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDExL2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTEvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxMi9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuICAgICAgICAgICAgICAgIHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTIvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vdGlwc1xyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvdGlwLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/lpKfngq5cclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub24xLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uMi5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvY2Fubm9uL2Nhbm5vbjMuYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub240LmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uNS5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvY2Fubm9uL2Nhbm5vbjYuYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub243LmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/lhbbku5bntKDmnZBcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2ltZy5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v5rW36Je7XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9zZWF3ZWVkL3NlYXdlZWQxLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9zZWF3ZWVkL3NlYXdlZWQyLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9zZWF3ZWVkL3NlYXdlZWQzLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9zZWF3ZWVkL3NlYXdlZWQ0LmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/ph5HluIFcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL21vbmV5L2NvaW4uYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL21vbmV5L3NpbHZlci5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v6YGT5YW3XHJcblx0XHRcdFx0Ly/ngrjlvLlcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL3Rvb2xzL2Jvb20uYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL3Rvb2xzLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/nibnmlYhcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2VmZmVjdC9mbGFzaC5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vL+mxvOaVsOaNrnhtbFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL3htbC9maXNoLnhtbFwiLHR5cGU6TG9hZGVyLlhNTH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMveG1sL2J1bGxldC54bWxcIix0eXBlOkxvYWRlci5YTUx9LFxyXG5cdFx0XVxyXG5cdFx0TGF5YS5sb2FkZXIubG9hZChhc3NldHMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5sb2FkQ29tcyksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MsbnVsbCxmYWxzZSkpO1xyXG5cdH1cclxuXHRcclxuXHRwcml2YXRlIGxvYWRDb21zKCl7XHJcblx0XHRBbmFseXNpc1hNTC5nZXRJbnN0YW5jZSgpLmFuYWx5c2lzRmlzaERhdGEoKTtcclxuXHRcdEFuYWx5c2lzWE1MLmdldEluc3RhbmNlKCkuYW5hbHlzaXNCdWxsZXREYXRhKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRQcm9ncmVzcyh2YWw6bnVtYmVyKXtcclxuXHRcdGlmKHRoaXMuTGQpe1xyXG5cdFx0XHR0aGlzLkxkLnNldERhdGEodmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0R2FtZSgpe1xyXG4gICAgICAgIExheWEuc3RhZ2UucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgR3Y6R2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoKTtcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQoR3YpO1xyXG5cdFx0TGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKFwiLi9yZXMvc291bmQvRmlzaE1hdHJpeC5tcDNcIik7XHJcbiAgICB9XHJcbn1cclxudmFyIGdhbWU6R2FtZSA9IG5ldyBHYW1lKCk7IiwiZXhwb3J0IGNsYXNzIEdsb2JhbCBcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6R2xvYmFsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkdsb2JhbCB7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHbG9iYWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB0b3RhbFdpZHRoOm51bWJlciA9IDEyODA7Ly/mgLvlrr3luqZcclxuICAgIHB1YmxpYyB0b3RhbEhlaWdodDpudW1iZXIgPSA3MDA7Ly/mgLvplb/luqZcclxuICAgIHB1YmxpYyBib3R0b21TcGFjZTpudW1iZXIgPSA1MDsvL+i3neemu+W6lemDqOepuumamVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYnVsbGV0TW92ZVNwZWVkOm51bWJlciA9IDE1Oy8v5a2Q5by556e75Yqo6YCf5bqmXHJcbiAgICBwdWJsaWMgSVNQQVVTRTpCb29sZWFuID0gZmFsc2U7Ly/mmK/lkKbmmoLlgZxcclxuICAgIHB1YmxpYyBJU09WRVI6Qm9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm57uT5p2fXHJcbiAgICBcclxuICAgIC8v5a2Q5by55L+u5q2j5YC8XHJcbiAgICBwdWJsaWMgYnVsbGV0T25lVmFsdWU6bnVtYmVyID0gNDA7XHJcbiAgICBwdWJsaWMgYnVsbGV0T3RoZXJWYWx1ZTpudW1iZXIgPSAxNjA7XHJcbiAgICBcclxuICAgIHB1YmxpYyB0b3RhbEZpc2hOdW06bnVtYmVyID0gMzA7Ly/lsY/luZXkuK3mnIDlpJpmaXNoXHJcbiAgICBcclxuICAgIHB1YmxpYyB0b3RhbFNvY3JlOm51bWJlciA9IDEwMDA7Ly/liJ3lp4vmgLvliIbmlbBcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbHZsbnVtOm51bWJlciA9IDE7Ly/lvZPliY3nmoTlhbPljaFcclxuICAgIHB1YmxpYyBnZXQgbHZsbnVtKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sdmxudW07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGx2bG51bSh2YWw6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9sdmxudW0gPSB2YWw7XHJcbiAgICAgICAgdGhpcy5fbHZsbnVtID0gTWF0aC5taW4odGhpcy5fbHZsbnVtLCA0MCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sdmxBZGRWYWx1ZSA9IDEgKyB0aGlzLl9sdmxudW0gKiAwLjA1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgbHZsQWRkVmFsdWU6bnVtYmVyID0gMDsvL+WFs+WNoeWinuWKoOmAn+W6puezu+aVsFxyXG4gICAgcHVibGljIGdldFBvd2VyTnVtOm51bWJlciA9IDA7Ly/ojrflj5bliLDnmoTog73ph49cclxuICAgIFxyXG4gICAgcHVibGljIHNob290SW50ZXJUaW1lOm51bWJlciA9IDE7Ly/lrZDlvLnlj5HlsITpl7TpmpQgXHJcbiAgICBwdWJsaWMgc2hvb3RQb3dlcjpudW1iZXIgPSAxOy8v5a2Q5by55aiB5YqbICAgIFxyXG59IiwiaW1wb3J0IHsgRmlzaFZvIH0gZnJvbSBcIi4vRmlzaFZvXCI7XHJcbmltcG9ydCB7IERhdGFQcm94eSB9IGZyb20gXCIuL0RhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBCdWxsZXRWbyB9IGZyb20gXCIuL0J1bGxldFZvXCI7XHJcbmV4cG9ydCBjbGFzcyBBbmFseXNpc1hNTHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkFuYWx5c2lzWE1MO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkFuYWx5c2lzWE1Me1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQW5hbHlzaXNYTUwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBhbmFseXNpc0Zpc2hEYXRhKCl7XHJcbiAgICAgICAgdmFyIGZpc2hMaXN0OkFycmF5PGFueT4gPSBbXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIuWwj+S4kemxvFwiLFwiaWRcIjowLFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDEyXFxsaXZlLmF0bGFzXCIsXCJkZWFkVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoMTJcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6MSxcImJsb29kX21pblwiOjIsXCJibG9vZF9NYXhcIjoyLFwic2NvcmVcIjo1LFwic3BlZWRcIjo0LFwiaGl0VmFsdWVcIjoxfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOlwi6Jy76JyT6bG8XCIsXCJpZFwiOjEsXCJsaXZlVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoOFxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDhcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6MSxcImJsb29kX21pblwiOjQsXCJibG9vZF9NYXhcIjo0LFwic2NvcmVcIjo5LFwic3BlZWRcIjo0LFwiaGl0VmFsdWVcIjoxfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOlwi6buE6bG8XCIsXCJpZFwiOjIsXCJsaXZlVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoNVxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDVcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6MSxcImJsb29kX21pblwiOjUsXCJibG9vZF9NYXhcIjoxMCxcInNjb3JlXCI6OCxcInNwZWVkXCI6NSxcImhpdFZhbHVlXCI6MX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIueDreW4pumxvFwiLFwiaWRcIjozLFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDlcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2g5XFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjEsXCJibG9vZF9taW5cIjo0LFwiYmxvb2RfTWF4XCI6MTIsXCJzY29yZVwiOjIwLFwic3BlZWRcIjo1LFwiaGl0VmFsdWVcIjoxfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOlwi6YeR5p6q6bG8XCIsXCJpZFwiOjQsXCJsaXZlVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoN1xcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDdcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6MSxcImJsb29kX21pblwiOjIwLFwiYmxvb2RfTWF4XCI6NDAsXCJzY29yZVwiOjMwLFwic3BlZWRcIjozLFwiaGl0VmFsdWVcIjoxMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIuawtOavjVwiLFwiaWRcIjo1LFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDEwXFxsaXZlLmF0bGFzXCIsXCJkZWFkVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoMTBcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6MixcImJsb29kX21pblwiOjIwLFwiYmxvb2RfTWF4XCI6MzAsXCJzY29yZVwiOjMwLFwic3BlZWRcIjoyLFwiaGl0VmFsdWVcIjoxMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIumzhOmxvFwiLFwiaWRcIjo2LFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDJcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gyXFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjMsXCJibG9vZF9taW5cIjoyMDAsXCJibG9vZF9NYXhcIjozMDAsXCJzY29yZVwiOjUwLFwic3BlZWRcIjo4LFwiaGl0VmFsdWVcIjoyMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIuWkp+S5jOm+n1wiLFwiaWRcIjo3LFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDExXFxsaXZlLmF0bGFzXCIsXCJkZWFkVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoMTFcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6MyxcImJsb29kX21pblwiOjMwMCxcImJsb29kX01heFwiOjQwMCxcInNjb3JlXCI6NjAsXCJzcGVlZFwiOjEuNSxcImhpdFZhbHVlXCI6MjB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCLmtbfosZpcIixcImlkXCI6OCxcImxpdmVVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2g0XFxsaXZlLmF0bGFzXCIsXCJkZWFkVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoNFxcZGVhZC5hdGxhc1wiLFwiZ3JhZGVcIjo1LFwiYmxvb2RfbWluXCI6NDUwLFwiYmxvb2RfTWF4XCI6NjAwLFwic2NvcmVcIjoyNTAsXCJzcGVlZFwiOjEsXCJoaXRWYWx1ZVwiOjIwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOlwi6bK46bG8XCIsXCJpZFwiOjksXCJsaXZlVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoNlxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDZcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6NCxcImJsb29kX21pblwiOjQwMCxcImJsb29kX01heFwiOjUwMCxcInNjb3JlXCI6MjAwLFwic3BlZWRcIjowLjUsXCJoaXRWYWx1ZVwiOjUwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOlwi5rW36IOG6bG8XCIsXCJpZFwiOjEwLFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDNcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gzXFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjQsXCJibG9vZF9taW5cIjo5MCxcImJsb29kX01heFwiOjIzMCxcInNjb3JlXCI6NDUsXCJzcGVlZFwiOjEsXCJoaXRWYWx1ZVwiOjV9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCLnga/nrLzpsbxcIixcImlkXCI6MTEsXCJsaXZlVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoMVxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDFcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6NCxcImJsb29kX21pblwiOjEwMCxcImJsb29kX01heFwiOjIwMCxcInNjb3JlXCI6NDAsXCJzcGVlZFwiOjEsXCJoaXRWYWx1ZVwiOjV9XHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBmaXNoTGlzdC5sZW5ndGg7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBub2RlOmFueSA9IGZpc2hMaXN0W2ldO1xyXG5cdFx0XHRcdHZhciBmaXNoVm8gPSBuZXcgRmlzaFZvO1x0XHRcclxuICAgICAgICAgICAgICAgIGZpc2hWby5uYW1lPW5vZGVbXCJuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgZmlzaFZvLmlkPW5vZGVbXCJpZFwiXTtcclxuICAgICAgICAgICAgICAgIGZpc2hWby5saXZlVXJsPW5vZGVbXCJsaXZlVXJsXCJdO1xyXG4gICAgICAgICAgICAgICAgZmlzaFZvLmRlYWRVcmw9bm9kZVtcImRlYWRVcmxcIl07XHJcbiAgICAgICAgICAgICAgICBmaXNoVm8uZ3JhZGU9bm9kZVtcImdyYWRlXCJdO1xyXG4gICAgICAgICAgICAgICAgZmlzaFZvLmJsb29kX21pbj1ub2RlW1wiYmxvb2RfbWluXCJdO1xyXG4gICAgICAgICAgICAgICAgZmlzaFZvLmJsb29kX01heD1ub2RlW1wiYmxvb2RfTWF4XCJdO1xyXG4gICAgICAgICAgICAgICAgZmlzaFZvLnNjb3JlPW5vZGVbXCJzY29yZVwiXTtcclxuICAgICAgICAgICAgICAgIGZpc2hWby5zcGVlZD1ub2RlW1wic3BlZWRcIl07XHJcbiAgICAgICAgICAgICAgICBmaXNoVm8uaGl0VmFsdWU9bm9kZVtcImhpdFZhbHVlXCJdO1xyXG4gICAgICAgICAgICAgICAgRGF0YVByb3h5LmdldEluc3RhbmNlKCkuZmlzaERhdGFEaWMuc2V0KGZpc2hWby5pZCwgZmlzaFZvKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAgYW5hbHlzaXNCdWxsZXREYXRhKCk6dm9pZCB7XHJcbiAgICAgICAgdmFyIGJ1bGxldExpc3Q6QXJyYXk8YW55PiA9IFtcclxuICAgICAgICAgICAge1widHlwZVwiOjEsIFwicG93ZXJSYWRpdXNcIjoxMCwgXCJib29tUmFkaXVzXCI6MjAsIFwic3BlZWRcIjoxNSwgXCJwb3dlclwiOjF9LFxyXG4gICAgICAgICAgICB7XCJ0eXBlXCI6MiwgXCJwb3dlclJhZGl1c1wiOjEwLCBcImJvb21SYWRpdXNcIjo3NSwgXCJzcGVlZFwiOjE1LCBcInBvd2VyXCI6Mn0sXHJcbiAgICAgICAgICAgIHtcInR5cGVcIjozLCBcInBvd2VyUmFkaXVzXCI6MTAsIFwiYm9vbVJhZGl1c1wiOjc1LCBcInNwZWVkXCI6MTUsIFwicG93ZXJcIjozfSxcclxuICAgICAgICAgICAge1widHlwZVwiOjQsIFwicG93ZXJSYWRpdXNcIjoxMCwgXCJib29tUmFkaXVzXCI6NzUsIFwic3BlZWRcIjoxNSwgXCJwb3dlclwiOjR9LFxyXG4gICAgICAgICAgICB7XCJ0eXBlXCI6NSwgXCJwb3dlclJhZGl1c1wiOjEwLCBcImJvb21SYWRpdXNcIjo3NSwgXCJzcGVlZFwiOjE1LCBcInBvd2VyXCI6NX0sXHJcbiAgICAgICAgICAgIHtcInR5cGVcIjo2LCBcInBvd2VyUmFkaXVzXCI6MTAsIFwiYm9vbVJhZGl1c1wiOjc1LCBcInNwZWVkXCI6MTUsIFwicG93ZXJcIjo2fSxcclxuICAgICAgICAgICAge1widHlwZVwiOjcsIFwicG93ZXJSYWRpdXNcIjoxMCwgXCJib29tUmFkaXVzXCI6NzUsIFwic3BlZWRcIjoxNSwgXCJwb3dlclwiOjd9LFxyXG4gICAgICAgIF1cclxuICAgICAgICBmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBidWxsZXRMaXN0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG5vZGU6YW55ID0gYnVsbGV0TGlzdFtpXTtcclxuICAgICAgICAgICAgdmFyIGJ1bGxldFZvID0gbmV3IEJ1bGxldFZvKCk7XHJcbiAgICAgICAgICAgIGJ1bGxldFZvLnR5cGUgPSBub2RlW1widHlwZVwiXTtcclxuICAgICAgICAgICAgYnVsbGV0Vm8ucG93ZXJSYWRpdXMgPSBub2RlW1wicG93ZXJSYWRpdXNcIl07XHJcbiAgICAgICAgICAgIGJ1bGxldFZvLmJvb21SYWRpdXMgPSBub2RlW1wiYm9vbVJhZGl1c1wiXTtcclxuICAgICAgICAgICAgYnVsbGV0Vm8uc3BlZWQgPSBub2RlW1wic3BlZWRcIl07XHJcbiAgICAgICAgICAgIGJ1bGxldFZvLnBvd2VyID0gbm9kZVtcInBvd2VyXCJdO1xyXG4gICAgICAgICAgICBEYXRhUHJveHkuZ2V0SW5zdGFuY2UoKS5idWxsZXREYXRhRGljLnNldChidWxsZXRWby50eXBlLCBidWxsZXRWbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEJ1bGxldFZve1xyXG4gICAgcHVibGljIHR5cGU6bnVtYmVyO1xyXG4gICAgcHVibGljIHBvd2VyUmFkaXVzOm51bWJlcjtcclxuICAgIHB1YmxpYyBib29tUmFkaXVzOm51bWJlcjtcclxuICAgIHB1YmxpYyBzcGVlZDpudW1iZXI7XHJcbiAgICBwdWJsaWMgcG93ZXI6bnVtYmVyO1xyXG59IiwiaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gXCIuL0RpY3Rpb25hcnlcIlxyXG5pbXBvcnQgeyBGaXNoVm8gfSBmcm9tIFwiLi9GaXNoVm9cIjtcclxuaW1wb3J0IHsgQnVsbGV0Vm8gfSBmcm9tIFwiLi9CdWxsZXRWb1wiO1xyXG5leHBvcnQgY2xhc3MgRGF0YVByb3h5e1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6RGF0YVByb3h5ID0gbnVsbDtcclxuICAgIHB1YmxpYyBmaXNoRGF0YURpYzpEaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnkoKTtcclxuICAgIHB1YmxpYyBidWxsZXREYXRhRGljOkRpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkRhdGFQcm94eVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IERhdGFQcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcbiAgICAvL+mxvOebuOWFs+aVsOaNrlxyXG4gICAgcHVibGljIGdldERhdGFCeUlkKGlkOm51bWJlcik6RmlzaFZvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maXNoRGF0YURpYy5nZXQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYnVsbGV0IGRhdGFcclxuICAgIHB1YmxpYyBnZXREYXRhQnlUeXBlKHR5cGU6bnVtYmVyKTpCdWxsZXRWbyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsbGV0RGF0YURpYy5nZXQodHlwZSk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbn0iLCJleHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XHJcbiAgICBwcml2YXRlICBfdmFsdWVzOkFycmF5PGFueT4gPSBbXTtcclxuICAgIHByaXZhdGUgIF9rZXlzOkFycmF5PGFueT4gPSBbXTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInnmoTlrZDlhYPntKDliJfooajjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB2YWx1ZXMoKTpBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOacieeahOWtkOWFg+e0oOmUruWQjeWIl+ihqOOAglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleXMoKTpBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5nmjIflrprnmoTplK7lkI3orr7nva7lgLzjgIJcclxuICAgICAqIEBwYXJhbSAgIGtleSDplK7lkI3jgIJcclxuICAgICAqIEBwYXJhbSAgIHZhbHVlIOWAvOOAglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0KGtleTphbnksIHZhbHVlOmFueSk6dm9pZCB7XHJcbiAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IHRoaXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9rZXlzLnB1c2goa2V5KTtcclxuICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a5a+56LGh55qE6ZSu5ZCN57Si5byV44CCXHJcbiAgICAgKiBAcGFyYW0gICBrZXkg6ZSu5ZCN5a+56LGh44CCXHJcbiAgICAgKiBAcmV0dXJuIOmUruWQjee0ouW8leOAglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5kZXhPZihrZXk6T2JqZWN0KTpudW1iZXIge1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgIC8vIGtleSA9ICh0eXBlb2Yoa2V5KSBTdHJpbmcpID8gTnVtYmVyKGtleSkgOiAoKGtleSBpcyBOdW1iZXIpID8ga2V5LnRvU3RyaW5nKCkgOiBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57mjIflrprplK7lkI3nmoTlgLzjgIJcclxuICAgICAqIEBwYXJhbSAgIGtleSDplK7lkI3lr7nosaHjgIJcclxuICAgICAqIEByZXR1cm4g5oyH5a6a6ZSu5ZCN55qE5YC844CCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQoa2V5OmFueSk6YW55IHtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4IDwgMCA/IG51bGwgOiB0aGlzLl92YWx1ZXNbaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOenu+mZpOaMh+WumumUruWQjeeahOWAvOOAglxyXG4gICAgICogQHBhcmFtICAga2V5IOmUruWQjeWvueixoeOAglxyXG4gICAgICogQHJldHVybiDmmK/lkKbmiJDlip/np7vpmaTjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZShrZXk6YW55KTpCb29sZWFuIHtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTmraTlr7nosaHnmoTplK7lkI3liJfooajlkozplK7lgLzliJfooajjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGaXNoVm97XHJcbiAgICBwdWJsaWMgaWQ6bnVtYmVyID0gMDsvL2lkXHJcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmcgPSBcIlwiOy8v6bG85ZCN5a2XXHJcbiAgICBwdWJsaWMgZ3JhZGU6bnVtYmVyID0gMDsvL+etiee6p1xyXG4gICAgcHVibGljIHNjb3JlOm51bWJlciA9IDA7Ly/lvpfliIZcclxuICAgIHB1YmxpYyBzcGVlZDpudW1iZXIgPSAwOy8v6YCf5bqmXHJcbiAgICBwdWJsaWMgYmxvb2RfbWluOm51bWJlciA9IDAgOy8v5pyA5bCP6KGAXHJcbiAgICBwdWJsaWMgYmxvb2RfTWF4Om51bWJlciA9IDA7Ly/mnIDlpKfooYBcclxuICAgIHB1YmxpYyBsaXZlVXJsOnN0cmluZyA9IFwiXCI7Ly/muLjliqjliqjnlLvot6/lvoRcclxuICAgIHB1YmxpYyBkZWFkVXJsOnN0cmluZyA9IFwiXCI7Ly/mrbvkuqHliqjnlLvot6/lvoRcclxuICAgIHB1YmxpYyBoaXRWYWx1ZTpudW1iZXIgPSAwOy8v56Kw5pKe5Yy65Z+f5L+u5q2j5YC8XHJcbiAgICBcclxuICAgIHB1YmxpYyBmaXNoSW5mbzpzdHJpbmcgPSBcIlwiOy8v57yT5a2Y5qCH6K+GXHJcbiAgICBwdWJsaWMgbGV2ZUFuOnN0cmluZyA9IFwiXCI7Ly/nprvlvIDliqjnlLtcclxuICAgIHB1YmxpYyBkZWFkQW46c3RyaW5nID0gXCJcIjsvL+atu+S6oeWKqOeUu1xyXG59IiwiaW1wb3J0IEFuaW1hdGlvbiA9IGxheWEuZGlzcGxheS5BbmltYXRpb247XHJcbmltcG9ydCBQb2ludCA9IGxheWEubWF0aHMuUG9pbnQ7XHJcbmltcG9ydCB7IEJ1bGxldFZvIH0gZnJvbSBcIi4uLy4uL2RhdGEvQnVsbGV0Vm9cIjtcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0dsb2JhbFwiO1xyXG5leHBvcnQgY2xhc3MgQnVsbGV0RmF0aGVyIGV4dGVuZHMgTGF5YS5TcHJpdGV7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpCdWxsZXRGYXRoZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6QnVsbGV0RmF0aGVye1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQnVsbGV0RmF0aGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBCT09NX0NPTTpzdHJpbmcgPSBcImJvb21fY29tXCI7Ly/niIbngrjnu5PmnZ/vvIzlnKjlgZrkuIDmrKHnorDmkp7mo4DmtYtcclxuICAgIHByaXZhdGUgX3R5cGU6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBoYXJtOm51bWJlcjsvL+S8pOWus1xyXG4gICAgcHVibGljIGhpdFJhZGl1czpudW1iZXI7Ly/norDmkp7ljYrlvoRcclxuICAgIHB1YmxpYyBkZWFkZWQ6Qm9vbGVhbiA9IGZhbHNlOy8v5a2Q5by55piv5ZCm5a2Y5rS7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaWduOnN0cmluZyA9IFwiXCI7Ly/lrZDlvLnnsbvlnovmoIfor4ZcclxuICAgIHB1YmxpYyBmbHlBbjpzdHJpbmcgPSBcIlwiOy8v6aOe6KGMXHJcbiAgICBwdWJsaWMgYm9vbUFuOnN0cmluZyA9IFwiXCI7Ly/niIbngrhcclxuICAgIFxyXG4gICAgcHVibGljIHNlbGZXaWR0aDpudW1iZXIgPSAwOy8v5YaF5a655a696auYXHJcbiAgICBwdWJsaWMgc2VsZkhlaWdodDpudW1iZXIgPSAwO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uQm9keTpBbmltYXRpb247Ly/liqjnlLvlrrnlmahcclxuICAgIHB1YmxpYyBkYXRhVm86QnVsbGV0Vm87Ly/lvZPliY3nsbvlnovlrZDlvLnnm7jlhbPmlbDmja5cclxuICAgIHB1YmxpYyBoaXRQb2ludDpQb2ludCA9IG5ldyBQb2ludCgpOy8v56Kw5pKe5Lit5b+D54K577yI5bGA6YOo5Z2Q5qCHXHJcbiAgICBwdWJsaWMgaXNIaXRGaXNoOkJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpueisOWIsOmxvFxyXG4gICAgcHVibGljIGlzSGl0VG9vbDpCb29sZWFuID0gZmFsc2U7Ly/mmK/lkKbnorDmkp7liLDpgZPlhbdcclxuXHJcbiAgICBwcml2YXRlIHRlbXBBbmdsZTpudW1iZXIgPSAwOy8v5Li05pe26K6w5b2V6KeS5bqmXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXREYXRhKCl7fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdFZpZXcoKXtcclxuICAgICAgICBpZighdGhpcy5hbmltYXRpb25Cb2R5KXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5ID0gbmV3IEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYW5pbWF0aW9uQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RXZlbnQoKXt9XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWw6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl90eXBlID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5wbGF5KDAsIGZhbHNlLCB0aGlzLmZseUFuKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkueCA9IC0odGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLndpZHRoIC8gMik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnkgPSAtdGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLmhlaWdodCsxMDA7XHJcbiAgICAgICAgdGhpcy5zZWxmV2lkdGggPSB0aGlzLmFuaW1hdGlvbkJvZHkuZ2V0Qm91bmRzKCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zZWxmSGVpZ2h0ID0gdGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLmhlaWdodDsvL+S4reW/g+eCueS/ruato1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGl0UmFkaXVzID0gdGhpcy5kYXRhVm8ucG93ZXJSYWRpdXM7XHJcbiAgICAgICAgdGhpcy5zZXRIaXRQb2ludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIaXRQb2ludCgpe1xyXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5oaXRQb2ludC5zZXRUbygwLCB0aGlzLmFuaW1hdGlvbkJvZHkueSArIEdsb2JhbC5nZXRJbnN0YW5jZSgpLmJ1bGxldE9uZVZhbHVlLzIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmhpdFBvaW50LnNldFRvKDAsIHRoaXMuYW5pbWF0aW9uQm9keS55ICsgR2xvYmFsLmdldEluc3RhbmNlKCkuYnVsbGV0T3RoZXJWYWx1ZS8yKzMwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKXtcclxuICAgICAgICB0aGlzLmRlYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNIaXRGaXNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0hpdFRvb2wgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpdFJhZGl1cyA9IHRoaXMuZGF0YVZvLnBvd2VyUmFkaXVzO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsIHRoaXMsIHRoaXMubG9vcEhhbmQpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb29wSGFuZCgpe1xyXG4gICAgICAgIGlmKEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UpcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBBbmdsZSA9IHRoaXMucm90YXRpb24gLSA5MDtcclxuICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy50ZW1wQW5nbGUgKiBNYXRoLlBJLzE4MCkgKiB0aGlzLmRhdGFWby5zcGVlZDtcclxuICAgICAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy50ZW1wQW5nbGUgKiBNYXRoLlBJLzE4MCkgKiB0aGlzLmRhdGFWby5zcGVlZDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRIaXRQb2ludCgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmhpdEJvcmRlcigpfHx0aGlzLmlzSGl0RmlzaHx8dGhpcy5pc0hpdFRvb2wpe1xyXG4gICAgICAgICAgICB0aGlzLmJvb20oKTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLmxvb3BIYW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniIbngrhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJvb20oKXtcclxuICAgICAgICBsYXlhLm1lZGlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQoJ3Jlcy9zb3VuZC9idWxsZXRfYm9vbS5tcDMnKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucGxheSgwLCBmYWxzZSwgdGhpcy5ib29tQW4pO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5vbmNlKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuYm9vbUNvbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniIbngrjliqjnlLvmkq3mlL7lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBib29tQ29tKCl7XHJcbiAgICAgICAgdGhpcy5oaXRSYWRpdXMgPSB0aGlzLmRhdGFWby5ib29tUmFkaXVzO1xyXG4gICAgICAgIHRoaXMuZXZlbnQodGhpcy5CT09NX0NPTSwgW3RoaXNdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpueisOaSnuWIsOi+ueeVjFxyXG4gICAgICogQHJldHVyblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGl0Qm9yZGVyKCk6Qm9vbGVhbntcclxuICAgICAgICB2YXIgZ2xvYmFsOlBvaW50ID0gdGhpcy5sb2NhbFRvR2xvYmFsKHRoaXMuaGl0UG9pbnQsIHRydWUpO1xyXG4gICAgICAgIHZhciB2YWw6bnVtYmVyID0gMTA7XHJcbiAgICAgICAgaWYgKGdsb2JhbC54IDwgdmFsIHx8IGdsb2JhbC54ID4gR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxXaWR0aCAtIHZhbCB8fCBnbG9iYWwueSA8IHZhbCB8fCBnbG9iYWwueSA+IEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsSGVpZ2h0LTEwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcblx0XHQgKiDojrflj5bnorDmkp7nn6nlvaJcclxuXHRcdCAqIEByZXR1cm5cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIGdldEhpdFJlY3RhbmdsZSgpOkxheWEuUmVjdGFuZ2xle1xyXG5cdFx0XHR2YXIgZ2xvYmFsOlBvaW50ID0gdGhpcy5sb2NhbFRvR2xvYmFsKG5ldyBQb2ludCh0aGlzLmhpdFBvaW50LngtdGhpcy5oaXRSYWRpdXMsdGhpcy5oaXRQb2ludC55LXRoaXMuaGl0UmFkaXVzKSwgdHJ1ZSk7XHJcblx0XHRcdHZhciBsb2NhbDpQb2ludCA9IHRoaXMuZ2xvYmFsVG9Mb2NhbChnbG9iYWwsIHRydWUpO1xyXG4gICAgICAgICAgICB2YXIgcmVjOkxheWEuUmVjdGFuZ2xlID0gbmV3IExheWEuUmVjdGFuZ2xlKGxvY2FsLngsIGxvY2FsLnksIHRoaXMuaGl0UmFkaXVzKjIsIHRoaXMuaGl0UmFkaXVzKjIpO1xyXG5cdFx0XHRyZXR1cm4gcmVjO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgZ2V0Q2VudGVyKCk6UG9pbnR7XHJcblx0XHRcdHZhciBnbG9iYWw6UG9pbnQgPSB0aGlzLmxvY2FsVG9HbG9iYWwodGhpcy5oaXRQb2ludCx0cnVlKTtcclxuXHRcdFx0cmV0dXJuIGdsb2JhbDtcclxuXHRcdH1cclxufSIsImltcG9ydCBBbmltYXRpb24gPSBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyID0gbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXI7XHJcbmltcG9ydCBQb29sID0gbGF5YS51dGlscy5Qb29sO1xyXG5pbXBvcnQgeyBCdWxsZXRGYXRoZXIgfSBmcm9tIFwiLi9CdWxsZXRGYXRoZXJcIjtcclxuaW1wb3J0IHsgRGF0YVByb3h5IH0gZnJvbSBcIi4uLy4uL2RhdGEvRGF0YVByb3h5XCI7XHJcbmV4cG9ydCBjbGFzcyBCdWxsZXRNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6QnVsbGV0TWFuYWdlclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkJ1bGxldE1hbmFnZXJ7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBCdWxsZXRNYW5hZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+eIhueCuOWKqOeUu+WQjeensFxyXG4gICAgcHVibGljIEJVTExFVF9CT09NXzE6c3RyaW5nID0gXCJidWxsZXRfYm9vbV8xXCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0JPT01fMjpzdHJpbmcgPSBcImJ1bGxldF9ib29tXzJcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfQk9PTV8zOnN0cmluZyA9IFwiYnVsbGV0X2Jvb21fM1wiO1xyXG4gICAgcHVibGljIEJVTExFVF9CT09NXzQ6c3RyaW5nID0gXCJidWxsZXRfYm9vbV80XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0JPT01fNTpzdHJpbmcgPSBcImJ1bGxldF9ib29tXzVcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfQk9PTV82OnN0cmluZyA9IFwiYnVsbGV0X2Jvb21fNlwiO1xyXG4gICAgcHVibGljIEJVTExFVF9CT09NXzc6c3RyaW5nID0gXCJidWxsZXRfYm9vbV83XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0JPT01fODpzdHJpbmcgPSBcImJ1bGxldF9ib29tXzhcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfQk9PTV85OnN0cmluZyA9IFwiYnVsbGV0X2Jvb21fOVwiO1xyXG4gICAgXHJcbiAgICAvL+WtkOW8uemjnuihjOWKqOeUu1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfMTpzdHJpbmcgPSBcImJ1bGxldF9mbHlfMVwiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfMjpzdHJpbmcgPSBcImJ1bGxldF9mbHlfMlwiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfMzpzdHJpbmcgPSBcImJ1bGxldF9mbHlfM1wiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfNDpzdHJpbmcgPSBcImJ1bGxldF9mbHlfNFwiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfNTpzdHJpbmcgPSBcImJ1bGxldF9mbHlfNVwiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfNjpzdHJpbmcgPSBcImJ1bGxldF9mbHlfNlwiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfNzpzdHJpbmcgPSBcImJ1bGxldF9mbHlfN1wiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfODpzdHJpbmcgPSBcImJ1bGxldF9mbHlfOFwiO1xyXG4gICAgcHVibGljIEJVTExFVF9GTFlfOTpzdHJpbmcgPSBcImJ1bGxldF9mbHlfOVwiO1xyXG4gICAgXHJcbiAgICAvL+WtkOW8uVxyXG4gICAgcHVibGljIEJVTExFVF9JTkZPXzE6c3RyaW5nID0gXCJidWxsZXRfaW5mb18xXCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0lORk9fMjpzdHJpbmcgPSBcImJ1bGxldF9pbmZvXzJcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfSU5GT18zOnN0cmluZyA9IFwiYnVsbGV0X2luZm9fM1wiO1xyXG4gICAgcHVibGljIEJVTExFVF9JTkZPXzQ6c3RyaW5nID0gXCJidWxsZXRfaW5mb180XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0lORk9fNTpzdHJpbmcgPSBcImJ1bGxldF9pbmZvXzVcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfSU5GT182OnN0cmluZyA9IFwiYnVsbGV0X2luZm9fNlwiO1xyXG4gICAgcHVibGljIEJVTExFVF9JTkZPXzc6c3RyaW5nID0gXCJidWxsZXRfaW5mb183XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0lORk9fODpzdHJpbmcgPSBcImJ1bGxldF9pbmZvXzhcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfSU5GT185OnN0cmluZyA9IFwiYnVsbGV0X2luZm9fOVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiDnvJPlrZjlrZDlvLnniIbngrjmlYjmnpxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNhY2hlQW5pbWF0aW9uKCk6dm9pZCB7XHJcbiAgICAgICAgLy/lrZDlvLkx6aOe6KGM5Yqo55S7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL2J1bGxldC9idWxsZXQxL2J1bGxldDAwMDEucG5nXCJdLHRoaXMuQlVMTEVUX0ZMWV8xKTtcclxuICAgICAgICAvL+WtkOW8uTHniIbngrjliqjnlLtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQxL2J1bGxldDAwMDEucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0MS9idWxsZXQwMDAyLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDEvYnVsbGV0MDAwMy5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQxL2J1bGxldDAwMDQucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0MS9idWxsZXQwMDA1LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDEvYnVsbGV0MDAwNi5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQxL2J1bGxldDAwMDcucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0MS9idWxsZXQwMDA4LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDEvYnVsbGV0MDAwOS5wbmdcIlxyXG4gICAgICAgIF0sIHRoaXMuQlVMTEVUX0JPT01fMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lrZDlvLky6aOe6KGM5Yqo55S7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL2J1bGxldC9idWxsZXQyL2J1bGxldDIwMDAxLnBuZ1wiXSx0aGlzLkJVTExFVF9GTFlfMik7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0Mi9idWxsZXQyMDAwMS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQyL2J1bGxldDIwMDAyLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDIvYnVsbGV0MjAwMDMucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0Mi9idWxsZXQyMDAwNC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQyL2J1bGxldDIwMDA1LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDIvYnVsbGV0MjAwMDYucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0Mi9idWxsZXQyMDAwNy5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQyL2J1bGxldDIwMDA4LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDIvYnVsbGV0MjAwMDkucG5nXCJcclxuICAgICAgICBdLCB0aGlzLkJVTExFVF9CT09NXzIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5a2Q5by5M+mjnuihjOWKqOeUu1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC9idWxsZXQvYnVsbGV0My9idWxsZXQzMDAwMS5wbmdcIl0sdGhpcy5CVUxMRVRfRkxZXzMpO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDMvYnVsbGV0MzAwMDEucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0My9idWxsZXQzMDAwMi5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQzL2J1bGxldDMwMDAzLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDMvYnVsbGV0MzAwMDQucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0My9idWxsZXQzMDAwNS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQzL2J1bGxldDMwMDA2LnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDMvYnVsbGV0MzAwMDcucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0My9idWxsZXQzMDAwOC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQzL2J1bGxldDMwMDA5LnBuZ1wiXHJcbiAgICAgICAgXSwgdGhpcy5CVUxMRVRfQk9PTV8zKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WtkOW8uTTpo57ooYzliqjnlLtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvYnVsbGV0L2J1bGxldDQvYnVsbGV0NDAwMDEucG5nXCJdLHRoaXMuQlVMTEVUX0ZMWV80KTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ0L2J1bGxldDQwMDAxLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDQvYnVsbGV0NDAwMDIucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0NC9idWxsZXQ0MDAwMy5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ0L2J1bGxldDQwMDA0LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDQvYnVsbGV0NDAwMDUucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0NC9idWxsZXQ0MDAwNi5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ0L2J1bGxldDQwMDA3LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDQvYnVsbGV0NDAwMDgucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0NC9idWxsZXQ0MDAwOS5wbmdcIlxyXG4gICAgICAgIF0sIHRoaXMuQlVMTEVUX0JPT01fNCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lrZDlvLk16aOe6KGM5Yqo55S7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL2J1bGxldC9idWxsZXQ1L2J1bGxldDUwMDAxLnBuZ1wiXSx0aGlzLkJVTExFVF9GTFlfNSk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0NS9idWxsZXQ1MDAwMS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ1L2J1bGxldDUwMDAyLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDUvYnVsbGV0NTAwMDMucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0NS9idWxsZXQ1MDAwNC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ1L2J1bGxldDUwMDA1LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDUvYnVsbGV0NTAwMDYucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0NS9idWxsZXQ1MDAwNy5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ1L2J1bGxldDUwMDA4LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDUvYnVsbGV0NTAwMDkucG5nXCJcclxuICAgICAgICBdLCB0aGlzLkJVTExFVF9CT09NXzUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5a2Q5by5NumjnuihjOWKqOeUu1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC9idWxsZXQvYnVsbGV0Ni9idWxsZXQ2MDAwMS5wbmdcIl0sdGhpcy5CVUxMRVRfRkxZXzYpO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDYvYnVsbGV0NjAwMDEucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ni9idWxsZXQ2MDAwMi5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ2L2J1bGxldDYwMDAzLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDYvYnVsbGV0NjAwMDQucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ni9idWxsZXQ2MDAwNS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ2L2J1bGxldDYwMDA2LnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDYvYnVsbGV0NjAwMDcucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ni9idWxsZXQ2MDAwOC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ2L2J1bGxldDYwMDA5LnBuZ1wiXHJcbiAgICAgICAgXSwgdGhpcy5CVUxMRVRfQk9PTV82KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WtkOW8uTfpo57ooYzliqjnlLtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvYnVsbGV0L2J1bGxldDcvYnVsbGV0NzAwMDEucG5nXCJdLHRoaXMuQlVMTEVUX0ZMWV83KTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ3L2J1bGxldDcwMDAxLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDcvYnVsbGV0NzAwMDIucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ny9idWxsZXQ3MDAwMy5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ3L2J1bGxldDcwMDA0LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDcvYnVsbGV0NzAwMDUucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ny9idWxsZXQ3MDAwNi5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ3L2J1bGxldDcwMDA3LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDcvYnVsbGV0NzAwMDgucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ny9idWxsZXQ3MDAwOS5wbmdcIlxyXG4gICAgICAgIF0sIHRoaXMuQlVMTEVUX0JPT01fNyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lrZDlvLk46aOe6KGM5Yqo55S7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL2J1bGxldC9idWxsZXQ4L2J1bGxldDgwMDAxLnBuZ1wiXSx0aGlzLkJVTExFVF9GTFlfOCk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0OC9idWxsZXQ4MDAwMS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ4L2J1bGxldDgwMDAyLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDgvYnVsbGV0ODAwMDMucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0OC9idWxsZXQ4MDAwNC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ4L2J1bGxldDgwMDA1LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDgvYnVsbGV0ODAwMDYucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0OC9idWxsZXQ4MDAwNy5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ4L2J1bGxldDgwMDA4LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDgvYnVsbGV0ODAwMDkucG5nXCJcclxuICAgICAgICBdLCB0aGlzLkJVTExFVF9CT09NXzgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5a2Q5by5OemjnuihjOWKqOeUu1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC9idWxsZXQvYnVsbGV0OS9idWxsZXQ5MDAwMS5wbmdcIl0sdGhpcy5CVUxMRVRfRkxZXzkpO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDkvYnVsbGV0OTAwMDEucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OS9idWxsZXQ5MDAwMi5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ5L2J1bGxldDkwMDAzLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDkvYnVsbGV0OTAwMDQucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OS9idWxsZXQ5MDAwNS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ5L2J1bGxldDkwMDA2LnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDkvYnVsbGV0OTAwMDcucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OS9idWxsZXQ5MDAwOC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ5L2J1bGxldDkwMDA5LnBuZ1wiXHJcbiAgICAgICAgXSwgdGhpcy5CVUxMRVRfQk9PTV85KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOmil+WtkOW8uVxyXG4gICAgICogQHBhcmFtXHR0eXBlXHJcbiAgICAgKiBAcmV0dXJuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVCdWxsZXRCeVR5cGUodHlwZTpudW1iZXIpOkJ1bGxldEZhdGhlciB7XHJcbiAgICAgICAgdmFyIGJ1bGxldDpCdWxsZXRGYXRoZXI7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBidWxsZXQgPSBQb29sLmdldEl0ZW1CeUNsYXNzKHRoaXMuQlVMTEVUX0lORk9fMSwgQnVsbGV0RmF0aGVyKTtcclxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGJ1bGxldCA9IFBvb2wuZ2V0SXRlbUJ5Q2xhc3ModGhpcy5CVUxMRVRfSU5GT18yLCBCdWxsZXRGYXRoZXIpO1xyXG4gICAgICAgIH1lbHNlIGlmICh0eXBlID09IDMpIHtcclxuICAgICAgICAgICAgYnVsbGV0ID0gUG9vbC5nZXRJdGVtQnlDbGFzcyh0aGlzLkJVTExFVF9JTkZPXzMsIEJ1bGxldEZhdGhlcik7XHJcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gNCkge1xyXG4gICAgICAgICAgICBidWxsZXQgPSBQb29sLmdldEl0ZW1CeUNsYXNzKHRoaXMuQlVMTEVUX0lORk9fNCwgQnVsbGV0RmF0aGVyKTtcclxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIGJ1bGxldCA9IFBvb2wuZ2V0SXRlbUJ5Q2xhc3ModGhpcy5CVUxMRVRfSU5GT181LCBCdWxsZXRGYXRoZXIpO1xyXG4gICAgICAgIH1lbHNlIGlmICh0eXBlID09IDYpIHtcclxuICAgICAgICAgICAgYnVsbGV0ID0gUG9vbC5nZXRJdGVtQnlDbGFzcyh0aGlzLkJVTExFVF9JTkZPXzYsIEJ1bGxldEZhdGhlcik7XHJcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gNykge1xyXG4gICAgICAgICAgICBidWxsZXQgPSBQb29sLmdldEl0ZW1CeUNsYXNzKHRoaXMuQlVMTEVUX0lORk9fNywgQnVsbGV0RmF0aGVyKTtcclxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSA4KSB7XHJcbiAgICAgICAgICAgIGJ1bGxldCA9IFBvb2wuZ2V0SXRlbUJ5Q2xhc3ModGhpcy5CVUxMRVRfSU5GT184LCBCdWxsZXRGYXRoZXIpO1xyXG4gICAgICAgIH1lbHNlIGlmICh0eXBlID09IDkpIHtcclxuICAgICAgICAgICAgYnVsbGV0ID0gUG9vbC5nZXRJdGVtQnlDbGFzcyh0aGlzLkJVTExFVF9JTkZPXzksIEJ1bGxldEZhdGhlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1bGxldC5zaWduID0gXCJidWxsZXRfaW5mb19cIiArIHR5cGU7XHJcbiAgICAgICAgYnVsbGV0LmZseUFuID0gXCJidWxsZXRfZmx5X1wiICsgdHlwZTtcclxuICAgICAgICBidWxsZXQuYm9vbUFuID0gXCJidWxsZXRfYm9vbV9cIiArIHR5cGU7XHJcbiAgICAgICAgYnVsbGV0LmRhdGFWbyA9IERhdGFQcm94eS5nZXRJbnN0YW5jZSgpLmdldERhdGFCeVR5cGUodHlwZSk7XHJcbiAgICAgICAgYnVsbGV0LnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5U291bmQoXCJyZXMvc291bmQvYnVsbGV0X25vcm1hbDEubXAzXCIpO1xyXG4gICAgICAgIHJldHVybiBidWxsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLblrZDlvLlcclxuICAgICAqIEBwYXJhbVx0YnVsbGV0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWNvdmVyQnVsbGVyQnlUeXBlKGJ1bGxldDpCdWxsZXRGYXRoZXIpOnZvaWQge1xyXG4gICAgICAgIFBvb2wucmVjb3ZlcihidWxsZXQuc2lnbiwgYnVsbGV0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBUd2VlbiA9IGxheWEudXRpbHMuVHdlZW47XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9HbG9iYWxcIjtcclxuaW1wb3J0IHsgQ2Fubm9uTWFuYWdlciB9IGZyb20gXCIuL0Nhbm5vbk1hbmFnZXJcIjtcclxuZXhwb3J0IGNsYXNzIENhbm5vbkZhdGhlciBleHRlbmRzIExheWEuU3ByaXRle1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6Q2Fubm9uRmF0aGVyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkNhbm5vbkZhdGhlcntcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENhbm5vbkZhdGhlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTUlOX1RZUEU6bnVtYmVyID0gMTsvL+acgOWwj+exu+Wei1xyXG4gICAgcHVibGljIE1BWF9UWVBFOm51bWJlciA9IDc7Ly/mnIDlpKfnsbvlnotcclxuICAgIHB1YmxpYyBhbmltYXRpb25Cb2R5OmxheWEuZGlzcGxheS5BbmltYXRpb247Ly/liqjnlLvlrrnlmahcclxuICAgIHB1YmxpYyBzaG9vdFRpbWU6bnVtYmVyID0gMDsvL+iusOW9leS4iuasoeWPkeWwhOaXtumXtFxyXG4gICAgcHVibGljIHNob290SW50ZXJ2YWw6bnVtYmVyID0gMjUwOy8v5Y+R5bCE6Ze06ZqUIG1zXHJcbiAgICBcclxuICAgIHB1YmxpYyBzZWxmV2lkdGg6bnVtYmVyID0gMDsvL+WGheWuueWuvemrmFxyXG4gICAgcHVibGljIHNlbGZIZWlnaHQ6bnVtYmVyID0gMDtcclxuICAgIFxyXG4gICAgcHVibGljIHhpdVZhbDpudW1iZXIgPSAyNTsvL+S4reW/g+eCueS/ruato+WAvFxyXG4gICAgcHVibGljIGVmZmVjdEJvZHk6bGF5YS5kaXNwbGF5LkFuaW1hdGlvbjtcclxuXHJcblx0cHJpdmF0ZSBzdHJvbmdJbmc6Qm9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm5aKe5by65LitXHJcblx0cHJpdmF0ZSBfc3Ryb25nVGltZTpudW1iZXIgPSAwOy8v5aKe5by65pe26Ze0XHJcbiAgICBcclxuICAgIHByaXZhdGUgdGltZTpMYXlhLlRpbWVyO1xyXG4gICAgcHJpdmF0ZSBfdHlwZTpudW1iZXIgPSAwXHJcbiAgICBwdWJsaWMgc3Ryb25nU2NhbGU6bnVtYmVyID0gMTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLkNhbm5vbkZhdGhlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB0eXBlKHZhbDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnBsYXkoMCwgZmFsc2UsIFwiY2Fubm9uX25vcm1hbF9cIiArIHRoaXMuX3R5cGUpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5wb3MoLTM1LCAtOTApO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGZXaWR0aCA9IHRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS53aWR0aDtcclxuICAgICAgICB0aGlzLnNlbGZIZWlnaHQgPSB0aGlzLmFuaW1hdGlvbkJvZHkuZ2V0Qm91bmRzKCkuaGVpZ2h0Oy8v5Lit5b+D54K55L+u5q2jXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzdHJvbmdUaW1lKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJvbmdUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc3Ryb25nVGltZSh2YWw6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9zdHJvbmdUaW1lID0gdmFsO1xyXG4gICAgICAgIHRoaXMuX3N0cm9uZ1RpbWUgPSBNYXRoLm1heCgwLCB0aGlzLl9zdHJvbmdUaW1lKTtcclxuICAgICAgICBpZiAodGhpcy5fc3Ryb25nVGltZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zdHJvbmdJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50aW1lLmNsZWFyKHRoaXMsIHRoaXMubG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd2ZsYXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuc2hvb3RJbnRlclRpbWUgPSAxO1xyXG4gICAgICAgICAgICBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5zaG9vdFBvd2VyIFxyXG4gICAgICAgIH1lbHNlIGlmICghdGhpcy5zdHJvbmdJbmcpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUuY2xlYXIodGhpcywgdGhpcy5sb29wKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lLmxvb3AoMTAwMCwgdGhpcywgdGhpcy5sb29wKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJvbmdJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dmbGFzaCh0cnVlKTtcclxuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuc2hvb3RJbnRlclRpbWUgPSAwLjU7XHJcbiAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLnNob290UG93ZXIgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2Fubm9uRmF0aGVyKCl7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RGF0YSgpe1xyXG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBMYXlhLlRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb29wKCl7XHJcbiAgICAgICAgdGhpcy5zdHJvbmdUaW1lLS07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRWaWV3KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uQm9keSl7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keSA9IG5ldyBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5hbmltYXRpb25Cb2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmVmZmVjdEJvZHkpe1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdEJvZHkgPSBuZXcgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZWZmZWN0Qm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RXZlbnQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob290QW4oKXtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucGxheSgwLCBmYWxzZSwgXCJjYW5ub25fc2hvb3RfXCIgKyB0aGlzLnR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3RhdGVBbihyb3RhdGU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRlO1xyXG4gICAgICAgIC8vdmFyIHR3ZWVuOlR3ZWVuID0gbmV3IFR3ZWVuKCk7XHJcblx0XHRcdC8vdHdlZW4udG8odGhpcywgeyByb3RhdGlvbjpyb3RhdGUgfSwgMTAwLCBFYXNlLmN1YmljT3V0LCBIYW5kbGVyLmNyZWF0ZSh0aGlzLCBmdW5jdGlvbigpIHsgXHJcblx0XHRcdFx0Ly90d2Vlbi5jbGVhcigpO1xyXG5cdFx0XHQvL30gKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dmbGFzaChib286Qm9vbGVhbil7XHJcbiAgICAgICAgaWYoYm9vKXtcclxuICAgICAgICAgICAgdGhpcy5zdHJvbmdTY2FsZSA9IDEuMztcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RCb2R5LnBsYXkoMCwgdHJ1ZSwgQ2Fubm9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLkVGRkVDVF9GTEFTSCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0Qm9keS5wb3MoLXRoaXMuZWZmZWN0Qm9keS5nZXRCb3VuZHMoKS53aWR0aC8yIC0gMTAsIC10aGlzLmVmZmVjdEJvZHkuZ2V0Qm91bmRzKCkuaGVpZ2h0LzItMjApO1xyXG4gICAgICAgICAgICBUd2Vlbi50byh0aGlzLCB7c2NhbGVYOnRoaXMuc3Ryb25nU2NhbGUsIHNjYWxlWTp0aGlzLnN0cm9uZ1NjYWxlfSwgMjAwLCBsYXlhLnV0aWxzLkVhc2UuYmFja091dCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb25nU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdEJvZHkuY2xlYXIoKTtcclxuICAgICAgICAgICAgVHdlZW4udG8odGhpcywge3NjYWxlWDp0aGlzLnN0cm9uZ1NjYWxlLCBzY2FsZVk6dGhpcy5zdHJvbmdTY2FsZX0sIDIwMCwgbGF5YS51dGlscy5FYXNlLmJhY2tJbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2Fubm9uRmF0aGVyIH0gZnJvbSBcIi4vQ2Fubm9uRmF0aGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2Fubm9uTWFuYWdlcntcclxuICAgIHByaXZhdGUgY2Fubm9uOkNhbm5vbkZhdGhlcjtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkNhbm5vbk1hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6Q2Fubm9uTWFuYWdlcntcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENhbm5vbk1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLy/lpKfngq7mraPluLhcclxuICAgIHB1YmxpYyBDQU5OT05fTk9STUFMXzE6c3RyaW5nID0gXCJjYW5ub25fbm9ybWFsXzFcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fTk9STUFMXzI6c3RyaW5nID0gXCJjYW5ub25fbm9ybWFsXzJcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fTk9STUFMXzM6c3RyaW5nID0gXCJjYW5ub25fbm9ybWFsXzNcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fTk9STUFMXzQ6c3RyaW5nID0gXCJjYW5ub25fbm9ybWFsXzRcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fTk9STUFMXzU6c3RyaW5nID0gXCJjYW5ub25fbm9ybWFsXzVcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fTk9STUFMXzY6c3RyaW5nID0gXCJjYW5ub25fbm9ybWFsXzZcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fTk9STUFMXzc6c3RyaW5nID0gXCJjYW5ub25fbm9ybWFsXzdcIjtcclxuICAgIC8v5aSn54Ku5bCE5Ye7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX1NIT09UXzE6c3RyaW5nID0gXCJjYW5ub25fc2hvb3RfMVwiO1xyXG4gICAgcHVibGljIENBTk5PTl9TSE9PVF8yOnN0cmluZyA9IFwiY2Fubm9uX3Nob290XzJcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fU0hPT1RfMzpzdHJpbmcgPSBcImNhbm5vbl9zaG9vdF8zXCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX1NIT09UXzQ6c3RyaW5nID0gXCJjYW5ub25fc2hvb3RfNFwiO1xyXG4gICAgcHVibGljIENBTk5PTl9TSE9PVF81OnN0cmluZyA9IFwiY2Fubm9uX3Nob290XzVcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fU0hPT1RfNjpzdHJpbmcgPSBcImNhbm5vbl9zaG9vdF82XCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX1NIT09UXzc6c3RyaW5nID0gXCJjYW5ub25fc2hvb3RfN1wiO1xyXG4gICAgXHJcbiAgICAvL+mXqueUteeJueaViFxyXG4gICAgcHVibGljIEVGRkVDVF9GTEFTSDpzdHJpbmcgPSBcImVmZmVjdF9mbGFzaFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHB1YmxpYyBjYWNoZUFuaW1hdGlvbigpe1xyXG4gICAgICAgIC8vL+Wkp+eCriAxXHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiLi4vbGF5YS9hc3NldHMvY2Fubm9uL2Nhbm5vbjEvY2Fubm9uMTAwMDEucG5nXCJdLHRoaXMuQ0FOTk9OX05PUk1BTF8xKTtcclxuICAgICAgICBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub24xLmF0bGFzXCIsIHRoaXMuQ0FOTk9OX1NIT09UXzEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vL+Wkp+eCriAyXHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiLi4vbGF5YS9hc3NldHMvY2Fubm9uL2Nhbm5vbjIvY2Fubm9uMjAwMDEucG5nXCJdLHRoaXMuQ0FOTk9OX05PUk1BTF8yKTtcclxuICAgICAgICBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub24yLmF0bGFzXCIsIHRoaXMuQ0FOTk9OX1NIT09UXzIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vL+Wkp+eCriAzXHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiLi4vbGF5YS9hc3NldHMvY2Fubm9uL2Nhbm5vbjMvY2Fubm9uMzAwMDEucG5nXCJdLHRoaXMuQ0FOTk9OX05PUk1BTF8zKTtcclxuICAgICAgICBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub24zLmF0bGFzXCIsIHRoaXMuQ0FOTk9OX1NIT09UXzMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vL+Wkp+eCriA0XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiLi4vbGF5YS9hc3NldHMvY2Fubm9uL2Nhbm5vbjQvY2Fubm9uNDAwMDEucG5nXCJdLHRoaXMuQ0FOTk9OX05PUk1BTF80KTtcclxuICAgICAgICBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub240LmF0bGFzXCIsIHRoaXMuQ0FOTk9OX1NIT09UXzQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vL+Wkp+eCriA1XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiLi4vbGF5YS9hc3NldHMvY2Fubm9uL2Nhbm5vbjUvY2Fubm9uNTAwMDEucG5nXCJdLHRoaXMuQ0FOTk9OX05PUk1BTF81KTtcclxuICAgICAgICBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub241LmF0bGFzXCIsIHRoaXMuQ0FOTk9OX1NIT09UXzUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vL+Wkp+eCriA2XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiLi4vbGF5YS9hc3NldHMvY2Fubm9uL2Nhbm5vbjYvY2Fubm9uNjAwMDEucG5nXCJdLHRoaXMuQ0FOTk9OX05PUk1BTF82KTtcclxuICAgICAgICBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub242LmF0bGFzXCIsIHRoaXMuQ0FOTk9OX1NIT09UXzYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vL+Wkp+eCriA3XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiLi4vbGF5YS9hc3NldHMvY2Fubm9uL2Nhbm5vbjcvY2Fubm9uNzAwMDEucG5nXCJdLHRoaXMuQ0FOTk9OX05PUk1BTF83KTtcclxuICAgICAgICBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub243LmF0bGFzXCIsIHRoaXMuQ0FOTk9OX1NIT09UXzcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6Zeq55S154m55pWIXHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9lZmZlY3QvZmxhc2guYXRsYXNcIiwgdGhpcy5FRkZFQ1RfRkxBU0gpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDYW5ub24oY29udGFpbmVyOkxheWEuU3ByaXRlLCB4eD86bnVtYmVyLCB5eT86bnVtYmVyKTpDYW5ub25GYXRoZXJ7XHJcbiAgICAgICAgaWYoIXRoaXMuY2Fubm9uKXtcclxuICAgICAgICAgICAgdGhpcy5jYW5ub24gPSBuZXcgQ2Fubm9uRmF0aGVyKCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmNhbm5vbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fubm9uLnBvcyh4eCwgeXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5ub247XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVHdlZW4gPSBsYXlhLnV0aWxzLlR3ZWVuO1xyXG5pbXBvcnQgZWFzZSA9IGxheWEudXRpbHMuRWFzZTtcclxuZXhwb3J0IGNsYXNzIENvaW4gZXh0ZW5kcyBMYXlhLlNwcml0ZXtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkNvaW47XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6Q29pbntcclxuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPW5ldyBDb2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBNT1ZFX0VORDpzdHJpbmcgPSBcIm1vdmVfZW5kXCI7Ly/np7vliqjnu5PmnZ9cclxuICAgIHByaXZhdGUgX3R5cGU6c3RyaW5nID0gXCJcIjsvL+exu+WeiyDph5HluIEg6ZO25biBXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uQm9keTpsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB0eXBlKHRzOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHRzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5wbGF5KDAsIHRydWUsIHRoaXMuX3R5cGUpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5wb3MoLXRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS53aWR0aC8yLCAtdGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLmhlaWdodC8yKTtcclxuICAgICAgICB0aGlzLnNpemUodGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLndpZHRoLCB0aGlzLmFuaW1hdGlvbkJvZHkuZ2V0Qm91bmRzKCkuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdFZpZXcoKXtcclxuICAgICAgICBpZighdGhpcy5hbmltYXRpb25Cb2R5KXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5ID0gbmV3IGxheWEuZGlzcGxheS5BbmltYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmFuaW1hdGlvbkJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvUG9zKHh4Om51bWJlciwgeXk6bnVtYmVyLCBkZWxheTpudW1iZXIpe1xyXG4gICAgICAgIExheWEudGltZXIub25jZShkZWxheSwgdGhpcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgVHdlZW4udG8odGhpcywge3g6eHgseTp5eX0sIDIwMCwgZWFzZS5saW5lYXJJbiwgbmV3IExheWEuSGFuZGxlcih0aGlzLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudCh0aGlzLk1PVkVfRU5ELCBbdGhpc10pO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEFuaW1hdGlvbiA9IGxheWEuZGlzcGxheS5BbmltYXRpb247XHJcbmltcG9ydCBQb29sID0gbGF5YS51dGlscy5Qb29sO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyID0gbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXI7XHJcbmltcG9ydCB7IENvaW4gfSBmcm9tIFwiLi9Db2luXCJcclxuaW1wb3J0IHsgRmlzaEZhdGhlciB9IGZyb20gXCIuLi9maXNoL0Zpc2hGYXRoZXJcIjtcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0dsb2JhbFwiO1xyXG5leHBvcnQgY2xhc3MgQ29pbk1hbmFnZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpDb2luTWFuYWdlciA9IG5ldyBDb2luTWFuYWdlcigpO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkNvaW5NYW5hZ2Vye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIENPSU46c3RyaW5nID0gXCJjb2luXCI7Ly/ph5HluIFcclxuICAgIHB1YmxpYyBTSUxWRVI6c3RyaW5nID0gXCJzaWx2ZXJcIjsvL+mTtuW4gVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcbiAgICBwdWJsaWMgY2FjaGVBbmltYXRpb24oKXtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvbW9uZXkvY29pbi5hdGxhc1wiLCB0aGlzLkNPSU4pO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9tb25leS9zaWx2ZXIuYXRsYXNcIiwgdGhpcy5TSUxWRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu66ZKx5biBXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlQ29pbih0eXBlOnN0cmluZyk6Q29pbntcclxuICAgICAgICB2YXIgY29pbjpDb2luID0gUG9vbC5nZXRJdGVtQnlDbGFzcyh0eXBlLCBDb2luKTtcclxuICAgICAgICBjb2luLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHJldHVybiBjb2luO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6YeR5biBXHJcbiAgICAgKiBAcGFyYW0gZmlzaCBcclxuICAgICAqIEBwYXJhbSBjb24gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVNb3JlQ29pbihmaXNoOkZpc2hGYXRoZXIsIGNvbjpMYXlhLlNwcml0ZSl7XHJcbiAgICAgICAgdmFyIHNjb3JlOm51bWJlciA9IGZpc2guaXNJbk9yZGVyP2Zpc2guZmlzaFZvLnNjb3JlKjI6ZmlzaC5maXNoVm8uc2NvcmU7XHJcbiAgICAgICAgdmFyIGNvaW5UeXBlOnN0cmluZztcclxuICAgICAgICB2YXIgY29pbk51bTpudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmKHNjb3JlPj0xMCl7XHJcbiAgICAgICAgICAgIGNvaW5UeXBlID0gdGhpcy5DT0lOO1xyXG4gICAgICAgICAgICBjb2luTnVtID0gTWF0aC5mbG9vcihzY29yZS8xMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvaW5UeXBlID0gdGhpcy5TSUxWRVI7XHJcbiAgICAgICAgICAgIGNvaW5OdW0gPXNjb3JlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvaW4oY29pbk51bSwgY29pblR5cGUsIGZpc2gueCwgZmlzaC55LCBjb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6YeR5biBXHJcbiAgICAgKiBAcGFyYW0gY29pbk51bSBcclxuICAgICAqIEBwYXJhbSBjb2luVHlwZSBcclxuICAgICAqIEBwYXJhbSBzeCBcclxuICAgICAqIEBwYXJhbSBzeSBcclxuICAgICAqIEBwYXJhbSBjb24gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRDb2luKGNvaW5OdW06bnVtYmVyLCBjb2luVHlwZTpzdHJpbmcsIHN4Om51bWJlciwgc3k6bnVtYmVyLCBjb246TGF5YS5TcHJpdGUpe1xyXG4gICAgICAgIHZhciBjb2luOkNvaW47XHJcbiAgICAgICAgdmFyIHl5Om51bWJlciA9IDA7XHJcbiAgICAgICAgdmFyIHh4Om51bWJlciA9IDA7XHJcbiAgICAgICAgdmFyIGRlbGF5VGltZTpudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgICAgIGlmKGNvaW5OdW0gPiA1KXtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9zb3VuZC9jb2luX21vcmUubXAzXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL2NvaW4yLm1wM1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wO2kgPCBjb2luTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBjb2luID0gdGhpcy5jcmVhdGVDb2luKGNvaW5UeXBlKTtcclxuICAgICAgICAgICAgY29pbi5vbmNlKENvaW4uZ2V0SW5zdGFuY2UoKS5NT1ZFX0VORCwgdGhpcywgdGhpcy5tb3ZlRW5kKTtcclxuICAgICAgICAgICAgY29pbi5wb3Moc3ggKyBjb2luLndpZHRoKnh4LCBzeSt5eSpjb2luLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbi5hZGRDaGlsZChjb2luKTtcclxuXHJcbiAgICAgICAgICAgIHh4Kys7XHJcbiAgICAgICAgICAgIGlmKHh4ICUgNj09MCl7XHJcbiAgICAgICAgICAgICAgICB5eSsrO1xyXG4gICAgICAgICAgICAgICAgeHggPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxheVRpbWUgKz0gMjA7XHJcbiAgICAgICAgICAgIGNvaW4ubW92ZVRvUG9zKDEwMCwgR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxIZWlnaHQrNTAsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gY29pbiDnp7vliqjlrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtb3ZlRW5kKGNvaW46Q29pbil7XHJcbiAgICAgICAgY29pbi5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5yZWNvdmVyQ29pbihjb2luKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuaUtumSseW4gVxyXG4gICAgICogQHBhcmFtIGNvaW4gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWNvdmVyQ29pbihjb2luOkNvaW4pe1xyXG4gICAgICAgIFBvb2wucmVjb3Zlcihjb2luLnR5cGUsIGNvaW4pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlzaFZvIH0gZnJvbSBcIi4uLy4uL2RhdGEvRmlzaFZvXCI7XHJcbmltcG9ydCBBbmltYXRpb24gPSBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG5pbXBvcnQgTGFiZWwgPSBsYXlhLnVpLkxhYmVsO1xyXG5pbXBvcnQgeyBIcFNsaWRlciB9IGZyb20gXCIuLi92aWV3L0hwU2xpZGVyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9HbG9iYWxcIjtcclxuZXhwb3J0IGNsYXNzIEZpc2hGYXRoZXIgZXh0ZW5kcyBMYXlhLlNwcml0ZXtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkZpc2hGYXRoZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6RmlzaEZhdGhlcntcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZpc2hGYXRoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBGSVNIX0RFQUQ6c3RyaW5nID0gXCJmaXNoX2RlYWRcIjsvL+mxvOatu+S6oVxyXG4gICAgcHVibGljIEZJU0hfREVBRF9TRUxGOnN0cmluZyA9IFwiZmlzaF9kZWFkX3NlbGZcIjsvL+iHqui6q+atu+S6oVxyXG4gICAgcHVibGljIGRpclN0cjpzdHJpbmcgPSBcIlwiOy8v5ri45ZCRXHJcbiAgICBwdWJsaWMgX2Zpc2hWbzpGaXNoVm87Ly/mlbDmja5cclxuXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uQm9keTpBbmltYXRpb247Ly/liqjnlLvkuLvkvZNcclxuICAgIHByaXZhdGUgX2lkOm51bWJlclxyXG5cclxuICAgIHByaXZhdGUgX2hwOm51bWJlcjtcclxuICAgIHB1YmxpYyBzZWxmV2lkdGg6bnVtYmVyID0gMDsvL+WGheWuueWuvemrmFxyXG4gICAgcHVibGljIHNlbGZIZWlnaHQ6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBkZWFkOkJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBsYWJlbDpMYWJlbDtcclxuICAgIHB1YmxpYyBocFNsaWRlcjpIcFNsaWRlcjtcclxuICAgIHB1YmxpYyBpc0luT3JkZXI6Qm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZmlzaFZvKCk6RmlzaFZve1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXNoVm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBmaXNoVm8odm86RmlzaFZvKXtcclxuICAgICAgICB0aGlzLl9maXNoVm8gPSB2bztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlkKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGlkKHZhbDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX2lkID0gdmFsO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucGxheSgwLCB0cnVlLCB0aGlzLmZpc2hWby5sZXZlQW4pO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGZXaWR0aCA9IHRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS53aWR0aDtcclxuICAgICAgICB0aGlzLnNlbGZIZWlnaHQgPSB0aGlzLmFuaW1hdGlvbkJvZHkuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5waXZvdCh0aGlzLnNlbGZXaWR0aC8yLCB0aGlzLnNlbGZIZWlnaHQvMik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnBvcygwLCAwKTtcclxuICAgICAgICAvLyB0aGlzLmhwU2xpZGVyLnNsaWRlci53aWR0aCA9IHRoaXMuc2VsZldpZHRoO1xyXG4gICAgICAgIC8vIHRoaXMuaHBTbGlkZXIuc2xpZGVyLmhlaWdodCA9IDU7XHJcbiAgICAgICAgLy8gdGhpcy5ocFNsaWRlci5zaXplKHRoaXMuc2VsZldpZHRoLCA1KTtcclxuICAgICAgICAvLyB0aGlzLmhwU2xpZGVyLnBvcygtdGhpcy5ocFNsaWRlci53aWR0aCAvIDIsIC0odGhpcy5zZWxmSGVpZ2h0LXRoaXMuZmlzaFZvLmhpdFZhbHVlKS8yKTtcclxuXHJcbiAgICAgICAgdmFyIG1heEhwOm51bWJlciA9IE1hdGguZmxvb3IodGhpcy5maXNoVm8uYmxvb2RfbWluICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLmZpc2hWby5ibG9vZF9NYXggLSB0aGlzLmZpc2hWby5ibG9vZF9taW4pKTsvL+ihgOmHj1xyXG4gICAgICAgIC8vIHRoaXMuaHBTbGlkZXIubWF4ID0gbWF4SHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IG1heEhwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaHAoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaHAodmFsOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5faHAgPSB2YWw7XHJcbiAgICAgICAgLy8gdGhpcy5ocFNsaWRlci5zaG93U2VsZih0aGlzLl9ocCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX2hwIDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmZpc2hEZWFkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RGF0YSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdFZpZXcoKXtcclxuICAgICAgICBpZighdGhpcy5hbmltYXRpb25Cb2R5KXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5ID0gbmV3IEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkuaW50ZXJ2YWwgPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5hbmltYXRpb25Cb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5ocFNsaWRlciA9IG5ldyBIcFNsaWRlcigpO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5ocFNsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRFdmVudCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIGRpciAg5Ye6546w5L2N572u5Zyo5bGP5bmV5Lik5L6nIGxlZnQgcmlnaHQgXHJcbiAgICAgKiBAcGFyYW0gc3BvcyDotbflp4vlnZDmoIfvvIzkuI3orr7nva7liJnpmo/mnLpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoZGlyOnN0cmluZz1cInJpZ2h0XCIsIHNwb3M6bGF5YS5tYXRocy5Qb2ludD1udWxsLCBvcmRlcjpCb29sZWFuPWZhbHNlKXtcclxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSW5PcmRlciA9IG9yZGVyO1xyXG4gICAgICAgIC8vIHRoaXMuaHAgPSB0aGlzLmhwU2xpZGVyLm1heDtcclxuICAgICAgICB0aGlzLmRpclN0ciA9IGRpcjtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucm90YXRpb24gPSAoZGlyID09IFwicmlnaHRcIik/MDoxODBcclxuXHJcbiAgICAgICAgdmFyIHRpbWVzOm51bWJlcjtcclxuICAgICAgICBpZighc3Bvcyl7XHJcbiAgICAgICAgICAgIC8v5omT5Lmx5Ye6546w5qyh5bqPXHJcbiAgICAgICAgICAgIHRpbWVzID0gTWF0aC5yYW5kb20oKSoxMDAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRpbWVzID0gMTAwMDtcclxuICAgICAgICAgICAgdGhpcy5wb3Moc3Bvcy54LCBzcG9zLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGF5YS50aW1lci5vbmNlKHRpbWVzLCB0aGlzLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLCB0aGlzLCB0aGlzLmxvb3BIYW5kKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsIHRoaXMsIHRoaXMubG9vcEhhbmQpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBsb29wSGFuZCgpe1xyXG4gICAgICAgIGlmKEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubW92ZU92ZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlT3Zlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuZGlyU3RyID09IFwicmlnaHRcIil7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLmZpc2hWby5zcGVlZCpHbG9iYWwuZ2V0SW5zdGFuY2UoKS5sdmxBZGRWYWx1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy54ID49IEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsV2lkdGggKyB0aGlzLnNlbGZXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzSW5PcmRlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmRGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpclN0ciA9PSBcImxlZnRcIil7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLmZpc2hWby5zcGVlZCpHbG9iYWwuZ2V0SW5zdGFuY2UoKS5sdmxBZGRWYWx1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy54PD0tdGhpcy5zZWxmV2lkdGgqMil7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzSW5PcmRlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmRGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43nva7liJ3lp4vkvY3nva5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBvcygpe1xyXG4gICAgICAgIHZhciBzdGFydHg6bnVtYmVyO1xyXG4gICAgICAgIHZhciBzdGFydHk6bnVtYmVyID0gNTAgKyAoR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxIZWlnaHQtMTUwKSpNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRpclN0ciA9PSBcInJpZ2h0XCIpe1xyXG4gICAgICAgICAgICBzdGFydHggPSAtdGhpcy5zZWxmV2lkdGggLSBNYXRoLnJhbmRvbSgpICogMjAwO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyU3RyID09IFwibGVmdFwiKXtcclxuICAgICAgICAgICAgc3RhcnR4ID0gR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxXaWR0aCArIHRoaXMuc2VsZldpZHRoICsgTWF0aC5yYW5kb20oKSoyMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBvcyhzdGFydHgsIHN0YXJ0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpc2hEZWFkKCl7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucGxheSgwLCBmYWxzZSwgdGhpcy5maXNoVm8uZGVhZEFuKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkub25jZShMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLmRlYWRDb20pO1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5sb29wSGFuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmrbvkuqHliqjnlLvmkq3mlL7lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWFkQ29tKCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCh0aGlzLkZJU0hfREVBRCwgW3RoaXNdKTtcclxuICAgICAgICBsYXlhLnV0aWxzLlBvb2wucmVjb3Zlcih0aGlzLmZpc2hWby5maXNoSW5mbywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rouqvmrbvkuqHvvIzkuI3mmK/ooqvlh7vkuK3mrbvkuqFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWxmRGVkKCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCh0aGlzLkZJU0hfREVBRF9TRUxGLCBbdGhpc10pO1xyXG4gICAgICAgIGxheWEudXRpbHMuUG9vbC5yZWNvdmVyKHRoaXMuZmlzaFZvLmZpc2hJbmZvLCB0aGlzKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMubG9vcEhhbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W56Kw5pKe55+p5b2iXHJcbiAgICAgKiBAcmV0dXJuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRIaXRSZWN0YW5nbGUoKTpsYXlhLm1hdGhzLlJlY3RhbmdsZXtcclxuICAgICAgICB2YXIgZ2xvYmFsOmxheWEubWF0aHMuUG9pbnQgPSB0aGlzLmxvY2FsVG9HbG9iYWwobmV3IGxheWEubWF0aHMuUG9pbnQoLXRoaXMuc2VsZldpZHRoLzIsIC10aGlzLnNlbGZIZWlnaHQvMit0aGlzLmZpc2hWby5oaXRWYWx1ZSksIHRydWUpO1xyXG4gICAgICAgIHZhciByZWM6bGF5YS5tYXRocy5SZWN0YW5nbGUgPSBuZXcgbGF5YS5tYXRocy5SZWN0YW5nbGUoZ2xvYmFsLngsIGdsb2JhbC55LCB0aGlzLnNlbGZXaWR0aCwgdGhpcy5zZWxmSGVpZ2h0IC0gdGhpcy5maXNoVm8uaGl0VmFsdWUqMik7XHJcbiAgICAgICAgcmV0dXJuIHJlYztcclxuICAgIH1cclxufSIsImltcG9ydCBBbmltYXRpb24gPSBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG5pbXBvcnQgeyBGaXNoRmF0aGVyIH0gZnJvbSBcIi4vRmlzaEZhdGhlclwiO1xyXG5pbXBvcnQgeyBGaXNoVm8gfSBmcm9tIFwiLi4vLi4vZGF0YS9GaXNoVm9cIjtcclxuaW1wb3J0IHsgRGF0YVByb3h5IH0gZnJvbSBcIi4uLy4uL2RhdGEvRGF0YVByb3h5XCI7XHJcbmltcG9ydCBQb2ludCA9IGxheWEubWF0aHMuUG9pbnQ7XHJcbmV4cG9ydCBjbGFzcyBGaXNoTWFuYWdlcntcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkZpc2hNYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkZpc2hNYW5hZ2Vye1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRmlzaE1hbmFnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6bG85q2j5bi454q25oCBXHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfMTpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzFcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF8yOnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfMlwiO1xyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzM6c3RyaW5nID0gXCJmaXNoX25vcm1hbF8zXCI7XHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfNDpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzRcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF81OnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfNVwiO1xyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzY6c3RyaW5nID0gXCJmaXNoX25vcm1hbF82XCI7XHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfNzpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzdcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF84OnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfOFwiO1xyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzk6c3RyaW5nID0gXCJmaXNoX25vcm1hbF85XCI7XHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfMTA6c3RyaW5nID0gXCJmaXNoX25vcm1hbF8xMFwiO1xyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzExOnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfMTFcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF8xMjpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzEyXCI7XHJcblx0XHRcclxuXHRcdC8v6bG85q275Lqh54q25oCBXHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzE6c3RyaW5nID0gXCJmaXNoX2RlYWRfMVwiO1xyXG5cdFx0cHVibGljIEZJU0hfREVBRF8yOnN0cmluZyA9IFwiZmlzaF9kZWFkXzJcIjtcclxuXHRcdHB1YmxpYyBGSVNIX0RFQURfMzpzdHJpbmcgPSBcImZpc2hfZGVhZF8zXCI7XHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzQ6c3RyaW5nID0gXCJmaXNoX2RlYWRfNFwiO1xyXG5cdFx0cHVibGljIEZJU0hfREVBRF81OnN0cmluZyA9IFwiZmlzaF9kZWFkXzVcIjtcclxuXHRcdHB1YmxpYyBGSVNIX0RFQURfNjpzdHJpbmcgPSBcImZpc2hfZGVhZF82XCI7XHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzc6c3RyaW5nID0gXCJmaXNoX2RlYWRfN1wiO1xyXG5cdFx0cHVibGljIEZJU0hfREVBRF84OnN0cmluZyA9IFwiZmlzaF9kZWFkXzhcIjtcclxuXHRcdHB1YmxpYyBGSVNIX0RFQURfOTpzdHJpbmcgPSBcImZpc2hfZGVhZF85XCI7XHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzEwOnN0cmluZyA9IFwiZmlzaF9kZWFkXzEwXCI7XHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzExOnN0cmluZyA9IFwiZmlzaF9kZWFkXzExXCI7XHJcbiAgICAgICAgcHVibGljIEZJU0hfREVBRF8xMjpzdHJpbmcgPSBcImZpc2hfZGVhZF8xMlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcbiAgICAgICAgcHVibGljIGNhY2hlQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vL2lkIDAg5bCP5LiR6bG8XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxMi9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF8xKTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEyL2RlYWQuYXRsYXNcIix0aGlzLkZJU0hfREVBRF8xKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDEg6Jy76JyT6bG8XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g4L2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzIpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoOC9kZWFkLmF0bGFzXCIsIHRoaXMuRklTSF9ERUFEXzIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8vaWQgMiDpu4TpsbxcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDUvbGl2ZS5hdGxhc1wiLHRoaXMuRklTSF9OT1JNQUxfMyk7XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g1L2RlYWQuYXRsYXNcIiwgdGhpcy5GSVNIX0RFQURfMyk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLy9pZCAzIOeDreW4pumxvFxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoOS9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF80KTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDkvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF80KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDQg6YeR5p6q6bG8XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g3L2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzUpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNy9kZWFkLmF0bGFzXCIsIHRoaXMuRklTSF9ERUFEXzUpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8vaWQgNSDmsLTmr41cclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEwL2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzYpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTAvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF82KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDYg6bOE6bG8XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gyL2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzcpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMi9kZWFkLmF0bGFzXCIsIHRoaXMuRklTSF9ERUFEXzcpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8vaWQgNyDlpKfkuYzpvp9cclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDExL2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzgpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTEvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF84KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDgg5rW36LGaXHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g0L2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzkpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNC9kZWFkLmF0bGFzXCIsIHRoaXMuRklTSF9ERUFEXzkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8vaWQgOSDpsrjpsbxcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDYvbGl2ZS5hdGxhc1wiLHRoaXMuRklTSF9OT1JNQUxfMTApO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNi9kZWFkLmF0bGFzXCIsIHRoaXMuRklTSF9ERUFEXzEwKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDEwIOa1t+iDhumxvFxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMy9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF8xMSk7XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gzL2RlYWQuYXRsYXNcIiwgdGhpcy5GSVNIX0RFQURfMTEpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8vaWQgMTEg54Gv56y86bG8XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxL2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzEyKTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF8xMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY3JlYXRlRmlzaEJ5SWQoaWQ6bnVtYmVyKTpGaXNoRmF0aGVye1xyXG4gICAgICAgICAgICB2YXIgZmlzaDpGaXNoRmF0aGVyO1xyXG5cdFx0XHR2YXIgZmlzaFZvOkZpc2hWbyA9IERhdGFQcm94eS5nZXRJbnN0YW5jZSgpLmdldERhdGFCeUlkKGlkKTtcclxuXHRcdFx0ZmlzaCA9IGxheWEudXRpbHMuUG9vbC5nZXRJdGVtQnlDbGFzcyhcImZpc2hfaW5mb19cIisoaWQrMSkrXCJcIiwgRmlzaEZhdGhlcik7XHJcbiAgICAgICAgICAgIGZpc2hWby5maXNoSW5mbyA9IFwiZmlzaF9pbmZvX1wiKyhpZCsxKStcIlwiO1xyXG4gICAgICAgICAgICBmaXNoVm8ubGV2ZUFuID0gXCJmaXNoX25vcm1hbF9cIisoaWQrMSkrXCJcIjtcclxuICAgICAgICAgICAgZmlzaFZvLmRlYWRBbiA9IFwiZmlzaF9kZWFkX1wiKyhpZCsxKStcIlwiO1xyXG5cclxuICAgICAgICAgICAgZmlzaC5maXNoVm8gPSBmaXNoVm87XHJcbiAgICAgICAgICAgIGZpc2guaWQgPSBpZFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZpc2g7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyByZWNvdmVyZmlzaChmaXNoOkZpc2hGYXRoZXIpe1xyXG5cdFx0XHRsYXlhLnV0aWxzLlBvb2wucmVjb3ZlcihmaXNoLmZpc2hWby5maXNoSW5mbywgZmlzaCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDojrflj5blv4PlvaLot6/lvoTngrlcclxuXHRcdCAqIEBwYXJhbVx0ZGlzICDlpKflsI9cclxuXHRcdCAqIEBwYXJhbVx0bWogICDngrnlr4bpm4bluqZcclxuXHRcdCAqIEByZXR1cm5cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIGhlYXJ0UGF0aERvdChkaXM6bnVtYmVyPTE1MCxtajpudW1iZXI9MTApOkFycmF5PGFueT57XHJcblx0XHRcdHZhciBhbmdsZTpudW1iZXI7Ly/lgqjlrZjmnoHop5JcclxuXHRcdFx0dmFyIHA6bGF5YS5tYXRocy5Qb2ludDtcclxuXHRcdFx0dmFyIHJhcnI6QXJyYXk8YW55PiA9IFtdO1xyXG5cdFx0XHR2YXIgc2luOm51bWJlcjtcclxuXHRcdFx0dmFyIGNvczpudW1iZXI7XHJcblx0XHRcdHZhciBoZWFydFg6bnVtYmVyID0gMDsvL+W/g+W9ouS4reeCueeahOWdkOagh1xyXG5cdFx0XHR2YXIgaGVhcnRZOm51bWJlciA9IDA7XHJcblx0XHRcdHZhciBoZWFydFNpemU6bnVtYmVyID0gZGlzOy8v5b+D5b2i55qE5aSn5bCPXHJcblx0XHRcdCBcclxuXHRcdFx0dmFyIEE6bnVtYmVyID0gTWF0aC5QSS80O1xyXG5cdFx0XHR2YXIgWDpudW1iZXI7XHJcblx0XHRcdHZhciBZOm51bWJlcjtcclxuXHRcdFx0dmFyIGxhc3RYOm51bWJlcjtcclxuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDw9IDM2MDsgaSs9bWopIHtcclxuXHRcdFx0XHQgLy/orqHnrpfmnoHop5LlkozmnoHlvoRcclxuXHRcdFx0XHQgYW5nbGUgPSBNYXRoLlBJICogaSAvIDE4MDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHRcdCAvL+W/g+W9olxyXG5cdFx0XHRcdCBYPTIqTWF0aC5jb3MoYW5nbGUpKk1hdGguY29zKEEpIC0gTWF0aC5zaW4oYW5nbGUpKk1hdGguc2luKEEpO1xyXG5cdFx0XHRcdCBZPTIqTWF0aC5jb3MoYW5nbGUpKk1hdGguc2luKEEpICsgTWF0aC5zaW4oYW5nbGUpKk1hdGguY29zKEEpO1xyXG5cdFx0XHRcdCBpZihYPjApe1xyXG5cdFx0XHRcdFx0WSA9IC1ZO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IFxyXG5cdFx0XHRcdCBwID0gbmV3IGxheWEubWF0aHMuUG9pbnQoaGVhcnRYICsgWCAqIGhlYXJ0U2l6ZSwgaGVhcnRZICsgWSAqIGhlYXJ0U2l6ZSk7XHJcblx0XHRcdFx0IHJhcnIucHVzaChwKTtcclxuXHRcdFx0XHQgXHJcblx0XHRcdFx0IGxhc3RYID0gWDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmFycjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOefqeW9oui3r+W+hOeCuVxyXG5cdFx0ICogQHBhcmFtXHRyb3dzXHJcblx0XHQgKiBAcGFyYW1cdGNvbHNcclxuXHRcdCAqIEBwYXJhbVx0c3BhY2VcclxuXHRcdCAqIEByZXR1cm5cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIHJlY3RQYXRoRG90KHJvd3M6bnVtYmVyPTQsIGNvbHM6bnVtYmVyPTgsIHNwYWNlOm51bWJlciA9IDgwKTpBcnJheTxhbnk+e1xyXG5cdFx0XHR2YXIgcDpQb2ludDtcclxuXHRcdFx0dmFyIGFycjpBcnJheTxhbnk+ID0gW107XHJcblx0XHRcdHZhciB4eDpudW1iZXI9MDtcclxuXHRcdFx0dmFyIHl5Om51bWJlcj0wO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgY29sczsgaisrKSB7XHJcblx0XHRcdFx0XHRwID0gbmV3IFBvaW50KHh4LCB5eSk7XHJcblx0XHRcdFx0XHR4eCArPSBzcGFjZTtcclxuXHRcdFx0XHRcdGFyci5wdXNoKHApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR4eCA9IDA7XHJcblx0XHRcdFx0eXkgKz0gc3BhY2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGFycjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOiPseW9oui3r+W+hOeCuVxyXG5cdFx0ICogQHBhcmFtXHRyb3dzXHJcblx0XHQgKiBAcGFyYW1cdGNvbHNcclxuXHRcdCAqIEBwYXJhbVx0c3BhY2VcclxuXHRcdCAqIEByZXR1cm5cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIHJob21iUGF0aERvdChyb3dzOm51bWJlcj03LGNvbHM6bnVtYmVyPTcsc3BhY2U6bnVtYmVyPTgwKTpBcnJheTxhbnk+IHtcclxuXHRcdFx0dmFyIHZhbDpudW1iZXIgPSBNYXRoLmZsb29yKGNvbHMgLyAyKTsvL+W8gOWni+epuueahOagvOaVsFxyXG5cdFx0XHR2YXIgcDpQb2ludDtcclxuXHRcdFx0dmFyIGFycjpBcnJheTxhbnk+ID0gW107XHJcblx0XHRcdHZhciB4eDpudW1iZXI9MDtcclxuXHRcdFx0dmFyIHl5Om51bWJlciA9IDA7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgZmxhZzpudW1iZXIgPSAxOy8vMeWwhuW6jyAgMuWNh+W6j1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG5cdFx0XHRcdGlmICh2YWwgPCAwKSB7XHJcblx0XHRcdFx0XHRmbGFnID0gMjtcclxuXHRcdFx0XHRcdHZhbCA9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAodmFyIGogPSB2YWw7IGogPCB2YWwrKGNvbHMtdmFsKjIpOyBqKyspIHtcclxuXHRcdFx0XHRcdHh4ID0gaiAqIHNwYWNlO1xyXG5cdFx0XHRcdFx0cCA9IG5ldyBQb2ludCh4eCwgeXkpO1xyXG5cdFx0XHRcdFx0YXJyLnB1c2gocCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChmbGFnID09IDEpIHtcclxuXHRcdFx0XHRcdHZhbC0tO1xyXG5cdFx0XHRcdH1lbHNlIGlmIChmbGFnID09IDIpIHtcclxuXHRcdFx0XHRcdHZhbCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR5eSArPSBzcGFjZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog5ZyG5b2i6Lev5b6EXHJcblx0XHQgKiBAcGFyYW1cdGNvdW50IOWHoOeOr1xyXG5cdFx0ICogQHBhcmFtXHRzcGFjZSDljYrlvoTpl7Tot51cclxuXHRcdCAqIEBwYXJhbVx0YW5nbGVTcGFjZSDop5Lluqbpl7Tot51cclxuXHRcdCAqIEByZXR1cm5cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIGNpcmNsZVBhdGhEb3QoY291bnQ6bnVtYmVyPTMsc3BhY2U6bnVtYmVyPTgwLGFuZ2xlU3BhY2U6bnVtYmVyPTMwKTpBcnJheTxhbnk+IHtcclxuXHRcdFx0dmFyIHJhZGl1czpudW1iZXIgPSAwO1xyXG5cdFx0XHR2YXIgYW5nbGU6bnVtYmVyO1xyXG5cdFx0XHR2YXIgcDpQb2ludDtcclxuXHRcdFx0dmFyIGFycjpBcnJheTxhbnk+ID0gW107XHJcblx0XHRcdHZhciB4eDpudW1iZXI9MDtcclxuXHRcdFx0dmFyIHl5Om51bWJlciA9IDA7XHJcblx0XHRcdGZvciAodmFyIGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuXHRcdFx0XHRyYWRpdXMgPSBpICogc3BhY2U7XHJcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCAzNjA7IGogKz0gYW5nbGVTcGFjZSkge1xyXG5cdFx0XHRcdFx0eHggPSBNYXRoLmNvcyhqICogTWF0aC5QSSAvIDE4MCkgKiByYWRpdXM7XHJcblx0XHRcdFx0XHR5eSA9IE1hdGguc2luKGogKiBNYXRoLlBJIC8gMTgwKSAqIHJhZGl1cztcclxuXHRcdFx0XHRcdHAgPSBuZXcgUG9pbnQoeHgsIHl5KTtcclxuXHRcdFx0XHRcdGFyci5wdXNoKHApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fVxyXG59IiwiaW1wb3J0IEFuaW1hdGlvbiA9IGxheWEuZGlzcGxheS5BbmltYXRpb247XHJcbmltcG9ydCBUd2VlbiA9IGxheWEudXRpbHMuVHdlZW47XHJcbmltcG9ydCBQb2ludCA9IGxheWEubWF0aHMuUG9pbnQ7XHJcbmltcG9ydCBSZWN0YW5nbGUgPSBsYXlhLm1hdGhzLlJlY3RhbmdsZTtcclxuaW1wb3J0IEVhc2UgPSBsYXlhLnV0aWxzLkVhc2U7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9HbG9iYWxcIjtcclxuZXhwb3J0IGNsYXNzIFRvb2xzIGV4dGVuZHMgTGF5YS5TcHJpdGV7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpUb29scztcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpUb29sc3tcclxuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVG9vbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBERUFEX09WRVI6c3RyaW5nID0gXCJkZWFkX292ZXJcIjsvL+atu+S6oeWKqOeUu+aSreaUvuWujOaIkFxyXG4gICAgcHVibGljIERFQURFRDpzdHJpbmcgPSAnZGVhZGVkJzsvL+atu+S6oVxyXG4gICAgcHVibGljIERFQURfU0VMRjpzdHJpbmcgPSAnZGVhZF9zZWxmJzsvL+iHquavgVxyXG4gICAgcHJpdmF0ZSBkZWFkU2VsZlRpbWU6bnVtYmVyID0gMTAwMDA7XHJcbiAgICBwdWJsaWMgZGVhZGVkOkJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYW5Cb2R5OkFuaW1hdGlvbjtcclxuICAgIHB1YmxpYyBub3JtYWxBbjpzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVhZEFuOnN0cmluZztcclxuICAgIHByaXZhdGUgX3R5cGU6bnVtYmVyOy8v57G75Z6LXHJcbiAgICBwcml2YXRlIHNlbGZXaWR0aDpudW1iZXI7XHJcbiAgICBwcml2YXRlIHNlbGZIZWlnaHQ6bnVtYmVyO1xyXG5cclxuICAgIC8v6I635Y+W56Kw5pKe55+p5b2i5Yy65Z+f5L+u5q2j5YC8XHJcbiAgICBwdWJsaWMgeHZhbDpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHl2YWw6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB3dmFsOm51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaHZhbDpudW1iZXIgPSAwO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuVG9vbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHR5cGUodmFsOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFuQm9keS5wbGF5KDAsIHRydWUsIHRoaXMubm9ybWFsQW4pO1xyXG4gICAgICAgIHRoaXMuYW5Cb2R5LnBvcyggLXRoaXMuYW5Cb2R5LmdldEJvdW5kcygpLndpZHRoIC8gMiwgLXRoaXMuYW5Cb2R5LmdldEJvdW5kcygpLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2VsZldpZHRoID0gdGhpcy5hbkJvZHkuZ2V0Qm91bmRzKCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zZWxmSGVpZ2h0ID0gdGhpcy5hbkJvZHkuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy5ncmFwaGljcy5kcmF3UmVjdCggLXNlbGZXaWR0aCAvIDIreHZhbCwgLXNlbGZIZWlnaHQgLyAyK3l2YWwsIHNlbGZXaWR0aC13dmFsLCBzZWxmSGVpZ2h0LWh2YWwsXCIjZmYwMDAwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUb29scygpe1xyXG4gICAgICAgIHRoaXMuYW5Cb2R5ID0gbmV3IEFuaW1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5hbkJvZHkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKXtcclxuICAgICAgICB0aGlzLmRlYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUoMCwgMCk7XHJcbiAgICAgICAgVHdlZW4udG8odGhpcywge3NjYWxlWDoyLCBzY2FsZVk6Mn0sIDE1MCwgRWFzZS5iYWNrT3V0LCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIFR3ZWVuLnRvKHRoaXMsIHtzY2FsZVg6MSwgc2NhbGVZOjF9LCAxNTAsIEVhc2UuYmFja0luKTtcclxuICAgICAgICB9KSlcclxuICAgICAgICB0aGlzLmRlYWRTZWxmSCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL6Ieq5q+BXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWFkU2VsZkgoKXtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UodGhpcy5kZWFkU2VsZlRpbWUsIHRoaXMsIHRoaXMuZGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGgoKXtcclxuICAgICAgICB0aGlzLmRlYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWFkU2VsZlMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHquavgeaTjeS9nFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlYWRTZWxmUygpe1xyXG4gICAgICAgIFR3ZWVuLnRvKHRoaXMsIHtzY2FsZVg6MCwgc2NhbGVZOjB9LCAyMDAsIEVhc2UuYmFja0luLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnQodGhpcy5ERUFEX1NFTEYsIFt0aGlzXSlcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmrbvkuqFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2VTKCl7XHJcbiAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuSVNQQVVTRSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWFkZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5Cb2R5LnBsYXkoMCwgZmFsc2UsIHRoaXMuZGVhZEFuKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMuZGgpO1xyXG4gICAgICAgIHRoaXMuYW5Cb2R5Lm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuZGVhZEFuQ29tKTtcclxuICAgICAgICB0aGlzLmV2ZW50KHRoaXMuREVBREVELCBbdGhpc10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q275Lqh5Yqo55S75pKt5pS+5a6MXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVhZEFuQ29tKCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCh0aGlzLkRFQURfT1ZFUiwgW3RoaXNdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueisOaSnuefqeW9olxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SGl0UmVjdGFuZ2xlKCk6UmVjdGFuZ2xle1xyXG4gICAgICAgIHZhciBnbG9iYWw6UG9pbnQgPSB0aGlzLmxvY2FsVG9HbG9iYWwobmV3IFBvaW50KC10aGlzLnNlbGZXaWR0aC8yLCAtdGhpcy5zZWxmSGVpZ2h0LzIpLCB0cnVlKTtcclxuICAgICAgICB2YXIgcmVjOlJlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoZ2xvYmFsLngrdGhpcy54dmFsLCBnbG9iYWwueSt0aGlzLnl2YWwsIHRoaXMuc2VsZldpZHRoLXRoaXMud3ZhbCwgdGhpcy5zZWxmSGVpZ2h0LXRoaXMuaHZhbCk7XHJcbiAgICAgICAgcmV0dXJuIHJlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEFuaW1hdGlvbiA9IGxheWEuZGlzcGxheS5BbmltYXRpb247XHJcbmltcG9ydCBTb3VuZE1hbmFnZXIgPSBsYXlhLm1lZGlhLlNvdW5kTWFuYWdlcjtcclxuaW1wb3J0IFBvb2wgPSBsYXlhLnV0aWxzLlBvb2w7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4vVG9vbHNcIjtcclxuZXhwb3J0IGNsYXNzIFRvb2xzTWFuYWdlcntcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOlRvb2xzTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpUb29sc01hbmFnZXJ7XHJcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRvb2xzTWFuYWdlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqjnlLvmoIfor4ZcclxuICAgIC8v6bG86Zu3XHJcbiAgICBwdWJsaWMgQk9NQl9OT1JNQUw6c3RyaW5nID0gXCJib21iX25vcm1hbFwiO1xyXG4gICAgcHVibGljIEJPTUJfQk9PTTpzdHJpbmcgPSBcImJvbWJfYm9vbVwiO1xyXG4gICAgLy/lrp3nrrFcclxuICAgIHB1YmxpYyBCT1hfTk9STUFMOnN0cmluZyA9IFwiYm94X25vcm1hbFwiO1xyXG4gICAgcHVibGljIEJPWF9PUEVOOnN0cmluZyA9IFwiYm94X29wZW5cIjtcclxuICAgIC8v5Yqb6YePXHJcbiAgICBwdWJsaWMgUE9XRVJfTk9STUFMOnN0cmluZyA9IFwicG93ZXJfbm9ybWFsXCI7XHJcbiAgICBwdWJsaWMgUE9XRVJfT1BFTjpzdHJpbmcgPSBcInBvd2VyX29wZW5cIjtcclxuICAgIC8v6bG86aW1XHJcbiAgICBwdWJsaWMgRk9PRF9OT1JNQUw6c3RyaW5nID0gXCJmb29kX25vcm1hbFwiO1xyXG4gICAgcHVibGljIEZPT0RfRUFUOnN0cmluZyA9IFwiZm9vZF9lYXRcIjtcclxuICAgIFxyXG4gICAgLy/nsbvlnotcclxuICAgIHB1YmxpYyBUWVBFX0JPT006bnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBUWVBFX0JPWDpudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIFRZUEVfUE9XRVI6bnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBUWVBFX0Zvb2Q6bnVtYmVyID0gNDtcclxuICAgIFxyXG4gICAgLy/pgZPlhbfpm4blkIhcclxuICAgIHB1YmxpYyB0b29sQXJyOkFycmF5PGFueT4gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe8k+WtmOWKqOeUu1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FjaGVBbmltYXRpb24oKXtcclxuICAgICAgICAvL2JvbWJcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvdG9vbHMvYm9vbS5qc29uXCIsIHRoaXMuQk9NQl9CT09NKTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvdG9vbHMvYm9vbS9ib29tMDAwMS5wbmdcIl0sIHRoaXMuQk9NQl9OT1JNQUwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5a6d566xXHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL3Rvb2xzL2J4LnBuZ1wiXSwgdGhpcy5CT1hfTk9STUFMKTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvdG9vbHMvYngucG5nXCJdLCB0aGlzLkJPWF9PUEVOKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WKm+mHj1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC90b29scy9wb3dlci5wbmdcIl0sIHRoaXMuUE9XRVJfTk9STUFMKTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvdG9vbHMvcG93ZXIucG5nXCJdLCB0aGlzLlBPV0VSX09QRU4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6bG86aW1XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL3Rvb2xzL2Zpc2hmb29kLnBuZ1wiXSwgdGhpcy5GT09EX05PUk1BTCk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL3Rvb2xzL2Zpc2hmb29kLnBuZ1wiXSwgdGhpcy5GT09EX0VBVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7pcclxuICAgICAqIEBwYXJhbVx0dHlwZVxyXG4gICAgICogQHJldHVyblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlVG9vbEJ5VHlwZSh0eXBlOm51bWJlcik6VG9vbHN7XHJcbiAgICAgICAgdmFyIHRvb2w6VG9vbHMgPSBQb29sLmdldEl0ZW1CeUNsYXNzKFwiXCIrdHlwZSwgVG9vbHMpO1xyXG4gICAgICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdG9vbC5ub3JtYWxBbiA9IHRoaXMuQk9NQl9OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICB0b29sLmRlYWRBbiA9IHRoaXMuQk9NQl9CT09NO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b29sLnh2YWwgPSA0MDtcclxuICAgICAgICAgICAgICAgIHRvb2wueXZhbCA9IDQwO1xyXG4gICAgICAgICAgICAgICAgdG9vbC53dmFsID0gOTA7XHJcbiAgICAgICAgICAgICAgICB0b29sLmh2YWwgPSA2MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0b29sLm5vcm1hbEFuID0gdGhpcy5CT1hfTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgdG9vbC5kZWFkQW4gPSB0aGlzLkJPWF9PUEVOO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRvb2wubm9ybWFsQW4gPSB0aGlzLlBPV0VSX05PUk1BTDtcclxuICAgICAgICAgICAgICAgIHRvb2wuZGVhZEFuID0gdGhpcy5QT1dFUl9PUEVOO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRvb2wubm9ybWFsQW4gPSB0aGlzLkZPT0RfTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgdG9vbC5kZWFkQW4gPSB0aGlzLkZPT0RfRUFUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRvb2wudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdG9vbC5vbmNlKFRvb2xzLmdldEluc3RhbmNlKCkuREVBRF9PVkVSLCB0aGlzLCB0aGlzLmRlYWRBbk92ZXIpO1xyXG4gICAgICAgIHRvb2wub25jZShUb29scy5nZXRJbnN0YW5jZSgpLkRFQURFRCwgdGhpcywgdGhpcy5kZWFkZWRPdmVyKTtcclxuICAgICAgICB0b29sLm9uY2UoVG9vbHMuZ2V0SW5zdGFuY2UoKS5ERUFEX1NFTEYsIHRoaXMsIHRoaXMuZGVhZGVkU2VsZk92ZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRvb2wuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG9vbEFyci5wdXNoKHRvb2wpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5U291bmQoXCJyZXMvc291bmQvdG9vbC5tcDNcIik7XHJcbiAgICAgICAgcmV0dXJuIHRvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmrbvkuqHliqjnlLvnu5PmnZ9cclxuICAgICAqIEBwYXJhbSB0b29scyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlYWRBbk92ZXIodG9vbHM6VG9vbHMpe1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLnRvb2xBcnIuaW5kZXhPZih0b29scyk7XHJcbiAgICAgICAgdGhpcy50b29sQXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYWRlZE92ZXIodG9vbHM6VG9vbHMpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHquavgee7k+adn1xyXG4gICAgICogQHBhcmFtIHRvb2xzIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVhZGVkU2VsZk92ZXIodG9vbHM6VG9vbHMpe1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLnRvb2xBcnIuaW5kZXhPZih0b29scyk7XHJcbiAgICAgICAgdGhpcy50b29sQXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlY292ZXIodG9vbDpUb29scyl7XHJcbiAgICAgICAgdG9vbC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgUG9vbC5yZWNvdmVyKFwiXCIrdG9vbC50eXBlLCB0b29sKTtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbnZhciBSRUc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xuZXhwb3J0IG1vZHVsZSB1aSB7XHJcbiAgICBleHBvcnQgY2xhc3MgR2FtZVZpZXdVSSBleHRlbmRzIFZpZXcge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjoxMjgwLFwiaGVpZ2h0XCI6NzAwfSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJTcHJpdGVcIixcInByb3BzXCI6e1wieVwiOi0xMCxcInhcIjotMixcInRleHR1cmVcIjpcImltZy9CRzAxLnBuZ1wiLFwibmFtZVwiOlwiYmdcIn0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJCb3hcIixcInByb3BzXCI6e1wieVwiOjUzNCxcInhcIjowLFwid2lkdGhcIjo0MTAsXCJuYW1lXCI6XCJwbGF5ZXIxXCIsXCJoZWlnaHRcIjoxNzZ9LFwiY29tcElkXCI6NCxcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjo5NyxcInhcIjowLFwid2lkdGhcIjoyMDEsXCJza2luXCI6XCJpbWcvSW1hZ2VfZG91ZGl6aHVfdG91eGlhbmdkaWt1YW5nLnBuZ1wiLFwiaGVpZ2h0XCI6Nzl9LFwiY29tcElkXCI6NSxcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjo1LFwieFwiOjAsXCJ3aWR0aFwiOjczLFwic2tpblwiOlwiaW1nL0ltYWdlX2RvdWRpemh1X3RvdXhpYW5na3VhbmcucG5nXCIsXCJoZWlnaHRcIjo3NH0sXCJjb21wSWRcIjo2LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjMsXCJ4XCI6NCxcIndpZHRoXCI6NjUsXCJza2luXCI6XCJpbWcvaWNvbl9kZWZhdWx0LnBuZ1wiLFwiaGVpZ2h0XCI6NjJ9LFwiY29tcElkXCI6N31dfV19LHtcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjoxMDguNSxcInhcIjo4MCxcIndpZHRoXCI6MTA4LFwic2tpblwiOlwiaW1nL0ltYWdlX2RvdWRpemh1X3BhaXhpbmcucG5nXCIsXCJoZWlnaHRcIjoyOH0sXCJjb21wSWRcIjo4fSx7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MTQwLFwieFwiOjgwLFwid2lkdGhcIjoxMDgsXCJza2luXCI6XCJpbWcvSW1hZ2VfZG91ZGl6aHVfcGFpeGluZy5wbmdcIixcImhlaWdodFwiOjI4fSxcImNvbXBJZFwiOjl9LHtcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjoxMDguNSxcInhcIjo4MCxcInNraW5cIjpcImltZy9qcF9qYi5wbmdcIn0sXCJjb21wSWRcIjoxMH0se1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjE0MixcInhcIjo4MCxcIndpZHRoXCI6MjUsXCJza2luXCI6XCJpbWcvenVhbnNoaV8wMS5wbmdcIixcImhlaWdodFwiOjI0fSxcImNvbXBJZFwiOjExfSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTA5LFwieFwiOjExNCxcIndpZHRoXCI6NjIsXCJ2YWxpZ25cIjpcIm1pZGRsZVwiLFwidGV4dFwiOlwiMFwiLFwibmFtZVwiOlwiY29pbk51bVwiLFwiaGVpZ2h0XCI6MjYsXCJmb250U2l6ZVwiOjE4LFwiZm9udFwiOlwiSGVsdmV0aWNhXCIsXCJjb2xvclwiOlwiI2RlYjkyNVwiLFwiYm9sZFwiOnRydWUsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MTJ9LHtcInR5cGVcIjpcIkxhYmVsXCIsXCJwcm9wc1wiOntcInlcIjoxNDAsXCJ4XCI6MTE0LFwid2lkdGhcIjo2MixcInZhbGlnblwiOlwibWlkZGxlXCIsXCJ0ZXh0XCI6XCIwXCIsXCJuYW1lXCI6XCJkaWFtb25kTnVtXCIsXCJoZWlnaHRcIjoyNixcImZvbnRTaXplXCI6MTgsXCJmb250XCI6XCJIZWx2ZXRpY2FcIixcImNvbG9yXCI6XCIjZGViOTI1XCIsXCJib2xkXCI6dHJ1ZSxcImFsaWduXCI6XCJjZW50ZXJcIn0sXCJjb21wSWRcIjoxM30se1widHlwZVwiOlwiQm94XCIsXCJwcm9wc1wiOntcInlcIjo5NyxcInhcIjoyMDEsXCJ3aWR0aFwiOjE4OSxcIm5hbWVcIjpcImNhbm5vblwiLFwiaGVpZ2h0XCI6ODF9LFwiY29tcElkXCI6MTQsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MjcsXCJ4XCI6MCxcIndpZHRoXCI6MTg4LFwic2tpblwiOlwiaW1nL2R6MS5wbmdcIixcIm5hbWVcIjpcInBhb3RhaVwiLFwiaGVpZ2h0XCI6NTR9LFwiY29tcElkXCI6MTV9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTQsXCJ4XCI6MTM3LFwid2lkdGhcIjoyOSxcInNraW5cIjpcImltZy9idXR0b25fYXJyb3cucG5nXCIsXCJuYW1lXCI6XCJidG5fbmV4dFwiLFwiaGVpZ2h0XCI6MjJ9LFwiY29tcElkXCI6MTd9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NzYsXCJ4XCI6NTAsXCJ3aWR0aFwiOjI5LFwic2tpblwiOlwiaW1nL2J1dHRvbl9hcnJvdy5wbmdcIixcInJvdGF0aW9uXCI6MTgwLFwibmFtZVwiOlwiYnRuX3ByZVwiLFwiaGVpZ2h0XCI6MjJ9LFwiY29tcElkXCI6MTh9XX1dfSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjksXCJ4XCI6MTEsXCJ3aWR0aFwiOjUwLFwic3RhdGVOdW1cIjoyLFwic2tpblwiOlwiaW1nL21lcmdlX0ltYWdlX3BhaXpodW9uZWlfZmFuaHVpLnBuZ1wiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6MTZ9XSxcImxvYWRMaXN0XCI6W1wiaW1nL0JHMDEucG5nXCIsXCJpbWcvSW1hZ2VfZG91ZGl6aHVfdG91eGlhbmdkaWt1YW5nLnBuZ1wiLFwiaW1nL0ltYWdlX2RvdWRpemh1X3RvdXhpYW5na3VhbmcucG5nXCIsXCJpbWcvaWNvbl9kZWZhdWx0LnBuZ1wiLFwiaW1nL0ltYWdlX2RvdWRpemh1X3BhaXhpbmcucG5nXCIsXCJpbWcvanBfamIucG5nXCIsXCJpbWcvenVhbnNoaV8wMS5wbmdcIixcImltZy9kejEucG5nXCIsXCJpbWcvYnV0dG9uX2Fycm93LnBuZ1wiLFwiaW1nL21lcmdlX0ltYWdlX3BhaXpodW9uZWlfZmFuaHVpLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoR2FtZVZpZXdVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLkdhbWVWaWV3VUlcIixHYW1lVmlld1VJKTtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2FkaW5nVmlld1VJIGV4dGVuZHMgVmlldyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiVmlld1wiLFwicHJvcHNcIjp7XCJ3aWR0aFwiOjEyODAsXCJoZWlnaHRcIjo3MDB9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjowLFwieFwiOjAsXCJza2luXCI6XCJsb2FkL2xhZGluZ19iZzEucG5nXCJ9LFwiY29tcElkXCI6NH0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo1MjMsXCJ4XCI6NDk0LFwid2lkdGhcIjoyOTEsXCJ2aXNpYmxlXCI6dHJ1ZSxcInN0YXRlTnVtXCI6MyxcInNraW5cIjpcImxvYWQvYnV0dG9uX3N0YXIucG5nXCIsXCJuYW1lXCI6XCJzdGFydFwiLFwiaGVpZ2h0XCI6MTM0fSxcImNvbXBJZFwiOjN9LHtcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjo0MTIsXCJ4XCI6NDI3LjUsXCJza2luXCI6XCJsb2FkL2xpbmViZy5wbmdcIn0sXCJjb21wSWRcIjo3fSx7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6NDM5LFwieFwiOjQ1NCxcIndpZHRoXCI6MzIsXCJza2luXCI6XCJsb2FkL2JhcnMucG5nXCIsXCJuYW1lXCI6XCJkb3RcIixcImhlaWdodFwiOjQ3fSxcImNvbXBJZFwiOjh9XSxcImxvYWRMaXN0XCI6W1wibG9hZC9sYWRpbmdfYmcxLnBuZ1wiLFwibG9hZC9idXR0b25fc3Rhci5wbmdcIixcImxvYWQvbGluZWJnLnBuZ1wiLFwibG9hZC9iYXJzLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoTG9hZGluZ1ZpZXdVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLkxvYWRpbmdWaWV3VUlcIixMb2FkaW5nVmlld1VJKTtcclxufVxyIiwiaW1wb3J0IFNwcml0ZSA9IGxheWEuZGlzcGxheS5TcHJpdGU7XHJcbmltcG9ydCBJbWFnZSA9IGxheWEudWkuSW1hZ2U7XHJcbmltcG9ydCBMYWJlbCA9IGxheWEudWkuTGFiZWw7XHJcbmltcG9ydCB7IFRpcHNEYXRhIH0gZnJvbSBcIi4vVGlwc0RhdGFcIlxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVGlwcyBleHRlbmRzIExheWEuU3ByaXRle1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6Q3VzdG9tVGlwcztcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpDdXN0b21UaXBze1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ3VzdG9tVGlwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpcnN0VGlwOkxheWEuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBzZWNvbmRUaXA6TGF5YS5TcHJpdGU7XHJcbiAgICBwcml2YXRlIG9wZURlbFNlbGY6Qm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBleGl0VGltZTpudW1iZXIgPSA0MDtcclxuICAgIHByaXZhdGUgY3VyclRpbWU6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGVtcFc6bnVtYmVyID0gMTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqB0aXBcclxuICAgICAqIEBwYXJhbVx0Y29udGFpbmVyICDlrrnlmahcclxuICAgICAqIEBwYXJhbVx0Y29udGVudCAgICDlhoXlrrlcclxuICAgICAqIEBwYXJhbVx0bG9nb2ZsYWcgICDlm77moIdcclxuICAgICAqIEBwYXJhbVx0aXNDZW50ZXIgICDmmK/lkKbmqKrlkJHlsYXkuK1cclxuICAgICAqIEBwYXJhbVx0cG9zeSAgICDnurXlkJHkvY3nva5cclxuICAgICAqIEBwYXJhbVx0cG9zeCAgICDmqKrlkJHkvY3nva4gIFxyXG4gICAgICogQHBhcmFtXHRhbnRpbWUgICAg5Yqo55S76L+Q5Yqo5pe26Ze0IFxyXG4gICAgICogQHBhcmFtXHRpc0FsbEV4aXN0ICDmmK/lkKbkuI3oh6rliqjmtojlpLFcclxuICAgICAqIEBwYXJhbVx0ZXRpbWUgIOWtmOWcqOWkmuS5heiHquWKqOmUgOavgSAyMCpldGltZSDmr6vnp5JcclxuICAgICAqIEBwYXJhbVx0bG9nb3R5cGUgIGxvZ2/nsbvlnosgPSDlr7nplJnlj7cgICAxIOihqOaDhVxyXG4gICAgICogQHBhcmFtXHRib25kICDnspfkvZNcclxuICAgICAqIEBwYXJhbVx0c2l6ZSAg5a2X5Y+3XHJcbiAgICAgKiBAcGFyYW1cdGZvbnQgIOWtl+S9k1xyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIEFkZFRpcChjb250YWluZXI6TGF5YS5TcHJpdGUsIGNvbnRlbnQ6c3RyaW5nPVwiMzMzNDM0XCIsIGxvZ29mbGFnOnN0cmluZz1cInJpZ2h0XCIsIGlzQ2VudGVyOkJvb2xlYW49dHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc3k6bnVtYmVyPTE1MCwgcG9zeDpudW1iZXI9MTAwLCBhbnRpbWU6bnVtYmVyPTMwMCwgaXNBbGxFeGlzdDpCb29sZWFuPWZhbHNlLCBldGltZTpudW1iZXIgPSA0MCwgbG9nb3R5cGU6bnVtYmVyPTAsXHJcbiAgICAgICAgICAgICAgICBib25kOkJvb2xlYW49dHJ1ZSwgc2l6ZTpudW1iZXI9MjQsIGZvbnQ6c3RyaW5nPVwi5pa55q2j5Y2h6YCa566A5L2TXCIpe1xyXG4gICAgICAgIHRoaXMuZXhpdFRpbWUgPSBldGltZTtcclxuICAgICAgICBpZighY29udGFpbmVyLmNvbnRhaW5zKHRoaXMpKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuZmlyc3RUaXApe1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0VGlwID0gdGhpcy5DcmVhdGVMb2dvVGlwKGNvbnRlbnQsIGxvZ29mbGFnLGxvZ290eXBlLGJvbmQsc2l6ZSxmb250KTtcclxuICAgICAgICAgICAgdGhpcy5hbl9pbih0aGlzLmZpcnN0VGlwLGFudGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMsIHRoaXMuZmlyc3RUaXApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wVyA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wVyA9IHRoaXMuZmlyc3RUaXAud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZiAoIXRoaXMuc2Vjb25kVGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5fb3V0KHRoaXMuZmlyc3RUaXAsYW50aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRUaXAgPSB0aGlzLkNyZWF0ZUxvZ29UaXAoY29udGVudCwgbG9nb2ZsYWcsbG9nb3R5cGUsYm9uZCxzaXplLGZvbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLHRoaXMuc2Vjb25kVGlwKTtcclxuICAgICAgICAgICAgdGhpcy5hbl9pbl8xKHRoaXMuc2Vjb25kVGlwLGFudGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kVGlwLnggPSB0aGlzLmZpcnN0VGlwLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpc0NlbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbnRlcnMoY29udGFpbmVyLCBwb3N5KTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zKHBvc3gsIHBvc3kpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLlxyXG4gICAgICAgICAgICAvLy/lrp7ml7bmo4DmtYvoh6rmr4Hkuovku7ZcclxuICAgICAgICAgICAgY3VyclRpbWUgPSAwO1xyXG4gICAgICAgIGlmICghdGhpcy5vcGVEZWxTZWxmICYmICFpc0FsbEV4aXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlRGVsU2VsZiA9IHRydWU7XHJcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgyMCx0aGlzLHRoaXMubG9vcEhhbmQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk6Ieq5bexXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGlzcG9zU2VsZigpe1xyXG4gICAgICAgIHRoaXMudGVtcFcgPSAtMTtcclxuICAgICAgICB0aGlzLmN1cnJUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGF5LitXHJcbiAgICAgKiBAcGFyYW1cdGNvbnRhaW5lclxyXG4gICAgICogQHBhcmFtXHRwb3N5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2VudGVycyhjb250YWluZXI6U3ByaXRlLHBvc3k6bnVtYmVyKTp2b2lkIHtcclxuICAgICAgICB0aGlzLnBvcygoY29udGFpbmVyLndpZHRoIC0gdGhpcy50ZW1wVykgLyAyLCBwb3N5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOa1i+iHquavgeaXtumXtFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvb3BIYW5kKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyVGltZSsrOyBcclxuICAgICAgICBpZiAodGhpcy5jdXJyVGltZSA+PSB0aGlzLmV4aXRUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsKCl7XHJcbiAgICAgICAgdGhpcy5vcGVEZWxTZWxmID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuX2RsKHRoaXMuZmlyc3RUaXApO1xyXG4gICAgICAgIHRoaXMuY3VyclRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5raI6Zmk6Ieq6LqrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlU2VsZigpe1xyXG4gICAgICAgIHRoaXMuZGVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlh7og5Yqo55S7XHJcbiAgICAgKiBAcGFyYW1cdHRhcmdldFxyXG4gICAgICogQHBhcmFtXHRhblRpbWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbl9vdXQodGFyZ2V0OlNwcml0ZSwgYW5UaW1lOm51bWJlciA9IDQwMCk6dm9pZCB7XHJcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gMTtcclxuICAgICAgICB2YXIgdGltZUxpbmU6bGF5YS51dGlscy5UaW1lTGluZSA9IG5ldyBsYXlhLnV0aWxzLlRpbWVMaW5lKCk7XHJcbiAgICAgICAgdGltZUxpbmUuYWRkTGFiZWwoXCJhYVwiLDApLnRvKHRhcmdldCwgeyB5OiAtdGFyZ2V0LmhlaWdodC8yIH0sIGFuVGltZSwgbGF5YS51dGlscy5FYXNlLmN1YmljT3V0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcImJiXCIsMCkudG8odGFyZ2V0LCB7IGFscGhhOjAgfSwgYW5UaW1lLCBsYXlhLnV0aWxzLkVhc2UuY3ViaWNPdXQpO1xyXG4gICAgICAgIHRpbWVMaW5lLnBsYXkoMCk7XHJcbiAgICAgICAgdGltZUxpbmUub24oTGF5YS5FdmVudC5DT01QTEVURSx0aGlzLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRpbWVMaW5lLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq5q+B5Yqo55S7XHJcbiAgICAgKiBAcGFyYW1cdHRhcmdldFxyXG4gICAgICogQHBhcmFtXHRhblRpbWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbl9kbCh0YXJnZXQ6U3ByaXRlLCBhblRpbWU6bnVtYmVyID0gNDAwKXtcclxuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG4gICAgICAgIGxheWEudXRpbHMuVHdlZW4udG8odGFyZ2V0LHthbHBoYTowfSxhblRpbWUsbGF5YS51dGlscy5FYXNlLmN1YmljT3V0LG5ldyBsYXlhLnV0aWxzLkhhbmRsZXIodGhpcyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmZpcnN0VGlwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFRpcCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0VGlwID09IG51bGwgJiYgdGhpcy5zZWNvbmRUaXAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NTZWxmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZpcnN0VGlw5Yqo55S7XHJcbiAgICAgKiBAcGFyYW1cdHRhcmdldFxyXG4gICAgICogQHBhcmFtXHRhblRpbWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbl9pbih0YXJnZXQ6U3ByaXRlLCBhblRpbWU6bnVtYmVyID0gNDAwKXtcclxuICAgICAgICB0YXJnZXQuYWxwaGEgPSAwO1xyXG4gICAgICAgIGxheWEudXRpbHMuVHdlZW4udG8odGFyZ2V0LCB7IGFscGhhOjEgfSwgYW5UaW1lLCBsYXlhLnV0aWxzLkVhc2UuY3ViaWNJbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZWNvbmRUaXAg5YWlIOWKqOeUu1xyXG4gICAgICogQHBhcmFtXHR0YXJnZXRcclxuICAgICAqIEBwYXJhbVx0YW5UaW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYW5faW5fMSh0YXJnZXQ6U3ByaXRlLCBhblRpbWU6bnVtYmVyID0gNDAwKXtcclxuICAgICAgICB0YXJnZXQuc2NhbGVZID0gMDtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGF5YS51dGlscy5Ud2Vlbi50byh0YXJnZXQsIHtzY2FsZVk6MX0sIGFuVGltZSwgbGF5YS51dGlscy5FYXNlLmN1YmljSW4sbmV3IGxheWEudXRpbHMuSGFuZGxlcih0aGlzLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNlbGYuZmlyc3RUaXAgPSBzZWxmLnNlY29uZFRpcDtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRUaXAgPSBudWxsO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWtkOWvueixoe+8jOiHquWIpOaWrVxyXG4gICAgICogQHBhcmFtXHRmYXRoZXJcclxuICAgICAqIEBwYXJhbVx0c3VuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYWRkKGZhdGhlcjpTcHJpdGUsIHN1bjpTcHJpdGUpe1xyXG4gICAgICAgIGlmIChzdW4gJiYgIWZhdGhlci5jb250YWlucyhzdW4pKSB7XHJcbiAgICAgICAgICAgIGZhdGhlci5hZGRDaGlsZChzdW4pO1xyXG4gICAgICAgICAgICBzdW4ucG9zKHN1bi53aWR0aCAvIDIsIHN1bi5oZWlnaHQgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7p0aXDlhoXlrrlcclxuICAgICAqIEBwYXJhbVx0Y29udGVudFxyXG4gICAgICogQHBhcmFtXHRsb2dvZmxhZ1xyXG4gICAgICogQHBhcmFtXHRsb2dvdHlwZVxyXG4gICAgICogQHBhcmFtXHRib25kXHJcbiAgICAgKiBAcGFyYW1cdHNpemVcclxuICAgICAqIEBwYXJhbVx0Zm9udFxyXG4gICAgICogQHJldHVyblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIENyZWF0ZUxvZ29UaXAoY29udGVudDogc3RyaW5nLCBsb2dvZmxhZzpzdHJpbmcgPSBcInJpZ2h0XCIsbG9nb3R5cGU6bnVtYmVyPTAsYm9uZDogQm9vbGVhbiA9IGZhbHNlLHNpemU6IG51bWJlciA9IDIyLCBmb250OiBzdHJpbmcgPSBcIuW+rui9r+mbhem7kVwiKTpTcHJpdGUge1xyXG4gICAgICAgIHZhciB0aXBDb250YWluZXI6U3ByaXRlID0gbmV3IFNwcml0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpbmZvQ29udGFpZW5yOlNwcml0ZSA9IG5ldyBTcHJpdGUoKTtcclxuICAgICAgICB2YXIgbG9nb0ltZzpJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHZhciBiZ0ltZzpJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGJnSW1nLnNpemVHcmlkID0gXCIzMywyNiwyOCwzMFwiO1xyXG4gICAgICAgIHZhciBsYWJlbDpMYWJlbCA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxhYmVsLnRleHQgPSBjb250ZW50O1xyXG4gICAgICAgIGxhYmVsLmZvbnQgPSBmb250O1xyXG4gICAgICAgIGxhYmVsLmZvbnRTaXplID0gc2l6ZTtcclxuICAgICAgICBsYWJlbC5oZWlnaHQgPSA1MDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobG9nb2ZsYWcgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIGxvZ29JbWcuc2tpbiA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkubG9nb1JpZ2h0QXJyW2xvZ290eXBlXTtcclxuICAgICAgICAgICAgYmdJbWcuc2tpbiA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkudGlwUmlnaHRBcnJbbG9nb3R5cGVdO1x0XHJcbiAgICAgICAgICAgIGxhYmVsLmNvbG9yID0gVGlwc0RhdGEuZ2V0SW5zdGFuY2UoKS5yaWdodENvbG9yQXJyW2xvZ290eXBlXTtcclxuICAgICAgICB9ZWxzZSBpZiAobG9nb2ZsYWcgPT0gXCJ3cm9uZ1wiKSB7XHJcbiAgICAgICAgICAgIGxvZ29JbWcuc2tpbiA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkubG9nb1dyb25nQXJyW2xvZ290eXBlXTtcclxuICAgICAgICAgICAgYmdJbWcuc2tpbiA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkudGlwV3JvbmdBcnJbbG9nb3R5cGVdO1x0XHJcbiAgICAgICAgICAgIGxhYmVsLmNvbG9yID0gVGlwc0RhdGEuZ2V0SW5zdGFuY2UoKS53cm9uZ0NvbG9yQXJyW2xvZ290eXBlXTtcclxuICAgICAgICB9ZWxzZSBpZiAobG9nb2ZsYWcgPT0gXCJ3YXJuXCIpIHtcclxuICAgICAgICAgICAgbG9nb0ltZy5za2luID0gVGlwc0RhdGEuZ2V0SW5zdGFuY2UoKS5sb2dvV2FybkFycltsb2dvdHlwZV07XHJcbiAgICAgICAgICAgIGJnSW1nLnNraW4gPSBUaXBzRGF0YS5nZXRJbnN0YW5jZSgpLnRpcFdhcm5BcnJbbG9nb3R5cGVdO1x0XHJcbiAgICAgICAgICAgIGxhYmVsLmNvbG9yID0gVGlwc0RhdGEuZ2V0SW5zdGFuY2UoKS53YXJuQ29sb3JBcnJbbG9nb3R5cGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBiZ0ltZy5zaXplKGxhYmVsLndpZHRoICsgMjAwLCA1MCk7XHJcbiAgICAgICAgaW5mb0NvbnRhaWVuci53aWR0aCA9IGJnSW1nLndpZHRoO1xyXG4gICAgICAgIGxhYmVsLnBvcygoYmdJbWcud2lkdGggLSBsYWJlbC50ZXh0RmllbGQudGV4dFdpZHRoKSAvIDIsIChiZ0ltZy5oZWlnaHQgLSBsYWJlbC50ZXh0RmllbGQudGV4dEhlaWdodCkgLyAyKTtcclxuICAgICAgICBcclxuICAgICAgICB0aXBDb250YWluZXIuYWRkQ2hpbGQoaW5mb0NvbnRhaWVucik7XHJcbiAgICAgICAgaW5mb0NvbnRhaWVuci5hZGRDaGlsZChiZ0ltZyk7XHJcbiAgICAgICAgaW5mb0NvbnRhaWVuci5hZGRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgaW5mb0NvbnRhaWVuci5wb3MobG9nb0ltZy53aWR0aC0xLCAwKTtcclxuICAgICAgICB0aXBDb250YWluZXIuYWRkQ2hpbGQobG9nb0ltZyk7XHJcbiAgICAgICAgdGlwQ29udGFpbmVyLnNpemUobG9nb0ltZy53aWR0aCArIGJnSW1nLndpZHRoLCBsb2dvSW1nLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGlwQ29udGFpbmVyLnBpdm90KHRpcENvbnRhaW5lci53aWR0aCAvIDIsIHRpcENvbnRhaW5lci5oZWlnaHQgLyAyKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGlwQ29udGFpbmVyO1xyXG4gICAgfVxyXG59IiwiXHJcbiAgICAvKip0aXAg5pWw5o2u566h55CGXHJcblx0ICogLi4uXHJcblx0ICogQGF1dGhvciBNWExcclxuXHQgKi9cclxuXHRleHBvcnQgY2xhc3MgVGlwc0RhdGFcclxuXHR7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6VGlwc0RhdGE7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOlRpcHNEYXRhe1xyXG4gICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaXBzRGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHRcdC8vL2xvZ28gdGlwIOe0oOadkOeuoeeQhiAgMCDlr7nplJnlj7cgICAx5piv6KGo5oOFXHJcblx0XHRwdWJsaWMgbG9nb1JpZ2h0QXJyOkFycmF5PGFueT4gPSBbXCJmaXNoL3RpcC9yaWdodC5wbmdcIixcImZpc2gvdGlwL2ZhY2VfcmlnaHQucG5nXCIsXCJmaXNoL3RpcC9mYWNlMl9yaWdodC5wbmdcIixcImZpc2gvdGlwL2Zpc2gzXzMucG5nXCJdO1xyXG5cdFx0cHVibGljIGxvZ29Xcm9uZ0FycjpBcnJheTxhbnk+ID0gW1wiZmlzaC90aXAvd3JvbmcucG5nXCIsXCJmaXNoL3RpcC9mYWNlX3dyb25nLnBuZ1wiLFwiZmlzaC90aXAvZmFjZTJfd3JvbmcucG5nXCIsXCJmaXNoL3RpcC9maXNoM18yLnBuZ1wiXTtcclxuXHRcdHB1YmxpYyBsb2dvV2FybkFycjpBcnJheTxhbnk+ID0gW1wiZmlzaC90aXAvd2Fybi5wbmdcIiwgXCJmaXNoL3RpcC9mYWNlX3dhcm4ucG5nXCIsIFwiZmlzaC90aXAvZmFjZTJfd2Fybi5wbmdcIixcImZpc2gvdGlwL2Zpc2gzXzEucG5nXCJdO1xyXG5cdFx0XHJcblx0XHQvLy9iZ1xyXG5cdFx0cHVibGljIHRpcFJpZ2h0QXJyOkFycmF5PGFueT4gPVtcImZpc2gvdGlwL3JpZ2h0X2JnLnBuZ1wiLFwiZmlzaC90aXAvcmlnaHRfYmcucG5nXCIsXCJmaXNoL3RpcC9iZzMucG5nXCIsXCJmaXNoL3RpcC9iZzQucG5nXCJdO1xyXG5cdFx0cHVibGljIHRpcFdyb25nQXJyOkFycmF5PGFueT4gPVtcImZpc2gvdGlwL3dyb25nX2JnLnBuZ1wiLFwiZmlzaC90aXAvd3JvbmdfYmcucG5nXCIsXCJmaXNoL3RpcC9iZzMucG5nXCIsXCJmaXNoL3RpcC9iZzQucG5nXCJdO1xyXG5cdFx0cHVibGljIHRpcFdhcm5BcnI6QXJyYXk8YW55PiA9IFtcImZpc2gvdGlwL3dhcm5fYmcucG5nXCIsIFwiZmlzaC90aXAvd2Fybl9iZy5wbmdcIiwgXCJmaXNoL3RpcC9iZzMucG5nXCIsXCJmaXNoL3RpcC9iZzQucG5nXCJdO1xyXG5cdFx0XHJcblx0XHQvLy9jb2xvclxyXG5cdFx0cHVibGljIHJpZ2h0Q29sb3JBcnI6QXJyYXk8YW55PiA9IFtcIiMwMDY2NjZcIixcIiMwMDY2NjZcIixcIiNmZmZmZmZcIixcIiNmZmZmZmZcIl07XHJcblx0XHRwdWJsaWMgd3JvbmdDb2xvckFycjpBcnJheTxhbnk+ID0gW1wiI2NjMDAwMFwiLFwiI2NjMDAwMFwiLFwiI2ZmZmZmZlwiLFwiI2ZmZmZmZlwiXTtcclxuXHRcdHB1YmxpYyB3YXJuQ29sb3JBcnI6QXJyYXk8YW55PiA9IFtcIiNDQzY2MDBcIixcIiNDQzY2MDBcIixcIiNmZmZmZmZcIixcIiNmZmZmZmZcIl07XHJcblx0fSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG5pbXBvcnQgeyBDYW5ub25GYXRoZXIgfSBmcm9tIFwiLi4vZWxlbWVudC9jYW5ub24vQ2Fubm9uRmF0aGVyXCI7XHJcbmltcG9ydCB7IENhbm5vbk1hbmFnZXIgfSBmcm9tIFwiLi4vZWxlbWVudC9jYW5ub24vQ2Fubm9uTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vR2xvYmFsXCI7XHJcbmltcG9ydCB7IERhdGFQcm94eSB9IGZyb20gXCIuLi9kYXRhL0RhdGFQcm94eVwiO1xyXG5pbXBvcnQgeyBCdWxsZXRWbyB9IGZyb20gXCIuLi9kYXRhL0J1bGxldFZvXCI7XHJcbmltcG9ydCB7IFNjb3JlVmlldyB9IGZyb20gXCIuLi9lbGVtZW50L3ZpZXcvU2NvcmVWaWV3XCI7XHJcbmltcG9ydCB7IFRpcHNEYXRhIH0gZnJvbSBcIi4uL3V0aWwvdGlwcy9UaXBzRGF0YVwiO1xyXG5pbXBvcnQgeyBDdXN0b21UaXBzIH0gZnJvbSBcIi4uL3V0aWwvdGlwcy9DdXN0b21UaXBzXCI7XHJcbmltcG9ydCB7IEJ1bGxldEZhdGhlciB9IGZyb20gXCIuLi9lbGVtZW50L2J1bGxldC9CdWxsZXRGYXRoZXJcIjtcclxuaW1wb3J0IHsgQnVsbGV0TWFuYWdlciB9IGZyb20gXCIuLi9lbGVtZW50L2J1bGxldC9CdWxsZXRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEZpc2hNYW5hZ2VyIH0gZnJvbSBcIi4uL2VsZW1lbnQvZmlzaC9GaXNoTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBGaXNoRmF0aGVyIH0gZnJvbSBcIi4uL2VsZW1lbnQvZmlzaC9GaXNoRmF0aGVyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdWaWV3IH0gZnJvbSBcIi4vTG9hZGluZ1ZpZXdcIjtcclxuaW1wb3J0IFBvaW50ID0gbGF5YS5tYXRocy5Qb2ludDtcclxuaW1wb3J0IFRpbWVMaW5lID0gbGF5YS51dGlscy5UaW1lTGluZTtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciA9IGxheWEubWVkaWEuU291bmRNYW5hZ2VyO1xyXG5pbXBvcnQgeyBDb2luTWFuYWdlciB9IGZyb20gXCIuLi9lbGVtZW50L2NvaW4vQ29pbk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vZWxlbWVudC90b29scy9Ub29sc1wiO1xyXG5pbXBvcnQgeyBUb29sc01hbmFnZXIgfSBmcm9tIFwiLi4vZWxlbWVudC90b29scy9Ub29sc01hbmFnZXJcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgdWkuR2FtZVZpZXdVSXtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkdhbWVWaWV3O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkdhbWVWaWV3e1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR2FtZVZpZXcoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIEd2OkdhbWVWaWV3O1xyXG4gICAgcHJpdmF0ZSBjYW5ub246Q2Fubm9uRmF0aGVyOy8v5aSn54KuXHJcbiAgICBwcml2YXRlIF9jYW5ub25UeXBlOm51bWJlciA9IDA7Ly/lpKfngq7nsbvlnotcclxuXHJcbiAgICBwcml2YXRlIGJ1bGxldEFycjpBcnJheTxhbnk+ID0gW107Ly/lrZDlvLnmlbDnu4RcclxuICAgIHByaXZhdGUgZGVhZEJ1bGxldDpBcnJheTxhbnk+ID0gW107Ly/mrbvkuqHlrZDlvLlcclxuICAgIHByaXZhdGUgZmlzaEFycjpBcnJheTxhbnk+ID0gW107Ly/psbzmlbDnu4RcclxuICAgIHByaXZhdGUgY29pbk51bSA9IHRoaXMuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXIxXCIpLmdldENoaWxkQnlOYW1lKFwiY29pbk51bVwiKTtcclxuICAgIHByaXZhdGUgYnRuX3ByZSA9IHRoaXMuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXIxXCIpLmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuX3ByZVwiKTtcclxuICAgIHByaXZhdGUgYnRuX25leHQgPSB0aGlzLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKS5nZXRDaGlsZEJ5TmFtZShcImNhbm5vblwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9uZXh0XCIpO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXREYXRhKCl7XHJcbiAgICAgICAgQ2Fubm9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhY2hlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgQnVsbGV0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhY2hlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgRmlzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIENvaW5NYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVBbmltYXRpb24oKTtcclxuICAgICAgICBUb29sc01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFZpZXcoKXtcclxuICAgICAgICB0aGlzLmNhbm5vbiA9IENhbm5vbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jcmVhdGVDYW5ub24odGhpcywgMjk1LCA2OTQpO1xyXG4gICAgICAgIHRoaXMuY2Fubm9uVHlwZSA9IDU7XHJcbiAgICAgICAgdGhpcy5jb2luTnVtLnRleHQgPSAxMDAwO1xyXG5cclxuICAgICAgICBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5sdmxudW0gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUZpc2goR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxGaXNoTnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNhbm5vblR5cGUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhbm5vblR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjYW5ub25UeXBlKHZhbDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX2Nhbm5vblR5cGUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5fY2Fubm9uVHlwZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMuX2Nhbm5vblR5cGUsIENhbm5vbkZhdGhlci5nZXRJbnN0YW5jZSgpLk1JTl9UWVBFKSwgQ2Fubm9uRmF0aGVyLmdldEluc3RhbmNlKCkuTUFYX1RZUEUpO1xyXG4gICAgICAgIHRoaXMuY2Fubm9uLnR5cGUgPSB0aGlzLl9jYW5ub25UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEV2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuRG93bkhhbmQpO1xyXG4gICAgICAgIHRoaXMuYnRuX3ByZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMucG93QnRuSGFuZCk7XHJcbiAgICAgICAgdGhpcy5idG5fbmV4dC5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMucG93QnRuSGFuZCk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsIHRoaXMsIHRoaXMubG9vcEhhbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6q546v5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9vcEhhbmQoKXtcclxuICAgICAgICB0aGlzLmNoZWNrSGl0RmlzaDIoKTtcclxuICAgICAgICB0aGlzLmNoZWNrSGl0VG9vbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtkOW8ueeisOaSnuWIsOmxvFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrSGl0RmlzaDIoKTp2b2lke1xyXG4gICAgICAgIHZhciBidWxsZXQ6QnVsbGV0RmF0aGVyO1xyXG4gICAgICAgIHZhciBmaXNoOkZpc2hGYXRoZXI7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICB2YXIgZnJlY3Q6TGF5YS5SZWN0YW5nbGU7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYnVsbGV0QXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYnVsbGV0ID0gdGhpcy5idWxsZXRBcnJbaV07XHJcbiAgICAgICAgICAgIGlmICghYnVsbGV0IHx8ICFidWxsZXQucGFyZW50KSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHRoaXMuZmlzaEFyci5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBmaXNoID0gdGhpcy5maXNoQXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaXNoIHx8ICFmaXNoLnBhcmVudCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBmcmVjdCA9IGZpc2guZ2V0SGl0UmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJ1bGxldC5pc0hpdEZpc2ggJiYgIWJ1bGxldC5kZWFkZWQgJiYgIWZpc2guZGVhZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tPdmVyKGZyZWN0LCBidWxsZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5pc0hpdEZpc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXNoLmhwIC09IHRoaXMuZ2V0QnVsbGV0SGFyZChidWxsZXQpKk1hdGgucmFuZG9tKCkqNTtcdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtkOW8ueeisOaSnumBk+WFt1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrSGl0VG9vbHMoKXtcclxuICAgICAgICB2YXIgYnVsbGV0OkJ1bGxldEZhdGhlcjtcclxuICAgICAgICB2YXIgdG9vbDpUb29sc1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgaiA9IDA7XHJcbiAgICAgICAgdmFyIGZyZWN0OmxheWEubWF0aHMuUmVjdGFuZ2xlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmJ1bGxldEFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0QXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWJ1bGxldCB8fCAhYnVsbGV0LnBhcmVudCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBUb29sc01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50b29sQXJyLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHRvb2wgPSBUb29sc01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50b29sQXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0b29sIHx8ICF0b29sLnBhcmVudCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBmcmVjdCA9IHRvb2wuZ2V0SGl0UmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJ1bGxldC5pc0hpdFRvb2wgJiYgIWJ1bGxldC5kZWFkZWQgJiYgIXRvb2wuZGVhZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja092ZXIoZnJlY3QsYnVsbGV0KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5pc0hpdFRvb2wgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sLmRpc3Bvc2VTKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5piv5ZCm55u45LqkXHJcbiAgICAgKiBAcGFyYW1cdGZ1bGxldFxyXG4gICAgICogQHBhcmFtXHRmaXNoXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tPdmVyKGZyZWN0OkxheWEuUmVjdGFuZ2xlLGJ1bGxldDpCdWxsZXRGYXRoZXIpOkJvb2xlYW57XHJcbiAgICAgICAgdmFyIGJjOlBvaW50ID0gYnVsbGV0LmdldENlbnRlcigpO1xyXG4gICAgICAgIHZhciBicjpudW1iZXIgPSBidWxsZXQuaGl0UmFkaXVzO1xyXG4gICAgICAgIHZhciB4djpudW1iZXIgPSAxMDsvL+S/ruato+iMg+WbtFxyXG4gICAgICAgIHZhciBwMTpQb2ludCA9IG5ldyBQb2ludChmcmVjdC54K3h2LCBmcmVjdC55K3h2KTtcclxuICAgICAgICB2YXIgcDI6UG9pbnQgPSBuZXcgUG9pbnQoZnJlY3QueCt4diArIGZyZWN0LndpZHRoLXh2KjIsIGZyZWN0LnkreHYpO1xyXG4gICAgICAgIHZhciBwMzpQb2ludCA9IG5ldyBQb2ludChmcmVjdC54K3h2LCBmcmVjdC55K3h2K2ZyZWN0LmhlaWdodC14dioyKTtcclxuICAgICAgICB2YXIgcDQ6UG9pbnQgPSBuZXcgUG9pbnQoZnJlY3QueCt4diArIGZyZWN0LndpZHRoLXh2KjIsIGZyZWN0LnkreHYgKyBmcmVjdC5oZWlnaHQteHYqMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGFycjQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0Tm9kZShwMSwgcDIsIGJjLCBicilcclxuICAgICAgICB2YXIgYXJyMzpBcnJheTxhbnk+ID0gdGhpcy5nZXROb2RlKHAxLCBwMywgYmMsIGJyKTtcclxuICAgICAgICB2YXIgYXJyMjpBcnJheTxhbnk+ID0gdGhpcy5nZXROb2RlKHAyLCBwNCwgYmMsIGJyKTtcclxuICAgICAgICB2YXIgYXJyMTpBcnJheTxhbnk+ID0gdGhpcy5nZXROb2RlKHAzLCBwNCwgYmMsIGJyKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYXJyOkFycmF5PGFueT4gPSBhcnIxLmNvbmNhdChhcnIyKS5jb25jYXQoYXJyMykuY29uY2F0KGFycjQpO1xyXG4gICAgICAgIHZhciBib286Qm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzT3ZlcihmcmVjdCxhcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG5cdFx0ICog6L+U5Zue57q/6Lef5ZyG55qE5Lqk54K5XHJcblx0XHQgKiBAcGFyYW1cdHAxICDngrkxXHJcblx0XHQgKiBAcGFyYW1cdHAyICDngrkyXHJcblx0XHQgKiBAcGFyYW1cdGMgICDlnIblv4NcclxuXHRcdCAqIEBwYXJhbVx0ciAgIOWNiuW+hFxyXG5cdFx0ICogQHJldHVybiAg5Lik5Liq5Lqk54K5XHJcblx0XHQgKi9cclxuXHRcdHByaXZhdGUgZ2V0Tm9kZShwMTpQb2ludCwgcDI6UG9pbnQsIGM6UG9pbnQsIHI6bnVtYmVyKTpBcnJheTxhbnk+e1xyXG5cdFx0XHR2YXIgeDE6bnVtYmVyO1xyXG5cdFx0XHR2YXIgeDI6bnVtYmVyO1xyXG5cdFx0XHR2YXIgeTE6bnVtYmVyO1xyXG5cdFx0XHR2YXIgeTI6bnVtYmVyO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHBvMTpQb2ludCA9IG5ldyBQb2ludCgwLDApO1xyXG5cdFx0XHR2YXIgcG8yOlBvaW50ID0gbmV3IFBvaW50KDAsMCk7XHJcblx0XHRcdGlmIChwMi54IC0gcDEueCA9PSAwKXtcclxuXHRcdFx0XHR4MSA9IHAxLng7XHJcblx0XHRcdFx0eDIgPSBwMS54O1xyXG5cdFx0XHRcdHkxID0gTWF0aC5wb3cocipyLU1hdGgucG93KChwMS54LWMueCksMiksMS8yKStjLnk7Ly/kuIvpnaLngrlcclxuXHRcdFx0XHR5MiA9IC1NYXRoLnBvdyhyKnItTWF0aC5wb3coKHAxLngtYy54KSwyKSwxLzIpK2MueTsvL+S4iumdoueCuVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR2YXIgazpudW1iZXIgPSAocDIueS1wMS55KS8ocDIueC1wMS54KTtcclxuXHRcdFx0XHR2YXIgYjpudW1iZXIgPSBwMS55LShwMi55LXAxLnkpLyhwMi54LXAxLngpKnAxLng7XHJcblx0XHRcdFx0dmFyIG06bnVtYmVyID0gYi1jLnk7XHJcblx0XHRcdFx0dmFyIHZhbCA9IC0yKm0qaypjLngtIGsqaypjLngqYy54K2sqaypyKnItbSptK3IqcjtcclxuXHRcdFx0XHR4MSA9ICgoYy54LW0qayktIE1hdGgucG93KHZhbCwxLzIpKS8oayprKzEpLy/lt6bovrnngrlcclxuXHRcdFx0XHR5MSA9IGsqeDErYjtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR4MiA9ICgoYy54LW0qaykrIE1hdGgucG93KHZhbCwxLzIpKS8oayprKzEpLy/lj7PovrnngrlcclxuXHRcdFx0XHR5MiA9IGsqeDErYjtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0cG8xLnNldFRvKHgxLCB5MSk7XHJcblx0XHRcdHBvMi5zZXRUbyh4MiwgeTIpO1xyXG5cclxuXHRcdFx0cmV0dXJuIFtwbzEscG8yXTtcclxuXHRcdH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbljIXlkKvpm4blkIjkuK3nmoTku7vmhI/kuIDkuKrngrlcclxuICAgICAqIEBwYXJhbVx0ZnJlY3RcclxuICAgICAqIEBwYXJhbVx0cGFyclxyXG4gICAgICogQHJldHVyblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzT3ZlcihmcmVjdDpMYXlhLlJlY3RhbmdsZSxwYXJyOkFycmF5PGFueT4pOkJvb2xlYW57XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHA6UG9pbnQgPSBwYXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoZnJlY3QuY29udGFpbnMocC54LCBwLnkpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvd0J0bkhhbmQoZTpMYXlhLkV2ZW50KXtcclxuICAgICAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldCA9PSB0aGlzLmJ0bl9wcmUpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbm5vblR5cGUtLTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jYW5ub25UeXBlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxheWEubWVkaWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9zb3VuZC9DaGFuZ2VHdW4ud2F2XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgRG93bkhhbmQoZTpMYXlhLkV2ZW50KXtcclxuICAgICAgICBpZihHbG9iYWwuZ2V0SW5zdGFuY2UoKS5JU1BBVVNFKXJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb3VzZVkgPD0gR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxIZWlnaHQgLSBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5ib3R0b21TcGFjZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrQ2FuU2hvb3QoRGF0YVByb3h5LmdldEluc3RhbmNlKCkuZ2V0RGF0YUJ5VHlwZSh0aGlzLmNhbm5vbi50eXBlKSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdGltZTpudW1iZXIgPSBsYXlhLnV0aWxzLkJyb3dzZXIubm93KCk7XHJcbiAgICAgICAgICAgIGlmKHRpbWU+dGhpcy5jYW5ub24uc2hvb3RUaW1lKkdsb2JhbC5nZXRJbnN0YW5jZSgpLnNob290SW50ZXJUaW1lKXtcclxuICAgICAgICAgICAgICAgIHZhciBkaXN5Om51bWJlciA9ICh0aGlzLm1vdXNlWSAtIHRoaXMuY2Fubm9uLnkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3g6bnVtYmVyID0gKHRoaXMubW91c2VYIC0gdGhpcy5jYW5ub24ueCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbm5vbi5yb3RhdGVBbihNYXRoLmF0YW4yKGRpc3ksIGRpc3gpKjE4MC9NYXRoLlBJICsgOTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5ub24uc2hvb3RUaW1lID0gdGltZSArIHRoaXMuY2Fubm9uLnNob290SW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbm5vbi5zaG9vdEFuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJ1bGxldDpCdWxsZXRGYXRoZXIgPSBCdWxsZXRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY3JlYXRlQnVsbGV0QnlUeXBlKHRoaXMuY2Fubm9uLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuZ2xlOm51bWJlciA9IHRoaXMuY2Fubm9uLnJvdGF0aW9uIC0gOTA7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQucG9zKHRoaXMuY2Fubm9uLnggKyBNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkqdGhpcy5jYW5ub24uc2VsZkhlaWdodCx0aGlzLmNhbm5vbi55K01hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSp0aGlzLmNhbm5vbi5zZWxmSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5yb3RhdGlvbiA9IHRoaXMuY2Fubm9uLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChidWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmluaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pbk51bS50ZXh0ID0gTnVtYmVyKHRoaXMuY29pbk51bS50ZXh0KSAtIGJ1bGxldC5kYXRhVm8ucG93ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgYnVsbGV0Lm9uY2UoQnVsbGV0RmF0aGVyLmdldEluc3RhbmNlKCkuQk9PTV9DT00sIHRoaXMsIHRoaXMuYnVsbGV0Qm9vbSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldEFyci5wdXNoKGJ1bGxldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZDlvLnniIbngrhcclxuICAgICAqIEBwYXJhbSBidWxsZXQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBidWxsZXRCb29tKGJ1bGxldDpCdWxsZXRGYXRoZXIpe1xyXG4gICAgICAgIC8vIHRoaXMuYm9vbUNoZWNrSGl0KGJ1bGxldCk7XHJcbiAgICAgICAgLy8gdGhpcy5ib29tQ2hlY2tIaXRUb29sKGJ1bGxldCk7XHJcblxyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLmJ1bGxldEFyci5pbmRleE9mKGJ1bGxldCk7XHJcbiAgICAgICAgdGhpcy5idWxsZXRBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgYnVsbGV0LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICBidWxsZXQuZGVhZGVkID0gdHJ1ZTtcclxuICAgICAgICBCdWxsZXRNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVjb3ZlckJ1bGxlckJ5VHlwZShidWxsZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICog5a2Q5by554iG54K45LqM5qyh5qOA5rWL56Kw5pKeIOS6pOeCueeisOaSnu+8jOebuOWvueefqeW9oueyvuehruS4gOS6m1xyXG4gICAgLy8gICogQHBhcmFtXHRidWxsZXRcclxuICAgIC8vICAqL1xyXG4gICAgLy8gcHJpdmF0ZSBib29tQ2hlY2tIaXRUb29sKGJ1bGxldDpCdWxsZXRGYXRoZXIpOnZvaWR7XHJcbiAgICAvLyAgICAgdmFyIHRvb2w6VG9vbHNcclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgdmFyIGZyZWN0OkxheWEuUmVjdGFuZ2xlO1xyXG4gICAgLy8gICAgIGZvciAoaiA9IDA7IGogPCBUb29sc01hbmFnZXIuaW5zdGFuY2UoKS50b29sQXJyLmxlbmd0aDsgaisrKXtcclxuICAgIC8vICAgICAgICAgdG9vbCA9IFRvb2xzTWFuYWdlci5pbnN0YW5jZSgpLnRvb2xBcnJbal07XHJcbiAgICAvLyAgICAgICAgIGlmICghdG9vbCB8fCAhdG9vbC5wYXJlbnQpIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgICBmcmVjdCA9IHRvb2wuZ2V0SGl0UmVjdGFuZ2xlKCk7XHJcbiAgICAvLyAgICAgICAgIGlmICghdG9vbC5kZWFkZWQpe1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tPdmVyKGZyZWN0LCBidWxsZXQpKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0b29sLmRpc3Bvc2VTKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcblx0XHQgKiDlrZDlvLnniIbngrjkuozmrKHmo4DmtYvnorDmkp4g5Lqk54K556Kw5pKe77yM55u45a+555+p5b2i57K+56Gu5LiA5LqbXHJcblx0XHQgKiBAcGFyYW1cdGJ1bGxldFxyXG5cdFx0ICovXHJcblx0XHQvLyBwcml2YXRlIGJvb21DaGVja0hpdChidWxsZXQ6QnVsbGV0RmF0aGVyKTp2b2lke1xyXG5cdFx0Ly8gXHR2YXIgZmlzaDpGaXNoRmF0aGVyO1xyXG5cdFx0Ly8gXHR2YXIgaiA9IDA7XHJcbiAgICAgICAgLy8gICAgIHZhciBmcmVjdDpMYXlhLlJlY3RhbmdsZTtcclxuXHRcdC8vIFx0Zm9yIChqID0gMDsgaiA8IHRoaXMuZmlzaEFyci5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgLy8gICAgICAgICBmaXNoID0gdGhpcy5maXNoQXJyW2pdO1xyXG5cdFx0Ly8gXHRcdGlmICghZmlzaCB8fCAhZmlzaC5wYXJlbnQpIGNvbnRpbnVlO1xyXG5cdFx0Ly8gXHRcdGZyZWN0ID0gZmlzaC5nZXRIaXRSZWN0YW5nbGUoKTtcclxuXHRcdC8vIFx0XHRpZiAoIWZpc2guZGVhZCl7XHJcblx0XHQvLyBcdFx0XHRpZiAodGhpcy5jaGVja092ZXIoZnJlY3QsIGJ1bGxldCkpe1xyXG5cdFx0Ly8gXHRcdFx0XHRmaXNoLmhwIC09IHRoaXMuZ2V0QnVsbGV0SGFyZChidWxsZXQpO1xyXG5cdFx0Ly8gXHRcdFx0fVxyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuXHRcdCAqIOiOt+WPluWtkOW8ueS8pOWus1xyXG5cdFx0ICogQHBhcmFtXHRidWxsZXRcclxuXHRcdCAqIEByZXR1cm5cclxuXHRcdCAqL1xyXG5cdFx0cHJpdmF0ZSBnZXRCdWxsZXRIYXJkKGJ1bGxldDpCdWxsZXRGYXRoZXIpOm51bWJlcntcclxuXHRcdFx0dmFyIHZhbHVlOm51bWJlciA9IGJ1bGxldC5kYXRhVm8ucG93ZXIgKiBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5zaG9vdFBvd2VyO1xyXG5cdFx0XHR2YXIgcmFuOm51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHRcdHZhciBtaW46bnVtYmVyID0gMjtcclxuXHRcdFx0dmFyIG1heDpudW1iZXIgPSA0O1xyXG5cdFx0XHR2YXIgYmVpOm51bWJlciA9IDE7XHJcblx0XHRcdGlmIChyYW4gPiAwLjkpe1xyXG5cdFx0XHRcdGJlaSA9IG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heClcclxuXHRcdFx0XHQvLyB2YXIgY3JpdDpDcml0VXRpbHMgPSBuZXcgQ3JpdFV0aWxzKGJlaSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5hZGRDaGlsZChjcml0KTtcclxuXHRcdFx0XHQvLyBjcml0LnBvcyhidWxsZXQueCwgYnVsbGV0LnkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdmFsdWUqYmVpO1xyXG5cdFx0fVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0NhblNob290KHZvOkJ1bGxldFZvKTpCb29sZWFue1xyXG4gICAgICAgIGlmKHRoaXMuY29pbk51bS50ZXh0IC0gdm8ucG93ZXIgPCAwKXtcclxuICAgICAgICAgICAgQ3VzdG9tVGlwcy5nZXRJbnN0YW5jZSgpLkFkZFRpcCh0aGlzLCBcIuiDvemHj+S4jei2syEhXCIsIFwicmlnaHRcIiwgdHJ1ZSwgMTAwLCAxMDAsIDMwMCwgZmFsc2UsIDYwLCAzKTtcclxuICAgICAgICAgICAgbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL2NyaXQubXAzXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu66bG8XHJcbiAgICAgKiBAcGFyYW0gZmlzaE51bVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUZpc2goZmlzaE51bTpudW1iZXIpe1xyXG4gICAgICAgIHZhciBmaXNoOkZpc2hGYXRoZXI7XHJcbiAgICAgICAgdmFyIHJhblZhbDpudW1iZXI7XHJcbiAgICAgICAgdmFyIHR5cGVWYWw6bnVtYmVyID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPCBmaXNoTnVtOyBpKyspe1xyXG4gICAgICAgICAgICByYW5WYWwgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYocmFuVmFsID4gMCAmJiByYW5WYWwgPD0gMC45Mil7ICAgICAgIC8vMC01XHJcbiAgICAgICAgICAgICAgICB0eXBlVmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoIXRoaXMuaGFzRmlzaCgxMCkmJiF0aGlzLmhhc0Zpc2goMTEpJiZyYW5WYWwgPiAwLjkyICYmIHJhblZhbCA8PSAwLjk0KXsvLzEw77yMMTFcclxuICAgICAgICAgICAgICAgIHR5cGVWYWwgPSBNYXRoLnJhbmRvbSgpID4gMC41PzEwOjExO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoIXRoaXMuaGFzRmlzaCg2KSYmIXRoaXMuaGFzRmlzaCg3KSYmcmFuVmFsID4gMC45NCAmJiByYW5WYWwgPD0gMC45Nil7Ly82LjdcclxuICAgICAgICAgICAgICAgIHR5cGVWYWwgPSBNYXRoLnJhbmRvbSgpID4gMC41PzY6NztcclxuICAgICAgICAgICAgfWVsc2UgaWYgKCF0aGlzLmhhc0Zpc2goOSkmJnJhblZhbCA+IDAuOTYgJiYgcmFuVmFsIDw9IDAuOTgpey8vOO+8jDlcclxuICAgICAgICAgICAgICAgIHR5cGVWYWwgPSA5O1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAocmFuVmFsID4gMC45OCAmJiAhdGhpcy5oYXNGaXNoKDgpKXtcclxuICAgICAgICAgICAgICAgIHR5cGVWYWwgPSA4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZVZhbD09OSl7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21UaXBzLmdldEluc3RhbmNlKCkuQWRkVGlwKHRoaXMsIFwi5rW35bqV5Ye6546w6bKo6bG877yM5Ye76LSl5a6D5Y+v5Lul6I635b6X5aSn6YeP6IO96YeP5ZOm77yB77yBXCIsIFwid2FyblwiLCB0cnVlLCAxMDAsIDEwMCwgMzAwLCBmYWxzZSwgMTAwLCAzKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKHR5cGVWYWwgPT0gOCl7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21UaXBzLmdldEluc3RhbmNlKCkuQWRkVGlwKHRoaXMsIFwi5rW36LGa5Ye6546w5ZWm77yB5Ye76LSl5a6D5o6J6JC96bG86Zu35ZOm77yB6bG86Zu35Y+q5a2Y5ZyoMTDnp5Lpkp/vvIFcIiwgXCJyaWdodFwiLCB0cnVlLCAxMDAsIDEwMCwgMzAwLCBmYWxzZSwgMTAwLCAzKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKHR5cGVWYWwgPT0gNil7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21UaXBzLmdldEluc3RhbmNlKCkuQWRkVGlwKHRoaXMsIFwi6bOE6bG85p2l5LqG77yB5Ye76LSl5a6D5o6J6JC96IO96YeP5a6d566x5ZOm77yB5a6d566x5Y+q5a2Y5ZyoMTDnp5Lpkp/vvIFcIiwgXCJ3YXJuXCIsIHRydWUsIDEwMCwgMTAwLCAzMDAsIGZhbHNlLCAxMDAsIDMpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAodHlwZVZhbCA9PSA3KXtcclxuICAgICAgICAgICAgICAgIEN1c3RvbVRpcHMuZ2V0SW5zdGFuY2UoKS5BZGRUaXAodGhpcywgXCLmtbfpvp/lh7rnjrDvvIHlh7votKXlroPmjonokL3mrablmajlop7lvLrpgZPlhbfvvIFcIiwgXCJ3YXJuXCIsIHRydWUsIDEwMCwgMTAwLCAzMDAsIGZhbHNlLCAxMDAsIDMpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAodHlwZVZhbCA9PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgQ3VzdG9tVGlwcy5nZXRJbnN0YW5jZSgpLkFkZFRpcCh0aGlzLCBcIueBr+esvOmxvOWHuueOsO+8geWHu+i0peWug+aOieiQvemxvOmlte+8jOmxvOmlteWPr+S7peWQuOW8leadpemxvOe+pOWTpu+8gVwiLCBcIndhcm5cIiwgdHJ1ZSwgMTAwLCAxMDAsIDMwMCwgZmFsc2UsIDEwMCwgMyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpc2ggPSBGaXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNyZWF0ZUZpc2hCeUlkKHR5cGVWYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGZpc2gpO1xyXG4gICAgICAgICAgICBmaXNoLmluaXQoTWF0aC5yYW5kb20oKT4wLjU/XCJyaWdodFwiOlwibGVmdFwiKTtcclxuICAgICAgICAgICAgZmlzaC5vbmNlKEZpc2hGYXRoZXIuZ2V0SW5zdGFuY2UoKS5GSVNIX0RFQUQsIHRoaXMsIHRoaXMuZmlzaERlYWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5maXNoQXJyLnB1c2goZmlzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFzRmlzaCh2YWw6bnVtYmVyKTpCb29sZWFue1xyXG4gICAgICAgIHZhciBmaXNoOkZpc2hGYXRoZXI7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmZpc2hBcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGZpc2ggPSB0aGlzLmZpc2hBcnJbaV07XHJcbiAgICAgICAgICAgIGlmKGZpc2guZmlzaFZvLmlkID09IHZhbCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rpmJ/lvaJcclxuICAgICAqIEBwYXJhbVx0ZmxhZyAw5b+DIDHnn6nlvaIgMuiPseW9oiAz5ZyG5b2iXHJcbiAgICAgKiBAcGFyYW1cdHR5cGUg6bG857G75Z6LXHJcbiAgICAgKiBAcGFyYW1cdGRpcnMg5ri45ZCRIGxlZnQg5ZCR5bem5ri4XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlRmlzaE9yZGVyKGZsYWc6bnVtYmVyID0gMCx0eXBlOm51bWJlcj0wLGRpcnM6c3RyaW5nPVwibGVmdFwiKXtcclxuICAgICAgICB2YXIgcGF0aEFycjpBcnJheTxhbnk+PVtdO1xyXG4gICAgICAgIHZhciBmaXNoOkZpc2hGYXRoZXI7XHJcbiAgICAgICAgdmFyIHA6UG9pbnQ7XHJcbiAgICAgICAgdmFyIG5ld3A6UG9pbnQ7XHJcbiAgICAgICAgdmFyIHhpdXg6bnVtYmVyPTA7XHJcbiAgICAgICAgdmFyIHhpdXk6bnVtYmVyPTA7XHJcbiAgICAgICAgc3dpdGNoKGZsYWcpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcGF0aEFyciA9IEZpc2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuaGVhcnRQYXRoRG90KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlycyA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4aXV4ID0gLTYwMDtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB4aXV4ID0gR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxXaWR0aCs2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHhpdXkgPSA0MDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcGF0aEFyciA9IEZpc2hNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVjdFBhdGhEb3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJzID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSAtNjAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSBHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbFdpZHRoKzYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeGl1eSA9IDI1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBwYXRoQXJyID0gRmlzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yaG9tYlBhdGhEb3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJzID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSAtNjAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSBHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbFdpZHRoKzYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeGl1eSA9IDEwMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBwYXRoQXJyID0gRmlzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaXJjbGVQYXRoRG90KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlycyA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4aXV4ID0gLTQwMDtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB4aXV4ID0gR2xvYmFsLmdldEluc3RhbmNlKCkudG90YWxXaWR0aCs0MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHhpdXkgPSAzNTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXRoQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHAgPSBwYXRoQXJyW2ldO1xyXG4gICAgICAgICAgICBuZXdwID0gbmV3IFBvaW50KHAueCArIHhpdXgsIHAueSArIHhpdXkpO1xyXG4gICAgICAgICAgICBmaXNoID0gRmlzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jcmVhdGVGaXNoQnlJZCh0eXBlKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChmaXNoKTtcclxuICAgICAgICAgICAgZmlzaC5pbml0KGRpcnMsbmV3cCx0cnVlKTtcclxuICAgICAgICAgICAgZmlzaC5vbmNlKEZpc2hGYXRoZXIuZ2V0SW5zdGFuY2UoKS5GSVNIX0RFQUQsIHRoaXMsIHRoaXMuZmlzaERlYWQpO1xyXG4gICAgICAgICAgICBmaXNoLm9uY2UoRmlzaEZhdGhlci5nZXRJbnN0YW5jZSgpLkZJU0hfREVBRF9TRUxGLCB0aGlzLCB0aGlzLmZpc2hEZWFkU2VsZik7XHJcbiAgICAgICAgICAgIHRoaXMuZmlzaEFyci5wdXNoKGZpc2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuWIm+W7uumxvOe+pFxyXG4gICAgICogQHBhcmFtXHRjb3VudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZU9yZGVyKGNvdW50Om51bWJlciA9IDYpOnZvaWQge1xyXG4gICAgICAgIGxheWEubWVkaWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9zb3VuZC9tZmlzaC5tcDNcIik7XHJcbiAgICAgICAgQ3VzdG9tVGlwcy5nZXRJbnN0YW5jZSgpLkFkZFRpcCh0aGlzLCBcIumxvOe+pOadpeiirSEs6bG8576k5Lit55qE6bG85pyJ5Y+M5YCN5aWW5Yqx5ZOm77yBXCIsIFwicmlnaHRcIiwgdHJ1ZSwgMTAwLCAxMDAsIDMwMCwgZmFsc2UsIDEwMCwgMyk7XHJcbiAgICAgICAgdmFyIHRpbWU6bnVtYmVyID0gMzAwMDtcclxuICAgICAgICB2YXIgZGlyOlN0cmluZyA9IE1hdGgucmFuZG9tKCkgPiAwLjU/XCJyaWdodFwiOlwibGVmdFwiO1xyXG4gICAgICAgIHZhciB0aW1lcjpsYXlhLnV0aWxzLlRpbWVyO1xyXG4gICAgICAgIHZhciBmaXNodHlwZTpudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGltZXIgPSBuZXcgbGF5YS51dGlscy5UaW1lcigpO1xyXG4gICAgICAgICAgICB0aW1lci5vbmNlKHRpbWUraSAqIDMwMDAsIHRoaXMsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGaXNoT3JkZXIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCksIGZpc2h0eXBlLGRpcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmlzaCBkZWFkXHJcbiAgICAgKiBAcGFyYW1cdGZpc2hcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmaXNoRGVhZChmaXNoOkZpc2hGYXRoZXIpOnZvaWR7XHJcbiAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IHRoaXMuZmlzaEFyci5pbmRleE9mKGZpc2gpO1xyXG4gICAgICAgIHRoaXMuZmlzaEFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6Zif5YiX5Lit55qE6bG8IOWlluWKsee/u+WAjSDmnYDmrbvpmJ/liJfkuK3nmoTpsbzkuI3liJvlu7rmlrDpsbxcclxuICAgICAgICB2YXIgdmFsOm51bWJlciA9IDE7XHJcbiAgICAgICAgaWYgKGZpc2guaXNJbk9yZGVyKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IDI7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZpc2goMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvaW5NYW5hZ2VyLmdldEluc3RhbmNlKCkuY3JlYXRlTW9yZUNvaW4oZmlzaCwgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb2luTnVtLnRleHQgPSBOdW1iZXIodGhpcy5jb2luTnVtLnRleHQpICsgZmlzaC5maXNoVm8uc2NvcmUqdmFsO1xyXG4gICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLmdldFBvd2VyTnVtICs9IGZpc2guZmlzaFZvLnNjb3JlKnZhbDtcclxuICAgICAgICAvLyBsdmxTZXQoKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+aOieiQvemxvOmbt1xyXG4gICAgICAgIGlmIChmaXNoLmZpc2hWby5pZCA9PSA4KXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb29scygxLGZpc2gueCxmaXNoLnkpO1xyXG4gICAgICAgIH1lbHNlIGlmIChmaXNoLmZpc2hWby5pZCA9PSA2KXsvL+aOieiQveWuneeusVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvb2xzKDIsZmlzaC54LGZpc2gueSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKGZpc2guZmlzaFZvLmlkID09IDcpey8v5o6J6JC95aKe5by66YGT5YW3XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9vbHMoMyxmaXNoLngsZmlzaC55KTtcdFxyXG4gICAgICAgIH1lbHNlIGlmIChmaXNoLmZpc2hWby5pZCA9PSAxMSkgey8v5o6J6JC96bG86aW1XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9vbHMoNCxmaXNoLngsZmlzaC55KTtcdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uumBk+WFt1xyXG4gICAgICogQHBhcmFtIHR5cGUgXHJcbiAgICAgKiBAcGFyYW0geHggXHJcbiAgICAgKiBAcGFyYW0geXkgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlVG9vbHModHlwZTpudW1iZXIsIHh4Om51bWJlciwgeXk6bnVtYmVyKXtcclxuICAgICAgICB2YXIgdG9vbDpUb29scyA9IFRvb2xzTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNyZWF0ZVRvb2xCeVR5cGUodHlwZSk7XHJcbiAgICAgICAgdG9vbC5vbmNlKFRvb2xzLmdldEluc3RhbmNlKCkuREVBRF9PVkVSLCB0aGlzLCB0aGlzLmRlYWRBbk92ZXIpO1xyXG4gICAgICAgIHRvb2wucG9zKHh4LCB5eSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0b29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlYWRBbk92ZXIodG9vbDpUb29scyl7XHJcbiAgICAgICAgaWYgKHRvb2wudHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5raWxsQWxsRmlzaCgpO1xyXG4gICAgICAgICAgICAvL+mXquWxj1xyXG4gICAgICAgICAgICB2YXIgdGltZWxpbmU6VGltZUxpbmU9bmV3IFRpbWVMaW5lKCk7XHJcbiAgICAgICAgICAgIHRpbWVsaW5lXHJcbiAgICAgICAgICAgIC5hZGRMYWJlbChcInJpZ2h0XCIsIDApLnRvKHRoaXMsIHthbHBoYTowLjF9LCA4MClcclxuICAgICAgICAgICAgLmFkZExhYmVsKFwibGVmdFwiLDApLnRvKHRoaXMsIHthbHBoYToxfSwgODApXHJcbiAgICAgICAgICAgIC5hZGRMYWJlbChcInJpZ2h0MlwiLCAwKS50byh0aGlzLCB7YWxwaGE6MC4xfSwgODApXHJcbiAgICAgICAgICAgIC5hZGRMYWJlbChcImxlZnQyXCIsIDApLnRvKHRoaXMsIHthbHBoYToxfSwgODApXHJcbiAgICAgICAgICAgIC5hZGRMYWJlbChcInJpZ2h0M1wiLCAwKS50byh0aGlzLCB7YWxwaGE6MC4xfSwgODApXHJcbiAgICAgICAgICAgIC5hZGRMYWJlbChcImxlZnQzXCIsMCkudG8odGhpcywge2FscGhhOjF9LCA4MClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRpbWVsaW5lLnBsYXkoMCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aW1lbGluZS5vbmNlKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aW1lbGluZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5JU1BBVVNFID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9zb3VuZC9ib29tLndhdlwiKTtcclxuICAgICAgICB9ZWxzZSBpZiAodG9vbC50eXBlID09IDIpey8v5a6d566xXHJcbiAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29pbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRDb2luKDUwMCwgXCJjb2luXCIsIHRvb2wueCwgdG9vbC55LCB0aGlzKTtcclxuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuZ2V0UG93ZXJOdW0gKz0gNTAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvaW5OdW0udGV4dCA9IE51bWJlcih0aGlzLmNvaW5OdW0udGV4dCkgKyA1MDA7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRvb2wudHlwZSA9PSAzKXsvL+atpuWZqOmBk+WFt1xyXG4gICAgICAgICAgICBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5JU1BBVVNFID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vc3RhcnRFZmZlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5ub24uc3Ryb25nVGltZSA9IDIwO1xyXG4gICAgICAgICAgICBDdXN0b21UaXBzLmdldEluc3RhbmNlKCkuQWRkVGlwKHRoaXMsIFwi5q2m5Zmo5aKe5by677yB77yBXCIsIFwid2FyblwiLCB0cnVlLCAxMDAsIDEwMCwgMzAwLCBmYWxzZSwgMTAwLCAzKTtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9zb3VuZC9idWxsZXRfcG93ZXIubXAzXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmICh0b29sLnR5cGUgPT0gNCkgey8v6bG86aW1XHJcbiAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVPcmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtpbGxBbGxGaXNoKCl7XHJcbiAgICAgICAgdmFyIGZpc2g6RmlzaEZhdGhlcjtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuZmlzaEFyci5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgZmlzaCA9IHRoaXMuZmlzaEFycltpXTtcclxuICAgICAgICAgICAgZmlzaC5ocCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6bG86Ieq5bex5q275LqhXHJcbiAgICAgKiBAcGFyYW1cdGZpc2hcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmaXNoRGVhZFNlbGYoZmlzaDpGaXNoRmF0aGVyKTp2b2lkIHtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy5maXNoQXJyLmluZGV4T2YoZmlzaCk7XHJcbiAgICAgICAgdGhpcy5maXNoQXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuLi91aS9sYXlhTWF4VUlcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9HYW1lXCJcclxuaW1wb3J0IFR3ZWVuID0gbGF5YS51dGlscy5Ud2VlbjtcclxuaW1wb3J0IEVhc2UgPSBsYXlhLnV0aWxzLkVhc2U7XHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nVmlldyBleHRlbmRzIHVpLkxvYWRpbmdWaWV3VUl7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpMb2FkaW5nVmlldztcclxuICAgIHByaXZhdGUgc3RhcnQgPSB0aGlzLmdldENoaWxkQnlOYW1lKFwic3RhcnRcIikgYXMgTGF5YS5CdXR0b247XHJcbiAgICBwcml2YXRlIGRvdCA9IHRoaXMuZ2V0Q2hpbGRCeU5hbWUoXCJkb3RcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgIHByaXZhdGUgdHc6bnVtYmVyID0gMzYwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkxvYWRpbmdWaWV3e1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTG9hZGluZ1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIExkOkxheWEuU3ByaXRlO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLnN0YXJ0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0Lm9uY2UoTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5zdGFydEhhbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRIYW5kKCl7XHJcbiAgICAgICAgVHdlZW4udG8odGhpcywge2FscGhhOjB9LCAxMjAsIEVhc2Uuc3Ryb25nT3V0LCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnQoXCJzdGFydGdhbWVcIilcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGF0YSh2YWw6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmRvdC53aWR0aCA9IHZhbCAqIHRoaXMudHc7XHJcbiAgICAgICAgaWYodmFsID49IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=
