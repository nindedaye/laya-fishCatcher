import Animation = laya.display.Animation;
import SoundManager = laya.media.SoundManager;
import Pool = laya.utils.Pool;
import { Tools } from "./Tools";
export class ToolsManager{
    private static instance:ToolsManager;
    public static getInstance():ToolsManager{
        if(!this.instance){
            this.instance = new ToolsManager;
        }
        return this.instance;
    }

    //动画标识
    //鱼雷
    public BOMB_NORMAL:string = "bomb_normal";
    public BOMB_BOOM:string = "bomb_boom";
    //宝箱
    public BOX_NORMAL:string = "box_normal";
    public BOX_OPEN:string = "box_open";
    //力量
    public POWER_NORMAL:string = "power_normal";
    public POWER_OPEN:string = "power_open";
    //鱼饵
    public FOOD_NORMAL:string = "food_normal";
    public FOOD_EAT:string = "food_eat";
    
    //类型
    public TYPE_BOOM:number = 1;
    public TYPE_BOX:number = 2;
    public TYPE_POWER:number = 3;
    public TYPE_Food:number = 4;
    
    //道具集合
    public toolArr:Array<any> = [];
    constructor(){};

    /**
     * 缓存动画
     */
    public cacheAnimation(){
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
    }

    /**
     * 创建
     * @param	type
     * @return
     */
    public createToolByType(type:number):Tools{
        var tool:Tools = Pool.getItemByClass(""+type, Tools);
        switch(type){
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
        tool.once(Tools.getInstance().DEAD_OVER, this, this.deadAnOver);
        tool.once(Tools.getInstance().DEADED, this, this.deadedOver);
        tool.once(Tools.getInstance().DEAD_SELF, this, this.deadedSelfOver);
        
        tool.init();
        
        this.toolArr.push(tool);
        SoundManager.playSound("res/sound/tool.mp3");
        return tool;
    }

    /**
     * 死亡动画结束
     * @param tools 
     */
    public deadAnOver(tools:Tools){
        var index:number = this.toolArr.indexOf(tools);
        this.toolArr.splice(index, 1);
    }

    public deadedOver(tools:Tools){

    }

    /**
     * 自毁结束
     * @param tools 
     */
    public deadedSelfOver(tools:Tools){
        var index:number = this.toolArr.indexOf(tools);
        this.toolArr.splice(index, 1);
    }

    public recover(tool:Tools){
        tool.removeSelf();
        Pool.recover(""+tool.type, tool);
    }
}