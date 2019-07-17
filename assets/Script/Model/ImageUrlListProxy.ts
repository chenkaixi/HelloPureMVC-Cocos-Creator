import ImageUrlVO from "./VO/ImageUrlVO";

export class ImageUrlListProxy extends puremvc.Proxy implements puremvc.IProxy {
    public static NAME: string = "ImageUrlListProxy";
    public static URL_LOAD_COMPLETE: string = "URL_LOAD_COMPLETE";

    public constructor(proxyName: string = null, data: Object = null) {
        super(proxyName, name);
    }

    public loadUrlList(): void {
        let data = new Array();
        //push六张图片的Url
        data.push(new ImageUrlVO("word_1", "蚂蚁"));
        data.push(new ImageUrlVO("word_2", "奶牛"));
        data.push(new ImageUrlVO("word_3", "汽车"));
        data.push(new ImageUrlVO("word_4", "小猫"));
        data.push(new ImageUrlVO("word_5", "小狗"));
        data.push(new ImageUrlVO("word_6", "鸡蛋"));

        //通知image Url已经全部得到了
        if (data == null) console.log("data is null");
        // console.log(data);
        this.sendNotification(ImageUrlListProxy.URL_LOAD_COMPLETE, data);
    }
}