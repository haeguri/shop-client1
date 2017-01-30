# Radio

![](./doc/screen1.png "img1" "width:50%;float:left;")



![](./doc/screen2.png "img2" "width:50%;float:left;")

####[데모 영상](https://www.youtube.com/watch?v=RFWTNNT7i5M)


### 모듈 구조
	 radio
       |- radio.service
          |- RadioAuth
          |- Brand
          |- Cart
          |- Channel
          |- Shop
          |- Follow
          |- Like
       |- radio.controller
          |- MasterCtrl
             |- LoginCtrl
             |- SignupCtrl
             |- TabsCtrl
                |- MainCtrl
                |- MyCodyCtrl
                |- MyBrandCtrl
                |- MyProductCtrl
            	|- ShopIntroCtrl
                |- BrandIntroCtrl [brand tab]
	            |- BrandDetailCtrl
                |- ProductDetailCtrl
                |- ChannelDetailCtrl
                |- ChannelCodyDetailCtrl
				|- PrivateInfoCtrl
                |- PrivateCodyCtrl
                |- PrivateChannelCtrl
                |- PrivateBrandCtrl
                |- PrivateProductCtrl
