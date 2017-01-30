# Radio

<img src="./doc/screen1.png" width="50%" style="box-sizing:border-box;float:left;border:solid 1px black;" alt="screen-1"/><img src="./doc/screen2.png" width="50%" style="box-sizing:border-box;border:solid 1px black;float:left;" alt="screen-2"/>

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
                |- BrandIntroCtrl
	            |- BrandDetailCtrl
                |- ProductDetailCtrl
                |- ChannelDetailCtrl
                |- ChannelCodyDetailCtrl
				|- PrivateInfoCtrl
                |- PrivateCodyCtrl
                |- PrivateChannelCtrl
                |- PrivateBrandCtrl
                |- PrivateProductCtrl
