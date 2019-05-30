import { Dictionary } from "./Dictionary"
import { FishVo } from "./FishVo";
import { BulletVo } from "./BulletVo";
export class DataProxy{
    private static instance:DataProxy = null;
    public fishDataDic:Dictionary = new Dictionary();
    public bulletDataDic:Dictionary = new Dictionary();
    public static getInstance():DataProxy
    {
        if (!this.instance) {
            this.instance = new DataProxy();
        }
        return this.instance;
    }
    constructor(){};

    //鱼相关数据
    public getDataById(id:number):FishVo {
        return this.fishDataDic.get(id);
    }

    //bullet data
    public getDataByType(type:number):BulletVo {
        return this.bulletDataDic.get(type);
    }
        
}