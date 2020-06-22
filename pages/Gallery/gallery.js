var vm = new Vue({
    el: "#vm",
    data: {
        index : 0,
        curImg :"img/large_30mo_4d230000dc301210.jpg",
        imgs:[
            "img/large_30mo_4d230000dc301210.jpg",
            "img/large_5ftn_68e80000d9f51212.jpg",
            "img/large_gd1R_4e1b0000d8601214.jpg",
            "img/large_iTQ1_55550000da3a1260.jpg",
            "img/large_N5jn_2edd000a09ca1211.jpg",
            "img/large_OKhB_5c800000d8f11261.jpg",
            "img/large_Tx3Q_4dcb0000d87d1214.jpg",
            "img/original_pXsa_634a000005201191.jpg",
            "img/p_large_1EbN_15a1000000bb121e.jpg",
            "img/p_large_dkoR_08f70000045b1215.jpg"
        ]

    },
    methods: {
        prev: function(){
            if(this.index <= 0){
                this.index = this.imgs.length - 1;
            }else{
                this.index -= 1;
            }
            this.curImg = this.imgs[this.index];
        },
        next: function(){
            if(this.index >= this.imgs.length -1){
                this.index = 0;
            }else{
                this.index += 1;
            }
            this.curImg = this.imgs[this.index];
        },
        jump_to: function (n) {
            this.index = n;
            this.curImg = this.imgs[this.index];
        }
    },
});