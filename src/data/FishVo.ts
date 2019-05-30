export class FishVo{
    public id:number = 0;//id
    public name:string = "";//鱼名字
    public grade:number = 0;//等级
    public score:number = 0;//得分
    public speed:number = 0;//速度
    public blood_min:number = 0 ;//最小血
    public blood_Max:number = 0;//最大血
    public liveUrl:string = "";//游动动画路径
    public deadUrl:string = "";//死亡动画路径
    public hitValue:number = 0;//碰撞区域修正值
    
    public fishInfo:string = "";//缓存标识
    public leveAn:string = "";//离开动画
    public deadAn:string = "";//死亡动画
}