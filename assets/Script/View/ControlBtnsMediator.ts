export default class ControlBtnsMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "ControlBtnsMediator";
    public static NEXT_IMAGE: string = "next_image";
    public static PREV_IMAGE: string = "prev_image";


    public constructor(mediatorName: string = null, viewComponent: any = null) {
        super(mediatorName, viewComponent);
        // this.btn_next = viewComponent.getChildByName("btn_next").getComponent(cc.Button);
        viewComponent.btn_next.node.on('click',this.onClickNext,this);

        // this.btn_prev = viewComponent.getChildByName("btn_prev").getComponent(cc.Button);
        viewComponent.btn_prev.node.on('click',this.onClickPrev,this);
    }

    private onClickPrev(evt: cc.Event) {
        this.sendNotification(ControlBtnsMediator.PREV_IMAGE);
    }

    private onClickNext(evt: cc.Event) {
        this.sendNotification(ControlBtnsMediator.NEXT_IMAGE);
    }

}
