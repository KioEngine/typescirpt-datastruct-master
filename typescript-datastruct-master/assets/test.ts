import { DataStruct_Array } from "./DataStruct/DataStruct_Array";

const { ccclass, property } = cc._decorator;

@ccclass
export class NewScript extends cc.Component {

    start() {
        //测试入口
        let data: DataStruct_Array<number> = new DataStruct_Array(10);
        console.log(data);
    }

}
