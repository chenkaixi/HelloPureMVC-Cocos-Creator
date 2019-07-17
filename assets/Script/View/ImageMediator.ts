import { ImageUrlListProxy } from "../Model/ImageUrlListProxy";
import ControlBtnsMediator from "./ControlBtnsMediator";
import ImageUrlVO from "../Model/VO/ImageUrlVO";

export default class ImageMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "ImageMediator";
    private imageArray: Array<ImageUrlVO> = null;
    private currentIndex: number = -1;

    private label_name: cc.Label;
    private imageLoader: cc.Sprite;
    public constructor(mediatorName: string = null, viewComponent: any = null) {
        super(mediatorName, viewComponent);
        this.label_name = viewComponent.label_name;
        this.imageLoader = viewComponent.imageLoader;
    }

    /**
    当用View注册Mediator时，
    Mediator的listNotificationInterests方法会被调用，
    以数组形式返回该Mediator对象所关心的所有Notification之后，
    当系统其它角色发出同名的Notification时，
    关心这个Notification的Mediator
    都会调用handleNotification方法将Notification以参数传递到方法。
    */
    public listNotificationInterests(): Array<string> {
        //返回感兴趣的notification
        return [
            ImageUrlListProxy.URL_LOAD_COMPLETE,
            ControlBtnsMediator.NEXT_IMAGE,
            ControlBtnsMediator.PREV_IMAGE
        ];
    }

    public handleNotification(notification: puremvc.INotification): void {
        let self = this;
        switch (notification.getName()) {
            case ImageUrlListProxy.URL_LOAD_COMPLETE:
                this.imageArray = notification.getBody();
                if (this.imageArray) {
                    this.label_name.string = this.imageArray[0].word;
                    cc.loader.loadRes(`${this.imageArray[0].name}`, cc.SpriteFrame, function (err, spriteFrame) {
                        self.imageLoader.spriteFrame = spriteFrame;
                    });
                    this.currentIndex = 0;
                } else {
                    console.log("没有得到图片链接", "错误");
                }
                break;
            case ControlBtnsMediator.NEXT_IMAGE:
                if (this.currentIndex == -1) break;
                if (this.currentIndex >= this.imageArray.length - 1) {
                    this.currentIndex = -1;
                }
                this.label_name.string = this.imageArray[this.currentIndex + 1].word;

                
                cc.loader.loadRes(`${this.imageArray[this.currentIndex + 1].name}`, cc.SpriteFrame, function (err, spriteFrame) {
                    self.imageLoader.spriteFrame = spriteFrame;
                });
                this.currentIndex++;

                break;
            case ControlBtnsMediator.PREV_IMAGE:
                if (this.currentIndex == -1) break;
                if (this.currentIndex == 0) {
                    this.currentIndex = this.imageArray.length
                }
                this.label_name.string = this.imageArray[this.currentIndex - 1].word;
                cc.loader.loadRes(`${this.imageArray[this.currentIndex - 1].name}`, cc.SpriteFrame, function (err, spriteFrame) {
                    self.imageLoader.spriteFrame = spriteFrame;
                });
                this.currentIndex--;

                break;
            default:
                break;
        }
    }
}