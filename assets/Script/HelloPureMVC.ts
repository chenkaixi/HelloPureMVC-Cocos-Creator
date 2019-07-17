import ApplicationFacade from "./ApplicationFacade"
const {ccclass, property} = cc._decorator;

@ccclass
export class HelloPureMVC extends cc.Component {

    @property(cc.Label)
    public label_name: cc.Label = null;

    @property(cc.Button)
    public btn_next:cc.Button = null;

    @property(cc.Button)
    public btn_prev:cc.Button = null;

    @property(cc.Sprite)
    public imageLoader:cc.Sprite = null;

    

    start () {
        // cc.director.loadScene("HelloPureMVC");
        // new ApplicationFacade(this.node); 
        // console.log(this.node);
        ApplicationFacade.getInstance().startup(this);
    }
}


