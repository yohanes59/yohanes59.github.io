const nama_aplikasi = "Portfolio || Yohanes Cahyadi";
const link_icon = "https://res.cloudinary.com/dqxruyist/image/upload/v1696525830/my_images/icon_m7llq7.png";

// home data
const nama = "Yohanes Cahyadi";
const pekerjaan = "Web Developer";
const deskripsi = "Fresh Graduate from Indraprasta PGRI University";
const link_photo_no_bg = "https://res.cloudinary.com/dqxruyist/image/upload/v1696520112/my_images/Foto-Yohanes-no-bg_lahw3q.png"

// socials media data
const link_email = "yohanescahyadi59@gmail.com";
const link_github = "https://github.com/yohanes59";
const link_linkedin = "https://www.linkedin.com/in/yohanes-cahyadi";
const link_instagram = "https://www.instagram.com/yohanesscahyadi";

// about data
const nomor_hp = "+62 838-9173-3380";
const alamat = "DKI. Jakarta, Indonesia";
const kebangsaan = "Indonesian";
const tentang = `An enthusiastic and detail-oriented Web Developer with proficient knowledge in JavaScript and PHP. 
Seeking to utilize my technical skills and expertise to provide value to the employer and contribute to successful 
projects both today and in the future. Aiming to take on new challenges and utilize my coding and debugging skills 
for developing new features and enhance the overall user experience.`;
const link_download_cv = "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQIjWMlfCoi9cQAAAYsB5GBJZxPVn8jR6WyzQuLn7FarOeDzwrY9qZWVmbicBni2txxazGL8FobA3q8Nh06bAbtkoq2FJF-T8ofExWHIFP_OukVj4ph6v9T_ZRmvW300P9k_2C-ABdsEUIsUvP3vMSRzfCJ9vooKE9HB827b5Ca0p7cQomuAXfshHj72REm-DmgTmsWh2rRnHWt6_HZ_U_jAYUm7Qti-ozYrf8LDK8St__FZCm0wiTnoKk1zynz1zwJ-5yqDUFioCUypiZLyFI4i-8XN_tPy5Qm-4nEOjMjVhf3XORt8bpR2n8IWkJJW1_Dsp8RUF9N1Co7ehLUu5hN3QtdCldgeHjzSoRB2u9DGrUOjUaaWtwujpa3lFmjuFZH-UY2hT4SaTY2PFWgHsTOmkgVaqTdETGHPufJO2zDY_2KgeeyB1MkYAsiOrWgmLqn6CbrByfoyOpDcAVZCET3acVhuT1HI4WbpvWkzTYlJ_w1IJh_OVSMX_9gYLVCRVUSaFaU9-XDoW1Xy5R5nWGXKkY1ZthEK5YePigJd8D2cnsh3yvf9tC1T1XR26TM1IA2sgQ"
const link_photo = "https://res.cloudinary.com/dqxruyist/image/upload/v1696519614/my_images/Foto-Yohanes_hayju6.jpg";

// social account data
var socials = {
    "linkedin": {
        "link": link_linkedin,
        "icon": "bx bxl-linkedin"
    },
    "github": {
        "link": link_github,
        "icon": "bx bxl-github"
    },
    "instagram": {
        "link": link_instagram,
        "icon": "bx bxl-instagram"
    }
};

var skills = {
    "Backend": {
        "details": "Medium, 1 Years",
        "icon": "bx bx-network-chart",
        "skills": {
            "PHP": "95%",
            "Java": "70%",
            "Laravel": "90%",
            "SQL": "85%",
            "No SQL": "70%",
            "Node Js": "80%",
            "Express Js": "80%",
        }
    },
    "Frontend": {
        "details": "Medium, 1 Years",
        "icon": "bx bx-code-curly",
        "skills": {
            "HTML": "95%",
            "CSS": "80%",
            "Bootstrap": "85%",
            "Javascript": "80%",
            "Jquery": "70%",
            "React Js": "70%"
        }
    },
};

// portfolio data
var portfolio = {
    1: {
        "title": "Sigayantara (Sistem Informasi Cagar Budaya Nusantara)",
        "short_description": "Information site about cultural heritage in the archipelago",
        "description": `SiGayantara is an information site about cultural heritage in the archipelago. 
        This website makes it easy for the millennial generation and the public to obtain information 
        about cultural heritage and the preservation of the archipelago's cultural heritage.
        This application was created using Framework React JS and Cloudinary API to upload images.`,

        "source_code": "https://github.com/yohanes59/SiGaYaNtara",
        "demo": "https://sigayantara.netlify.app",

        "images": {
            1: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527943/my_images/project/sigayantara/Sigayantara-home_bwzvey.png",
            2: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527944/my_images/project/sigayantara/Sigayantara-cagar_p0j0ip.png",
            3: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527939/my_images/project/sigayantara/Sigayantara-about_esrqqp.png",
            4: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527934/my_images/project/sigayantara/Sigayantara-login_yjtv40.png",
            5: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527934/my_images/project/sigayantara/Sigayantara-register_wlgeqs.png",
            6: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527935/my_images/project/sigayantara/Sigayantara-unggah_rmyjfx.png",
            7: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527936/my_images/project/sigayantara/Sigayantara-edit_vjhjbc.png",
            8: "https://res.cloudinary.com/dqxruyist/image/upload/v1696527937/my_images/project/sigayantara/Sigayantara-detail_tpwqbl.png",
        }
    },
    2: {
        "title": "Sigayantara API",
        "short_description": "BackEnd For Information site about cultural heritage in the archipelago",
        "description": `This API was created using Framework Express Js. MongoDB Database and Using Cloudinary API to upload images.`,

        "source_code": "https://github.com/yohanes59/SiGayantara-API",
        "demo": "https://si-gayantara-api.vercel.app/v1/cultural-heritage",

        "images": {
            1: "https://res.cloudinary.com/dqxruyist/image/upload/v1696528782/my_images/project/sigayantara/sigayantara-api_pwkq0d.png",
        }
    },
    3: {
        "title": "GiftMoment",
        "short_description": "Wedding Souvenir Ordering System",
        "description": `Gift Moment is an online shop application for selling souvenirs and wedding gifts.
        This website makes it easy for sellers and buyers to be able to process sales and purchase 
        transactions for souvenirs and wedding gifts. This application was created using Framework Laravel 9.`,

        "source_code": "https://github.com/yohanes59/gift-moment",
        "demo": "",

        "images": {
            1: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530361/my_images/project/giftmoment/giftmoment-home_f4yrg4.png",
            2: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530576/my_images/project/giftmoment/giftmoment-aboutus_wqzrmh.png",
            3: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530580/my_images/project/giftmoment/giftmoment-aboutdev_chriv6.png",
            4: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530395/my_images/project/giftmoment/giftmoment-login_uzcmux.png",
            5: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530575/my_images/project/giftmoment/giftmoment-register_j03djl.png",
            6: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530573/my_images/project/giftmoment/giftmoment-admin-dashboard_wtecar.png",
            7: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530571/my_images/project/giftmoment/giftmoment-admin-category_pv5mdh.png",
            8: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530570/my_images/project/giftmoment/giftmoment-admin-category-edit_qoeq6c.png",
            9: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530569/my_images/project/giftmoment/giftmoment-admin-product_hqkmn3.png",
            10: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530578/my_images/project/giftmoment/giftmoment-admin-product-edit_kwsjyu.png",
            11: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530572/my_images/project/giftmoment/giftmoment-stokmasuk_t10klq.png",
            12: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530567/my_images/project/giftmoment/giftmoment-tambah-stokmasuk_ppjwcc.png",
            13: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530568/my_images/project/giftmoment/giftmoment-stokkeluar_km2fa4.png",
            14: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530573/my_images/project/giftmoment/giftmoment-riwayatstok_kfvl6k.png",
            15: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530356/my_images/project/giftmoment/giftmoment-faq_c4iyjs.png",
            16: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530425/my_images/project/giftmoment/giftmoment-tambah-faq_ealygj.png",
            17: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530566/my_images/project/giftmoment/giftmoment-admin-profile_xuilvp.png",
            18: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530357/my_images/project/giftmoment/giftmoment-detailproduk_bj38vb.png",
            19: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530356/my_images/project/giftmoment/giftmoment-keranjang_rco23b.png",
            20: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530396/my_images/project/giftmoment/giftmoment-userprofile_qcbp87.png",
            21: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530395/my_images/project/giftmoment/giftmoment-pilihkurir_yqja0o.png",
            22: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530567/my_images/project/giftmoment/giftmoment-checkout_a0w9ls.png",
            23: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530396/my_images/project/giftmoment/giftmoment-riwayatpesanan_mcfwfs.png",
            24: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530399/my_images/project/giftmoment/giftmoment-detailpesanan_klawej.png",
            25: "https://res.cloudinary.com/dqxruyist/image/upload/v1696530574/my_images/project/giftmoment/giftmoment-uploadbukti_mpos9o.png",
        }
    },
    4: {
        "title": "POS (Point Of Sales) For Cafe",
        "short_description": "Application designed to assist cafe cashiers in managing transactions.",
        "description": `Application designed to assist cashiers in managing transactions. 
        In application There are authentication features in the form of login and registration, product management, 
        category product management, cart management and transaction list. This application was created using Framework Laravel 9.`,

        "source_code": "https://github.com/yohanes59/kasir-coffee-shop",
        "demo": "https://kasir-cafe-xyz.000webhostapp.com",

        "images": {
            1: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532967/my_images/project/pos-cafe/pos-cafe-kasir-dashboard_lhv5hv.png",
            2: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532964/my_images/project/pos-cafe/pos-cafe-login_ltblwe.png",
            3: "https://res.cloudinary.com/dqxruyist/image/upload/v1696533029/my_images/project/pos-cafe/pos-cafe-admin-dashboard_ophm9c.png",
            4: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532965/my_images/project/pos-cafe/pos-cafe-admin-category_o6xf85.png",
            5: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532985/my_images/project/pos-cafe/pos-cafe-admin-editcategory_mcutp5.png",
            6: "https://res.cloudinary.com/dqxruyist/image/upload/v1696533029/my_images/project/pos-cafe/pos-cafe-admin-product_hzdzlv.png",
            7: "https://res.cloudinary.com/dqxruyist/image/upload/v1696533029/my_images/project/pos-cafe/pos-cafe-admin-editproduct_xxavpi.png",
            8: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532963/my_images/project/pos-cafe/pos-cafe-admin-transaksi_rkugut.png",
            9: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532965/my_images/project/pos-cafe/Cetak_Transaksi_jplqxd.png",
            10: "https://res.cloudinary.com/dqxruyist/image/upload/v1696533028/my_images/project/pos-cafe/pos-cafe-admin-sales_r7h6fg.png",
            11: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532964/my_images/project/pos-cafe/Cetak_Penjualan_mfovft.png",
            12: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532964/my_images/project/pos-cafe/pos-cafe-admin-akunkasir_ruhhyk.png",
            13: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532963/my_images/project/pos-cafe/pos-cafe-admin-tambahakunkasir_zan9tk.png",
            14: "https://res.cloudinary.com/dqxruyist/image/upload/v1696533013/my_images/project/pos-cafe/pos-cafe-admin-profile_mhwobk.png",
            15: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532964/my_images/project/pos-cafe/pos-cafe-kasir-keranjang_lephu3.png",
            16: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532964/my_images/project/pos-cafe/Invoice_17_ulry6k.png",
            17: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532964/my_images/project/pos-cafe/pos-cafe-kasir-dailytransaction_c7z8s2.png",
            18: "https://res.cloudinary.com/dqxruyist/image/upload/v1696532963/my_images/project/pos-cafe/pos-cafe-kasir-detailtransaction_kdubtv.png",
        }
    },
    5: {
        "title": "Kalkulator Suara Bahasa Indonesia",
        "short_description": "Kalkulator Suara Bahasa Indonesia",
        "description": `After learning the basics of Java I wanted to sharpen my knowledge and do some practice.
        So I thought about making a calculator app. This sound calculator application was created because you are lazy 
        to press buttons when calculating with a calculator. You can access the app in my playstore below.`,

        "source_code": "",
        "demo": "https://play.google.com/store/apps/details?id=com.XenLi.KalkulatorSuaraBahasaIndonesia&hl=en",

        "images": {
            1: "https://play-lh.googleusercontent.com/StkYjKhcU4P6cQvDmb_X5NoBJQEuzzx_j-ha69mAFdP8a9O5x43XEWvI4WpO9nO8T5c=w240-h480-rw",
        }
    },
    6: {
        "title": "Display Touch Tester",
        "short_description": "Display Touch Tester",
        "description": `This application is a tool to test the touch screen that does not work on mobile devices.
        This application was created using Java. You can access the app in my playstore below.`,

        "source_code": "",
        "demo": "https://play.google.com/store/apps/details?id=com.xenli.DisplayTouchTester&hl=en",

        "images": {
            1: "https://play-lh.googleusercontent.com/-cJe4dVjdK6uZIPTzcxFZg53ap1blS-yRDeiMQryyoBlDp1kovQmGV00QAj3W0vJTA=w240-h480-rw",
            2: "https://play-lh.googleusercontent.com/ZVSn-R4e2Gm7EPI5kMz8dIq-xzjZvJikIcil1zeBSwCkK3--R6GjNyBpZhHca6xvvA=w2560-h1440-rw",
            3: "https://play-lh.googleusercontent.com/GUYSXYNSaEhLJQRQTtdZLics0SP-Ki18kui6vzj9qGvXZMM_diBQE4n-iR_S1wFDdg=w2560-h1440-rw",
            4: "https://play-lh.googleusercontent.com/ZGaZcgRb18_YqPET7axB4ohTo7LSfR_DQQjyWeNETw3NfwQSK5CSPSQF_HcxuE1uT5c=w2560-h1440-rw"
        }
    },
    7: {
        "title": "Contactku",
        "short_description": "A contact list app using PHP",
        "description": `After learning the basics of PHP I wanted to sharpen my knowledge and do some practice. 
        So I thought about making a contact list app. You can access the source code on my github below.`,

        "source_code": "https://github.com/yohanes59/contactku",
        "demo": "",

        "images": {
            1: "https://res.cloudinary.com/dqxruyist/image/upload/v1696534994/my_images/project/contactku/contactku-login_pyzils.png",
            2: "https://res.cloudinary.com/dqxruyist/image/upload/v1696534994/my_images/project/contactku/contactku-home_vqcfhp.png",
            3: "https://res.cloudinary.com/dqxruyist/image/upload/v1696534995/my_images/project/contactku/contactku-profile_v56yvi.png",
            4: "https://res.cloudinary.com/dqxruyist/image/upload/v1696534995/my_images/project/contactku/contactku-tambah_v6b0ns.png",
            5: "https://res.cloudinary.com/dqxruyist/image/upload/v1696534995/my_images/project/contactku/contactku-edit_zsvcli.png",
            6: "https://res.cloudinary.com/dqxruyist/image/upload/v1696534994/my_images/project/contactku/contactku-delete_zlrhwu.png",
        }
    },
    8: {
        "title": "Sispar-FC",
        "short_description": "Sewing machine fault diagnosis expert system application",
        "description": `Application of an expert system for diagnosing sewing machine damage using the forward chaining method.`,

        "source_code": "",
        "demo": "https://fc-sispar.000webhostapp.com",

        "images": {
            1: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537180/my_images/project/sisfar-fc/sisfar-fc-dashboardpengguna_hwvx7d.png",
            2: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537180/my_images/project/sisfar-fc/sisfar-fc-login_wvhj1w.png",
            3: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537179/my_images/project/sisfar-fc/sisfar-fc-dashboard_vdsjhs.png",
            4: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537181/my_images/project/sisfar-fc/sisfar-fc-gejala_vbcmuq.png",
            5: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537179/my_images/project/sisfar-fc/sisfar-fc-editgejala_bqwebj.png",
            6: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537186/my_images/project/sisfar-fc/Laporan_gejala_y4fcz4.png",
            7: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537183/my_images/project/sisfar-fc/sisfar-fc-kerusakan_ebz98p.png",
            8: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537180/my_images/project/sisfar-fc/sisfar-fc-editkerusakan_c8efpd.png",
            9: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537185/my_images/project/sisfar-fc/Laporan_kerusakan_mhhnza.png",
            10: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537183/my_images/project/sisfar-fc/sisfar-fc-pengetahuan_rfgjjr.png",
            11: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537180/my_images/project/sisfar-fc/sisfar-fc-editpengetahuan_ms6cbs.png",
            12: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537188/my_images/project/sisfar-fc/Laporan_pengetahuan_trbro8.png",
            13: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537184/my_images/project/sisfar-fc/sisfar-fc-riwayat_hrdm4f.png",
            14: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537188/my_images/project/sisfar-fc/Laporan_diagnosa_noypk8.png",
            15: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537184/my_images/project/sisfar-fc/sisfar-fc-aturan_idptqs.png",
            16: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537180/my_images/project/sisfar-fc/sisfar-fc-diagnosa_yocneb.png",
            17: "https://res.cloudinary.com/dqxruyist/image/upload/v1696537182/my_images/project/sisfar-fc/sisfar-fc-hasildiagnosa_mpm51k.png",
        }
    },
};
