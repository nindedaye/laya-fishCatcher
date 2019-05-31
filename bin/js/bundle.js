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
        this.pos(container.width / 2, posy);
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
        tipContainer.pivot(tipContainer.width, tipContainer.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0xheWEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0dhbWUudHMiLCJzcmMvR2xvYmFsLnRzIiwic3JjL2RhdGEvQW5hbHlzaXNYTUwudHMiLCJzcmMvZGF0YS9CdWxsZXRWby50cyIsInNyYy9kYXRhL0RhdGFQcm94eS50cyIsInNyYy9kYXRhL0RpY3Rpb25hcnkudHMiLCJzcmMvZGF0YS9GaXNoVm8udHMiLCJzcmMvZWxlbWVudC9idWxsZXQvQnVsbGV0RmF0aGVyLnRzIiwic3JjL2VsZW1lbnQvYnVsbGV0L0J1bGxldE1hbmFnZXIudHMiLCJzcmMvZWxlbWVudC9jYW5ub24vQ2Fubm9uRmF0aGVyLnRzIiwic3JjL2VsZW1lbnQvY2Fubm9uL0Nhbm5vbk1hbmFnZXIudHMiLCJzcmMvZWxlbWVudC9jb2luL0NvaW4udHMiLCJzcmMvZWxlbWVudC9jb2luL0NvaW5NYW5hZ2VyLnRzIiwic3JjL2VsZW1lbnQvZmlzaC9GaXNoRmF0aGVyLnRzIiwic3JjL2VsZW1lbnQvZmlzaC9GaXNoTWFuYWdlci50cyIsInNyYy9lbGVtZW50L3Rvb2xzL1Rvb2xzLnRzIiwic3JjL2VsZW1lbnQvdG9vbHMvVG9vbHNNYW5hZ2VyLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyIsInNyYy91dGlsL3RpcHMvQ3VzdG9tVGlwcy50cyIsInNyYy91dGlsL3RpcHMvVGlwc0RhdGEudHMiLCJzcmMvdmlldy9HYW1lVmlldy50cyIsInNyYy92aWV3L0xvYWRpbmdWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBLGtEQUFpRDtBQUVqRCw0Q0FBMEM7QUFDMUMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM1QixrREFBaUQ7QUFFakQ7SUFnQkk7UUFQUSxR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QUMsS0FBSyxFQUFDO1lBQ3ZELEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQztZQUV2RSxRQUFRO1lBQ2hCLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3pFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUV6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRXpFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3pFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUV6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRXpFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3pFLEVBQUMsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUV6RSxFQUFDLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDekUsRUFBQyxHQUFHLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRXpFLEVBQUMsR0FBRyxFQUFFLDBDQUEwQyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxRSxFQUFDLEdBQUcsRUFBRSwwQ0FBMEMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFMUUsRUFBQyxHQUFHLEVBQUUsMENBQTBDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzFFLEVBQUMsR0FBRyxFQUFFLDBDQUEwQyxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUUxRSxFQUFDLEdBQUcsRUFBRSwwQ0FBMEMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDOUQsRUFBQyxHQUFHLEVBQUUsMENBQTBDLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRTFFLE1BQU07WUFDbEIsRUFBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFFckQsSUFBSTtZQUNKLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hFLEVBQUMsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBRWhFLE1BQU07WUFDTixFQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUVyRCxJQUFJO1lBQ0osRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxL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QUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTthQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUFZLENBQUMsQ0FBQztTQUNsRTtR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QyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsT0FBTztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEcsTUFBTTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFD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LE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLHdDQUF3QyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsc0NBQXNDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxzQkFBc0IsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxnQ0FBZ0MsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsZ0NBQWdDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxvQkFBb0IsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsdUNBQXVDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxF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Q0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEdBQVUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDbEQsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxLQUFLO1lBQ2hELEVBQUUsR0FBRyxDQUFDLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztZQUVaLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMs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T0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUVNLDZCQUFPLEdBQWQsVUFBZSxHQUFVO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQy9CLElBQUcsR0FBRyxJQUFJLENBQUMsRUFBQztZQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTCxrQkFBQztBQUFELENBbkNBLEFBbUNDLENBbkNnQyxjQUFFLENBQUMsYUFBYSxHQW1DaEQ7QUFuQ1ksa0NBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgTG9hZGluZ1ZpZXcgfSBmcm9tIFwiLi92aWV3L0xvYWRpbmdWaWV3XCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XHJcbmltcG9ydCB7IEdhbWVWaWV3IH0gZnJvbSBcIi4vdmlldy9HYW1lVmlld1wiXHJcbmltcG9ydCBMb2FkZXIgPSBMYXlhLkxvYWRlcjtcclxuaW1wb3J0IHsgQW5hbHlzaXNYTUwgfSBmcm9tIFwiLi9kYXRhL0FuYWx5c2lzWE1MXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbFwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZXtcclxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpHYW1lO1xyXG5cdHB1YmxpYyBMZDpMb2FkaW5nVmlldztcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpHYW1lIHtcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlczpBcnJheTxhbnk+ID0gW1xyXG4gICAgICAgIHt1cmw6XCJyZXMvYXRsYXMvaW1nLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG4gICAgICAgIHt1cmw6XCJyZXMvYXRsYXMvaW1nLnBuZ1wiLCB0eXBlOkxheWEuTG9hZGVyLklNQUdFfSxcclxuICAgICAgICB7dXJsOlwicmVzL2F0bGFzL2xvYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBU30sXHJcbiAgICAgICAge3VybDpcInJlcy9hdGxhcy9sb2FkLnBuZ1wiLCB0eXBlOkxheWEuTG9hZGVyLklNQUdFfSxcclxuICAgICAgICB7dXJsOlwibG9hZC9sYWRpbmdfYmcxLnBuZ1wiLCB0eXBlOkxheWEuTG9hZGVyLklNQUdFfVxyXG4gICAgXVxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBMYXlhLmluaXQoMTI4MCwgNzIwLCBMYXlhLldlYkdMKTtcclxuXHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBcInNob3dhbGxcIjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gXCJob3Jpem9udGFsXCI7XHJcblxyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQodGhpcy5yZXMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkxvYWRlZCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkxvYWRlZCgpe1xyXG5cdFx0dGhpcy5MZCA9IG5ldyBMb2FkaW5nVmlldygpO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLkxkKTtcclxuXHRcdHRoaXMuTGQub25jZShcInN0YXJ0Z2FtZVwiLCB0aGlzLCB0aGlzLnN0YXJ0R2FtZSk7XHJcblx0XHRMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMoXCIuL3Jlcy9zb3VuZC9IYWxsU2NlbmUubXAzXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRPdGhlckFzc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkT3RoZXJBc3NldCgpe1xyXG4gICAgICAgIHZhciBhc3NldHM6QXJyYXk8YW55PiA9IFtcclxuICAgICAgICAgICAgLy8v5Yqg6L295a2Q5by557Sg5p2QXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9idWxsZXQvYnVsbGV0MS5hdGxhc1wiLHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvYnVsbGV0L2J1bGxldDIuYXRsYXNcIix0eXBlOkxheWEuTG9hZGVyLkFUTEFTfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2J1bGxldC9idWxsZXQzLmF0bGFzXCIsdHlwZTpMYXlhLkxvYWRlci5BVExBU30sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9idWxsZXQvYnVsbGV0NC5hdGxhc1wiLHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvYnVsbGV0L2J1bGxldDUuYXRsYXNcIix0eXBlOkxheWEuTG9hZGVyLkFUTEFTfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2J1bGxldC9idWxsZXQ2LmF0bGFzXCIsdHlwZTpMYXlhLkxvYWRlci5BVExBU30sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9idWxsZXQvYnVsbGV0Ny5hdGxhc1wiLHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVN9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvYnVsbGV0L2J1bGxldDguYXRsYXNcIix0eXBlOkxheWEuTG9hZGVyLkFUTEFTfSxcclxuICAgICAgICAgICAgICAgIHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvYnVsbGV0L2J1bGxldDkuYXRsYXNcIix0eXBlOkxheWEuTG9hZGVyLkFUTEFTfSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLy/psbzliqjnlLvotYTmupBcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxL2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMi9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDIvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gzL2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMy9kZWFkLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDQvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g0L2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNS9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDUvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g2L2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNi9kZWFkLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDcvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g3L2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoOC9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDgvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g5L2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoOS9kZWFkLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEwL2xpdmUuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTAvZGVhZC5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxMS9saXZlLmF0bGFzXCIsIHR5cGU6TGF5YS5Mb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDExL2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTIvbGl2ZS5hdGxhc1wiLCB0eXBlOkxheWEuTG9hZGVyLkFUTEFTIH0sXHJcbiAgICAgICAgICAgICAgICB7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEyL2RlYWQuYXRsYXNcIiwgdHlwZTpMYXlhLkxvYWRlci5BVExBUyB9LFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL3RpcHNcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL3RpcC5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v5aSn54KuXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uMS5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvY2Fubm9uL2Nhbm5vbjIuYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub24zLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uNC5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvY2Fubm9uL2Nhbm5vbjUuYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy9hdGxhcy9maXNoL2Nhbm5vbi9jYW5ub242LmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uNy5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v5YW25LuW57Sg5p2QXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9pbWcuYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL+a1t+iXu1xyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvc2Vhd2VlZC9zZWF3ZWVkMS5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvc2Vhd2VlZC9zZWF3ZWVkMi5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvc2Vhd2VlZC9zZWF3ZWVkMy5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL2F0bGFzL2Zpc2gvc2Vhd2VlZC9zZWF3ZWVkNC5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v6YeR5biBXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9tb25leS9jb2luLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9tb25leS9zaWx2ZXIuYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL+mBk+WFt1xyXG5cdFx0XHRcdC8v54K45by5XHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC90b29scy9ib29tLmF0bGFzXCIsIHR5cGU6TG9hZGVyLkFUTEFTIH0sXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC90b29scy5hdGxhc1wiLCB0eXBlOkxvYWRlci5BVExBUyB9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v54m55pWIXHJcblx0XHRcdFx0e3VybDogXCJyZXMvYXRsYXMvZmlzaC9lZmZlY3QvZmxhc2guYXRsYXNcIiwgdHlwZTpMb2FkZXIuQVRMQVMgfSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLy/psbzmlbDmja54bWxcclxuXHRcdFx0XHR7dXJsOiBcInJlcy94bWwvZmlzaC54bWxcIix0eXBlOkxvYWRlci5YTUx9LFxyXG5cdFx0XHRcdHt1cmw6IFwicmVzL3htbC9idWxsZXQueG1sXCIsdHlwZTpMb2FkZXIuWE1MfSxcclxuXHRcdF1cclxuXHRcdExheWEubG9hZGVyLmxvYWQoYXNzZXRzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMubG9hZENvbXMpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMubG9hZFByb2dyZXNzLG51bGwsZmFsc2UpKTtcclxuXHR9XHJcblx0XHJcblx0cHJpdmF0ZSBsb2FkQ29tcygpe1xyXG5cdFx0QW5hbHlzaXNYTUwuZ2V0SW5zdGFuY2UoKS5hbmFseXNpc0Zpc2hEYXRhKCk7XHJcblx0XHRBbmFseXNpc1hNTC5nZXRJbnN0YW5jZSgpLmFuYWx5c2lzQnVsbGV0RGF0YSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkUHJvZ3Jlc3ModmFsOm51bWJlcil7XHJcblx0XHRpZih0aGlzLkxkKXtcclxuXHRcdFx0dGhpcy5MZC5zZXREYXRhKHZhbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEdhbWUoKXtcclxuICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIEd2OkdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKEd2KTtcclxuXHRcdExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhcIi4vcmVzL3NvdW5kL0Zpc2hNYXRyaXgubXAzXCIpO1xyXG4gICAgfVxyXG59XHJcbnZhciBnYW1lOkdhbWUgPSBuZXcgR2FtZSgpOyIsImV4cG9ydCBjbGFzcyBHbG9iYWwgXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkdsb2JhbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpHbG9iYWwge1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR2xvYmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgdG90YWxXaWR0aDpudW1iZXIgPSAxMjgwOy8v5oC75a695bqmXHJcbiAgICBwdWJsaWMgdG90YWxIZWlnaHQ6bnVtYmVyID0gNzAwOy8v5oC76ZW/5bqmXHJcbiAgICBwdWJsaWMgYm90dG9tU3BhY2U6bnVtYmVyID0gNTA7Ly/ot53nprvlupXpg6jnqbrpmplcclxuICAgIFxyXG4gICAgcHVibGljIGJ1bGxldE1vdmVTcGVlZDpudW1iZXIgPSAxNTsvL+WtkOW8ueenu+WKqOmAn+W6plxyXG4gICAgcHVibGljIElTUEFVU0U6Qm9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm5pqC5YGcXHJcbiAgICBwdWJsaWMgSVNPVkVSOkJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpue7k+adn1xyXG4gICAgXHJcbiAgICAvL+WtkOW8ueS/ruato+WAvFxyXG4gICAgcHVibGljIGJ1bGxldE9uZVZhbHVlOm51bWJlciA9IDQwO1xyXG4gICAgcHVibGljIGJ1bGxldE90aGVyVmFsdWU6bnVtYmVyID0gMTYwO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgdG90YWxGaXNoTnVtOm51bWJlciA9IDMwOy8v5bGP5bmV5Lit5pyA5aSaZmlzaFxyXG4gICAgXHJcbiAgICBwdWJsaWMgdG90YWxTb2NyZTpudW1iZXIgPSAxMDAwOy8v5Yid5aeL5oC75YiG5pWwXHJcbiAgICBcclxuICAgIHByaXZhdGUgX2x2bG51bTpudW1iZXIgPSAxOy8v5b2T5YmN55qE5YWz5Y2hXHJcbiAgICBwdWJsaWMgZ2V0IGx2bG51bSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbHZsbnVtO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBsdmxudW0odmFsOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fbHZsbnVtID0gdmFsO1xyXG4gICAgICAgIHRoaXMuX2x2bG51bSA9IE1hdGgubWluKHRoaXMuX2x2bG51bSwgNDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubHZsQWRkVmFsdWUgPSAxICsgdGhpcy5fbHZsbnVtICogMC4wNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGx2bEFkZFZhbHVlOm51bWJlciA9IDA7Ly/lhbPljaHlop7liqDpgJ/luqbns7vmlbBcclxuICAgIHB1YmxpYyBnZXRQb3dlck51bTpudW1iZXIgPSAwOy8v6I635Y+W5Yiw55qE6IO96YePXHJcbiAgICBcclxuICAgIHB1YmxpYyBzaG9vdEludGVyVGltZTpudW1iZXIgPSAxOy8v5a2Q5by55Y+R5bCE6Ze06ZqUIFxyXG4gICAgcHVibGljIHNob290UG93ZXI6bnVtYmVyID0gMTsvL+WtkOW8ueWogeWKmyAgICBcclxufSIsImltcG9ydCB7IEZpc2hWbyB9IGZyb20gXCIuL0Zpc2hWb1wiO1xyXG5pbXBvcnQgeyBEYXRhUHJveHkgfSBmcm9tIFwiLi9EYXRhUHJveHlcIjtcclxuaW1wb3J0IHsgQnVsbGV0Vm8gfSBmcm9tIFwiLi9CdWxsZXRWb1wiO1xyXG5leHBvcnQgY2xhc3MgQW5hbHlzaXNYTUx7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpBbmFseXNpc1hNTDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpBbmFseXNpc1hNTHtcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEFuYWx5c2lzWE1MKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYW5hbHlzaXNGaXNoRGF0YSgpe1xyXG4gICAgICAgIHZhciBmaXNoTGlzdDpBcnJheTxhbnk+ID0gW1xyXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCLlsI/kuJHpsbxcIixcImlkXCI6MCxcImxpdmVVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gxMlxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDEyXFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjEsXCJibG9vZF9taW5cIjoyLFwiYmxvb2RfTWF4XCI6MixcInNjb3JlXCI6NSxcInNwZWVkXCI6NCxcImhpdFZhbHVlXCI6MX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIuicu+ick+mxvFwiLFwiaWRcIjoxLFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDhcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2g4XFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjEsXCJibG9vZF9taW5cIjo0LFwiYmxvb2RfTWF4XCI6NCxcInNjb3JlXCI6OSxcInNwZWVkXCI6NCxcImhpdFZhbHVlXCI6MX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIum7hOmxvFwiLFwiaWRcIjoyLFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDVcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2g1XFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjEsXCJibG9vZF9taW5cIjo1LFwiYmxvb2RfTWF4XCI6MTAsXCJzY29yZVwiOjgsXCJzcGVlZFwiOjUsXCJoaXRWYWx1ZVwiOjF9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCLng63luKbpsbxcIixcImlkXCI6MyxcImxpdmVVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2g5XFxsaXZlLmF0bGFzXCIsXCJkZWFkVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoOVxcZGVhZC5hdGxhc1wiLFwiZ3JhZGVcIjoxLFwiYmxvb2RfbWluXCI6NCxcImJsb29kX01heFwiOjEyLFwic2NvcmVcIjoyMCxcInNwZWVkXCI6NSxcImhpdFZhbHVlXCI6MX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIumHkeaequmxvFwiLFwiaWRcIjo0LFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDdcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2g3XFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjEsXCJibG9vZF9taW5cIjoyMCxcImJsb29kX01heFwiOjQwLFwic2NvcmVcIjozMCxcInNwZWVkXCI6MyxcImhpdFZhbHVlXCI6MTB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCLmsLTmr41cIixcImlkXCI6NSxcImxpdmVVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gxMFxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDEwXFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjIsXCJibG9vZF9taW5cIjoyMCxcImJsb29kX01heFwiOjMwLFwic2NvcmVcIjozMCxcInNwZWVkXCI6MixcImhpdFZhbHVlXCI6MTB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCLps4TpsbxcIixcImlkXCI6NixcImxpdmVVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gyXFxsaXZlLmF0bGFzXCIsXCJkZWFkVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoMlxcZGVhZC5hdGxhc1wiLFwiZ3JhZGVcIjozLFwiYmxvb2RfbWluXCI6MjAwLFwiYmxvb2RfTWF4XCI6MzAwLFwic2NvcmVcIjo1MCxcInNwZWVkXCI6OCxcImhpdFZhbHVlXCI6MjB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCLlpKfkuYzpvp9cIixcImlkXCI6NyxcImxpdmVVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gxMVxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDExXFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjMsXCJibG9vZF9taW5cIjozMDAsXCJibG9vZF9NYXhcIjo0MDAsXCJzY29yZVwiOjYwLFwic3BlZWRcIjoxLjUsXCJoaXRWYWx1ZVwiOjIwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOlwi5rW36LGaXCIsXCJpZFwiOjgsXCJsaXZlVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoNFxcbGl2ZS5hdGxhc1wiLFwiZGVhZFVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDRcXGRlYWQuYXRsYXNcIixcImdyYWRlXCI6NSxcImJsb29kX21pblwiOjQ1MCxcImJsb29kX01heFwiOjYwMCxcInNjb3JlXCI6MjUwLFwic3BlZWRcIjoxLFwiaGl0VmFsdWVcIjoyMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIumyuOmxvFwiLFwiaWRcIjo5LFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDZcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2g2XFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjQsXCJibG9vZF9taW5cIjo0MDAsXCJibG9vZF9NYXhcIjo1MDAsXCJzY29yZVwiOjIwMCxcInNwZWVkXCI6MC41LFwiaGl0VmFsdWVcIjo1MH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIua1t+iDhumxvFwiLFwiaWRcIjoxMCxcImxpdmVVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gzXFxsaXZlLmF0bGFzXCIsXCJkZWFkVXJsXCI6XCJmaXNoXFxmaXNoaW1nXFxmaXNoM1xcZGVhZC5hdGxhc1wiLFwiZ3JhZGVcIjo0LFwiYmxvb2RfbWluXCI6OTAsXCJibG9vZF9NYXhcIjoyMzAsXCJzY29yZVwiOjQ1LFwic3BlZWRcIjoxLFwiaGl0VmFsdWVcIjo1fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOlwi54Gv56y86bG8XCIsXCJpZFwiOjExLFwibGl2ZVVybFwiOlwiZmlzaFxcZmlzaGltZ1xcZmlzaDFcXGxpdmUuYXRsYXNcIixcImRlYWRVcmxcIjpcImZpc2hcXGZpc2hpbWdcXGZpc2gxXFxkZWFkLmF0bGFzXCIsXCJncmFkZVwiOjQsXCJibG9vZF9taW5cIjoxMDAsXCJibG9vZF9NYXhcIjoyMDAsXCJzY29yZVwiOjQwLFwic3BlZWRcIjoxLFwiaGl0VmFsdWVcIjo1fVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgZmlzaExpc3QubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgbm9kZTphbnkgPSBmaXNoTGlzdFtpXTtcclxuXHRcdFx0XHR2YXIgZmlzaFZvID0gbmV3IEZpc2hWbztcdFx0XHJcbiAgICAgICAgICAgICAgICBmaXNoVm8ubmFtZT1ub2RlW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIGZpc2hWby5pZD1ub2RlW1wiaWRcIl07XHJcbiAgICAgICAgICAgICAgICBmaXNoVm8ubGl2ZVVybD1ub2RlW1wibGl2ZVVybFwiXTtcclxuICAgICAgICAgICAgICAgIGZpc2hWby5kZWFkVXJsPW5vZGVbXCJkZWFkVXJsXCJdO1xyXG4gICAgICAgICAgICAgICAgZmlzaFZvLmdyYWRlPW5vZGVbXCJncmFkZVwiXTtcclxuICAgICAgICAgICAgICAgIGZpc2hWby5ibG9vZF9taW49bm9kZVtcImJsb29kX21pblwiXTtcclxuICAgICAgICAgICAgICAgIGZpc2hWby5ibG9vZF9NYXg9bm9kZVtcImJsb29kX01heFwiXTtcclxuICAgICAgICAgICAgICAgIGZpc2hWby5zY29yZT1ub2RlW1wic2NvcmVcIl07XHJcbiAgICAgICAgICAgICAgICBmaXNoVm8uc3BlZWQ9bm9kZVtcInNwZWVkXCJdO1xyXG4gICAgICAgICAgICAgICAgZmlzaFZvLmhpdFZhbHVlPW5vZGVbXCJoaXRWYWx1ZVwiXTtcclxuICAgICAgICAgICAgICAgIERhdGFQcm94eS5nZXRJbnN0YW5jZSgpLmZpc2hEYXRhRGljLnNldChmaXNoVm8uaWQsIGZpc2hWbyk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgIGFuYWx5c2lzQnVsbGV0RGF0YSgpOnZvaWQge1xyXG4gICAgICAgIHZhciBidWxsZXRMaXN0OkFycmF5PGFueT4gPSBbXHJcbiAgICAgICAgICAgIHtcInR5cGVcIjoxLCBcInBvd2VyUmFkaXVzXCI6MTAsIFwiYm9vbVJhZGl1c1wiOjIwLCBcInNwZWVkXCI6MTUsIFwicG93ZXJcIjoxfSxcclxuICAgICAgICAgICAge1widHlwZVwiOjIsIFwicG93ZXJSYWRpdXNcIjoxMCwgXCJib29tUmFkaXVzXCI6NzUsIFwic3BlZWRcIjoxNSwgXCJwb3dlclwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJ0eXBlXCI6MywgXCJwb3dlclJhZGl1c1wiOjEwLCBcImJvb21SYWRpdXNcIjo3NSwgXCJzcGVlZFwiOjE1LCBcInBvd2VyXCI6M30sXHJcbiAgICAgICAgICAgIHtcInR5cGVcIjo0LCBcInBvd2VyUmFkaXVzXCI6MTAsIFwiYm9vbVJhZGl1c1wiOjc1LCBcInNwZWVkXCI6MTUsIFwicG93ZXJcIjo0fSxcclxuICAgICAgICAgICAge1widHlwZVwiOjUsIFwicG93ZXJSYWRpdXNcIjoxMCwgXCJib29tUmFkaXVzXCI6NzUsIFwic3BlZWRcIjoxNSwgXCJwb3dlclwiOjV9LFxyXG4gICAgICAgICAgICB7XCJ0eXBlXCI6NiwgXCJwb3dlclJhZGl1c1wiOjEwLCBcImJvb21SYWRpdXNcIjo3NSwgXCJzcGVlZFwiOjE1LCBcInBvd2VyXCI6Nn0sXHJcbiAgICAgICAgICAgIHtcInR5cGVcIjo3LCBcInBvd2VyUmFkaXVzXCI6MTAsIFwiYm9vbVJhZGl1c1wiOjc1LCBcInNwZWVkXCI6MTUsIFwicG93ZXJcIjo3fSxcclxuICAgICAgICBdXHJcbiAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgYnVsbGV0TGlzdC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBub2RlOmFueSA9IGJ1bGxldExpc3RbaV07XHJcbiAgICAgICAgICAgIHZhciBidWxsZXRWbyA9IG5ldyBCdWxsZXRWbygpO1xyXG4gICAgICAgICAgICBidWxsZXRWby50eXBlID0gbm9kZVtcInR5cGVcIl07XHJcbiAgICAgICAgICAgIGJ1bGxldFZvLnBvd2VyUmFkaXVzID0gbm9kZVtcInBvd2VyUmFkaXVzXCJdO1xyXG4gICAgICAgICAgICBidWxsZXRWby5ib29tUmFkaXVzID0gbm9kZVtcImJvb21SYWRpdXNcIl07XHJcbiAgICAgICAgICAgIGJ1bGxldFZvLnNwZWVkID0gbm9kZVtcInNwZWVkXCJdO1xyXG4gICAgICAgICAgICBidWxsZXRWby5wb3dlciA9IG5vZGVbXCJwb3dlclwiXTtcclxuICAgICAgICAgICAgRGF0YVByb3h5LmdldEluc3RhbmNlKCkuYnVsbGV0RGF0YURpYy5zZXQoYnVsbGV0Vm8udHlwZSwgYnVsbGV0Vm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBCdWxsZXRWb3tcclxuICAgIHB1YmxpYyB0eXBlOm51bWJlcjtcclxuICAgIHB1YmxpYyBwb3dlclJhZGl1czpudW1iZXI7XHJcbiAgICBwdWJsaWMgYm9vbVJhZGl1czpudW1iZXI7XHJcbiAgICBwdWJsaWMgc3BlZWQ6bnVtYmVyO1xyXG4gICAgcHVibGljIHBvd2VyOm51bWJlcjtcclxufSIsImltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tIFwiLi9EaWN0aW9uYXJ5XCJcclxuaW1wb3J0IHsgRmlzaFZvIH0gZnJvbSBcIi4vRmlzaFZvXCI7XHJcbmltcG9ydCB7IEJ1bGxldFZvIH0gZnJvbSBcIi4vQnVsbGV0Vm9cIjtcclxuZXhwb3J0IGNsYXNzIERhdGFQcm94eXtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkRhdGFQcm94eSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZmlzaERhdGFEaWM6RGljdGlvbmFyeSA9IG5ldyBEaWN0aW9uYXJ5KCk7XHJcbiAgICBwdWJsaWMgYnVsbGV0RGF0YURpYzpEaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnkoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpEYXRhUHJveHlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEYXRhUHJveHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcigpe307XHJcblxyXG4gICAgLy/psbznm7jlhbPmlbDmja5cclxuICAgIHB1YmxpYyBnZXREYXRhQnlJZChpZDpudW1iZXIpOkZpc2hWbyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlzaERhdGFEaWMuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2J1bGxldCBkYXRhXHJcbiAgICBwdWJsaWMgZ2V0RGF0YUJ5VHlwZSh0eXBlOm51bWJlcik6QnVsbGV0Vm8ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1bGxldERhdGFEaWMuZ2V0KHR5cGUpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59IiwiZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkge1xyXG4gICAgcHJpdmF0ZSAgX3ZhbHVlczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBwcml2YXRlICBfa2V5czpBcnJheTxhbnk+ID0gW107XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ55qE5a2Q5YWD57Sg5YiX6KGo44CCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdmFsdWVzKCk6QXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInnmoTlrZDlhYPntKDplK7lkI3liJfooajjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBrZXlzKCk6QXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog57uZ5oyH5a6a55qE6ZSu5ZCN6K6+572u5YC844CCXHJcbiAgICAgKiBAcGFyYW0gICBrZXkg6ZSu5ZCN44CCXHJcbiAgICAgKiBAcGFyYW0gICB2YWx1ZSDlgLzjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXk6YW55LCB2YWx1ZTphbnkpOnZvaWQge1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaMh+WumuWvueixoeeahOmUruWQjee0ouW8leOAglxyXG4gICAgICogQHBhcmFtICAga2V5IOmUruWQjeWvueixoeOAglxyXG4gICAgICogQHJldHVybiDplK7lkI3ntKLlvJXjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluZGV4T2Yoa2V5Ok9iamVjdCk6bnVtYmVyIHtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleDtcclxuICAgICAgICAvLyBrZXkgPSAodHlwZW9mKGtleSkgU3RyaW5nKSA/IE51bWJlcihrZXkpIDogKChrZXkgaXMgTnVtYmVyKSA/IGtleS50b1N0cmluZygpIDoga2V5KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5oyH5a6a6ZSu5ZCN55qE5YC844CCXHJcbiAgICAgKiBAcGFyYW0gICBrZXkg6ZSu5ZCN5a+56LGh44CCXHJcbiAgICAgKiBAcmV0dXJuIOaMh+WumumUruWQjeeahOWAvOOAglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0KGtleTphbnkpOmFueSB7XHJcbiAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IHRoaXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA8IDAgPyBudWxsIDogdGhpcy5fdmFsdWVzW2luZGV4XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmjIflrprplK7lkI3nmoTlgLzjgIJcclxuICAgICAqIEBwYXJhbSAgIGtleSDplK7lkI3lr7nosaHjgIJcclxuICAgICAqIEByZXR1cm4g5piv5ZCm5oiQ5Yqf56e76Zmk44CCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmUoa2V5OmFueSk6Qm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IHRoaXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk5q2k5a+56LGh55qE6ZSu5ZCN5YiX6KGo5ZKM6ZSu5YC85YiX6KGo44CCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhcigpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2tleXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRmlzaFZve1xyXG4gICAgcHVibGljIGlkOm51bWJlciA9IDA7Ly9pZFxyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nID0gXCJcIjsvL+mxvOWQjeWtl1xyXG4gICAgcHVibGljIGdyYWRlOm51bWJlciA9IDA7Ly/nrYnnuqdcclxuICAgIHB1YmxpYyBzY29yZTpudW1iZXIgPSAwOy8v5b6X5YiGXHJcbiAgICBwdWJsaWMgc3BlZWQ6bnVtYmVyID0gMDsvL+mAn+W6plxyXG4gICAgcHVibGljIGJsb29kX21pbjpudW1iZXIgPSAwIDsvL+acgOWwj+ihgFxyXG4gICAgcHVibGljIGJsb29kX01heDpudW1iZXIgPSAwOy8v5pyA5aSn6KGAXHJcbiAgICBwdWJsaWMgbGl2ZVVybDpzdHJpbmcgPSBcIlwiOy8v5ri45Yqo5Yqo55S76Lev5b6EXHJcbiAgICBwdWJsaWMgZGVhZFVybDpzdHJpbmcgPSBcIlwiOy8v5q275Lqh5Yqo55S76Lev5b6EXHJcbiAgICBwdWJsaWMgaGl0VmFsdWU6bnVtYmVyID0gMDsvL+eisOaSnuWMuuWfn+S/ruato+WAvFxyXG4gICAgXHJcbiAgICBwdWJsaWMgZmlzaEluZm86c3RyaW5nID0gXCJcIjsvL+e8k+WtmOagh+ivhlxyXG4gICAgcHVibGljIGxldmVBbjpzdHJpbmcgPSBcIlwiOy8v56a75byA5Yqo55S7XHJcbiAgICBwdWJsaWMgZGVhZEFuOnN0cmluZyA9IFwiXCI7Ly/mrbvkuqHliqjnlLtcclxufSIsImltcG9ydCBBbmltYXRpb24gPSBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG5pbXBvcnQgUG9pbnQgPSBsYXlhLm1hdGhzLlBvaW50O1xyXG5pbXBvcnQgeyBCdWxsZXRWbyB9IGZyb20gXCIuLi8uLi9kYXRhL0J1bGxldFZvXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9HbG9iYWxcIjtcclxuZXhwb3J0IGNsYXNzIEJ1bGxldEZhdGhlciBleHRlbmRzIExheWEuU3ByaXRle1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6QnVsbGV0RmF0aGVyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkJ1bGxldEZhdGhlcntcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEJ1bGxldEZhdGhlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgQk9PTV9DT006c3RyaW5nID0gXCJib29tX2NvbVwiOy8v54iG54K457uT5p2f77yM5Zyo5YGa5LiA5qyh56Kw5pKe5qOA5rWLXHJcbiAgICBwcml2YXRlIF90eXBlOm51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaGFybTpudW1iZXI7Ly/kvKTlrrNcclxuICAgIHB1YmxpYyBoaXRSYWRpdXM6bnVtYmVyOy8v56Kw5pKe5Y2K5b6EXHJcbiAgICBwdWJsaWMgZGVhZGVkOkJvb2xlYW4gPSBmYWxzZTsvL+WtkOW8ueaYr+WQpuWtmOa0u1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc2lnbjpzdHJpbmcgPSBcIlwiOy8v5a2Q5by557G75Z6L5qCH6K+GXHJcbiAgICBwdWJsaWMgZmx5QW46c3RyaW5nID0gXCJcIjsvL+mjnuihjFxyXG4gICAgcHVibGljIGJvb21BbjpzdHJpbmcgPSBcIlwiOy8v54iG54K4XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZWxmV2lkdGg6bnVtYmVyID0gMDsvL+WGheWuueWuvemrmFxyXG4gICAgcHVibGljIHNlbGZIZWlnaHQ6bnVtYmVyID0gMDtcclxuICAgIFxyXG4gICAgcHVibGljIGFuaW1hdGlvbkJvZHk6QW5pbWF0aW9uOy8v5Yqo55S75a655ZmoXHJcbiAgICBwdWJsaWMgZGF0YVZvOkJ1bGxldFZvOy8v5b2T5YmN57G75Z6L5a2Q5by555u45YWz5pWw5o2uXHJcbiAgICBwdWJsaWMgaGl0UG9pbnQ6UG9pbnQgPSBuZXcgUG9pbnQoKTsvL+eisOaSnuS4reW/g+eCue+8iOWxgOmDqOWdkOagh1xyXG4gICAgcHVibGljIGlzSGl0RmlzaDpCb29sZWFuID0gZmFsc2U7Ly/mmK/lkKbnorDliLDpsbxcclxuICAgIHB1YmxpYyBpc0hpdFRvb2w6Qm9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm56Kw5pKe5Yiw6YGT5YW3XHJcblxyXG4gICAgcHJpdmF0ZSB0ZW1wQW5nbGU6bnVtYmVyID0gMDsvL+S4tOaXtuiusOW9leinkuW6plxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RGF0YSgpe307XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRWaWV3KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uQm9keSl7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keSA9IG5ldyBBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmFuaW1hdGlvbkJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCl7fVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHR5cGUodmFsOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucGxheSgwLCBmYWxzZSwgdGhpcy5mbHlBbik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnggPSAtKHRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS53aWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS55ID0gLXRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS5oZWlnaHQrMTAwO1xyXG4gICAgICAgIHRoaXMuc2VsZldpZHRoID0gdGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc2VsZkhlaWdodCA9IHRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS5oZWlnaHQ7Ly/kuK3lv4Pngrnkv67mraNcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhpdFJhZGl1cyA9IHRoaXMuZGF0YVZvLnBvd2VyUmFkaXVzO1xyXG4gICAgICAgIHRoaXMuc2V0SGl0UG9pbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGl0UG9pbnQoKXtcclxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0UG9pbnQuc2V0VG8oMCwgdGhpcy5hbmltYXRpb25Cb2R5LnkgKyBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5idWxsZXRPbmVWYWx1ZS8yKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5oaXRQb2ludC5zZXRUbygwLCB0aGlzLmFuaW1hdGlvbkJvZHkueSArIEdsb2JhbC5nZXRJbnN0YW5jZSgpLmJ1bGxldE90aGVyVmFsdWUvMiszMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5kZWFkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSGl0RmlzaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNIaXRUb29sID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oaXRSYWRpdXMgPSB0aGlzLmRhdGFWby5wb3dlclJhZGl1cztcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLCB0aGlzLCB0aGlzLmxvb3BIYW5kKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9vcEhhbmQoKXtcclxuICAgICAgICBpZihHbG9iYWwuZ2V0SW5zdGFuY2UoKS5JU1BBVVNFKXJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wQW5nbGUgPSB0aGlzLnJvdGF0aW9uIC0gOTA7XHJcbiAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMudGVtcEFuZ2xlICogTWF0aC5QSS8xODApICogdGhpcy5kYXRhVm8uc3BlZWQ7XHJcbiAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMudGVtcEFuZ2xlICogTWF0aC5QSS8xODApICogdGhpcy5kYXRhVm8uc3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SGl0UG9pbnQoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5oaXRCb3JkZXIoKXx8dGhpcy5pc0hpdEZpc2h8fHRoaXMuaXNIaXRUb29sKXtcclxuICAgICAgICAgICAgdGhpcy5ib29tKCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5sb29wSGFuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54iG54K4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBib29tKCl7XHJcbiAgICAgICAgbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKCdyZXMvc291bmQvYnVsbGV0X2Jvb20ubXAzJyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnBsYXkoMCwgZmFsc2UsIHRoaXMuYm9vbUFuKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkub25jZShMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLmJvb21Db20pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54iG54K45Yqo55S75pKt5pS+5a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYm9vbUNvbSgpe1xyXG4gICAgICAgIHRoaXMuaGl0UmFkaXVzID0gdGhpcy5kYXRhVm8uYm9vbVJhZGl1cztcclxuICAgICAgICB0aGlzLmV2ZW50KHRoaXMuQk9PTV9DT00sIFt0aGlzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbnorDmkp7liLDovrnnlYxcclxuICAgICAqIEByZXR1cm5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpdEJvcmRlcigpOkJvb2xlYW57XHJcbiAgICAgICAgdmFyIGdsb2JhbDpQb2ludCA9IHRoaXMubG9jYWxUb0dsb2JhbCh0aGlzLmhpdFBvaW50LCB0cnVlKTtcclxuICAgICAgICB2YXIgdmFsOm51bWJlciA9IDEwO1xyXG4gICAgICAgIGlmIChnbG9iYWwueCA8IHZhbCB8fCBnbG9iYWwueCA+IEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsV2lkdGggLSB2YWwgfHwgZ2xvYmFsLnkgPCB2YWwgfHwgZ2xvYmFsLnkgPiBHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbEhlaWdodC0xMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG5cdFx0ICog6I635Y+W56Kw5pKe55+p5b2iXHJcblx0XHQgKiBAcmV0dXJuXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyBnZXRIaXRSZWN0YW5nbGUoKTpMYXlhLlJlY3RhbmdsZXtcclxuXHRcdFx0dmFyIGdsb2JhbDpQb2ludCA9IHRoaXMubG9jYWxUb0dsb2JhbChuZXcgUG9pbnQodGhpcy5oaXRQb2ludC54LXRoaXMuaGl0UmFkaXVzLHRoaXMuaGl0UG9pbnQueS10aGlzLmhpdFJhZGl1cyksIHRydWUpO1xyXG5cdFx0XHR2YXIgbG9jYWw6UG9pbnQgPSB0aGlzLmdsb2JhbFRvTG9jYWwoZ2xvYmFsLCB0cnVlKTtcclxuICAgICAgICAgICAgdmFyIHJlYzpMYXlhLlJlY3RhbmdsZSA9IG5ldyBMYXlhLlJlY3RhbmdsZShsb2NhbC54LCBsb2NhbC55LCB0aGlzLmhpdFJhZGl1cyoyLCB0aGlzLmhpdFJhZGl1cyoyKTtcclxuXHRcdFx0cmV0dXJuIHJlYztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGdldENlbnRlcigpOlBvaW50e1xyXG5cdFx0XHR2YXIgZ2xvYmFsOlBvaW50ID0gdGhpcy5sb2NhbFRvR2xvYmFsKHRoaXMuaGl0UG9pbnQsdHJ1ZSk7XHJcblx0XHRcdHJldHVybiBnbG9iYWw7XHJcblx0XHR9XHJcbn0iLCJpbXBvcnQgQW5pbWF0aW9uID0gbGF5YS5kaXNwbGF5LkFuaW1hdGlvbjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciA9IGxheWEubWVkaWEuU291bmRNYW5hZ2VyO1xyXG5pbXBvcnQgUG9vbCA9IGxheWEudXRpbHMuUG9vbDtcclxuaW1wb3J0IHsgQnVsbGV0RmF0aGVyIH0gZnJvbSBcIi4vQnVsbGV0RmF0aGVyXCI7XHJcbmltcG9ydCB7IERhdGFQcm94eSB9IGZyb20gXCIuLi8uLi9kYXRhL0RhdGFQcm94eVwiO1xyXG5leHBvcnQgY2xhc3MgQnVsbGV0TWFuYWdlcntcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkJ1bGxldE1hbmFnZXJcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpCdWxsZXRNYW5hZ2Vye1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQnVsbGV0TWFuYWdlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy/niIbngrjliqjnlLvlkI3np7BcclxuICAgIHB1YmxpYyBCVUxMRVRfQk9PTV8xOnN0cmluZyA9IFwiYnVsbGV0X2Jvb21fMVwiO1xyXG4gICAgcHVibGljIEJVTExFVF9CT09NXzI6c3RyaW5nID0gXCJidWxsZXRfYm9vbV8yXCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0JPT01fMzpzdHJpbmcgPSBcImJ1bGxldF9ib29tXzNcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfQk9PTV80OnN0cmluZyA9IFwiYnVsbGV0X2Jvb21fNFwiO1xyXG4gICAgcHVibGljIEJVTExFVF9CT09NXzU6c3RyaW5nID0gXCJidWxsZXRfYm9vbV81XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0JPT01fNjpzdHJpbmcgPSBcImJ1bGxldF9ib29tXzZcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfQk9PTV83OnN0cmluZyA9IFwiYnVsbGV0X2Jvb21fN1wiO1xyXG4gICAgcHVibGljIEJVTExFVF9CT09NXzg6c3RyaW5nID0gXCJidWxsZXRfYm9vbV84XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0JPT01fOTpzdHJpbmcgPSBcImJ1bGxldF9ib29tXzlcIjtcclxuICAgIFxyXG4gICAgLy/lrZDlvLnpo57ooYzliqjnlLtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzE6c3RyaW5nID0gXCJidWxsZXRfZmx5XzFcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzI6c3RyaW5nID0gXCJidWxsZXRfZmx5XzJcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzM6c3RyaW5nID0gXCJidWxsZXRfZmx5XzNcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzQ6c3RyaW5nID0gXCJidWxsZXRfZmx5XzRcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzU6c3RyaW5nID0gXCJidWxsZXRfZmx5XzVcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzY6c3RyaW5nID0gXCJidWxsZXRfZmx5XzZcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzc6c3RyaW5nID0gXCJidWxsZXRfZmx5XzdcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzg6c3RyaW5nID0gXCJidWxsZXRfZmx5XzhcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfRkxZXzk6c3RyaW5nID0gXCJidWxsZXRfZmx5XzlcIjtcclxuICAgIFxyXG4gICAgLy/lrZDlvLlcclxuICAgIHB1YmxpYyBCVUxMRVRfSU5GT18xOnN0cmluZyA9IFwiYnVsbGV0X2luZm9fMVwiO1xyXG4gICAgcHVibGljIEJVTExFVF9JTkZPXzI6c3RyaW5nID0gXCJidWxsZXRfaW5mb18yXCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0lORk9fMzpzdHJpbmcgPSBcImJ1bGxldF9pbmZvXzNcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfSU5GT180OnN0cmluZyA9IFwiYnVsbGV0X2luZm9fNFwiO1xyXG4gICAgcHVibGljIEJVTExFVF9JTkZPXzU6c3RyaW5nID0gXCJidWxsZXRfaW5mb181XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0lORk9fNjpzdHJpbmcgPSBcImJ1bGxldF9pbmZvXzZcIjtcclxuICAgIHB1YmxpYyBCVUxMRVRfSU5GT183OnN0cmluZyA9IFwiYnVsbGV0X2luZm9fN1wiO1xyXG4gICAgcHVibGljIEJVTExFVF9JTkZPXzg6c3RyaW5nID0gXCJidWxsZXRfaW5mb184XCI7XHJcbiAgICBwdWJsaWMgQlVMTEVUX0lORk9fOTpzdHJpbmcgPSBcImJ1bGxldF9pbmZvXzlcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICog57yT5a2Y5a2Q5by554iG54K45pWI5p6cXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjYWNoZUFuaW1hdGlvbigpOnZvaWQge1xyXG4gICAgICAgIC8v5a2Q5by5MemjnuihjOWKqOeUu1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC9idWxsZXQvYnVsbGV0MS9idWxsZXQwMDAxLnBuZ1wiXSx0aGlzLkJVTExFVF9GTFlfMSk7XHJcbiAgICAgICAgLy/lrZDlvLkx54iG54K45Yqo55S7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0MS9idWxsZXQwMDAxLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDEvYnVsbGV0MDAwMi5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQxL2J1bGxldDAwMDMucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0MS9idWxsZXQwMDA0LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDEvYnVsbGV0MDAwNS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQxL2J1bGxldDAwMDYucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0MS9idWxsZXQwMDA3LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDEvYnVsbGV0MDAwOC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQxL2J1bGxldDAwMDkucG5nXCJcclxuICAgICAgICBdLCB0aGlzLkJVTExFVF9CT09NXzEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5a2Q5by5MumjnuihjOWKqOeUu1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC9idWxsZXQvYnVsbGV0Mi9idWxsZXQyMDAwMS5wbmdcIl0sdGhpcy5CVUxMRVRfRkxZXzIpO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDIvYnVsbGV0MjAwMDEucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Mi9idWxsZXQyMDAwMi5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQyL2J1bGxldDIwMDAzLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDIvYnVsbGV0MjAwMDQucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Mi9idWxsZXQyMDAwNS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQyL2J1bGxldDIwMDA2LnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDIvYnVsbGV0MjAwMDcucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Mi9idWxsZXQyMDAwOC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQyL2J1bGxldDIwMDA5LnBuZ1wiXHJcbiAgICAgICAgXSwgdGhpcy5CVUxMRVRfQk9PTV8yKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WtkOW8uTPpo57ooYzliqjnlLtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvYnVsbGV0L2J1bGxldDMvYnVsbGV0MzAwMDEucG5nXCJdLHRoaXMuQlVMTEVUX0ZMWV8zKTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQzL2J1bGxldDMwMDAxLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDMvYnVsbGV0MzAwMDIucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0My9idWxsZXQzMDAwMy5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQzL2J1bGxldDMwMDA0LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDMvYnVsbGV0MzAwMDUucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0My9idWxsZXQzMDAwNi5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQzL2J1bGxldDMwMDA3LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDMvYnVsbGV0MzAwMDgucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0My9idWxsZXQzMDAwOS5wbmdcIlxyXG4gICAgICAgIF0sIHRoaXMuQlVMTEVUX0JPT01fMyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lrZDlvLk06aOe6KGM5Yqo55S7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL2J1bGxldC9idWxsZXQ0L2J1bGxldDQwMDAxLnBuZ1wiXSx0aGlzLkJVTExFVF9GTFlfNCk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0NC9idWxsZXQ0MDAwMS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ0L2J1bGxldDQwMDAyLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDQvYnVsbGV0NDAwMDMucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0NC9idWxsZXQ0MDAwNC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ0L2J1bGxldDQwMDA1LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDQvYnVsbGV0NDAwMDYucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0NC9idWxsZXQ0MDAwNy5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ0L2J1bGxldDQwMDA4LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDQvYnVsbGV0NDAwMDkucG5nXCJcclxuICAgICAgICBdLCB0aGlzLkJVTExFVF9CT09NXzQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5a2Q5by5NemjnuihjOWKqOeUu1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC9idWxsZXQvYnVsbGV0NS9idWxsZXQ1MDAwMS5wbmdcIl0sdGhpcy5CVUxMRVRfRkxZXzUpO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDUvYnVsbGV0NTAwMDEucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0NS9idWxsZXQ1MDAwMi5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ1L2J1bGxldDUwMDAzLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDUvYnVsbGV0NTAwMDQucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0NS9idWxsZXQ1MDAwNS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ1L2J1bGxldDUwMDA2LnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDUvYnVsbGV0NTAwMDcucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0NS9idWxsZXQ1MDAwOC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ1L2J1bGxldDUwMDA5LnBuZ1wiXHJcbiAgICAgICAgXSwgdGhpcy5CVUxMRVRfQk9PTV81KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WtkOW8uTbpo57ooYzliqjnlLtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvYnVsbGV0L2J1bGxldDYvYnVsbGV0NjAwMDEucG5nXCJdLHRoaXMuQlVMTEVUX0ZMWV82KTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ2L2J1bGxldDYwMDAxLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDYvYnVsbGV0NjAwMDIucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ni9idWxsZXQ2MDAwMy5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ2L2J1bGxldDYwMDA0LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDYvYnVsbGV0NjAwMDUucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ni9idWxsZXQ2MDAwNi5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ2L2J1bGxldDYwMDA3LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDYvYnVsbGV0NjAwMDgucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0Ni9idWxsZXQ2MDAwOS5wbmdcIlxyXG4gICAgICAgIF0sIHRoaXMuQlVMTEVUX0JPT01fNik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lrZDlvLk36aOe6KGM5Yqo55S7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL2J1bGxldC9idWxsZXQ3L2J1bGxldDcwMDAxLnBuZ1wiXSx0aGlzLkJVTExFVF9GTFlfNyk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0Ny9idWxsZXQ3MDAwMS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ3L2J1bGxldDcwMDAyLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDcvYnVsbGV0NzAwMDMucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0Ny9idWxsZXQ3MDAwNC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ3L2J1bGxldDcwMDA1LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDcvYnVsbGV0NzAwMDYucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmlzaC9idWxsZXQvYnVsbGV0Ny9idWxsZXQ3MDAwNy5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ3L2J1bGxldDcwMDA4LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDcvYnVsbGV0NzAwMDkucG5nXCJcclxuICAgICAgICBdLCB0aGlzLkJVTExFVF9CT09NXzcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5a2Q5by5OOmjnuihjOWKqOeUu1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC9idWxsZXQvYnVsbGV0OC9idWxsZXQ4MDAwMS5wbmdcIl0sdGhpcy5CVUxMRVRfRkxZXzgpO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDgvYnVsbGV0ODAwMDEucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OC9idWxsZXQ4MDAwMi5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ4L2J1bGxldDgwMDAzLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDgvYnVsbGV0ODAwMDQucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OC9idWxsZXQ4MDAwNS5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ4L2J1bGxldDgwMDA2LnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZpc2gvYnVsbGV0L2J1bGxldDgvYnVsbGV0ODAwMDcucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OC9idWxsZXQ4MDAwOC5wbmdcIiwgXCJmaXNoL2J1bGxldC9idWxsZXQ4L2J1bGxldDgwMDA5LnBuZ1wiXHJcbiAgICAgICAgXSwgdGhpcy5CVUxMRVRfQk9PTV84KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WtkOW8uTnpo57ooYzliqjnlLtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvYnVsbGV0L2J1bGxldDkvYnVsbGV0OTAwMDEucG5nXCJdLHRoaXMuQlVMTEVUX0ZMWV85KTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ5L2J1bGxldDkwMDAxLnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDkvYnVsbGV0OTAwMDIucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OS9idWxsZXQ5MDAwMy5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ5L2J1bGxldDkwMDA0LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDkvYnVsbGV0OTAwMDUucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OS9idWxsZXQ5MDAwNi5wbmdcIixcclxuICAgICAgICAgICAgXCJmaXNoL2J1bGxldC9idWxsZXQ5L2J1bGxldDkwMDA3LnBuZ1wiLCBcImZpc2gvYnVsbGV0L2J1bGxldDkvYnVsbGV0OTAwMDgucG5nXCIsIFwiZmlzaC9idWxsZXQvYnVsbGV0OS9idWxsZXQ5MDAwOS5wbmdcIlxyXG4gICAgICAgIF0sIHRoaXMuQlVMTEVUX0JPT01fOSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDpopflrZDlvLlcclxuICAgICAqIEBwYXJhbVx0dHlwZVxyXG4gICAgICogQHJldHVyblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlQnVsbGV0QnlUeXBlKHR5cGU6bnVtYmVyKTpCdWxsZXRGYXRoZXIge1xyXG4gICAgICAgIHZhciBidWxsZXQ6QnVsbGV0RmF0aGVyO1xyXG4gICAgICAgIGlmICh0eXBlID09IDEpIHtcclxuICAgICAgICAgICAgYnVsbGV0ID0gUG9vbC5nZXRJdGVtQnlDbGFzcyh0aGlzLkJVTExFVF9JTkZPXzEsIEJ1bGxldEZhdGhlcik7XHJcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICBidWxsZXQgPSBQb29sLmdldEl0ZW1CeUNsYXNzKHRoaXMuQlVMTEVUX0lORk9fMiwgQnVsbGV0RmF0aGVyKTtcclxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIGJ1bGxldCA9IFBvb2wuZ2V0SXRlbUJ5Q2xhc3ModGhpcy5CVUxMRVRfSU5GT18zLCBCdWxsZXRGYXRoZXIpO1xyXG4gICAgICAgIH1lbHNlIGlmICh0eXBlID09IDQpIHtcclxuICAgICAgICAgICAgYnVsbGV0ID0gUG9vbC5nZXRJdGVtQnlDbGFzcyh0aGlzLkJVTExFVF9JTkZPXzQsIEJ1bGxldEZhdGhlcik7XHJcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gNSkge1xyXG4gICAgICAgICAgICBidWxsZXQgPSBQb29sLmdldEl0ZW1CeUNsYXNzKHRoaXMuQlVMTEVUX0lORk9fNSwgQnVsbGV0RmF0aGVyKTtcclxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSA2KSB7XHJcbiAgICAgICAgICAgIGJ1bGxldCA9IFBvb2wuZ2V0SXRlbUJ5Q2xhc3ModGhpcy5CVUxMRVRfSU5GT182LCBCdWxsZXRGYXRoZXIpO1xyXG4gICAgICAgIH1lbHNlIGlmICh0eXBlID09IDcpIHtcclxuICAgICAgICAgICAgYnVsbGV0ID0gUG9vbC5nZXRJdGVtQnlDbGFzcyh0aGlzLkJVTExFVF9JTkZPXzcsIEJ1bGxldEZhdGhlcik7XHJcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gOCkge1xyXG4gICAgICAgICAgICBidWxsZXQgPSBQb29sLmdldEl0ZW1CeUNsYXNzKHRoaXMuQlVMTEVUX0lORk9fOCwgQnVsbGV0RmF0aGVyKTtcclxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSA5KSB7XHJcbiAgICAgICAgICAgIGJ1bGxldCA9IFBvb2wuZ2V0SXRlbUJ5Q2xhc3ModGhpcy5CVUxMRVRfSU5GT185LCBCdWxsZXRGYXRoZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBidWxsZXQuc2lnbiA9IFwiYnVsbGV0X2luZm9fXCIgKyB0eXBlO1xyXG4gICAgICAgIGJ1bGxldC5mbHlBbiA9IFwiYnVsbGV0X2ZseV9cIiArIHR5cGU7XHJcbiAgICAgICAgYnVsbGV0LmJvb21BbiA9IFwiYnVsbGV0X2Jvb21fXCIgKyB0eXBlO1xyXG4gICAgICAgIGJ1bGxldC5kYXRhVm8gPSBEYXRhUHJveHkuZ2V0SW5zdGFuY2UoKS5nZXREYXRhQnlUeXBlKHR5cGUpO1xyXG4gICAgICAgIGJ1bGxldC50eXBlID0gdHlwZTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL2J1bGxldF9ub3JtYWwxLm1wM1wiKTtcclxuICAgICAgICByZXR1cm4gYnVsbGV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS25a2Q5by5XHJcbiAgICAgKiBAcGFyYW1cdGJ1bGxldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVjb3ZlckJ1bGxlckJ5VHlwZShidWxsZXQ6QnVsbGV0RmF0aGVyKTp2b2lkIHtcclxuICAgICAgICBQb29sLnJlY292ZXIoYnVsbGV0LnNpZ24sIGJ1bGxldCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVHdlZW4gPSBsYXlhLnV0aWxzLlR3ZWVuO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vR2xvYmFsXCI7XHJcbmltcG9ydCB7IENhbm5vbk1hbmFnZXIgfSBmcm9tIFwiLi9DYW5ub25NYW5hZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBDYW5ub25GYXRoZXIgZXh0ZW5kcyBMYXlhLlNwcml0ZXtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkNhbm5vbkZhdGhlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpDYW5ub25GYXRoZXJ7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDYW5ub25GYXRoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIE1JTl9UWVBFOm51bWJlciA9IDE7Ly/mnIDlsI/nsbvlnotcclxuICAgIHB1YmxpYyBNQVhfVFlQRTpudW1iZXIgPSA3Oy8v5pyA5aSn57G75Z6LXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uQm9keTpsYXlhLmRpc3BsYXkuQW5pbWF0aW9uOy8v5Yqo55S75a655ZmoXHJcbiAgICBwdWJsaWMgc2hvb3RUaW1lOm51bWJlciA9IDA7Ly/orrDlvZXkuIrmrKHlj5HlsITml7bpl7RcclxuICAgIHB1YmxpYyBzaG9vdEludGVydmFsOm51bWJlciA9IDI1MDsvL+WPkeWwhOmXtOmalCBtc1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc2VsZldpZHRoOm51bWJlciA9IDA7Ly/lhoXlrrnlrr3pq5hcclxuICAgIHB1YmxpYyBzZWxmSGVpZ2h0Om51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIHB1YmxpYyB4aXVWYWw6bnVtYmVyID0gMjU7Ly/kuK3lv4Pngrnkv67mraPlgLxcclxuICAgIHB1YmxpYyBlZmZlY3RCb2R5OmxheWEuZGlzcGxheS5BbmltYXRpb247XHJcblxyXG5cdHByaXZhdGUgc3Ryb25nSW5nOkJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpuWinuW8uuS4rVxyXG5cdHByaXZhdGUgX3N0cm9uZ1RpbWU6bnVtYmVyID0gMDsvL+WinuW8uuaXtumXtFxyXG4gICAgXHJcbiAgICBwcml2YXRlIHRpbWU6TGF5YS5UaW1lcjtcclxuICAgIHByaXZhdGUgX3R5cGU6bnVtYmVyID0gMFxyXG4gICAgcHVibGljIHN0cm9uZ1NjYWxlOm51bWJlciA9IDE7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5DYW5ub25GYXRoZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWw6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl90eXBlID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5wbGF5KDAsIGZhbHNlLCBcImNhbm5vbl9ub3JtYWxfXCIgKyB0aGlzLl90eXBlKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucG9zKC0zNSwgLTkwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxmV2lkdGggPSB0aGlzLmFuaW1hdGlvbkJvZHkuZ2V0Qm91bmRzKCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zZWxmSGVpZ2h0ID0gdGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLmhlaWdodDsvL+S4reW/g+eCueS/ruato1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3Ryb25nVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3Ryb25nVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHN0cm9uZ1RpbWUodmFsOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fc3Ryb25nVGltZSA9IHZhbDtcclxuICAgICAgICB0aGlzLl9zdHJvbmdUaW1lID0gTWF0aC5tYXgoMCwgdGhpcy5fc3Ryb25nVGltZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0cm9uZ1RpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb25nSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5jbGVhcih0aGlzLCB0aGlzLmxvb3ApO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dmbGFzaChmYWxzZSk7XHJcbiAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLnNob290SW50ZXJUaW1lID0gMTtcclxuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuc2hvb3RQb3dlciBcclxuICAgICAgICB9ZWxzZSBpZiAoIXRoaXMuc3Ryb25nSW5nKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lLmNsZWFyKHRoaXMsIHRoaXMubG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5sb29wKDEwMDAsIHRoaXMsIHRoaXMubG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb25nSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Zmxhc2godHJ1ZSk7XHJcbiAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLnNob290SW50ZXJUaW1lID0gMC41O1xyXG4gICAgICAgICAgICBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5zaG9vdFBvd2VyID0gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENhbm5vbkZhdGhlcigpe1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdERhdGEoKXtcclxuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgTGF5YS5UaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9vcCgpe1xyXG4gICAgICAgIHRoaXMuc3Ryb25nVGltZS0tO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0Vmlldygpe1xyXG4gICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbkJvZHkpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkgPSBuZXcgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYW5pbWF0aW9uQm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5lZmZlY3RCb2R5KXtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RCb2R5ID0gbmV3IGxheWEuZGlzcGxheS5BbmltYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmVmZmVjdEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG9vdEFuKCl7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnBsYXkoMCwgZmFsc2UsIFwiY2Fubm9uX3Nob290X1wiICsgdGhpcy50eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm90YXRlQW4ocm90YXRlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0ZTtcclxuICAgICAgICAvL3ZhciB0d2VlbjpUd2VlbiA9IG5ldyBUd2VlbigpO1xyXG5cdFx0XHQvL3R3ZWVuLnRvKHRoaXMsIHsgcm90YXRpb246cm90YXRlIH0sIDEwMCwgRWFzZS5jdWJpY091dCwgSGFuZGxlci5jcmVhdGUodGhpcywgZnVuY3Rpb24oKSB7IFxyXG5cdFx0XHRcdC8vdHdlZW4uY2xlYXIoKTtcclxuXHRcdFx0Ly99ICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93Zmxhc2goYm9vOkJvb2xlYW4pe1xyXG4gICAgICAgIGlmKGJvbyl7XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb25nU2NhbGUgPSAxLjM7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0Qm9keS5wbGF5KDAsIHRydWUsIENhbm5vbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5FRkZFQ1RfRkxBU0gpO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdEJvZHkucG9zKC10aGlzLmVmZmVjdEJvZHkuZ2V0Qm91bmRzKCkud2lkdGgvMiAtIDEwLCAtdGhpcy5lZmZlY3RCb2R5LmdldEJvdW5kcygpLmhlaWdodC8yLTIwKTtcclxuICAgICAgICAgICAgVHdlZW4udG8odGhpcywge3NjYWxlWDp0aGlzLnN0cm9uZ1NjYWxlLCBzY2FsZVk6dGhpcy5zdHJvbmdTY2FsZX0sIDIwMCwgbGF5YS51dGlscy5FYXNlLmJhY2tPdXQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9uZ1NjYWxlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RCb2R5LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIFR3ZWVuLnRvKHRoaXMsIHtzY2FsZVg6dGhpcy5zdHJvbmdTY2FsZSwgc2NhbGVZOnRoaXMuc3Ryb25nU2NhbGV9LCAyMDAsIGxheWEudXRpbHMuRWFzZS5iYWNrSW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENhbm5vbkZhdGhlciB9IGZyb20gXCIuL0Nhbm5vbkZhdGhlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbm5vbk1hbmFnZXJ7XHJcbiAgICBwcml2YXRlIGNhbm5vbjpDYW5ub25GYXRoZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpDYW5ub25NYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkNhbm5vbk1hbmFnZXJ7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDYW5ub25NYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8v5aSn54Ku5q2j5bi4XHJcbiAgICBwdWJsaWMgQ0FOTk9OX05PUk1BTF8xOnN0cmluZyA9IFwiY2Fubm9uX25vcm1hbF8xXCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX05PUk1BTF8yOnN0cmluZyA9IFwiY2Fubm9uX25vcm1hbF8yXCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX05PUk1BTF8zOnN0cmluZyA9IFwiY2Fubm9uX25vcm1hbF8zXCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX05PUk1BTF80OnN0cmluZyA9IFwiY2Fubm9uX25vcm1hbF80XCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX05PUk1BTF81OnN0cmluZyA9IFwiY2Fubm9uX25vcm1hbF81XCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX05PUk1BTF82OnN0cmluZyA9IFwiY2Fubm9uX25vcm1hbF82XCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX05PUk1BTF83OnN0cmluZyA9IFwiY2Fubm9uX25vcm1hbF83XCI7XHJcbiAgICAvL+Wkp+eCruWwhOWHu1xyXG4gICAgcHVibGljIENBTk5PTl9TSE9PVF8xOnN0cmluZyA9IFwiY2Fubm9uX3Nob290XzFcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fU0hPT1RfMjpzdHJpbmcgPSBcImNhbm5vbl9zaG9vdF8yXCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX1NIT09UXzM6c3RyaW5nID0gXCJjYW5ub25fc2hvb3RfM1wiO1xyXG4gICAgcHVibGljIENBTk5PTl9TSE9PVF80OnN0cmluZyA9IFwiY2Fubm9uX3Nob290XzRcIjtcclxuICAgIHB1YmxpYyBDQU5OT05fU0hPT1RfNTpzdHJpbmcgPSBcImNhbm5vbl9zaG9vdF81XCI7XHJcbiAgICBwdWJsaWMgQ0FOTk9OX1NIT09UXzY6c3RyaW5nID0gXCJjYW5ub25fc2hvb3RfNlwiO1xyXG4gICAgcHVibGljIENBTk5PTl9TSE9PVF83OnN0cmluZyA9IFwiY2Fubm9uX3Nob290XzdcIjtcclxuICAgIFxyXG4gICAgLy/pl6rnlLXnibnmlYhcclxuICAgIHB1YmxpYyBFRkZFQ1RfRkxBU0g6c3RyaW5nID0gXCJlZmZlY3RfZmxhc2hcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBwdWJsaWMgY2FjaGVBbmltYXRpb24oKXtcclxuICAgICAgICAvLy/lpKfngq4gMVxyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcIi4uL2xheWEvYXNzZXRzL2Nhbm5vbi9jYW5ub24xL2Nhbm5vbjEwMDAxLnBuZ1wiXSx0aGlzLkNBTk5PTl9OT1JNQUxfMSk7XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uMS5hdGxhc1wiLCB0aGlzLkNBTk5PTl9TSE9PVF8xKTtcclxuICAgICAgICBcclxuICAgICAgICAvLy/lpKfngq4gMlxyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcIi4uL2xheWEvYXNzZXRzL2Nhbm5vbi9jYW5ub24yL2Nhbm5vbjIwMDAxLnBuZ1wiXSx0aGlzLkNBTk5PTl9OT1JNQUxfMik7XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uMi5hdGxhc1wiLCB0aGlzLkNBTk5PTl9TSE9PVF8yKTtcclxuICAgICAgICBcclxuICAgICAgICAvLy/lpKfngq4gM1xyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcIi4uL2xheWEvYXNzZXRzL2Nhbm5vbi9jYW5ub24zL2Nhbm5vbjMwMDAxLnBuZ1wiXSx0aGlzLkNBTk5PTl9OT1JNQUxfMyk7XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uMy5hdGxhc1wiLCB0aGlzLkNBTk5PTl9TSE9PVF8zKTtcclxuICAgICAgICBcclxuICAgICAgICAvLy/lpKfngq4gNFxyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcIi4uL2xheWEvYXNzZXRzL2Nhbm5vbi9jYW5ub240L2Nhbm5vbjQwMDAxLnBuZ1wiXSx0aGlzLkNBTk5PTl9OT1JNQUxfNCk7XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uNC5hdGxhc1wiLCB0aGlzLkNBTk5PTl9TSE9PVF80KTtcclxuICAgICAgICBcclxuICAgICAgICAvLy/lpKfngq4gNVxyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcIi4uL2xheWEvYXNzZXRzL2Nhbm5vbi9jYW5ub241L2Nhbm5vbjUwMDAxLnBuZ1wiXSx0aGlzLkNBTk5PTl9OT1JNQUxfNSk7XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uNS5hdGxhc1wiLCB0aGlzLkNBTk5PTl9TSE9PVF81KTtcclxuICAgICAgICBcclxuICAgICAgICAvLy/lpKfngq4gNlxyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcIi4uL2xheWEvYXNzZXRzL2Nhbm5vbi9jYW5ub242L2Nhbm5vbjYwMDAxLnBuZ1wiXSx0aGlzLkNBTk5PTl9OT1JNQUxfNik7XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uNi5hdGxhc1wiLCB0aGlzLkNBTk5PTl9TSE9PVF82KTtcclxuICAgICAgICBcclxuICAgICAgICAvLy/lpKfngq4gN1xyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcIi4uL2xheWEvYXNzZXRzL2Nhbm5vbi9jYW5ub243L2Nhbm5vbjcwMDAxLnBuZ1wiXSx0aGlzLkNBTk5PTl9OT1JNQUxfNyk7XHJcbiAgICAgICAgbGF5YS5kaXNwbGF5LkFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9jYW5ub24vY2Fubm9uNy5hdGxhc1wiLCB0aGlzLkNBTk5PTl9TSE9PVF83KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+mXqueUteeJueaViFxyXG4gICAgICAgIGxheWEuZGlzcGxheS5BbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZWZmZWN0L2ZsYXNoLmF0bGFzXCIsIHRoaXMuRUZGRUNUX0ZMQVNIKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQ2Fubm9uKGNvbnRhaW5lcjpMYXlhLlNwcml0ZSwgeHg/Om51bWJlciwgeXk/Om51bWJlcik6Q2Fubm9uRmF0aGVye1xyXG4gICAgICAgIGlmKCF0aGlzLmNhbm5vbil7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fubm9uID0gbmV3IENhbm5vbkZhdGhlcigpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGhpcy5jYW5ub24pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbm5vbi5wb3MoeHgsIHl5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fubm9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFR3ZWVuID0gbGF5YS51dGlscy5Ud2VlbjtcclxuaW1wb3J0IGVhc2UgPSBsYXlhLnV0aWxzLkVhc2U7XHJcbmV4cG9ydCBjbGFzcyBDb2luIGV4dGVuZHMgTGF5YS5TcHJpdGV7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpDb2luO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkNvaW57XHJcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID1uZXcgQ29pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTU9WRV9FTkQ6c3RyaW5nID0gXCJtb3ZlX2VuZFwiOy8v56e75Yqo57uT5p2fXHJcbiAgICBwcml2YXRlIF90eXBlOnN0cmluZyA9IFwiXCI7Ly/nsbvlnosg6YeR5biBIOmTtuW4gVxyXG4gICAgcHVibGljIGFuaW1hdGlvbkJvZHk6bGF5YS5kaXNwbGF5LkFuaW1hdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh0czpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0cztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucGxheSgwLCB0cnVlLCB0aGlzLl90eXBlKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucG9zKC10aGlzLmFuaW1hdGlvbkJvZHkuZ2V0Qm91bmRzKCkud2lkdGgvMiwgLXRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS5oZWlnaHQvMik7XHJcbiAgICAgICAgdGhpcy5zaXplKHRoaXMuYW5pbWF0aW9uQm9keS5nZXRCb3VuZHMoKS53aWR0aCwgdGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRWaWV3KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uQm9keSl7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keSA9IG5ldyBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5hbmltYXRpb25Cb2R5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVUb1Bvcyh4eDpudW1iZXIsIHl5Om51bWJlciwgZGVsYXk6bnVtYmVyKXtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoZGVsYXksIHRoaXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIFR3ZWVuLnRvKHRoaXMsIHt4Onh4LHk6eXl9LCAyMDAsIGVhc2UubGluZWFySW4sIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQodGhpcy5NT1ZFX0VORCwgW3RoaXNdKTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCBBbmltYXRpb24gPSBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG5pbXBvcnQgUG9vbCA9IGxheWEudXRpbHMuUG9vbDtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciA9IGxheWEubWVkaWEuU291bmRNYW5hZ2VyO1xyXG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcIi4vQ29pblwiXHJcbmltcG9ydCB7IEZpc2hGYXRoZXIgfSBmcm9tIFwiLi4vZmlzaC9GaXNoRmF0aGVyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9HbG9iYWxcIjtcclxuZXhwb3J0IGNsYXNzIENvaW5NYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6Q29pbk1hbmFnZXIgPSBuZXcgQ29pbk1hbmFnZXIoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpDb2luTWFuYWdlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBDT0lOOnN0cmluZyA9IFwiY29pblwiOy8v6YeR5biBXHJcbiAgICBwdWJsaWMgU0lMVkVSOnN0cmluZyA9IFwic2lsdmVyXCI7Ly/pk7bluIFcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe307XHJcblxyXG4gICAgcHVibGljIGNhY2hlQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL21vbmV5L2NvaW4uYXRsYXNcIiwgdGhpcy5DT0lOKTtcclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvbW9uZXkvc2lsdmVyLmF0bGFzXCIsIHRoaXMuU0lMVkVSKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uumSseW4gVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZUNvaW4odHlwZTpzdHJpbmcpOkNvaW57XHJcbiAgICAgICAgdmFyIGNvaW46Q29pbiA9IFBvb2wuZ2V0SXRlbUJ5Q2xhc3ModHlwZSwgQ29pbik7XHJcbiAgICAgICAgY29pbi50eXBlID0gdHlwZTtcclxuICAgICAgICByZXR1cm4gY29pbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHkeW4gVxyXG4gICAgICogQHBhcmFtIGZpc2ggXHJcbiAgICAgKiBAcGFyYW0gY29uIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlTW9yZUNvaW4oZmlzaDpGaXNoRmF0aGVyLCBjb246TGF5YS5TcHJpdGUpe1xyXG4gICAgICAgIHZhciBzY29yZTpudW1iZXIgPSBmaXNoLmlzSW5PcmRlcj9maXNoLmZpc2hWby5zY29yZSoyOmZpc2guZmlzaFZvLnNjb3JlO1xyXG4gICAgICAgIHZhciBjb2luVHlwZTpzdHJpbmc7XHJcbiAgICAgICAgdmFyIGNvaW5OdW06bnVtYmVyID0gMDtcclxuICAgICAgICBpZihzY29yZT49MTApe1xyXG4gICAgICAgICAgICBjb2luVHlwZSA9IHRoaXMuQ09JTjtcclxuICAgICAgICAgICAgY29pbk51bSA9IE1hdGguZmxvb3Ioc2NvcmUvMTApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb2luVHlwZSA9IHRoaXMuU0lMVkVSO1xyXG4gICAgICAgICAgICBjb2luTnVtID1zY29yZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb2luKGNvaW5OdW0sIGNvaW5UeXBlLCBmaXNoLngsIGZpc2gueSwgY29uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHkeW4gVxyXG4gICAgICogQHBhcmFtIGNvaW5OdW0gXHJcbiAgICAgKiBAcGFyYW0gY29pblR5cGUgXHJcbiAgICAgKiBAcGFyYW0gc3ggXHJcbiAgICAgKiBAcGFyYW0gc3kgXHJcbiAgICAgKiBAcGFyYW0gY29uIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkQ29pbihjb2luTnVtOm51bWJlciwgY29pblR5cGU6c3RyaW5nLCBzeDpudW1iZXIsIHN5Om51bWJlciwgY29uOkxheWEuU3ByaXRlKXtcclxuICAgICAgICB2YXIgY29pbjpDb2luO1xyXG4gICAgICAgIHZhciB5eTpudW1iZXIgPSAwO1xyXG4gICAgICAgIHZhciB4eDpudW1iZXIgPSAwO1xyXG4gICAgICAgIHZhciBkZWxheVRpbWU6bnVtYmVyID0gMjAwO1xyXG5cclxuICAgICAgICBpZihjb2luTnVtID4gNSl7XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5U291bmQoXCJyZXMvc291bmQvY29pbl9tb3JlLm1wM1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9zb3VuZC9jb2luMi5tcDNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGk9MDtpIDwgY29pbk51bTsgaSsrKXtcclxuICAgICAgICAgICAgY29pbiA9IHRoaXMuY3JlYXRlQ29pbihjb2luVHlwZSk7XHJcbiAgICAgICAgICAgIGNvaW4ub25jZShDb2luLmdldEluc3RhbmNlKCkuTU9WRV9FTkQsIHRoaXMsIHRoaXMubW92ZUVuZCk7XHJcbiAgICAgICAgICAgIGNvaW4ucG9zKHN4ICsgY29pbi53aWR0aCp4eCwgc3kreXkqY29pbi5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb24uYWRkQ2hpbGQoY29pbik7XHJcblxyXG4gICAgICAgICAgICB4eCsrO1xyXG4gICAgICAgICAgICBpZih4eCAlIDY9PTApe1xyXG4gICAgICAgICAgICAgICAgeXkrKztcclxuICAgICAgICAgICAgICAgIHh4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVsYXlUaW1lICs9IDIwO1xyXG4gICAgICAgICAgICBjb2luLm1vdmVUb1BvcygxMDAsIEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsSGVpZ2h0KzUwLCBkZWxheVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGNvaW4g56e75Yqo5a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbW92ZUVuZChjb2luOkNvaW4pe1xyXG4gICAgICAgIGNvaW4ucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvaW4oY29pbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLbpkrHluIFcclxuICAgICAqIEBwYXJhbSBjb2luIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVjb3ZlckNvaW4oY29pbjpDb2luKXtcclxuICAgICAgICBQb29sLnJlY292ZXIoY29pbi50eXBlLCBjb2luKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpc2hWbyB9IGZyb20gXCIuLi8uLi9kYXRhL0Zpc2hWb1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uID0gbGF5YS5kaXNwbGF5LkFuaW1hdGlvbjtcclxuaW1wb3J0IExhYmVsID0gbGF5YS51aS5MYWJlbDtcclxuaW1wb3J0IHsgSHBTbGlkZXIgfSBmcm9tIFwiLi4vdmlldy9IcFNsaWRlclwiO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vR2xvYmFsXCI7XHJcbmV4cG9ydCBjbGFzcyBGaXNoRmF0aGVyIGV4dGVuZHMgTGF5YS5TcHJpdGV7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpGaXNoRmF0aGVyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkZpc2hGYXRoZXJ7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGaXNoRmF0aGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRklTSF9ERUFEOnN0cmluZyA9IFwiZmlzaF9kZWFkXCI7Ly/psbzmrbvkuqFcclxuICAgIHB1YmxpYyBGSVNIX0RFQURfU0VMRjpzdHJpbmcgPSBcImZpc2hfZGVhZF9zZWxmXCI7Ly/oh6rouqvmrbvkuqFcclxuICAgIHB1YmxpYyBkaXJTdHI6c3RyaW5nID0gXCJcIjsvL+a4uOWQkVxyXG4gICAgcHVibGljIF9maXNoVm86RmlzaFZvOy8v5pWw5o2uXHJcblxyXG4gICAgcHVibGljIGFuaW1hdGlvbkJvZHk6QW5pbWF0aW9uOy8v5Yqo55S75Li75L2TXHJcbiAgICBwcml2YXRlIF9pZDpudW1iZXJcclxuXHJcbiAgICBwcml2YXRlIF9ocDpudW1iZXI7XHJcbiAgICBwdWJsaWMgc2VsZldpZHRoOm51bWJlciA9IDA7Ly/lhoXlrrnlrr3pq5hcclxuICAgIHB1YmxpYyBzZWxmSGVpZ2h0Om51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZGVhZDpCb29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgbGFiZWw6TGFiZWw7XHJcbiAgICBwdWJsaWMgaHBTbGlkZXI6SHBTbGlkZXI7XHJcbiAgICBwdWJsaWMgaXNJbk9yZGVyOkJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGZpc2hWbygpOkZpc2hWb3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlzaFZvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZmlzaFZvKHZvOkZpc2hWbyl7XHJcbiAgICAgICAgdGhpcy5fZmlzaFZvID0gdm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBpZCh2YWw6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9pZCA9IHZhbDtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnBsYXkoMCwgdHJ1ZSwgdGhpcy5maXNoVm8ubGV2ZUFuKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxmV2lkdGggPSB0aGlzLmFuaW1hdGlvbkJvZHkuZ2V0Qm91bmRzKCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zZWxmSGVpZ2h0ID0gdGhpcy5hbmltYXRpb25Cb2R5LmdldEJvdW5kcygpLmhlaWdodDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkJvZHkucGl2b3QodGhpcy5zZWxmV2lkdGgvMiwgdGhpcy5zZWxmSGVpZ2h0LzIpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keS5wb3MoMCwgMCk7XHJcbiAgICAgICAgLy8gdGhpcy5ocFNsaWRlci5zbGlkZXIud2lkdGggPSB0aGlzLnNlbGZXaWR0aDtcclxuICAgICAgICAvLyB0aGlzLmhwU2xpZGVyLnNsaWRlci5oZWlnaHQgPSA1O1xyXG4gICAgICAgIC8vIHRoaXMuaHBTbGlkZXIuc2l6ZSh0aGlzLnNlbGZXaWR0aCwgNSk7XHJcbiAgICAgICAgLy8gdGhpcy5ocFNsaWRlci5wb3MoLXRoaXMuaHBTbGlkZXIud2lkdGggLyAyLCAtKHRoaXMuc2VsZkhlaWdodC10aGlzLmZpc2hWby5oaXRWYWx1ZSkvMik7XHJcblxyXG4gICAgICAgIHZhciBtYXhIcDpudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuZmlzaFZvLmJsb29kX21pbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5maXNoVm8uYmxvb2RfTWF4IC0gdGhpcy5maXNoVm8uYmxvb2RfbWluKSk7Ly/ooYDph49cclxuICAgICAgICAvLyB0aGlzLmhwU2xpZGVyLm1heCA9IG1heEhwO1xyXG4gICAgICAgIHRoaXMuaHAgPSBtYXhIcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhwKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGhwKHZhbDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX2hwID0gdmFsO1xyXG4gICAgICAgIC8vIHRoaXMuaHBTbGlkZXIuc2hvd1NlbGYodGhpcy5faHApO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9ocCA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5maXNoRGVhZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdERhdGEoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRWaWV3KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uQm9keSl7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQm9keSA9IG5ldyBBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LmludGVydmFsID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYW5pbWF0aW9uQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuaHBTbGlkZXIgPSBuZXcgSHBTbGlkZXIoKTtcclxuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKHRoaXMuaHBTbGlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RXZlbnQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBkaXIgIOWHuueOsOS9jee9ruWcqOWxj+W5leS4pOS+pyBsZWZ0IHJpZ2h0IFxyXG4gICAgICogQHBhcmFtIHNwb3Mg6LW35aeL5Z2Q5qCH77yM5LiN6K6+572u5YiZ6ZqP5py6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KGRpcjpzdHJpbmc9XCJyaWdodFwiLCBzcG9zOmxheWEubWF0aHMuUG9pbnQ9bnVsbCwgb3JkZXI6Qm9vbGVhbj1mYWxzZSl7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0luT3JkZXIgPSBvcmRlcjtcclxuICAgICAgICAvLyB0aGlzLmhwID0gdGhpcy5ocFNsaWRlci5tYXg7XHJcbiAgICAgICAgdGhpcy5kaXJTdHIgPSBkaXI7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnJvdGF0aW9uID0gKGRpciA9PSBcInJpZ2h0XCIpPzA6MTgwXHJcblxyXG4gICAgICAgIHZhciB0aW1lczpudW1iZXI7XHJcbiAgICAgICAgaWYoIXNwb3Mpe1xyXG4gICAgICAgICAgICAvL+aJk+S5seWHuueOsOasoeW6j1xyXG4gICAgICAgICAgICB0aW1lcyA9IE1hdGgucmFuZG9tKCkqMTAwMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aW1lcyA9IDEwMDA7XHJcbiAgICAgICAgICAgIHRoaXMucG9zKHNwb3MueCwgc3Bvcy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExheWEudGltZXIub25jZSh0aW1lcywgdGhpcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSwgdGhpcywgdGhpcy5sb29wSGFuZCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLCB0aGlzLCB0aGlzLmxvb3BIYW5kKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHByaXZhdGUgbG9vcEhhbmQoKXtcclxuICAgICAgICBpZihHbG9iYWwuZ2V0SW5zdGFuY2UoKS5JU1BBVVNFKXJldHVybjtcclxuICAgICAgICB0aGlzLm1vdmVPdmVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgbW92ZU92ZXIoKXtcclxuICAgICAgICBpZih0aGlzLmRpclN0ciA9PSBcInJpZ2h0XCIpe1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5maXNoVm8uc3BlZWQqR2xvYmFsLmdldEluc3RhbmNlKCkubHZsQWRkVmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMueCA+PSBHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbFdpZHRoICsgdGhpcy5zZWxmV2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc0luT3JkZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZkRlZCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJTdHIgPT0gXCJsZWZ0XCIpe1xyXG4gICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5maXNoVm8uc3BlZWQqR2xvYmFsLmdldEluc3RhbmNlKCkubHZsQWRkVmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMueDw9LXRoaXMuc2VsZldpZHRoKjIpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc0luT3JkZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZkRlZCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN572u5Yid5aeL5L2N572uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRQb3MoKXtcclxuICAgICAgICB2YXIgc3RhcnR4Om51bWJlcjtcclxuICAgICAgICB2YXIgc3RhcnR5Om51bWJlciA9IDUwICsgKEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsSGVpZ2h0LTE1MCkqTWF0aC5yYW5kb20oKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kaXJTdHIgPT0gXCJyaWdodFwiKXtcclxuICAgICAgICAgICAgc3RhcnR4ID0gLXRoaXMuc2VsZldpZHRoIC0gTWF0aC5yYW5kb20oKSAqIDIwMDtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpclN0ciA9PSBcImxlZnRcIil7XHJcbiAgICAgICAgICAgIHN0YXJ0eCA9IEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsV2lkdGggKyB0aGlzLnNlbGZXaWR0aCArIE1hdGgucmFuZG9tKCkqMjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3Moc3RhcnR4LCBzdGFydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaXNoRGVhZCgpe1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5LnBsYXkoMCwgZmFsc2UsIHRoaXMuZmlzaFZvLmRlYWRBbik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Cb2R5Lm9uY2UoTGF5YS5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5kZWFkQ29tKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMubG9vcEhhbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q275Lqh5Yqo55S75pKt5pS+5a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVhZENvbSgpe1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQodGhpcy5GSVNIX0RFQUQsIFt0aGlzXSk7XHJcbiAgICAgICAgbGF5YS51dGlscy5Qb29sLnJlY292ZXIodGhpcy5maXNoVm8uZmlzaEluZm8sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq6Lqr5q275Lqh77yM5LiN5piv6KKr5Ye75Lit5q275LqhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2VsZkRlZCgpe1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQodGhpcy5GSVNIX0RFQURfU0VMRiwgW3RoaXNdKTtcclxuICAgICAgICBsYXlhLnV0aWxzLlBvb2wucmVjb3Zlcih0aGlzLmZpc2hWby5maXNoSW5mbywgdGhpcyk7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLmxvb3BIYW5kKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueisOaSnuefqeW9olxyXG4gICAgICogQHJldHVyblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SGl0UmVjdGFuZ2xlKCk6bGF5YS5tYXRocy5SZWN0YW5nbGV7XHJcbiAgICAgICAgdmFyIGdsb2JhbDpsYXlhLm1hdGhzLlBvaW50ID0gdGhpcy5sb2NhbFRvR2xvYmFsKG5ldyBsYXlhLm1hdGhzLlBvaW50KC10aGlzLnNlbGZXaWR0aC8yLCAtdGhpcy5zZWxmSGVpZ2h0LzIrdGhpcy5maXNoVm8uaGl0VmFsdWUpLCB0cnVlKTtcclxuICAgICAgICB2YXIgcmVjOmxheWEubWF0aHMuUmVjdGFuZ2xlID0gbmV3IGxheWEubWF0aHMuUmVjdGFuZ2xlKGdsb2JhbC54LCBnbG9iYWwueSwgdGhpcy5zZWxmV2lkdGgsIHRoaXMuc2VsZkhlaWdodCAtIHRoaXMuZmlzaFZvLmhpdFZhbHVlKjIpO1xyXG4gICAgICAgIHJldHVybiByZWM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQW5pbWF0aW9uID0gbGF5YS5kaXNwbGF5LkFuaW1hdGlvbjtcclxuaW1wb3J0IHsgRmlzaEZhdGhlciB9IGZyb20gXCIuL0Zpc2hGYXRoZXJcIjtcclxuaW1wb3J0IHsgRmlzaFZvIH0gZnJvbSBcIi4uLy4uL2RhdGEvRmlzaFZvXCI7XHJcbmltcG9ydCB7IERhdGFQcm94eSB9IGZyb20gXCIuLi8uLi9kYXRhL0RhdGFQcm94eVwiO1xyXG5pbXBvcnQgUG9pbnQgPSBsYXlhLm1hdGhzLlBvaW50O1xyXG5leHBvcnQgY2xhc3MgRmlzaE1hbmFnZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpGaXNoTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpGaXNoTWFuYWdlcntcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZpc2hNYW5hZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mxvOato+W4uOeKtuaAgVxyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzE6c3RyaW5nID0gXCJmaXNoX25vcm1hbF8xXCI7XHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfMjpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzJcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF8zOnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfM1wiO1xyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzQ6c3RyaW5nID0gXCJmaXNoX25vcm1hbF80XCI7XHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfNTpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzVcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF82OnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfNlwiO1xyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzc6c3RyaW5nID0gXCJmaXNoX25vcm1hbF83XCI7XHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfODpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzhcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF85OnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfOVwiO1xyXG5cdFx0cHVibGljIEZJU0hfTk9STUFMXzEwOnN0cmluZyA9IFwiZmlzaF9ub3JtYWxfMTBcIjtcclxuXHRcdHB1YmxpYyBGSVNIX05PUk1BTF8xMTpzdHJpbmcgPSBcImZpc2hfbm9ybWFsXzExXCI7XHJcblx0XHRwdWJsaWMgRklTSF9OT1JNQUxfMTI6c3RyaW5nID0gXCJmaXNoX25vcm1hbF8xMlwiO1xyXG5cdFx0XHJcblx0XHQvL+mxvOatu+S6oeeKtuaAgVxyXG5cdFx0cHVibGljIEZJU0hfREVBRF8xOnN0cmluZyA9IFwiZmlzaF9kZWFkXzFcIjtcclxuXHRcdHB1YmxpYyBGSVNIX0RFQURfMjpzdHJpbmcgPSBcImZpc2hfZGVhZF8yXCI7XHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzM6c3RyaW5nID0gXCJmaXNoX2RlYWRfM1wiO1xyXG5cdFx0cHVibGljIEZJU0hfREVBRF80OnN0cmluZyA9IFwiZmlzaF9kZWFkXzRcIjtcclxuXHRcdHB1YmxpYyBGSVNIX0RFQURfNTpzdHJpbmcgPSBcImZpc2hfZGVhZF81XCI7XHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzY6c3RyaW5nID0gXCJmaXNoX2RlYWRfNlwiO1xyXG5cdFx0cHVibGljIEZJU0hfREVBRF83OnN0cmluZyA9IFwiZmlzaF9kZWFkXzdcIjtcclxuXHRcdHB1YmxpYyBGSVNIX0RFQURfODpzdHJpbmcgPSBcImZpc2hfZGVhZF84XCI7XHJcblx0XHRwdWJsaWMgRklTSF9ERUFEXzk6c3RyaW5nID0gXCJmaXNoX2RlYWRfOVwiO1xyXG5cdFx0cHVibGljIEZJU0hfREVBRF8xMDpzdHJpbmcgPSBcImZpc2hfZGVhZF8xMFwiO1xyXG5cdFx0cHVibGljIEZJU0hfREVBRF8xMTpzdHJpbmcgPSBcImZpc2hfZGVhZF8xMVwiO1xyXG4gICAgICAgIHB1YmxpYyBGSVNIX0RFQURfMTI6c3RyaW5nID0gXCJmaXNoX2RlYWRfMTJcIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcigpe307XHJcblxyXG4gICAgICAgIHB1YmxpYyBjYWNoZUFuaW1hdGlvbigpe1xyXG4gICAgICAgICAgICAvLy9pZCAwIOWwj+S4kemxvFxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMTIvbGl2ZS5hdGxhc1wiLHRoaXMuRklTSF9OT1JNQUxfMSk7XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxMi9kZWFkLmF0bGFzXCIsdGhpcy5GSVNIX0RFQURfMSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLy9pZCAxIOicu+ick+mxvFxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoOC9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF8yKTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDgvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF8yKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDIg6buE6bG8XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g1L2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzMpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNS9kZWFkLmF0bGFzXCIsIHRoaXMuRklTSF9ERUFEXzMpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8vaWQgMyDng63luKbpsbxcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDkvbGl2ZS5hdGxhc1wiLHRoaXMuRklTSF9OT1JNQUxfNCk7XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g5L2RlYWQuYXRsYXNcIiwgdGhpcy5GSVNIX0RFQURfNCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLy9pZCA0IOmHkeaequmxvFxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNy9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF81KTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDcvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF81KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDUg5rC05q+NXHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxMC9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF82KTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDEwL2RlYWQuYXRsYXNcIiwgdGhpcy5GSVNIX0RFQURfNik7XHJcblx0XHRcdFxyXG5cdFx0XHQvLy9pZCA2IOmzhOmxvFxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMi9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF83KTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDIvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF83KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDcg5aSn5LmM6b6fXHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxMS9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF84KTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDExL2RlYWQuYXRsYXNcIiwgdGhpcy5GSVNIX0RFQURfOCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLy9pZCA4IOa1t+ixmlxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoNC9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF85KTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDQvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF85KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDkg6bK46bG8XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2g2L2xpdmUuYXRsYXNcIix0aGlzLkZJU0hfTk9STUFMXzEwKTtcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDYvZGVhZC5hdGxhc1wiLCB0aGlzLkZJU0hfREVBRF8xMCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLy9pZCAxMCDmtbfog4bpsbxcclxuXHRcdFx0QW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL2Zpc2hpbWcvZmlzaDMvbGl2ZS5hdGxhc1wiLHRoaXMuRklTSF9OT1JNQUxfMTEpO1xyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMy9kZWFkLmF0bGFzXCIsIHRoaXMuRklTSF9ERUFEXzExKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vL2lkIDExIOeBr+esvOmxvFxyXG5cdFx0XHRBbmltYXRpb24uY3JlYXRlRnJhbWVzKFwicmVzL2F0bGFzL2Zpc2gvZmlzaGltZy9maXNoMS9saXZlLmF0bGFzXCIsdGhpcy5GSVNIX05PUk1BTF8xMik7XHJcblx0XHRcdEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoXCJyZXMvYXRsYXMvZmlzaC9maXNoaW1nL2Zpc2gxL2RlYWQuYXRsYXNcIiwgdGhpcy5GSVNIX0RFQURfMTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUZpc2hCeUlkKGlkOm51bWJlcik6RmlzaEZhdGhlcntcclxuICAgICAgICAgICAgdmFyIGZpc2g6RmlzaEZhdGhlcjtcclxuXHRcdFx0dmFyIGZpc2hWbzpGaXNoVm8gPSBEYXRhUHJveHkuZ2V0SW5zdGFuY2UoKS5nZXREYXRhQnlJZChpZCk7XHJcblx0XHRcdGZpc2ggPSBsYXlhLnV0aWxzLlBvb2wuZ2V0SXRlbUJ5Q2xhc3MoXCJmaXNoX2luZm9fXCIrKGlkKzEpK1wiXCIsIEZpc2hGYXRoZXIpO1xyXG4gICAgICAgICAgICBmaXNoVm8uZmlzaEluZm8gPSBcImZpc2hfaW5mb19cIisoaWQrMSkrXCJcIjtcclxuICAgICAgICAgICAgZmlzaFZvLmxldmVBbiA9IFwiZmlzaF9ub3JtYWxfXCIrKGlkKzEpK1wiXCI7XHJcbiAgICAgICAgICAgIGZpc2hWby5kZWFkQW4gPSBcImZpc2hfZGVhZF9cIisoaWQrMSkrXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGZpc2guZmlzaFZvID0gZmlzaFZvO1xyXG4gICAgICAgICAgICBmaXNoLmlkID0gaWRcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmaXNoO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgcmVjb3ZlcmZpc2goZmlzaDpGaXNoRmF0aGVyKXtcclxuXHRcdFx0bGF5YS51dGlscy5Qb29sLnJlY292ZXIoZmlzaC5maXNoVm8uZmlzaEluZm8sIGZpc2gpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog6I635Y+W5b+D5b2i6Lev5b6E54K5XHJcblx0XHQgKiBAcGFyYW1cdGRpcyAg5aSn5bCPXHJcblx0XHQgKiBAcGFyYW1cdG1qICAg54K55a+G6ZuG5bqmXHJcblx0XHQgKiBAcmV0dXJuXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyBoZWFydFBhdGhEb3QoZGlzOm51bWJlcj0xNTAsbWo6bnVtYmVyPTEwKTpBcnJheTxhbnk+e1xyXG5cdFx0XHR2YXIgYW5nbGU6bnVtYmVyOy8v5YKo5a2Y5p6B6KeSXHJcblx0XHRcdHZhciBwOmxheWEubWF0aHMuUG9pbnQ7XHJcblx0XHRcdHZhciByYXJyOkFycmF5PGFueT4gPSBbXTtcclxuXHRcdFx0dmFyIHNpbjpudW1iZXI7XHJcblx0XHRcdHZhciBjb3M6bnVtYmVyO1xyXG5cdFx0XHR2YXIgaGVhcnRYOm51bWJlciA9IDA7Ly/lv4PlvaLkuK3ngrnnmoTlnZDmoIdcclxuXHRcdFx0dmFyIGhlYXJ0WTpudW1iZXIgPSAwO1xyXG5cdFx0XHR2YXIgaGVhcnRTaXplOm51bWJlciA9IGRpczsvL+W/g+W9oueahOWkp+Wwj1xyXG5cdFx0XHQgXHJcblx0XHRcdHZhciBBOm51bWJlciA9IE1hdGguUEkvNDtcclxuXHRcdFx0dmFyIFg6bnVtYmVyO1xyXG5cdFx0XHR2YXIgWTpudW1iZXI7XHJcblx0XHRcdHZhciBsYXN0WDpudW1iZXI7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8PSAzNjA7IGkrPW1qKSB7XHJcblx0XHRcdFx0IC8v6K6h566X5p6B6KeS5ZKM5p6B5b6EXHJcblx0XHRcdFx0IGFuZ2xlID0gTWF0aC5QSSAqIGkgLyAxODA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHQgLy/lv4PlvaJcclxuXHRcdFx0XHQgWD0yKk1hdGguY29zKGFuZ2xlKSpNYXRoLmNvcyhBKSAtIE1hdGguc2luKGFuZ2xlKSpNYXRoLnNpbihBKTtcclxuXHRcdFx0XHQgWT0yKk1hdGguY29zKGFuZ2xlKSpNYXRoLnNpbihBKSArIE1hdGguc2luKGFuZ2xlKSpNYXRoLmNvcyhBKTtcclxuXHRcdFx0XHQgaWYoWD4wKXtcclxuXHRcdFx0XHRcdFkgPSAtWTtcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBcclxuXHRcdFx0XHQgcCA9IG5ldyBsYXlhLm1hdGhzLlBvaW50KGhlYXJ0WCArIFggKiBoZWFydFNpemUsIGhlYXJ0WSArIFkgKiBoZWFydFNpemUpO1xyXG5cdFx0XHRcdCByYXJyLnB1c2gocCk7XHJcblx0XHRcdFx0IFxyXG5cdFx0XHRcdCBsYXN0WCA9IFg7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDnn6nlvaLot6/lvoTngrlcclxuXHRcdCAqIEBwYXJhbVx0cm93c1xyXG5cdFx0ICogQHBhcmFtXHRjb2xzXHJcblx0XHQgKiBAcGFyYW1cdHNwYWNlXHJcblx0XHQgKiBAcmV0dXJuXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyByZWN0UGF0aERvdChyb3dzOm51bWJlcj00LCBjb2xzOm51bWJlcj04LCBzcGFjZTpudW1iZXIgPSA4MCk6QXJyYXk8YW55PntcclxuXHRcdFx0dmFyIHA6UG9pbnQ7XHJcblx0XHRcdHZhciBhcnI6QXJyYXk8YW55PiA9IFtdO1xyXG5cdFx0XHR2YXIgeHg6bnVtYmVyPTA7XHJcblx0XHRcdHZhciB5eTpudW1iZXI9MDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG5cdFx0XHRcdFx0cCA9IG5ldyBQb2ludCh4eCwgeXkpO1xyXG5cdFx0XHRcdFx0eHggKz0gc3BhY2U7XHJcblx0XHRcdFx0XHRhcnIucHVzaChwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0eHggPSAwO1xyXG5cdFx0XHRcdHl5ICs9IHNwYWNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDoj7HlvaLot6/lvoTngrlcclxuXHRcdCAqIEBwYXJhbVx0cm93c1xyXG5cdFx0ICogQHBhcmFtXHRjb2xzXHJcblx0XHQgKiBAcGFyYW1cdHNwYWNlXHJcblx0XHQgKiBAcmV0dXJuXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyByaG9tYlBhdGhEb3Qocm93czpudW1iZXI9Nyxjb2xzOm51bWJlcj03LHNwYWNlOm51bWJlcj04MCk6QXJyYXk8YW55PiB7XHJcblx0XHRcdHZhciB2YWw6bnVtYmVyID0gTWF0aC5mbG9vcihjb2xzIC8gMik7Ly/lvIDlp4vnqbrnmoTmoLzmlbBcclxuXHRcdFx0dmFyIHA6UG9pbnQ7XHJcblx0XHRcdHZhciBhcnI6QXJyYXk8YW55PiA9IFtdO1xyXG5cdFx0XHR2YXIgeHg6bnVtYmVyPTA7XHJcblx0XHRcdHZhciB5eTpudW1iZXIgPSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGZsYWc6bnVtYmVyID0gMTsvLzHlsIbluo8gIDLljYfluo9cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuXHRcdFx0XHRpZiAodmFsIDwgMCkge1xyXG5cdFx0XHRcdFx0ZmxhZyA9IDI7XHJcblx0XHRcdFx0XHR2YWwgPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBqID0gdmFsOyBqIDwgdmFsKyhjb2xzLXZhbCoyKTsgaisrKSB7XHJcblx0XHRcdFx0XHR4eCA9IGogKiBzcGFjZTtcclxuXHRcdFx0XHRcdHAgPSBuZXcgUG9pbnQoeHgsIHl5KTtcclxuXHRcdFx0XHRcdGFyci5wdXNoKHApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZmxhZyA9PSAxKSB7XHJcblx0XHRcdFx0XHR2YWwtLTtcclxuXHRcdFx0XHR9ZWxzZSBpZiAoZmxhZyA9PSAyKSB7XHJcblx0XHRcdFx0XHR2YWwrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0eXkgKz0gc3BhY2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGFycjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOWchuW9oui3r+W+hFxyXG5cdFx0ICogQHBhcmFtXHRjb3VudCDlh6Dnjq9cclxuXHRcdCAqIEBwYXJhbVx0c3BhY2Ug5Y2K5b6E6Ze06LedXHJcblx0XHQgKiBAcGFyYW1cdGFuZ2xlU3BhY2Ug6KeS5bqm6Ze06LedXHJcblx0XHQgKiBAcmV0dXJuXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyBjaXJjbGVQYXRoRG90KGNvdW50Om51bWJlcj0zLHNwYWNlOm51bWJlcj04MCxhbmdsZVNwYWNlOm51bWJlcj0zMCk6QXJyYXk8YW55PiB7XHJcblx0XHRcdHZhciByYWRpdXM6bnVtYmVyID0gMDtcclxuXHRcdFx0dmFyIGFuZ2xlOm51bWJlcjtcclxuXHRcdFx0dmFyIHA6UG9pbnQ7XHJcblx0XHRcdHZhciBhcnI6QXJyYXk8YW55PiA9IFtdO1xyXG5cdFx0XHR2YXIgeHg6bnVtYmVyPTA7XHJcblx0XHRcdHZhciB5eTpudW1iZXIgPSAwO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcblx0XHRcdFx0cmFkaXVzID0gaSAqIHNwYWNlO1xyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgMzYwOyBqICs9IGFuZ2xlU3BhY2UpIHtcclxuXHRcdFx0XHRcdHh4ID0gTWF0aC5jb3MoaiAqIE1hdGguUEkgLyAxODApICogcmFkaXVzO1xyXG5cdFx0XHRcdFx0eXkgPSBNYXRoLnNpbihqICogTWF0aC5QSSAvIDE4MCkgKiByYWRpdXM7XHJcblx0XHRcdFx0XHRwID0gbmV3IFBvaW50KHh4LCB5eSk7XHJcblx0XHRcdFx0XHRhcnIucHVzaChwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGFycjtcclxuXHRcdH1cclxufSIsImltcG9ydCBBbmltYXRpb24gPSBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG5pbXBvcnQgVHdlZW4gPSBsYXlhLnV0aWxzLlR3ZWVuO1xyXG5pbXBvcnQgUG9pbnQgPSBsYXlhLm1hdGhzLlBvaW50O1xyXG5pbXBvcnQgUmVjdGFuZ2xlID0gbGF5YS5tYXRocy5SZWN0YW5nbGU7XHJcbmltcG9ydCBFYXNlID0gbGF5YS51dGlscy5FYXNlO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vR2xvYmFsXCI7XHJcbmV4cG9ydCBjbGFzcyBUb29scyBleHRlbmRzIExheWEuU3ByaXRle1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6VG9vbHM7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6VG9vbHN7XHJcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRvb2xzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgREVBRF9PVkVSOnN0cmluZyA9IFwiZGVhZF9vdmVyXCI7Ly/mrbvkuqHliqjnlLvmkq3mlL7lrozmiJBcclxuICAgIHB1YmxpYyBERUFERUQ6c3RyaW5nID0gJ2RlYWRlZCc7Ly/mrbvkuqFcclxuICAgIHB1YmxpYyBERUFEX1NFTEY6c3RyaW5nID0gJ2RlYWRfc2VsZic7Ly/oh6rmr4FcclxuICAgIHByaXZhdGUgZGVhZFNlbGZUaW1lOm51bWJlciA9IDEwMDAwO1xyXG4gICAgcHVibGljIGRlYWRlZDpCb29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGFuQm9keTpBbmltYXRpb247XHJcbiAgICBwdWJsaWMgbm9ybWFsQW46c3RyaW5nO1xyXG4gICAgcHVibGljIGRlYWRBbjpzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90eXBlOm51bWJlcjsvL+exu+Wei1xyXG4gICAgcHJpdmF0ZSBzZWxmV2lkdGg6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzZWxmSGVpZ2h0Om51bWJlcjtcclxuXHJcbiAgICAvL+iOt+WPlueisOaSnuefqeW9ouWMuuWfn+S/ruato+WAvFxyXG4gICAgcHVibGljIHh2YWw6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5dmFsOm51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgd3ZhbDpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGh2YWw6bnVtYmVyID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLlRvb2xzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0eXBlKHZhbDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbkJvZHkucGxheSgwLCB0cnVlLCB0aGlzLm5vcm1hbEFuKTtcclxuICAgICAgICB0aGlzLmFuQm9keS5wb3MoIC10aGlzLmFuQm9keS5nZXRCb3VuZHMoKS53aWR0aCAvIDIsIC10aGlzLmFuQm9keS5nZXRCb3VuZHMoKS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNlbGZXaWR0aCA9IHRoaXMuYW5Cb2R5LmdldEJvdW5kcygpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc2VsZkhlaWdodCA9IHRoaXMuYW5Cb2R5LmdldEJvdW5kcygpLmhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICAvL3RoaXMuZ3JhcGhpY3MuZHJhd1JlY3QoIC1zZWxmV2lkdGggLyAyK3h2YWwsIC1zZWxmSGVpZ2h0IC8gMit5dmFsLCBzZWxmV2lkdGgtd3ZhbCwgc2VsZkhlaWdodC1odmFsLFwiI2ZmMDAwMFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVG9vbHMoKXtcclxuICAgICAgICB0aGlzLmFuQm9keSA9IG5ldyBBbmltYXRpb24oKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYW5Cb2R5KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5kZWFkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjYWxlKDAsIDApO1xyXG4gICAgICAgIFR3ZWVuLnRvKHRoaXMsIHtzY2FsZVg6Miwgc2NhbGVZOjJ9LCAxNTAsIEVhc2UuYmFja091dCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBUd2Vlbi50byh0aGlzLCB7c2NhbGVYOjEsIHNjYWxlWToxfSwgMTUwLCBFYXNlLmJhY2tJbik7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgdGhpcy5kZWFkU2VsZkgoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+iHquavgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVhZFNlbGZIKCl7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKHRoaXMuZGVhZFNlbGZUaW1lLCB0aGlzLCB0aGlzLmRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRoKCl7XHJcbiAgICAgICAgdGhpcy5kZWFkZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVhZFNlbGZTKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rmr4Hmk43kvZxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWFkU2VsZlMoKXtcclxuICAgICAgICBUd2Vlbi50byh0aGlzLCB7c2NhbGVYOjAsIHNjYWxlWTowfSwgMjAwLCBFYXNlLmJhY2tJbiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50KHRoaXMuREVBRF9TRUxGLCBbdGhpc10pXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q275LqhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlUygpe1xyXG4gICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVhZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFuQm9keS5wbGF5KDAsIGZhbHNlLCB0aGlzLmRlYWRBbik7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLmRoKTtcclxuICAgICAgICB0aGlzLmFuQm9keS5vbihMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLmRlYWRBbkNvbSk7XHJcbiAgICAgICAgdGhpcy5ldmVudCh0aGlzLkRFQURFRCwgW3RoaXNdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOatu+S6oeWKqOeUu+aSreaUvuWujFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlYWRBbkNvbSgpe1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQodGhpcy5ERUFEX09WRVIsIFt0aGlzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnorDmkp7nn6nlvaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEhpdFJlY3RhbmdsZSgpOlJlY3RhbmdsZXtcclxuICAgICAgICB2YXIgZ2xvYmFsOlBvaW50ID0gdGhpcy5sb2NhbFRvR2xvYmFsKG5ldyBQb2ludCgtdGhpcy5zZWxmV2lkdGgvMiwgLXRoaXMuc2VsZkhlaWdodC8yKSwgdHJ1ZSk7XHJcbiAgICAgICAgdmFyIHJlYzpSZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKGdsb2JhbC54K3RoaXMueHZhbCwgZ2xvYmFsLnkrdGhpcy55dmFsLCB0aGlzLnNlbGZXaWR0aC10aGlzLnd2YWwsIHRoaXMuc2VsZkhlaWdodC10aGlzLmh2YWwpO1xyXG4gICAgICAgIHJldHVybiByZWNcclxuICAgIH1cclxufSIsImltcG9ydCBBbmltYXRpb24gPSBsYXlhLmRpc3BsYXkuQW5pbWF0aW9uO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyID0gbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXI7XHJcbmltcG9ydCBQb29sID0gbGF5YS51dGlscy5Qb29sO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuL1Rvb2xzXCI7XHJcbmV4cG9ydCBjbGFzcyBUb29sc01hbmFnZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpUb29sc01hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6VG9vbHNNYW5hZ2Vye1xyXG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUb29sc01hbmFnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqo55S75qCH6K+GXHJcbiAgICAvL+mxvOmbt1xyXG4gICAgcHVibGljIEJPTUJfTk9STUFMOnN0cmluZyA9IFwiYm9tYl9ub3JtYWxcIjtcclxuICAgIHB1YmxpYyBCT01CX0JPT006c3RyaW5nID0gXCJib21iX2Jvb21cIjtcclxuICAgIC8v5a6d566xXHJcbiAgICBwdWJsaWMgQk9YX05PUk1BTDpzdHJpbmcgPSBcImJveF9ub3JtYWxcIjtcclxuICAgIHB1YmxpYyBCT1hfT1BFTjpzdHJpbmcgPSBcImJveF9vcGVuXCI7XHJcbiAgICAvL+WKm+mHj1xyXG4gICAgcHVibGljIFBPV0VSX05PUk1BTDpzdHJpbmcgPSBcInBvd2VyX25vcm1hbFwiO1xyXG4gICAgcHVibGljIFBPV0VSX09QRU46c3RyaW5nID0gXCJwb3dlcl9vcGVuXCI7XHJcbiAgICAvL+mxvOmltVxyXG4gICAgcHVibGljIEZPT0RfTk9STUFMOnN0cmluZyA9IFwiZm9vZF9ub3JtYWxcIjtcclxuICAgIHB1YmxpYyBGT09EX0VBVDpzdHJpbmcgPSBcImZvb2RfZWF0XCI7XHJcbiAgICBcclxuICAgIC8v57G75Z6LXHJcbiAgICBwdWJsaWMgVFlQRV9CT09NOm51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgVFlQRV9CT1g6bnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBUWVBFX1BPV0VSOm51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgVFlQRV9Gb29kOm51bWJlciA9IDQ7XHJcbiAgICBcclxuICAgIC8v6YGT5YW36ZuG5ZCIXHJcbiAgICBwdWJsaWMgdG9vbEFycjpBcnJheTxhbnk+ID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcigpe307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnvJPlrZjliqjnlLtcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNhY2hlQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgLy9ib21iXHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhcInJlcy9hdGxhcy9maXNoL3Rvb2xzL2Jvb20uanNvblwiLCB0aGlzLkJPTUJfQk9PTSk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL3Rvb2xzL2Jvb20vYm9vbTAwMDEucG5nXCJdLCB0aGlzLkJPTUJfTk9STUFMKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WuneeusVxyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC90b29scy9ieC5wbmdcIl0sIHRoaXMuQk9YX05PUk1BTCk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL3Rvb2xzL2J4LnBuZ1wiXSwgdGhpcy5CT1hfT1BFTik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lipvph49cclxuICAgICAgICBBbmltYXRpb24uY3JlYXRlRnJhbWVzKFtcImZpc2gvdG9vbHMvcG93ZXIucG5nXCJdLCB0aGlzLlBPV0VSX05PUk1BTCk7XHJcbiAgICAgICAgQW5pbWF0aW9uLmNyZWF0ZUZyYW1lcyhbXCJmaXNoL3Rvb2xzL3Bvd2VyLnBuZ1wiXSwgdGhpcy5QT1dFUl9PUEVOKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+mxvOmltVxyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC90b29scy9maXNoZm9vZC5wbmdcIl0sIHRoaXMuRk9PRF9OT1JNQUwpO1xyXG4gICAgICAgIEFuaW1hdGlvbi5jcmVhdGVGcmFtZXMoW1wiZmlzaC90b29scy9maXNoZm9vZC5wbmdcIl0sIHRoaXMuRk9PRF9FQVQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu6XHJcbiAgICAgKiBAcGFyYW1cdHR5cGVcclxuICAgICAqIEByZXR1cm5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVRvb2xCeVR5cGUodHlwZTpudW1iZXIpOlRvb2xze1xyXG4gICAgICAgIHZhciB0b29sOlRvb2xzID0gUG9vbC5nZXRJdGVtQnlDbGFzcyhcIlwiK3R5cGUsIFRvb2xzKTtcclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRvb2wubm9ybWFsQW4gPSB0aGlzLkJPTUJfTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgdG9vbC5kZWFkQW4gPSB0aGlzLkJPTUJfQk9PTTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9vbC54dmFsID0gNDA7XHJcbiAgICAgICAgICAgICAgICB0b29sLnl2YWwgPSA0MDtcclxuICAgICAgICAgICAgICAgIHRvb2wud3ZhbCA9IDkwO1xyXG4gICAgICAgICAgICAgICAgdG9vbC5odmFsID0gNjA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdG9vbC5ub3JtYWxBbiA9IHRoaXMuQk9YX05PUk1BTDtcclxuICAgICAgICAgICAgICAgIHRvb2wuZGVhZEFuID0gdGhpcy5CT1hfT1BFTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0b29sLm5vcm1hbEFuID0gdGhpcy5QT1dFUl9OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICB0b29sLmRlYWRBbiA9IHRoaXMuUE9XRVJfT1BFTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0b29sLm5vcm1hbEFuID0gdGhpcy5GT09EX05PUk1BTDtcclxuICAgICAgICAgICAgICAgIHRvb2wuZGVhZEFuID0gdGhpcy5GT09EX0VBVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0b29sLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRvb2wub25jZShUb29scy5nZXRJbnN0YW5jZSgpLkRFQURfT1ZFUiwgdGhpcywgdGhpcy5kZWFkQW5PdmVyKTtcclxuICAgICAgICB0b29sLm9uY2UoVG9vbHMuZ2V0SW5zdGFuY2UoKS5ERUFERUQsIHRoaXMsIHRoaXMuZGVhZGVkT3Zlcik7XHJcbiAgICAgICAgdG9vbC5vbmNlKFRvb2xzLmdldEluc3RhbmNlKCkuREVBRF9TRUxGLCB0aGlzLCB0aGlzLmRlYWRlZFNlbGZPdmVyKTtcclxuICAgICAgICBcclxuICAgICAgICB0b29sLmluaXQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRvb2xBcnIucHVzaCh0b29sKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL3Rvb2wubXAzXCIpO1xyXG4gICAgICAgIHJldHVybiB0b29sO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q275Lqh5Yqo55S757uT5p2fXHJcbiAgICAgKiBAcGFyYW0gdG9vbHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWFkQW5PdmVyKHRvb2xzOlRvb2xzKXtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy50b29sQXJyLmluZGV4T2YodG9vbHMpO1xyXG4gICAgICAgIHRoaXMudG9vbEFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWFkZWRPdmVyKHRvb2xzOlRvb2xzKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rmr4Hnu5PmnZ9cclxuICAgICAqIEBwYXJhbSB0b29scyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlYWRlZFNlbGZPdmVyKHRvb2xzOlRvb2xzKXtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy50b29sQXJyLmluZGV4T2YodG9vbHMpO1xyXG4gICAgICAgIHRoaXMudG9vbEFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWNvdmVyKHRvb2w6VG9vbHMpe1xyXG4gICAgICAgIHRvb2wucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIFBvb2wucmVjb3ZlcihcIlwiK3Rvb2wudHlwZSwgdG9vbCk7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcclxuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcclxuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG52YXIgUkVHOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcbmV4cG9ydCBtb2R1bGUgdWkge1xyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVWaWV3VUkgZXh0ZW5kcyBWaWV3IHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJWaWV3XCIsXCJwcm9wc1wiOntcIndpZHRoXCI6MTI4MCxcImhlaWdodFwiOjcwMH0sXCJjb21wSWRcIjoyLFwiY2hpbGRcIjpbe1widHlwZVwiOlwiU3ByaXRlXCIsXCJwcm9wc1wiOntcInlcIjotMTAsXCJ4XCI6LTIsXCJ0ZXh0dXJlXCI6XCJpbWcvQkcwMS5wbmdcIixcIm5hbWVcIjpcImJnXCJ9LFwiY29tcElkXCI6M30se1widHlwZVwiOlwiQm94XCIsXCJwcm9wc1wiOntcInlcIjo1MzQsXCJ4XCI6MCxcIndpZHRoXCI6NDEwLFwibmFtZVwiOlwicGxheWVyMVwiLFwiaGVpZ2h0XCI6MTc2fSxcImNvbXBJZFwiOjQsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6OTcsXCJ4XCI6MCxcIndpZHRoXCI6MjAxLFwic2tpblwiOlwiaW1nL0ltYWdlX2RvdWRpemh1X3RvdXhpYW5nZGlrdWFuZy5wbmdcIixcImhlaWdodFwiOjc5fSxcImNvbXBJZFwiOjUsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6NSxcInhcIjowLFwid2lkdGhcIjo3MyxcInNraW5cIjpcImltZy9JbWFnZV9kb3VkaXpodV90b3V4aWFuZ2t1YW5nLnBuZ1wiLFwiaGVpZ2h0XCI6NzR9LFwiY29tcElkXCI6NixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjozLFwieFwiOjQsXCJ3aWR0aFwiOjY1LFwic2tpblwiOlwiaW1nL2ljb25fZGVmYXVsdC5wbmdcIixcImhlaWdodFwiOjYyfSxcImNvbXBJZFwiOjd9XX1dfSx7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MTA4LjUsXCJ4XCI6ODAsXCJ3aWR0aFwiOjEwOCxcInNraW5cIjpcImltZy9JbWFnZV9kb3VkaXpodV9wYWl4aW5nLnBuZ1wiLFwiaGVpZ2h0XCI6Mjh9LFwiY29tcElkXCI6OH0se1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjE0MCxcInhcIjo4MCxcIndpZHRoXCI6MTA4LFwic2tpblwiOlwiaW1nL0ltYWdlX2RvdWRpemh1X3BhaXhpbmcucG5nXCIsXCJoZWlnaHRcIjoyOH0sXCJjb21wSWRcIjo5fSx7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MTA4LjUsXCJ4XCI6ODAsXCJza2luXCI6XCJpbWcvanBfamIucG5nXCJ9LFwiY29tcElkXCI6MTB9LHtcInR5cGVcIjpcIkltYWdlXCIsXCJwcm9wc1wiOntcInlcIjoxNDIsXCJ4XCI6ODAsXCJ3aWR0aFwiOjI1LFwic2tpblwiOlwiaW1nL3p1YW5zaGlfMDEucG5nXCIsXCJoZWlnaHRcIjoyNH0sXCJjb21wSWRcIjoxMX0se1widHlwZVwiOlwiTGFiZWxcIixcInByb3BzXCI6e1wieVwiOjEwOSxcInhcIjoxMTQsXCJ3aWR0aFwiOjYyLFwidmFsaWduXCI6XCJtaWRkbGVcIixcInRleHRcIjpcIjBcIixcIm5hbWVcIjpcImNvaW5OdW1cIixcImhlaWdodFwiOjI2LFwiZm9udFNpemVcIjoxOCxcImZvbnRcIjpcIkhlbHZldGljYVwiLFwiY29sb3JcIjpcIiNkZWI5MjVcIixcImJvbGRcIjp0cnVlLFwiYWxpZ25cIjpcImNlbnRlclwifSxcImNvbXBJZFwiOjEyfSx7XCJ0eXBlXCI6XCJMYWJlbFwiLFwicHJvcHNcIjp7XCJ5XCI6MTQwLFwieFwiOjExNCxcIndpZHRoXCI6NjIsXCJ2YWxpZ25cIjpcIm1pZGRsZVwiLFwidGV4dFwiOlwiMFwiLFwibmFtZVwiOlwiZGlhbW9uZE51bVwiLFwiaGVpZ2h0XCI6MjYsXCJmb250U2l6ZVwiOjE4LFwiZm9udFwiOlwiSGVsdmV0aWNhXCIsXCJjb2xvclwiOlwiI2RlYjkyNVwiLFwiYm9sZFwiOnRydWUsXCJhbGlnblwiOlwiY2VudGVyXCJ9LFwiY29tcElkXCI6MTN9LHtcInR5cGVcIjpcIkJveFwiLFwicHJvcHNcIjp7XCJ5XCI6OTcsXCJ4XCI6MjAxLFwid2lkdGhcIjoxODksXCJuYW1lXCI6XCJjYW5ub25cIixcImhlaWdodFwiOjgxfSxcImNvbXBJZFwiOjE0LFwiY2hpbGRcIjpbe1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjI3LFwieFwiOjAsXCJ3aWR0aFwiOjE4OCxcInNraW5cIjpcImltZy9kejEucG5nXCIsXCJuYW1lXCI6XCJwYW90YWlcIixcImhlaWdodFwiOjU0fSxcImNvbXBJZFwiOjE1fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjU0LFwieFwiOjEzNyxcIndpZHRoXCI6MjksXCJza2luXCI6XCJpbWcvYnV0dG9uX2Fycm93LnBuZ1wiLFwibmFtZVwiOlwiYnRuX25leHRcIixcImhlaWdodFwiOjIyfSxcImNvbXBJZFwiOjE3fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjc2LFwieFwiOjUwLFwid2lkdGhcIjoyOSxcInNraW5cIjpcImltZy9idXR0b25fYXJyb3cucG5nXCIsXCJyb3RhdGlvblwiOjE4MCxcIm5hbWVcIjpcImJ0bl9wcmVcIixcImhlaWdodFwiOjIyfSxcImNvbXBJZFwiOjE4fV19XX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo5LFwieFwiOjExLFwid2lkdGhcIjo1MCxcInN0YXRlTnVtXCI6MixcInNraW5cIjpcImltZy9tZXJnZV9JbWFnZV9wYWl6aHVvbmVpX2Zhbmh1aS5wbmdcIixcImhlaWdodFwiOjUwfSxcImNvbXBJZFwiOjE2fV0sXCJsb2FkTGlzdFwiOltcImltZy9CRzAxLnBuZ1wiLFwiaW1nL0ltYWdlX2RvdWRpemh1X3RvdXhpYW5nZGlrdWFuZy5wbmdcIixcImltZy9JbWFnZV9kb3VkaXpodV90b3V4aWFuZ2t1YW5nLnBuZ1wiLFwiaW1nL2ljb25fZGVmYXVsdC5wbmdcIixcImltZy9JbWFnZV9kb3VkaXpodV9wYWl4aW5nLnBuZ1wiLFwiaW1nL2pwX2piLnBuZ1wiLFwiaW1nL3p1YW5zaGlfMDEucG5nXCIsXCJpbWcvZHoxLnBuZ1wiLFwiaW1nL2J1dHRvbl9hcnJvdy5wbmdcIixcImltZy9tZXJnZV9JbWFnZV9wYWl6aHVvbmVpX2Zhbmh1aS5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KEdhbWVWaWV3VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS5HYW1lVmlld1VJXCIsR2FtZVZpZXdVSSk7XHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ1ZpZXdVSSBleHRlbmRzIFZpZXcge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgIHVpVmlldzphbnkgPXtcInR5cGVcIjpcIlZpZXdcIixcInByb3BzXCI6e1wid2lkdGhcIjoxMjgwLFwiaGVpZ2h0XCI6NzAwfSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6MCxcInhcIjowLFwic2tpblwiOlwibG9hZC9sYWRpbmdfYmcxLnBuZ1wifSxcImNvbXBJZFwiOjR9LHtcInR5cGVcIjpcIkJ1dHRvblwiLFwicHJvcHNcIjp7XCJ5XCI6NTIzLFwieFwiOjQ5NCxcIndpZHRoXCI6MjkxLFwidmlzaWJsZVwiOnRydWUsXCJzdGF0ZU51bVwiOjMsXCJza2luXCI6XCJsb2FkL2J1dHRvbl9zdGFyLnBuZ1wiLFwibmFtZVwiOlwic3RhcnRcIixcImhlaWdodFwiOjEzNH0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJJbWFnZVwiLFwicHJvcHNcIjp7XCJ5XCI6NDEyLFwieFwiOjQyNy41LFwic2tpblwiOlwibG9hZC9saW5lYmcucG5nXCJ9LFwiY29tcElkXCI6N30se1widHlwZVwiOlwiSW1hZ2VcIixcInByb3BzXCI6e1wieVwiOjQzOSxcInhcIjo0NTQsXCJ3aWR0aFwiOjMyLFwic2tpblwiOlwibG9hZC9iYXJzLnBuZ1wiLFwibmFtZVwiOlwiZG90XCIsXCJoZWlnaHRcIjo0N30sXCJjb21wSWRcIjo4fV0sXCJsb2FkTGlzdFwiOltcImxvYWQvbGFkaW5nX2JnMS5wbmdcIixcImxvYWQvYnV0dG9uX3N0YXIucG5nXCIsXCJsb2FkL2xpbmViZy5wbmdcIixcImxvYWQvYmFycy5wbmdcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KExvYWRpbmdWaWV3VUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSRUcoXCJ1aS5Mb2FkaW5nVmlld1VJXCIsTG9hZGluZ1ZpZXdVSSk7XHJcbn1cciIsImltcG9ydCBTcHJpdGUgPSBsYXlhLmRpc3BsYXkuU3ByaXRlO1xyXG5pbXBvcnQgSW1hZ2UgPSBsYXlhLnVpLkltYWdlO1xyXG5pbXBvcnQgTGFiZWwgPSBsYXlhLnVpLkxhYmVsO1xyXG5pbXBvcnQgeyBUaXBzRGF0YSB9IGZyb20gXCIuL1RpcHNEYXRhXCJcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVRpcHMgZXh0ZW5kcyBMYXlhLlNwcml0ZXtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkN1c3RvbVRpcHM7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6Q3VzdG9tVGlwc3tcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEN1c3RvbVRpcHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmaXJzdFRpcDpMYXlhLlNwcml0ZTtcclxuICAgIHByaXZhdGUgc2Vjb25kVGlwOkxheWEuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBvcGVEZWxTZWxmOkJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZXhpdFRpbWU6bnVtYmVyID0gNDA7XHJcbiAgICBwcml2YXRlIGN1cnJUaW1lOm51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRlbXBXOm51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75YqgdGlwXHJcbiAgICAgKiBAcGFyYW1cdGNvbnRhaW5lciAg5a655ZmoXHJcbiAgICAgKiBAcGFyYW1cdGNvbnRlbnQgICAg5YaF5a65XHJcbiAgICAgKiBAcGFyYW1cdGxvZ29mbGFnICAg5Zu+5qCHXHJcbiAgICAgKiBAcGFyYW1cdGlzQ2VudGVyICAg5piv5ZCm5qiq5ZCR5bGF5LitXHJcbiAgICAgKiBAcGFyYW1cdHBvc3kgICAg57q15ZCR5L2N572uXHJcbiAgICAgKiBAcGFyYW1cdHBvc3ggICAg5qiq5ZCR5L2N572uICBcclxuICAgICAqIEBwYXJhbVx0YW50aW1lICAgIOWKqOeUu+i/kOWKqOaXtumXtCBcclxuICAgICAqIEBwYXJhbVx0aXNBbGxFeGlzdCAg5piv5ZCm5LiN6Ieq5Yqo5raI5aSxXHJcbiAgICAgKiBAcGFyYW1cdGV0aW1lICDlrZjlnKjlpJrkuYXoh6rliqjplIDmr4EgMjAqZXRpbWUg5q+r56eSXHJcbiAgICAgKiBAcGFyYW1cdGxvZ290eXBlICBsb2dv57G75Z6LID0g5a+56ZSZ5Y+3ICAgMSDooajmg4VcclxuICAgICAqIEBwYXJhbVx0Ym9uZCAg57KX5L2TXHJcbiAgICAgKiBAcGFyYW1cdHNpemUgIOWtl+WPt1xyXG4gICAgICogQHBhcmFtXHRmb250ICDlrZfkvZNcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBBZGRUaXAoY29udGFpbmVyOkxheWEuU3ByaXRlLCBjb250ZW50OnN0cmluZz1cIjMzMzQzNFwiLCBsb2dvZmxhZzpzdHJpbmc9XCJyaWdodFwiLCBpc0NlbnRlcjpCb29sZWFuPXRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3N5Om51bWJlcj0xNTAsIHBvc3g6bnVtYmVyPTEwMCwgYW50aW1lOm51bWJlcj0zMDAsIGlzQWxsRXhpc3Q6Qm9vbGVhbj1mYWxzZSwgZXRpbWU6bnVtYmVyID0gNDAsIGxvZ290eXBlOm51bWJlcj0wLFxyXG4gICAgICAgICAgICAgICAgYm9uZDpCb29sZWFuPXRydWUsIHNpemU6bnVtYmVyPTI0LCBmb250OnN0cmluZz1cIuaWueato+WNoemAmueugOS9k1wiKXtcclxuICAgICAgICB0aGlzLmV4aXRUaW1lID0gZXRpbWU7XHJcbiAgICAgICAgaWYoIWNvbnRhaW5lci5jb250YWlucyh0aGlzKSl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmZpcnN0VGlwKXtcclxuICAgICAgICAgICAgdGhpcy5maXJzdFRpcCA9IHRoaXMuQ3JlYXRlTG9nb1RpcChjb250ZW50LCBsb2dvZmxhZyxsb2dvdHlwZSxib25kLHNpemUsZm9udCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5faW4odGhpcy5maXJzdFRpcCxhbnRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLCB0aGlzLmZpcnN0VGlwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcFcgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcFcgPSB0aGlzLmZpcnN0VGlwLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYgKCF0aGlzLnNlY29uZFRpcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuX291dCh0aGlzLmZpcnN0VGlwLGFudGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kVGlwID0gdGhpcy5DcmVhdGVMb2dvVGlwKGNvbnRlbnQsIGxvZ29mbGFnLGxvZ290eXBlLGJvbmQsc2l6ZSxmb250KTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcyx0aGlzLnNlY29uZFRpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5faW5fMSh0aGlzLnNlY29uZFRpcCxhbnRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZFRpcC54ID0gdGhpcy5maXJzdFRpcC54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoaXNDZW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJzKGNvbnRhaW5lciwgcG9zeSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvcyhwb3N4LCBwb3N5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5cclxuICAgICAgICAgICAgLy8v5a6e5pe25qOA5rWL6Ieq5q+B5LqL5Lu2XHJcbiAgICAgICAgICAgIGN1cnJUaW1lID0gMDtcclxuICAgICAgICBpZiAoIXRoaXMub3BlRGVsU2VsZiAmJiAhaXNBbGxFeGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZURlbFNlbGYgPSB0cnVlO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMjAsdGhpcyx0aGlzLmxvb3BIYW5kKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOiHquW3sVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRpc3Bvc1NlbGYoKXtcclxuICAgICAgICB0aGlzLnRlbXBXID0gLTE7XHJcbiAgICAgICAgdGhpcy5jdXJyVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWxheS4rVxyXG4gICAgICogQHBhcmFtXHRjb250YWluZXJcclxuICAgICAqIEBwYXJhbVx0cG9zeVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNlbnRlcnMoY29udGFpbmVyOlNwcml0ZSxwb3N5Om51bWJlcik6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3MoY29udGFpbmVyLndpZHRoIC8gMiwgcG9zeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4DmtYvoh6rmr4Hml7bpl7RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb29wSGFuZCgpe1xyXG4gICAgICAgIHRoaXMuY3VyclRpbWUrKzsgXHJcbiAgICAgICAgaWYgKHRoaXMuY3VyclRpbWUgPj0gdGhpcy5leGl0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbCgpe1xyXG4gICAgICAgIHRoaXMub3BlRGVsU2VsZiA9IGZhbHNlO1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbl9kbCh0aGlzLmZpcnN0VGlwKTtcclxuICAgICAgICB0aGlzLmN1cnJUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa2iOmZpOiHqui6q1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZVNlbGYoKXtcclxuICAgICAgICB0aGlzLmRlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Ye6IOWKqOeUu1xyXG4gICAgICogQHBhcmFtXHR0YXJnZXRcclxuICAgICAqIEBwYXJhbVx0YW5UaW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYW5fb3V0KHRhcmdldDpTcHJpdGUsIGFuVGltZTpudW1iZXIgPSA0MDApOnZvaWQge1xyXG4gICAgICAgIHRhcmdldC5hbHBoYSA9IDE7XHJcbiAgICAgICAgdmFyIHRpbWVMaW5lOmxheWEudXRpbHMuVGltZUxpbmUgPSBuZXcgbGF5YS51dGlscy5UaW1lTGluZSgpO1xyXG4gICAgICAgIHRpbWVMaW5lLmFkZExhYmVsKFwiYWFcIiwwKS50byh0YXJnZXQsIHsgeTogLXRhcmdldC5oZWlnaHQvMiB9LCBhblRpbWUsIGxheWEudXRpbHMuRWFzZS5jdWJpY091dClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJiYlwiLDApLnRvKHRhcmdldCwgeyBhbHBoYTowIH0sIGFuVGltZSwgbGF5YS51dGlscy5FYXNlLmN1YmljT3V0KTtcclxuICAgICAgICB0aW1lTGluZS5wbGF5KDApO1xyXG4gICAgICAgIHRpbWVMaW5lLm9uKExheWEuRXZlbnQuQ09NUExFVEUsdGhpcyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aW1lTGluZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHquavgeWKqOeUu1xyXG4gICAgICogQHBhcmFtXHR0YXJnZXRcclxuICAgICAqIEBwYXJhbVx0YW5UaW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYW5fZGwodGFyZ2V0OlNwcml0ZSwgYW5UaW1lOm51bWJlciA9IDQwMCl7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcclxuICAgICAgICBsYXlhLnV0aWxzLlR3ZWVuLnRvKHRhcmdldCx7YWxwaGE6MH0sYW5UaW1lLGxheWEudXRpbHMuRWFzZS5jdWJpY091dCxuZXcgbGF5YS51dGlscy5IYW5kbGVyKHRoaXMsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5maXJzdFRpcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RUaXAgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFRpcCA9PSBudWxsICYmIHRoaXMuc2Vjb25kVGlwID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zU2VsZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmaXJzdFRpcOWKqOeUu1xyXG4gICAgICogQHBhcmFtXHR0YXJnZXRcclxuICAgICAqIEBwYXJhbVx0YW5UaW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYW5faW4odGFyZ2V0OlNwcml0ZSwgYW5UaW1lOm51bWJlciA9IDQwMCl7XHJcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gMDtcclxuICAgICAgICBsYXlhLnV0aWxzLlR3ZWVuLnRvKHRhcmdldCwgeyBhbHBoYToxIH0sIGFuVGltZSwgbGF5YS51dGlscy5FYXNlLmN1YmljSW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2Vjb25kVGlwIOWFpSDliqjnlLtcclxuICAgICAqIEBwYXJhbVx0dGFyZ2V0XHJcbiAgICAgKiBAcGFyYW1cdGFuVGltZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFuX2luXzEodGFyZ2V0OlNwcml0ZSwgYW5UaW1lOm51bWJlciA9IDQwMCl7XHJcbiAgICAgICAgdGFyZ2V0LnNjYWxlWSA9IDA7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxheWEudXRpbHMuVHdlZW4udG8odGFyZ2V0LCB7c2NhbGVZOjF9LCBhblRpbWUsIGxheWEudXRpbHMuRWFzZS5jdWJpY0luLG5ldyBsYXlhLnV0aWxzLkhhbmRsZXIodGhpcyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzZWxmLmZpcnN0VGlwID0gc2VsZi5zZWNvbmRUaXA7XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kVGlwID0gbnVsbDtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlrZDlr7nosaHvvIzoh6rliKTmlq1cclxuICAgICAqIEBwYXJhbVx0ZmF0aGVyXHJcbiAgICAgKiBAcGFyYW1cdHN1blxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFkZChmYXRoZXI6U3ByaXRlLCBzdW46U3ByaXRlKXtcclxuICAgICAgICBpZiAoc3VuICYmICFmYXRoZXIuY29udGFpbnMoc3VuKSkge1xyXG4gICAgICAgICAgICBmYXRoZXIuYWRkQ2hpbGQoc3VuKTtcclxuICAgICAgICAgICAgc3VuLnBvcyhzdW4ud2lkdGggLyAyLCBzdW4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu6dGlw5YaF5a65XHJcbiAgICAgKiBAcGFyYW1cdGNvbnRlbnRcclxuICAgICAqIEBwYXJhbVx0bG9nb2ZsYWdcclxuICAgICAqIEBwYXJhbVx0bG9nb3R5cGVcclxuICAgICAqIEBwYXJhbVx0Ym9uZFxyXG4gICAgICogQHBhcmFtXHRzaXplXHJcbiAgICAgKiBAcGFyYW1cdGZvbnRcclxuICAgICAqIEByZXR1cm5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBDcmVhdGVMb2dvVGlwKGNvbnRlbnQ6IHN0cmluZywgbG9nb2ZsYWc6c3RyaW5nID0gXCJyaWdodFwiLGxvZ290eXBlOm51bWJlcj0wLGJvbmQ6IEJvb2xlYW4gPSBmYWxzZSxzaXplOiBudW1iZXIgPSAyMiwgZm9udDogc3RyaW5nID0gXCLlvq7ova/pm4Xpu5FcIik6U3ByaXRlIHtcclxuICAgICAgICB2YXIgdGlwQ29udGFpbmVyOlNwcml0ZSA9IG5ldyBTcHJpdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaW5mb0NvbnRhaWVucjpTcHJpdGUgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgdmFyIGxvZ29JbWc6SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB2YXIgYmdJbWc6SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBiZ0ltZy5zaXplR3JpZCA9IFwiMzMsMjYsMjgsMzBcIjtcclxuICAgICAgICB2YXIgbGFiZWw6TGFiZWwgPSBuZXcgTGFiZWwoKTtcclxuICAgICAgICBcclxuICAgICAgICBsYWJlbC50ZXh0ID0gY29udGVudDtcclxuICAgICAgICBsYWJlbC5mb250ID0gZm9udDtcclxuICAgICAgICBsYWJlbC5mb250U2l6ZSA9IHNpemU7XHJcbiAgICAgICAgbGFiZWwuaGVpZ2h0ID0gNTA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGxvZ29mbGFnID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICBsb2dvSW1nLnNraW4gPSBUaXBzRGF0YS5nZXRJbnN0YW5jZSgpLmxvZ29SaWdodEFycltsb2dvdHlwZV07XHJcbiAgICAgICAgICAgIGJnSW1nLnNraW4gPSBUaXBzRGF0YS5nZXRJbnN0YW5jZSgpLnRpcFJpZ2h0QXJyW2xvZ290eXBlXTtcdFxyXG4gICAgICAgICAgICBsYWJlbC5jb2xvciA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkucmlnaHRDb2xvckFycltsb2dvdHlwZV07XHJcbiAgICAgICAgfWVsc2UgaWYgKGxvZ29mbGFnID09IFwid3JvbmdcIikge1xyXG4gICAgICAgICAgICBsb2dvSW1nLnNraW4gPSBUaXBzRGF0YS5nZXRJbnN0YW5jZSgpLmxvZ29Xcm9uZ0Fycltsb2dvdHlwZV07XHJcbiAgICAgICAgICAgIGJnSW1nLnNraW4gPSBUaXBzRGF0YS5nZXRJbnN0YW5jZSgpLnRpcFdyb25nQXJyW2xvZ290eXBlXTtcdFxyXG4gICAgICAgICAgICBsYWJlbC5jb2xvciA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkud3JvbmdDb2xvckFycltsb2dvdHlwZV07XHJcbiAgICAgICAgfWVsc2UgaWYgKGxvZ29mbGFnID09IFwid2FyblwiKSB7XHJcbiAgICAgICAgICAgIGxvZ29JbWcuc2tpbiA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkubG9nb1dhcm5BcnJbbG9nb3R5cGVdO1xyXG4gICAgICAgICAgICBiZ0ltZy5za2luID0gVGlwc0RhdGEuZ2V0SW5zdGFuY2UoKS50aXBXYXJuQXJyW2xvZ290eXBlXTtcdFxyXG4gICAgICAgICAgICBsYWJlbC5jb2xvciA9IFRpcHNEYXRhLmdldEluc3RhbmNlKCkud2FybkNvbG9yQXJyW2xvZ290eXBlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmdJbWcuc2l6ZShsYWJlbC53aWR0aCArIDIwMCwgNTApO1xyXG4gICAgICAgIGluZm9Db250YWllbnIud2lkdGggPSBiZ0ltZy53aWR0aDtcclxuICAgICAgICBsYWJlbC5wb3MoKGJnSW1nLndpZHRoIC0gbGFiZWwudGV4dEZpZWxkLnRleHRXaWR0aCkgLyAyLCAoYmdJbWcuaGVpZ2h0IC0gbGFiZWwudGV4dEZpZWxkLnRleHRIZWlnaHQpIC8gMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGlwQ29udGFpbmVyLmFkZENoaWxkKGluZm9Db250YWllbnIpO1xyXG4gICAgICAgIGluZm9Db250YWllbnIuYWRkQ2hpbGQoYmdJbWcpO1xyXG4gICAgICAgIGluZm9Db250YWllbnIuYWRkQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgIGluZm9Db250YWllbnIucG9zKGxvZ29JbWcud2lkdGgtMSwgMCk7XHJcbiAgICAgICAgdGlwQ29udGFpbmVyLmFkZENoaWxkKGxvZ29JbWcpO1xyXG4gICAgICAgIHRpcENvbnRhaW5lci5zaXplKGxvZ29JbWcud2lkdGggKyBiZ0ltZy53aWR0aCwgbG9nb0ltZy5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpcENvbnRhaW5lci5waXZvdCh0aXBDb250YWluZXIud2lkdGgsIHRpcENvbnRhaW5lci5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aXBDb250YWluZXI7XHJcbiAgICB9XHJcbn0iLCJcclxuICAgIC8qKnRpcCDmlbDmja7nrqHnkIZcclxuXHQgKiAuLi5cclxuXHQgKiBAYXV0aG9yIE1YTFxyXG5cdCAqL1xyXG5cdGV4cG9ydCBjbGFzcyBUaXBzRGF0YVxyXG5cdHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTpUaXBzRGF0YTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6VGlwc0RhdGF7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpcHNEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cdFx0Ly8vbG9nbyB0aXAg57Sg5p2Q566h55CGICAwIOWvuemUmeWPtyAgIDHmmK/ooajmg4VcclxuXHRcdHB1YmxpYyBsb2dvUmlnaHRBcnI6QXJyYXk8YW55PiA9IFtcImZpc2gvdGlwL3JpZ2h0LnBuZ1wiLFwiZmlzaC90aXAvZmFjZV9yaWdodC5wbmdcIixcImZpc2gvdGlwL2ZhY2UyX3JpZ2h0LnBuZ1wiLFwiZmlzaC90aXAvZmlzaDNfMy5wbmdcIl07XHJcblx0XHRwdWJsaWMgbG9nb1dyb25nQXJyOkFycmF5PGFueT4gPSBbXCJmaXNoL3RpcC93cm9uZy5wbmdcIixcImZpc2gvdGlwL2ZhY2Vfd3JvbmcucG5nXCIsXCJmaXNoL3RpcC9mYWNlMl93cm9uZy5wbmdcIixcImZpc2gvdGlwL2Zpc2gzXzIucG5nXCJdO1xyXG5cdFx0cHVibGljIGxvZ29XYXJuQXJyOkFycmF5PGFueT4gPSBbXCJmaXNoL3RpcC93YXJuLnBuZ1wiLCBcImZpc2gvdGlwL2ZhY2Vfd2Fybi5wbmdcIiwgXCJmaXNoL3RpcC9mYWNlMl93YXJuLnBuZ1wiLFwiZmlzaC90aXAvZmlzaDNfMS5wbmdcIl07XHJcblx0XHRcclxuXHRcdC8vL2JnXHJcblx0XHRwdWJsaWMgdGlwUmlnaHRBcnI6QXJyYXk8YW55PiA9W1wiZmlzaC90aXAvcmlnaHRfYmcucG5nXCIsXCJmaXNoL3RpcC9yaWdodF9iZy5wbmdcIixcImZpc2gvdGlwL2JnMy5wbmdcIixcImZpc2gvdGlwL2JnNC5wbmdcIl07XHJcblx0XHRwdWJsaWMgdGlwV3JvbmdBcnI6QXJyYXk8YW55PiA9W1wiZmlzaC90aXAvd3JvbmdfYmcucG5nXCIsXCJmaXNoL3RpcC93cm9uZ19iZy5wbmdcIixcImZpc2gvdGlwL2JnMy5wbmdcIixcImZpc2gvdGlwL2JnNC5wbmdcIl07XHJcblx0XHRwdWJsaWMgdGlwV2FybkFycjpBcnJheTxhbnk+ID0gW1wiZmlzaC90aXAvd2Fybl9iZy5wbmdcIiwgXCJmaXNoL3RpcC93YXJuX2JnLnBuZ1wiLCBcImZpc2gvdGlwL2JnMy5wbmdcIixcImZpc2gvdGlwL2JnNC5wbmdcIl07XHJcblx0XHRcclxuXHRcdC8vL2NvbG9yXHJcblx0XHRwdWJsaWMgcmlnaHRDb2xvckFycjpBcnJheTxhbnk+ID0gW1wiIzAwNjY2NlwiLFwiIzAwNjY2NlwiLFwiI2ZmZmZmZlwiLFwiI2ZmZmZmZlwiXTtcclxuXHRcdHB1YmxpYyB3cm9uZ0NvbG9yQXJyOkFycmF5PGFueT4gPSBbXCIjY2MwMDAwXCIsXCIjY2MwMDAwXCIsXCIjZmZmZmZmXCIsXCIjZmZmZmZmXCJdO1xyXG5cdFx0cHVibGljIHdhcm5Db2xvckFycjpBcnJheTxhbnk+ID0gW1wiI0NDNjYwMFwiLFwiI0NDNjYwMFwiLFwiI2ZmZmZmZlwiLFwiI2ZmZmZmZlwiXTtcclxuXHR9IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcbmltcG9ydCB7IENhbm5vbkZhdGhlciB9IGZyb20gXCIuLi9lbGVtZW50L2Nhbm5vbi9DYW5ub25GYXRoZXJcIjtcclxuaW1wb3J0IHsgQ2Fubm9uTWFuYWdlciB9IGZyb20gXCIuLi9lbGVtZW50L2Nhbm5vbi9DYW5ub25NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9HbG9iYWxcIjtcclxuaW1wb3J0IHsgRGF0YVByb3h5IH0gZnJvbSBcIi4uL2RhdGEvRGF0YVByb3h5XCI7XHJcbmltcG9ydCB7IEJ1bGxldFZvIH0gZnJvbSBcIi4uL2RhdGEvQnVsbGV0Vm9cIjtcclxuaW1wb3J0IHsgU2NvcmVWaWV3IH0gZnJvbSBcIi4uL2VsZW1lbnQvdmlldy9TY29yZVZpZXdcIjtcclxuaW1wb3J0IHsgVGlwc0RhdGEgfSBmcm9tIFwiLi4vdXRpbC90aXBzL1RpcHNEYXRhXCI7XHJcbmltcG9ydCB7IEN1c3RvbVRpcHMgfSBmcm9tIFwiLi4vdXRpbC90aXBzL0N1c3RvbVRpcHNcIjtcclxuaW1wb3J0IHsgQnVsbGV0RmF0aGVyIH0gZnJvbSBcIi4uL2VsZW1lbnQvYnVsbGV0L0J1bGxldEZhdGhlclwiO1xyXG5pbXBvcnQgeyBCdWxsZXRNYW5hZ2VyIH0gZnJvbSBcIi4uL2VsZW1lbnQvYnVsbGV0L0J1bGxldE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRmlzaE1hbmFnZXIgfSBmcm9tIFwiLi4vZWxlbWVudC9maXNoL0Zpc2hNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEZpc2hGYXRoZXIgfSBmcm9tIFwiLi4vZWxlbWVudC9maXNoL0Zpc2hGYXRoZXJcIjtcclxuaW1wb3J0IHsgTG9hZGluZ1ZpZXcgfSBmcm9tIFwiLi9Mb2FkaW5nVmlld1wiO1xyXG5pbXBvcnQgUG9pbnQgPSBsYXlhLm1hdGhzLlBvaW50O1xyXG5pbXBvcnQgVGltZUxpbmUgPSBsYXlhLnV0aWxzLlRpbWVMaW5lO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyID0gbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXI7XHJcbmltcG9ydCB7IENvaW5NYW5hZ2VyIH0gZnJvbSBcIi4uL2VsZW1lbnQvY29pbi9Db2luTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9lbGVtZW50L3Rvb2xzL1Rvb2xzXCI7XHJcbmltcG9ydCB7IFRvb2xzTWFuYWdlciB9IGZyb20gXCIuLi9lbGVtZW50L3Rvb2xzL1Rvb2xzTWFuYWdlclwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyB1aS5HYW1lVmlld1VJe1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6R2FtZVZpZXc7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6R2FtZVZpZXd7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHYW1lVmlldygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR3Y6R2FtZVZpZXc7XHJcbiAgICBwcml2YXRlIGNhbm5vbjpDYW5ub25GYXRoZXI7Ly/lpKfngq5cclxuICAgIHByaXZhdGUgX2Nhbm5vblR5cGU6bnVtYmVyID0gMDsvL+Wkp+eCruexu+Wei1xyXG5cclxuICAgIHByaXZhdGUgYnVsbGV0QXJyOkFycmF5PGFueT4gPSBbXTsvL+WtkOW8ueaVsOe7hFxyXG4gICAgcHJpdmF0ZSBkZWFkQnVsbGV0OkFycmF5PGFueT4gPSBbXTsvL+atu+S6oeWtkOW8uVxyXG4gICAgcHJpdmF0ZSBmaXNoQXJyOkFycmF5PGFueT4gPSBbXTsvL+mxvOaVsOe7hFxyXG4gICAgcHJpdmF0ZSBjb2luTnVtID0gdGhpcy5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luTnVtXCIpO1xyXG4gICAgcHJpdmF0ZSBidG5fcHJlID0gdGhpcy5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjYW5ub25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcHJlXCIpO1xyXG4gICAgcHJpdmF0ZSBidG5fbmV4dCA9IHRoaXMuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXIxXCIpLmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuX25leHRcIik7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdERhdGEoKXtcclxuICAgICAgICBDYW5ub25NYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVBbmltYXRpb24oKTtcclxuICAgICAgICBCdWxsZXRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVBbmltYXRpb24oKTtcclxuICAgICAgICBGaXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhY2hlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgQ29pbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIFRvb2xzTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhY2hlQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Vmlldygpe1xyXG4gICAgICAgIHRoaXMuY2Fubm9uID0gQ2Fubm9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNyZWF0ZUNhbm5vbih0aGlzLCAyOTUsIDY5NCk7XHJcbiAgICAgICAgdGhpcy5jYW5ub25UeXBlID0gNTtcclxuICAgICAgICB0aGlzLmNvaW5OdW0udGV4dCA9IDEwMDA7XHJcblxyXG4gICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLmx2bG51bSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlRmlzaChHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbEZpc2hOdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2Fubm9uVHlwZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2Fubm9uVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNhbm5vblR5cGUodmFsOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fY2Fubm9uVHlwZSA9IHZhbDtcclxuICAgICAgICB0aGlzLl9jYW5ub25UeXBlID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy5fY2Fubm9uVHlwZSwgQ2Fubm9uRmF0aGVyLmdldEluc3RhbmNlKCkuTUlOX1RZUEUpLCBDYW5ub25GYXRoZXIuZ2V0SW5zdGFuY2UoKS5NQVhfVFlQRSk7XHJcbiAgICAgICAgdGhpcy5jYW5ub24udHlwZSA9IHRoaXMuX2Nhbm5vblR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0RXZlbnQoKXtcclxuICAgICAgICB0aGlzLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5Eb3duSGFuZCk7XHJcbiAgICAgICAgdGhpcy5idG5fcHJlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5wb3dCdG5IYW5kKTtcclxuICAgICAgICB0aGlzLmJ0bl9uZXh0Lm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5wb3dCdG5IYW5kKTtcclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSwgdGhpcywgdGhpcy5sb29wSGFuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvqrnjq/lh73mlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb29wSGFuZCgpe1xyXG4gICAgICAgIHRoaXMuY2hlY2tIaXRGaXNoMigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tIaXRUb29scygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a2Q5by556Kw5pKe5Yiw6bG8XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tIaXRGaXNoMigpOnZvaWR7XHJcbiAgICAgICAgdmFyIGJ1bGxldDpCdWxsZXRGYXRoZXI7XHJcbiAgICAgICAgdmFyIGZpc2g6RmlzaEZhdGhlcjtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGogPSAwO1xyXG4gICAgICAgIHZhciBmcmVjdDpMYXlhLlJlY3RhbmdsZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5idWxsZXRBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldEFycltpXTtcclxuICAgICAgICAgICAgaWYgKCFidWxsZXQgfHwgIWJ1bGxldC5wYXJlbnQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5maXNoQXJyLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGZpc2ggPSB0aGlzLmZpc2hBcnJbal07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpc2ggfHwgIWZpc2gucGFyZW50KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGZyZWN0ID0gZmlzaC5nZXRIaXRSZWN0YW5nbGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYnVsbGV0LmlzSGl0RmlzaCAmJiAhYnVsbGV0LmRlYWRlZCAmJiAhZmlzaC5kZWFkKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja092ZXIoZnJlY3QsIGJ1bGxldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmlzSGl0RmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpc2guaHAgLT0gdGhpcy5nZXRCdWxsZXRIYXJkKGJ1bGxldCkqTWF0aC5yYW5kb20oKSo1O1x0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a2Q5by556Kw5pKe6YGT5YW3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tIaXRUb29scygpe1xyXG4gICAgICAgIHZhciBidWxsZXQ6QnVsbGV0RmF0aGVyO1xyXG4gICAgICAgIHZhciB0b29sOlRvb2xzXHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICB2YXIgZnJlY3Q6bGF5YS5tYXRocy5SZWN0YW5nbGU7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYnVsbGV0QXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYnVsbGV0ID0gdGhpcy5idWxsZXRBcnJbaV07XHJcbiAgICAgICAgICAgIGlmICghYnVsbGV0IHx8ICFidWxsZXQucGFyZW50KSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IFRvb2xzTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRvb2xBcnIubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdG9vbCA9IFRvb2xzTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRvb2xBcnJbal07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRvb2wgfHwgIXRvb2wucGFyZW50KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGZyZWN0ID0gdG9vbC5nZXRIaXRSZWN0YW5nbGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYnVsbGV0LmlzSGl0VG9vbCAmJiAhYnVsbGV0LmRlYWRlZCAmJiAhdG9vbC5kZWFkZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrT3ZlcihmcmVjdCxidWxsZXQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmlzSGl0VG9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2wuZGlzcG9zZVMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6XmmK/lkKbnm7jkuqRcclxuICAgICAqIEBwYXJhbVx0ZnVsbGV0XHJcbiAgICAgKiBAcGFyYW1cdGZpc2hcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja092ZXIoZnJlY3Q6TGF5YS5SZWN0YW5nbGUsYnVsbGV0OkJ1bGxldEZhdGhlcik6Qm9vbGVhbntcclxuICAgICAgICB2YXIgYmM6UG9pbnQgPSBidWxsZXQuZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgdmFyIGJyOm51bWJlciA9IGJ1bGxldC5oaXRSYWRpdXM7XHJcbiAgICAgICAgdmFyIHh2Om51bWJlciA9IDEwOy8v5L+u5q2j6IyD5Zu0XHJcbiAgICAgICAgdmFyIHAxOlBvaW50ID0gbmV3IFBvaW50KGZyZWN0LngreHYsIGZyZWN0LnkreHYpO1xyXG4gICAgICAgIHZhciBwMjpQb2ludCA9IG5ldyBQb2ludChmcmVjdC54K3h2ICsgZnJlY3Qud2lkdGgteHYqMiwgZnJlY3QueSt4dik7XHJcbiAgICAgICAgdmFyIHAzOlBvaW50ID0gbmV3IFBvaW50KGZyZWN0LngreHYsIGZyZWN0LnkreHYrZnJlY3QuaGVpZ2h0LXh2KjIpO1xyXG4gICAgICAgIHZhciBwNDpQb2ludCA9IG5ldyBQb2ludChmcmVjdC54K3h2ICsgZnJlY3Qud2lkdGgteHYqMiwgZnJlY3QueSt4diArIGZyZWN0LmhlaWdodC14dioyKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYXJyNDpBcnJheTxhbnk+ID0gdGhpcy5nZXROb2RlKHAxLCBwMiwgYmMsIGJyKVxyXG4gICAgICAgIHZhciBhcnIzOkFycmF5PGFueT4gPSB0aGlzLmdldE5vZGUocDEsIHAzLCBiYywgYnIpO1xyXG4gICAgICAgIHZhciBhcnIyOkFycmF5PGFueT4gPSB0aGlzLmdldE5vZGUocDIsIHA0LCBiYywgYnIpO1xyXG4gICAgICAgIHZhciBhcnIxOkFycmF5PGFueT4gPSB0aGlzLmdldE5vZGUocDMsIHA0LCBiYywgYnIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBhcnI6QXJyYXk8YW55PiA9IGFycjEuY29uY2F0KGFycjIpLmNvbmNhdChhcnIzKS5jb25jYXQoYXJyNCk7XHJcbiAgICAgICAgdmFyIGJvbzpCb29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPdmVyKGZyZWN0LGFycik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcblx0XHQgKiDov5Tlm57nur/ot5/lnIbnmoTkuqTngrlcclxuXHRcdCAqIEBwYXJhbVx0cDEgIOeCuTFcclxuXHRcdCAqIEBwYXJhbVx0cDIgIOeCuTJcclxuXHRcdCAqIEBwYXJhbVx0YyAgIOWchuW/g1xyXG5cdFx0ICogQHBhcmFtXHRyICAg5Y2K5b6EXHJcblx0XHQgKiBAcmV0dXJuICDkuKTkuKrkuqTngrlcclxuXHRcdCAqL1xyXG5cdFx0cHJpdmF0ZSBnZXROb2RlKHAxOlBvaW50LCBwMjpQb2ludCwgYzpQb2ludCwgcjpudW1iZXIpOkFycmF5PGFueT57XHJcblx0XHRcdHZhciB4MTpudW1iZXI7XHJcblx0XHRcdHZhciB4MjpudW1iZXI7XHJcblx0XHRcdHZhciB5MTpudW1iZXI7XHJcblx0XHRcdHZhciB5MjpudW1iZXI7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcG8xOlBvaW50ID0gbmV3IFBvaW50KDAsMCk7XHJcblx0XHRcdHZhciBwbzI6UG9pbnQgPSBuZXcgUG9pbnQoMCwwKTtcclxuXHRcdFx0aWYgKHAyLnggLSBwMS54ID09IDApe1xyXG5cdFx0XHRcdHgxID0gcDEueDtcclxuXHRcdFx0XHR4MiA9IHAxLng7XHJcblx0XHRcdFx0eTEgPSBNYXRoLnBvdyhyKnItTWF0aC5wb3coKHAxLngtYy54KSwyKSwxLzIpK2MueTsvL+S4i+mdoueCuVxyXG5cdFx0XHRcdHkyID0gLU1hdGgucG93KHIqci1NYXRoLnBvdygocDEueC1jLngpLDIpLDEvMikrYy55Oy8v5LiK6Z2i54K5XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHZhciBrOm51bWJlciA9IChwMi55LXAxLnkpLyhwMi54LXAxLngpO1xyXG5cdFx0XHRcdHZhciBiOm51bWJlciA9IHAxLnktKHAyLnktcDEueSkvKHAyLngtcDEueCkqcDEueDtcclxuXHRcdFx0XHR2YXIgbTpudW1iZXIgPSBiLWMueTtcclxuXHRcdFx0XHR2YXIgdmFsID0gLTIqbSprKmMueC0gayprKmMueCpjLngrayprKnIqci1tKm0rcipyO1xyXG5cdFx0XHRcdHgxID0gKChjLngtbSprKS0gTWF0aC5wb3codmFsLDEvMikpLyhrKmsrMSkvL+W3pui+ueeCuVxyXG5cdFx0XHRcdHkxID0gayp4MStiO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHgyID0gKChjLngtbSprKSsgTWF0aC5wb3codmFsLDEvMikpLyhrKmsrMSkvL+WPs+i+ueeCuVxyXG5cdFx0XHRcdHkyID0gayp4MStiO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRwbzEuc2V0VG8oeDEsIHkxKTtcclxuXHRcdFx0cG8yLnNldFRvKHgyLCB5Mik7XHJcblxyXG5cdFx0XHRyZXR1cm4gW3BvMSxwbzJdO1xyXG5cdFx0fVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWMheWQq+mbhuWQiOS4reeahOS7u+aEj+S4gOS4queCuVxyXG4gICAgICogQHBhcmFtXHRmcmVjdFxyXG4gICAgICogQHBhcmFtXHRwYXJyXHJcbiAgICAgKiBAcmV0dXJuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNPdmVyKGZyZWN0OkxheWEuUmVjdGFuZ2xlLHBhcnI6QXJyYXk8YW55Pik6Qm9vbGVhbntcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgcDpQb2ludCA9IHBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChmcmVjdC5jb250YWlucyhwLngsIHAueSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG93QnRuSGFuZChlOkxheWEuRXZlbnQpe1xyXG4gICAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0ID09IHRoaXMuYnRuX3ByZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fubm9uVHlwZS0tO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNhbm5vblR5cGUrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL0NoYW5nZUd1bi53YXZcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBEb3duSGFuZChlOkxheWEuRXZlbnQpe1xyXG4gICAgICAgIGlmKEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UpcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm1vdXNlWSA8PSBHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbEhlaWdodCAtIEdsb2JhbC5nZXRJbnN0YW5jZSgpLmJvdHRvbVNwYWNlKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tDYW5TaG9vdChEYXRhUHJveHkuZ2V0SW5zdGFuY2UoKS5nZXREYXRhQnlUeXBlKHRoaXMuY2Fubm9uLnR5cGUpKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0aW1lOm51bWJlciA9IGxheWEudXRpbHMuQnJvd3Nlci5ub3coKTtcclxuICAgICAgICAgICAgaWYodGltZT50aGlzLmNhbm5vbi5zaG9vdFRpbWUqR2xvYmFsLmdldEluc3RhbmNlKCkuc2hvb3RJbnRlclRpbWUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3k6bnVtYmVyID0gKHRoaXMubW91c2VZIC0gdGhpcy5jYW5ub24ueSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzeDpudW1iZXIgPSAodGhpcy5tb3VzZVggLSB0aGlzLmNhbm5vbi54KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fubm9uLnJvdGF0ZUFuKE1hdGguYXRhbjIoZGlzeSwgZGlzeCkqMTgwL01hdGguUEkgKyA5MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbm5vbi5zaG9vdFRpbWUgPSB0aW1lICsgdGhpcy5jYW5ub24uc2hvb3RJbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fubm9uLnNob290QW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYnVsbGV0OkJ1bGxldEZhdGhlciA9IEJ1bGxldE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jcmVhdGVCdWxsZXRCeVR5cGUodGhpcy5jYW5ub24udHlwZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5nbGU6bnVtYmVyID0gdGhpcy5jYW5ub24ucm90YXRpb24gLSA5MDtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5wb3ModGhpcy5jYW5ub24ueCArIE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSp0aGlzLmNhbm5vbi5zZWxmSGVpZ2h0LHRoaXMuY2Fubm9uLnkrTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKnRoaXMuY2Fubm9uLnNlbGZIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LnJvdGF0aW9uID0gdGhpcy5jYW5ub24ucm90YXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKGJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2luTnVtLnRleHQgPSBOdW1iZXIodGhpcy5jb2luTnVtLnRleHQpIC0gYnVsbGV0LmRhdGFWby5wb3dlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBidWxsZXQub25jZShCdWxsZXRGYXRoZXIuZ2V0SW5zdGFuY2UoKS5CT09NX0NPTSwgdGhpcywgdGhpcy5idWxsZXRCb29tKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0QXJyLnB1c2goYnVsbGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtkOW8ueeIhueCuFxyXG4gICAgICogQHBhcmFtIGJ1bGxldCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ1bGxldEJvb20oYnVsbGV0OkJ1bGxldEZhdGhlcil7XHJcbiAgICAgICAgLy8gdGhpcy5ib29tQ2hlY2tIaXQoYnVsbGV0KTtcclxuICAgICAgICAvLyB0aGlzLmJvb21DaGVja0hpdFRvb2woYnVsbGV0KTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IHRoaXMuYnVsbGV0QXJyLmluZGV4T2YoYnVsbGV0KTtcclxuICAgICAgICB0aGlzLmJ1bGxldEFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICBidWxsZXQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIGJ1bGxldC5kZWFkZWQgPSB0cnVlO1xyXG4gICAgICAgIEJ1bGxldE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZWNvdmVyQnVsbGVyQnlUeXBlKGJ1bGxldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiDlrZDlvLnniIbngrjkuozmrKHmo4DmtYvnorDmkp4g5Lqk54K556Kw5pKe77yM55u45a+555+p5b2i57K+56Gu5LiA5LqbXHJcbiAgICAvLyAgKiBAcGFyYW1cdGJ1bGxldFxyXG4gICAgLy8gICovXHJcbiAgICAvLyBwcml2YXRlIGJvb21DaGVja0hpdFRvb2woYnVsbGV0OkJ1bGxldEZhdGhlcik6dm9pZHtcclxuICAgIC8vICAgICB2YXIgdG9vbDpUb29sc1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICB2YXIgZnJlY3Q6TGF5YS5SZWN0YW5nbGU7XHJcbiAgICAvLyAgICAgZm9yIChqID0gMDsgaiA8IFRvb2xzTWFuYWdlci5pbnN0YW5jZSgpLnRvb2xBcnIubGVuZ3RoOyBqKyspe1xyXG4gICAgLy8gICAgICAgICB0b29sID0gVG9vbHNNYW5hZ2VyLmluc3RhbmNlKCkudG9vbEFycltqXTtcclxuICAgIC8vICAgICAgICAgaWYgKCF0b29sIHx8ICF0b29sLnBhcmVudCkgY29udGludWU7XHJcbiAgICAvLyAgICAgICAgIGZyZWN0ID0gdG9vbC5nZXRIaXRSZWN0YW5nbGUoKTtcclxuICAgIC8vICAgICAgICAgaWYgKCF0b29sLmRlYWRlZCl7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jaGVja092ZXIoZnJlY3QsIGJ1bGxldCkpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvb2wuZGlzcG9zZVMoKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuXHRcdCAqIOWtkOW8ueeIhueCuOS6jOasoeajgOa1i+eisOaSniDkuqTngrnnorDmkp7vvIznm7jlr7nnn6nlvaLnsr7noa7kuIDkuptcclxuXHRcdCAqIEBwYXJhbVx0YnVsbGV0XHJcblx0XHQgKi9cclxuXHRcdC8vIHByaXZhdGUgYm9vbUNoZWNrSGl0KGJ1bGxldDpCdWxsZXRGYXRoZXIpOnZvaWR7XHJcblx0XHQvLyBcdHZhciBmaXNoOkZpc2hGYXRoZXI7XHJcblx0XHQvLyBcdHZhciBqID0gMDtcclxuICAgICAgICAvLyAgICAgdmFyIGZyZWN0OkxheWEuUmVjdGFuZ2xlO1xyXG5cdFx0Ly8gXHRmb3IgKGogPSAwOyBqIDwgdGhpcy5maXNoQXJyLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAvLyAgICAgICAgIGZpc2ggPSB0aGlzLmZpc2hBcnJbal07XHJcblx0XHQvLyBcdFx0aWYgKCFmaXNoIHx8ICFmaXNoLnBhcmVudCkgY29udGludWU7XHJcblx0XHQvLyBcdFx0ZnJlY3QgPSBmaXNoLmdldEhpdFJlY3RhbmdsZSgpO1xyXG5cdFx0Ly8gXHRcdGlmICghZmlzaC5kZWFkKXtcclxuXHRcdC8vIFx0XHRcdGlmICh0aGlzLmNoZWNrT3ZlcihmcmVjdCwgYnVsbGV0KSl7XHJcblx0XHQvLyBcdFx0XHRcdGZpc2guaHAgLT0gdGhpcy5nZXRCdWxsZXRIYXJkKGJ1bGxldCk7XHJcblx0XHQvLyBcdFx0XHR9XHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHR9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG5cdFx0ICog6I635Y+W5a2Q5by55Lyk5a6zXHJcblx0XHQgKiBAcGFyYW1cdGJ1bGxldFxyXG5cdFx0ICogQHJldHVyblxyXG5cdFx0ICovXHJcblx0XHRwcml2YXRlIGdldEJ1bGxldEhhcmQoYnVsbGV0OkJ1bGxldEZhdGhlcik6bnVtYmVye1xyXG5cdFx0XHR2YXIgdmFsdWU6bnVtYmVyID0gYnVsbGV0LmRhdGFWby5wb3dlciAqIEdsb2JhbC5nZXRJbnN0YW5jZSgpLnNob290UG93ZXI7XHJcblx0XHRcdHZhciByYW46bnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdFx0dmFyIG1pbjpudW1iZXIgPSAyO1xyXG5cdFx0XHR2YXIgbWF4Om51bWJlciA9IDQ7XHJcblx0XHRcdHZhciBiZWk6bnVtYmVyID0gMTtcclxuXHRcdFx0aWYgKHJhbiA+IDAuOSl7XHJcblx0XHRcdFx0YmVpID0gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KVxyXG5cdFx0XHRcdC8vIHZhciBjcml0OkNyaXRVdGlscyA9IG5ldyBDcml0VXRpbHMoYmVpKTtcclxuXHRcdFx0XHQvLyB0aGlzLmFkZENoaWxkKGNyaXQpO1xyXG5cdFx0XHRcdC8vIGNyaXQucG9zKGJ1bGxldC54LCBidWxsZXQueSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiB2YWx1ZSpiZWk7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQ2FuU2hvb3Qodm86QnVsbGV0Vm8pOkJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5jb2luTnVtLnRleHQgLSB2by5wb3dlciA8IDApe1xyXG4gICAgICAgICAgICBDdXN0b21UaXBzLmdldEluc3RhbmNlKCkuQWRkVGlwKHRoaXMsIFwi6IO96YeP5LiN6LazISFcIiwgXCJyaWdodFwiLCB0cnVlLCAxMDAsIDEwMCwgMzAwLCBmYWxzZSwgNjAsIDMpO1xyXG4gICAgICAgICAgICBsYXlhLm1lZGlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQoXCJyZXMvc291bmQvY3JpdC5tcDNcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rpsbxcclxuICAgICAqIEBwYXJhbSBmaXNoTnVtXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlRmlzaChmaXNoTnVtOm51bWJlcil7XHJcbiAgICAgICAgdmFyIGZpc2g6RmlzaEZhdGhlcjtcclxuICAgICAgICB2YXIgcmFuVmFsOm51bWJlcjtcclxuICAgICAgICB2YXIgdHlwZVZhbDpudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8IGZpc2hOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIHJhblZhbCA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgICAgICBpZihyYW5WYWwgPiAwICYmIHJhblZhbCA8PSAwLjkyKXsgICAgICAgLy8wLTVcclxuICAgICAgICAgICAgICAgIHR5cGVWYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmICghdGhpcy5oYXNGaXNoKDEwKSYmIXRoaXMuaGFzRmlzaCgxMSkmJnJhblZhbCA+IDAuOTIgJiYgcmFuVmFsIDw9IDAuOTQpey8vMTDvvIwxMVxyXG4gICAgICAgICAgICAgICAgdHlwZVZhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjU/MTA6MTE7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmICghdGhpcy5oYXNGaXNoKDYpJiYhdGhpcy5oYXNGaXNoKDcpJiZyYW5WYWwgPiAwLjk0ICYmIHJhblZhbCA8PSAwLjk2KXsvLzYuN1xyXG4gICAgICAgICAgICAgICAgdHlwZVZhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjU/Njo3O1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoIXRoaXMuaGFzRmlzaCg5KSYmcmFuVmFsID4gMC45NiAmJiByYW5WYWwgPD0gMC45OCl7Ly8477yMOVxyXG4gICAgICAgICAgICAgICAgdHlwZVZhbCA9IDk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChyYW5WYWwgPiAwLjk4ICYmICF0aGlzLmhhc0Zpc2goOCkpe1xyXG4gICAgICAgICAgICAgICAgdHlwZVZhbCA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlVmFsPT05KXtcclxuICAgICAgICAgICAgICAgIEN1c3RvbVRpcHMuZ2V0SW5zdGFuY2UoKS5BZGRUaXAodGhpcywgXCLmtbflupXlh7rnjrDpsqjpsbzvvIzlh7votKXlroPlj6/ku6XojrflvpflpKfph4/og73ph4/lk6bvvIHvvIFcIiwgXCJ3YXJuXCIsIHRydWUsIDEwMCwgMTAwLCAzMDAsIGZhbHNlLCAxMDAsIDMpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAodHlwZVZhbCA9PSA4KXtcclxuICAgICAgICAgICAgICAgIEN1c3RvbVRpcHMuZ2V0SW5zdGFuY2UoKS5BZGRUaXAodGhpcywgXCLmtbfosZrlh7rnjrDllabvvIHlh7votKXlroPmjonokL3psbzpm7flk6bvvIHpsbzpm7flj6rlrZjlnKgxMOenkumSn++8gVwiLCBcInJpZ2h0XCIsIHRydWUsIDEwMCwgMTAwLCAzMDAsIGZhbHNlLCAxMDAsIDMpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAodHlwZVZhbCA9PSA2KXtcclxuICAgICAgICAgICAgICAgIEN1c3RvbVRpcHMuZ2V0SW5zdGFuY2UoKS5BZGRUaXAodGhpcywgXCLps4TpsbzmnaXkuobvvIHlh7votKXlroPmjonokL3og73ph4/lrp3nrrHlk6bvvIHlrp3nrrHlj6rlrZjlnKgxMOenkumSn++8gVwiLCBcIndhcm5cIiwgdHJ1ZSwgMTAwLCAxMDAsIDMwMCwgZmFsc2UsIDEwMCwgMyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmICh0eXBlVmFsID09IDcpe1xyXG4gICAgICAgICAgICAgICAgQ3VzdG9tVGlwcy5nZXRJbnN0YW5jZSgpLkFkZFRpcCh0aGlzLCBcIua1t+m+n+WHuueOsO+8geWHu+i0peWug+aOieiQveatpuWZqOWinuW8uumBk+WFt++8gVwiLCBcIndhcm5cIiwgdHJ1ZSwgMTAwLCAxMDAsIDMwMCwgZmFsc2UsIDEwMCwgMyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmICh0eXBlVmFsID09IDExKSB7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21UaXBzLmdldEluc3RhbmNlKCkuQWRkVGlwKHRoaXMsIFwi54Gv56y86bG85Ye6546w77yB5Ye76LSl5a6D5o6J6JC96bG86aW177yM6bG86aW15Y+v5Lul5ZC45byV5p2l6bG8576k5ZOm77yBXCIsIFwid2FyblwiLCB0cnVlLCAxMDAsIDEwMCwgMzAwLCBmYWxzZSwgMTAwLCAzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmlzaCA9IEZpc2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuY3JlYXRlRmlzaEJ5SWQodHlwZVZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoZmlzaCk7XHJcbiAgICAgICAgICAgIGZpc2guaW5pdChNYXRoLnJhbmRvbSgpPjAuNT9cInJpZ2h0XCI6XCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICBmaXNoLm9uY2UoRmlzaEZhdGhlci5nZXRJbnN0YW5jZSgpLkZJU0hfREVBRCwgdGhpcywgdGhpcy5maXNoRGVhZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmZpc2hBcnIucHVzaChmaXNoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYXNGaXNoKHZhbDpudW1iZXIpOkJvb2xlYW57XHJcbiAgICAgICAgdmFyIGZpc2g6RmlzaEZhdGhlcjtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuZmlzaEFyci5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgZmlzaCA9IHRoaXMuZmlzaEFycltpXTtcclxuICAgICAgICAgICAgaWYoZmlzaC5maXNoVm8uaWQgPT0gdmFsKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uumYn+W9olxyXG4gICAgICogQHBhcmFtXHRmbGFnIDDlv4MgMeefqeW9oiAy6I+x5b2iIDPlnIblvaJcclxuICAgICAqIEBwYXJhbVx0dHlwZSDpsbznsbvlnotcclxuICAgICAqIEBwYXJhbVx0ZGlycyDmuLjlkJEgbGVmdCDlkJHlt6bmuLhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVGaXNoT3JkZXIoZmxhZzpudW1iZXIgPSAwLHR5cGU6bnVtYmVyPTAsZGlyczpzdHJpbmc9XCJsZWZ0XCIpe1xyXG4gICAgICAgIHZhciBwYXRoQXJyOkFycmF5PGFueT49W107XHJcbiAgICAgICAgdmFyIGZpc2g6RmlzaEZhdGhlcjtcclxuICAgICAgICB2YXIgcDpQb2ludDtcclxuICAgICAgICB2YXIgbmV3cDpQb2ludDtcclxuICAgICAgICB2YXIgeGl1eDpudW1iZXI9MDtcclxuICAgICAgICB2YXIgeGl1eTpudW1iZXI9MDtcclxuICAgICAgICBzd2l0Y2goZmxhZykge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBwYXRoQXJyID0gRmlzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5oZWFydFBhdGhEb3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJzID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSAtNjAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSBHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbFdpZHRoKzYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeGl1eSA9IDQwMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBwYXRoQXJyID0gRmlzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZWN0UGF0aERvdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcnMgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGl1eCA9IC02MDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGl1eCA9IEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsV2lkdGgrNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB4aXV5ID0gMjUwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHBhdGhBcnIgPSBGaXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJob21iUGF0aERvdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcnMgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGl1eCA9IC02MDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGl1eCA9IEdsb2JhbC5nZXRJbnN0YW5jZSgpLnRvdGFsV2lkdGgrNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB4aXV5ID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHBhdGhBcnIgPSBGaXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNpcmNsZVBhdGhEb3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJzID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSAtNDAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHhpdXggPSBHbG9iYWwuZ2V0SW5zdGFuY2UoKS50b3RhbFdpZHRoKzQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeGl1eSA9IDM1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhdGhBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcCA9IHBhdGhBcnJbaV07XHJcbiAgICAgICAgICAgIG5ld3AgPSBuZXcgUG9pbnQocC54ICsgeGl1eCwgcC55ICsgeGl1eSk7XHJcbiAgICAgICAgICAgIGZpc2ggPSBGaXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNyZWF0ZUZpc2hCeUlkKHR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGZpc2gpO1xyXG4gICAgICAgICAgICBmaXNoLmluaXQoZGlycyxuZXdwLHRydWUpO1xyXG4gICAgICAgICAgICBmaXNoLm9uY2UoRmlzaEZhdGhlci5nZXRJbnN0YW5jZSgpLkZJU0hfREVBRCwgdGhpcywgdGhpcy5maXNoRGVhZCk7XHJcbiAgICAgICAgICAgIGZpc2gub25jZShGaXNoRmF0aGVyLmdldEluc3RhbmNlKCkuRklTSF9ERUFEX1NFTEYsIHRoaXMsIHRoaXMuZmlzaERlYWRTZWxmKTtcclxuICAgICAgICAgICAgdGhpcy5maXNoQXJyLnB1c2goZmlzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py65Yib5bu66bG8576kXHJcbiAgICAgKiBAcGFyYW1cdGNvdW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlT3JkZXIoY291bnQ6bnVtYmVyID0gNik6dm9pZCB7XHJcbiAgICAgICAgbGF5YS5tZWRpYS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL21maXNoLm1wM1wiKTtcclxuICAgICAgICBDdXN0b21UaXBzLmdldEluc3RhbmNlKCkuQWRkVGlwKHRoaXMsIFwi6bG8576k5p2l6KKtISzpsbznvqTkuK3nmoTpsbzmnInlj4zlgI3lpZblirHlk6bvvIFcIiwgXCJyaWdodFwiLCB0cnVlLCAxMDAsIDEwMCwgMzAwLCBmYWxzZSwgMTAwLCAzKTtcclxuICAgICAgICB2YXIgdGltZTpudW1iZXIgPSAzMDAwO1xyXG4gICAgICAgIHZhciBkaXI6U3RyaW5nID0gTWF0aC5yYW5kb20oKSA+IDAuNT9cInJpZ2h0XCI6XCJsZWZ0XCI7XHJcbiAgICAgICAgdmFyIHRpbWVyOmxheWEudXRpbHMuVGltZXI7XHJcbiAgICAgICAgdmFyIGZpc2h0eXBlOm51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aW1lciA9IG5ldyBsYXlhLnV0aWxzLlRpbWVyKCk7XHJcbiAgICAgICAgICAgIHRpbWVyLm9uY2UodGltZStpICogMzAwMCwgdGhpcywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZpc2hPcmRlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSwgZmlzaHR5cGUsZGlyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmaXNoIGRlYWRcclxuICAgICAqIEBwYXJhbVx0ZmlzaFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGZpc2hEZWFkKGZpc2g6RmlzaEZhdGhlcik6dm9pZHtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy5maXNoQXJyLmluZGV4T2YoZmlzaCk7XHJcbiAgICAgICAgdGhpcy5maXNoQXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/pmJ/liJfkuK3nmoTpsbwg5aWW5Yqx57+75YCNIOadgOatu+mYn+WIl+S4reeahOmxvOS4jeWIm+W7uuaWsOmxvFxyXG4gICAgICAgIHZhciB2YWw6bnVtYmVyID0gMTtcclxuICAgICAgICBpZiAoZmlzaC5pc0luT3JkZXIpIHtcclxuICAgICAgICAgICAgdmFsID0gMjtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRmlzaCgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29pbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jcmVhdGVNb3JlQ29pbihmaXNoLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvaW5OdW0udGV4dCA9IE51bWJlcih0aGlzLmNvaW5OdW0udGV4dCkgKyBmaXNoLmZpc2hWby5zY29yZSp2YWw7XHJcbiAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuZ2V0UG93ZXJOdW0gKz0gZmlzaC5maXNoVm8uc2NvcmUqdmFsO1xyXG4gICAgICAgIC8vIGx2bFNldCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5o6J6JC96bG86Zu3XHJcbiAgICAgICAgaWYgKGZpc2guZmlzaFZvLmlkID09IDgpe1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvb2xzKDEsZmlzaC54LGZpc2gueSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKGZpc2guZmlzaFZvLmlkID09IDYpey8v5o6J6JC95a6d566xXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9vbHMoMixmaXNoLngsZmlzaC55KTtcclxuICAgICAgICB9ZWxzZSBpZiAoZmlzaC5maXNoVm8uaWQgPT0gNyl7Ly/mjonokL3lop7lvLrpgZPlhbdcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb29scygzLGZpc2gueCxmaXNoLnkpO1x0XHJcbiAgICAgICAgfWVsc2UgaWYgKGZpc2guZmlzaFZvLmlkID09IDExKSB7Ly/mjonokL3psbzppbVcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb29scyg0LGZpc2gueCxmaXNoLnkpO1x0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu66YGT5YW3XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSB4eCBcclxuICAgICAqIEBwYXJhbSB5eSBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVUb29scyh0eXBlOm51bWJlciwgeHg6bnVtYmVyLCB5eTpudW1iZXIpe1xyXG4gICAgICAgIHZhciB0b29sOlRvb2xzID0gVG9vbHNNYW5hZ2VyLmdldEluc3RhbmNlKCkuY3JlYXRlVG9vbEJ5VHlwZSh0eXBlKTtcclxuICAgICAgICB0b29sLm9uY2UoVG9vbHMuZ2V0SW5zdGFuY2UoKS5ERUFEX09WRVIsIHRoaXMsIHRoaXMuZGVhZEFuT3Zlcik7XHJcbiAgICAgICAgdG9vbC5wb3MoeHgsIHl5KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRvb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVhZEFuT3Zlcih0b29sOlRvb2xzKXtcclxuICAgICAgICBpZiAodG9vbC50eXBlID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmtpbGxBbGxGaXNoKCk7XHJcbiAgICAgICAgICAgIC8v6Zeq5bGPXHJcbiAgICAgICAgICAgIHZhciB0aW1lbGluZTpUaW1lTGluZT1uZXcgVGltZUxpbmUoKTtcclxuICAgICAgICAgICAgdGltZWxpbmVcclxuICAgICAgICAgICAgLmFkZExhYmVsKFwicmlnaHRcIiwgMCkudG8odGhpcywge2FscGhhOjAuMX0sIDgwKVxyXG4gICAgICAgICAgICAuYWRkTGFiZWwoXCJsZWZ0XCIsMCkudG8odGhpcywge2FscGhhOjF9LCA4MClcclxuICAgICAgICAgICAgLmFkZExhYmVsKFwicmlnaHQyXCIsIDApLnRvKHRoaXMsIHthbHBoYTowLjF9LCA4MClcclxuICAgICAgICAgICAgLmFkZExhYmVsKFwibGVmdDJcIiwgMCkudG8odGhpcywge2FscGhhOjF9LCA4MClcclxuICAgICAgICAgICAgLmFkZExhYmVsKFwicmlnaHQzXCIsIDApLnRvKHRoaXMsIHthbHBoYTowLjF9LCA4MClcclxuICAgICAgICAgICAgLmFkZExhYmVsKFwibGVmdDNcIiwwKS50byh0aGlzLCB7YWxwaGE6MX0sIDgwKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGltZWxpbmUucGxheSgwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRpbWVsaW5lLm9uY2UoTGF5YS5FdmVudC5DT01QTEVURSwgdGhpcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRpbWVsaW5lLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL2Jvb20ud2F2XCIpO1xyXG4gICAgICAgIH1lbHNlIGlmICh0b29sLnR5cGUgPT0gMil7Ly/lrp3nrrFcclxuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuSVNQQVVTRSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb2luTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkZENvaW4oNTAwLCBcImNvaW5cIiwgdG9vbC54LCB0b29sLnksIHRoaXMpO1xyXG4gICAgICAgICAgICBHbG9iYWwuZ2V0SW5zdGFuY2UoKS5nZXRQb3dlck51bSArPSA1MDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29pbk51bS50ZXh0ID0gTnVtYmVyKHRoaXMuY29pbk51bS50ZXh0KSArIDUwMDtcclxuICAgICAgICB9ZWxzZSBpZiAodG9vbC50eXBlID09IDMpey8v5q2m5Zmo6YGT5YW3XHJcbiAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLklTUEFVU0UgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9zdGFydEVmZmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbm5vbi5zdHJvbmdUaW1lID0gMjA7XHJcbiAgICAgICAgICAgIEN1c3RvbVRpcHMuZ2V0SW5zdGFuY2UoKS5BZGRUaXAodGhpcywgXCLmrablmajlop7lvLrvvIHvvIFcIiwgXCJ3YXJuXCIsIHRydWUsIDEwMCwgMTAwLCAzMDAsIGZhbHNlLCAxMDAsIDMpO1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL3NvdW5kL2J1bGxldF9wb3dlci5tcDNcIik7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRvb2wudHlwZSA9PSA0KSB7Ly/psbzppbVcclxuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkuSVNQQVVTRSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU9yZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga2lsbEFsbEZpc2goKXtcclxuICAgICAgICB2YXIgZmlzaDpGaXNoRmF0aGVyO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5maXNoQXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBmaXNoID0gdGhpcy5maXNoQXJyW2ldO1xyXG4gICAgICAgICAgICBmaXNoLmhwID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpsbzoh6rlt7HmrbvkuqFcclxuICAgICAqIEBwYXJhbVx0ZmlzaFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGZpc2hEZWFkU2VsZihmaXNoOkZpc2hGYXRoZXIpOnZvaWQge1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLmZpc2hBcnIuaW5kZXhPZihmaXNoKTtcclxuICAgICAgICB0aGlzLmZpc2hBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL0dhbWVcIlxyXG5pbXBvcnQgVHdlZW4gPSBsYXlhLnV0aWxzLlR3ZWVuO1xyXG5pbXBvcnQgRWFzZSA9IGxheWEudXRpbHMuRWFzZTtcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdWaWV3IGV4dGVuZHMgdWkuTG9hZGluZ1ZpZXdVSXtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkxvYWRpbmdWaWV3O1xyXG4gICAgcHJpdmF0ZSBzdGFydCA9IHRoaXMuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFydFwiKSBhcyBMYXlhLkJ1dHRvbjtcclxuICAgIHByaXZhdGUgZG90ID0gdGhpcy5nZXRDaGlsZEJ5TmFtZShcImRvdFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgcHJpdmF0ZSB0dzpudW1iZXIgPSAzNjA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6TG9hZGluZ1ZpZXd7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBMb2FkaW5nVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgTGQ6TGF5YS5TcHJpdGU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc3RhcnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnQub25jZShMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLnN0YXJ0SGFuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydEhhbmQoKXtcclxuICAgICAgICBUd2Vlbi50byh0aGlzLCB7YWxwaGE6MH0sIDEyMCwgRWFzZS5zdHJvbmdPdXQsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ldmVudChcInN0YXJ0Z2FtZVwiKVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKHZhbDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuZG90LndpZHRoID0gdmFsICogdGhpcy50dztcclxuICAgICAgICBpZih2YWwgPj0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
