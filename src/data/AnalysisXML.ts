import { FishVo } from "./FishVo";
import { DataProxy } from "./DataProxy";
import { BulletVo } from "./BulletVo";
export class AnalysisXML{
    private static instance:AnalysisXML;
    public static getInstance():AnalysisXML{
        if(this.instance == null){
            this.instance = new AnalysisXML();
        }
        return this.instance;
    }
    constructor(){

    }
    public analysisFishData(){
        var fishList:Array<any> = [
            {"name":"小丑鱼","id":0,"liveUrl":"fish\fishimg\fish12\live.atlas","deadUrl":"fish\fishimg\fish12\dead.atlas","grade":1,"blood_min":2,"blood_Max":2,"score":5,"speed":4,"hitValue":1},
            {"name":"蜻蜓鱼","id":1,"liveUrl":"fish\fishimg\fish8\live.atlas","deadUrl":"fish\fishimg\fish8\dead.atlas","grade":1,"blood_min":4,"blood_Max":4,"score":9,"speed":4,"hitValue":1},
            {"name":"黄鱼","id":2,"liveUrl":"fish\fishimg\fish5\live.atlas","deadUrl":"fish\fishimg\fish5\dead.atlas","grade":1,"blood_min":5,"blood_Max":10,"score":8,"speed":5,"hitValue":1},
            {"name":"热带鱼","id":3,"liveUrl":"fish\fishimg\fish9\live.atlas","deadUrl":"fish\fishimg\fish9\dead.atlas","grade":1,"blood_min":4,"blood_Max":12,"score":20,"speed":5,"hitValue":1},
            {"name":"金枪鱼","id":4,"liveUrl":"fish\fishimg\fish7\live.atlas","deadUrl":"fish\fishimg\fish7\dead.atlas","grade":1,"blood_min":20,"blood_Max":40,"score":30,"speed":3,"hitValue":10},
            {"name":"水母","id":5,"liveUrl":"fish\fishimg\fish10\live.atlas","deadUrl":"fish\fishimg\fish10\dead.atlas","grade":2,"blood_min":20,"blood_Max":30,"score":30,"speed":2,"hitValue":10},
            {"name":"鳄鱼","id":6,"liveUrl":"fish\fishimg\fish2\live.atlas","deadUrl":"fish\fishimg\fish2\dead.atlas","grade":3,"blood_min":200,"blood_Max":300,"score":50,"speed":8,"hitValue":20},
            {"name":"大乌龟","id":7,"liveUrl":"fish\fishimg\fish11\live.atlas","deadUrl":"fish\fishimg\fish11\dead.atlas","grade":3,"blood_min":300,"blood_Max":400,"score":60,"speed":1.5,"hitValue":20},
            {"name":"海豚","id":8,"liveUrl":"fish\fishimg\fish4\live.atlas","deadUrl":"fish\fishimg\fish4\dead.atlas","grade":5,"blood_min":450,"blood_Max":600,"score":250,"speed":1,"hitValue":20},
            {"name":"鲸鱼","id":9,"liveUrl":"fish\fishimg\fish6\live.atlas","deadUrl":"fish\fishimg\fish6\dead.atlas","grade":4,"blood_min":400,"blood_Max":500,"score":200,"speed":0.5,"hitValue":50},
            {"name":"海胆鱼","id":10,"liveUrl":"fish\fishimg\fish3\live.atlas","deadUrl":"fish\fishimg\fish3\dead.atlas","grade":4,"blood_min":90,"blood_Max":230,"score":45,"speed":1,"hitValue":5},
            {"name":"灯笼鱼","id":11,"liveUrl":"fish\fishimg\fish1\live.atlas","deadUrl":"fish\fishimg\fish1\dead.atlas","grade":4,"blood_min":100,"blood_Max":200,"score":40,"speed":1,"hitValue":5}
        ]

        for (var i:number = 0; i < fishList.length; i++)
			{
				var node:any = fishList[i];
				var fishVo = new FishVo;		
                fishVo.name=node["name"];
                fishVo.id=node["id"];
                fishVo.liveUrl=node["liveUrl"];
                fishVo.deadUrl=node["deadUrl"];
                fishVo.grade=node["grade"];
                fishVo.blood_min=node["blood_min"];
                fishVo.blood_Max=node["blood_Max"];
                fishVo.score=node["score"];
                fishVo.speed=node["speed"];
                fishVo.hitValue=node["hitValue"];
                DataProxy.getInstance().fishDataDic.set(fishVo.id, fishVo);    
        }
    }

    public  analysisBulletData():void {
        var bulletList:Array<any> = [
            {"type":1, "powerRadius":10, "boomRadius":20, "speed":15, "power":1},
            {"type":2, "powerRadius":10, "boomRadius":75, "speed":15, "power":2},
            {"type":3, "powerRadius":10, "boomRadius":75, "speed":15, "power":3},
            {"type":4, "powerRadius":10, "boomRadius":75, "speed":15, "power":4},
            {"type":5, "powerRadius":10, "boomRadius":75, "speed":15, "power":5},
            {"type":6, "powerRadius":10, "boomRadius":75, "speed":15, "power":6},
            {"type":7, "powerRadius":10, "boomRadius":75, "speed":15, "power":7},
        ]
        for (var i:number = 0; i < bulletList.length; i++)
        {
            var node:any = bulletList[i];
            var bulletVo = new BulletVo();
            bulletVo.type = node["type"];
            bulletVo.powerRadius = node["powerRadius"];
            bulletVo.boomRadius = node["boomRadius"];
            bulletVo.speed = node["speed"];
            bulletVo.power = node["power"];
            DataProxy.getInstance().bulletDataDic.set(bulletVo.type, bulletVo);
        }
    }
}