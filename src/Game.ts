import { LoadingView } from "./view/LoadingView";
import { ui } from "./ui/layaMaxUI";
import { GameView } from "./view/GameView"
import Loader = Laya.Loader;
import { AnalysisXML } from "./data/AnalysisXML";
import { Global } from "./Global";
export class Game{
	private static instance:Game;
	public Ld:LoadingView;
    public static getInstance():Game {
        if(this.instance == null){
            this.instance = new Game();
        }
        return this.instance;
    }
    private res:Array<any> = [
        {url:"res/atlas/img.atlas", type:Laya.Loader.ATLAS},
        {url:"res/atlas/img.png", type:Laya.Loader.IMAGE},
        {url:"res/atlas/load.atlas", type:Laya.Loader.ATLAS},
        {url:"res/atlas/load.png", type:Laya.Loader.IMAGE},
        {url:"load/lading_bg1.png", type:Laya.Loader.IMAGE}
    ]
    constructor(){
        Laya.init(1280, 720, Laya.WebGL);

        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.screenMode = "horizontal";

        Laya.loader.load(this.res, Laya.Handler.create(this, this.onLoaded));
    }


    onLoaded(){
		this.Ld = new LoadingView();
		Laya.stage.addChild(this.Ld);
		this.Ld.once("startgame", this, this.startGame);
		Laya.SoundManager.playMusic("./res/sound/HallScene.mp3");

        this.loadOtherAsset();
    }

    private loadOtherAsset(){
        var assets:Array<any> = [
            ///加载子弹素材
				{url: "res/atlas/fish/bullet/bullet1.atlas",type:Laya.Loader.ATLAS},
				{url: "res/atlas/fish/bullet/bullet2.atlas",type:Laya.Loader.ATLAS},
				{url: "res/atlas/fish/bullet/bullet3.atlas",type:Laya.Loader.ATLAS},
				{url: "res/atlas/fish/bullet/bullet4.atlas",type:Laya.Loader.ATLAS},
				{url: "res/atlas/fish/bullet/bullet5.atlas",type:Laya.Loader.ATLAS},
				{url: "res/atlas/fish/bullet/bullet6.atlas",type:Laya.Loader.ATLAS},
				{url: "res/atlas/fish/bullet/bullet7.atlas",type:Laya.Loader.ATLAS},
				{url: "res/atlas/fish/bullet/bullet8.atlas",type:Laya.Loader.ATLAS},
                {url: "res/atlas/fish/bullet/bullet9.atlas",type:Laya.Loader.ATLAS},
                
            ///鱼动画资源
				{url: "res/atlas/fish/fishimg/fish1/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish1/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish2/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish2/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish3/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish3/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish4/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish4/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish5/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish5/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish6/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish6/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish7/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish7/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish8/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish8/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish9/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish9/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish10/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish10/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish11/live.atlas", type:Laya.Loader.ATLAS },
				{url: "res/atlas/fish/fishimg/fish11/dead.atlas", type:Laya.Loader.ATLAS },
				
				{url: "res/atlas/fish/fishimg/fish12/live.atlas", type:Laya.Loader.ATLAS },
                {url: "res/atlas/fish/fishimg/fish12/dead.atlas", type:Laya.Loader.ATLAS },
                
                //tips
				{url: "res/atlas/fish/tip.atlas", type:Loader.ATLAS },
				
				//大炮
				{url: "res/atlas/fish/cannon/cannon1.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/cannon/cannon2.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/cannon/cannon3.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/cannon/cannon4.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/cannon/cannon5.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/cannon/cannon6.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/cannon/cannon7.atlas", type:Loader.ATLAS },
				
				//其他素材
				{url: "res/atlas/fish/img.atlas", type:Loader.ATLAS },
				
				//海藻
				{url: "res/atlas/fish/seaweed/seaweed1.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/seaweed/seaweed2.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/seaweed/seaweed3.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/seaweed/seaweed4.atlas", type:Loader.ATLAS },
				
				//金币
				{url: "res/atlas/fish/money/coin.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/money/silver.atlas", type:Loader.ATLAS },
				
				//道具
				//炸弹
				{url: "res/atlas/fish/tools/boom.atlas", type:Loader.ATLAS },
				{url: "res/atlas/fish/tools.atlas", type:Loader.ATLAS },
				
				//特效
				{url: "res/atlas/fish/effect/flash.atlas", type:Loader.ATLAS },
				
				///鱼数据xml
				{url: "res/xml/fish.xml",type:Loader.XML},
				{url: "res/xml/bullet.xml",type:Loader.XML},
		]
		Laya.loader.load(assets, Laya.Handler.create(this, this.loadComs), Laya.Handler.create(this, this.loadProgress,null,false));
	}
	
	private loadComs(){
		AnalysisXML.getInstance().analysisFishData();
		AnalysisXML.getInstance().analysisBulletData();
	}

	private loadProgress(val:number){
		if(this.Ld){
			this.Ld.setData(val);
		}
	}

    public startGame(){
        Laya.stage.removeChildren();
        var Gv:GameView = new GameView();
		Laya.stage.addChild(Gv);
		Laya.SoundManager.playMusic("./res/sound/FishMatrix.mp3");
    }
}
var game:Game = new Game();