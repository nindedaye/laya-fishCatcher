import { CannonFather } from "./CannonFather";

export class CannonManager{
    private cannon:CannonFather;
    private static instance:CannonManager;
    public static getInstance():CannonManager{
        if(this.instance == null){
            this.instance = new CannonManager();
        }
            return this.instance;
    }
    //大炮正常
    public CANNON_NORMAL_1:string = "cannon_normal_1";
    public CANNON_NORMAL_2:string = "cannon_normal_2";
    public CANNON_NORMAL_3:string = "cannon_normal_3";
    public CANNON_NORMAL_4:string = "cannon_normal_4";
    public CANNON_NORMAL_5:string = "cannon_normal_5";
    public CANNON_NORMAL_6:string = "cannon_normal_6";
    public CANNON_NORMAL_7:string = "cannon_normal_7";
    //大炮射击
    public CANNON_SHOOT_1:string = "cannon_shoot_1";
    public CANNON_SHOOT_2:string = "cannon_shoot_2";
    public CANNON_SHOOT_3:string = "cannon_shoot_3";
    public CANNON_SHOOT_4:string = "cannon_shoot_4";
    public CANNON_SHOOT_5:string = "cannon_shoot_5";
    public CANNON_SHOOT_6:string = "cannon_shoot_6";
    public CANNON_SHOOT_7:string = "cannon_shoot_7";
    
    //闪电特效
    public EFFECT_FLASH:string = "effect_flash";

    constructor(){}

    public cacheAnimation(){
        ///大炮 1
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon1/cannon10001.png"],this.CANNON_NORMAL_1);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon1.atlas", this.CANNON_SHOOT_1);
        
        ///大炮 2
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon2/cannon20001.png"],this.CANNON_NORMAL_2);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon2.atlas", this.CANNON_SHOOT_2);
        
        ///大炮 3
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon3/cannon30001.png"],this.CANNON_NORMAL_3);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon3.atlas", this.CANNON_SHOOT_3);
        
        ///大炮 4
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon4/cannon40001.png"],this.CANNON_NORMAL_4);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon4.atlas", this.CANNON_SHOOT_4);
        
        ///大炮 5
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon5/cannon50001.png"],this.CANNON_NORMAL_5);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon5.atlas", this.CANNON_SHOOT_5);
        
        ///大炮 6
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon6/cannon60001.png"],this.CANNON_NORMAL_6);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon6.atlas", this.CANNON_SHOOT_6);
        
        ///大炮 7
        laya.display.Animation.createFrames(["../laya/assets/cannon/cannon7/cannon70001.png"],this.CANNON_NORMAL_7);
        laya.display.Animation.createFrames("res/atlas/fish/cannon/cannon7.atlas", this.CANNON_SHOOT_7);
        
        //闪电特效
        laya.display.Animation.createFrames("res/atlas/fish/effect/flash.atlas", this.EFFECT_FLASH);
    }

    public createCannon(container:Laya.Sprite, xx?:number, yy?:number):CannonFather{
        if(!this.cannon){
            this.cannon = new CannonFather();
            container.addChild(this.cannon);
            this.cannon.pos(xx, yy);
        }
        return this.cannon;
    }
}