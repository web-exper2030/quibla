
'use strict';

/*============== Start City Ids ==============*/

var ids = [];
for(var i = 0 ; i < 157 ; i++){ids.push(i);}

/*============== End City Ids ==============*/

/*============== Start City Names ==============*/

var cityNames = ['الرباط','الخميسات','تيفلت','الرماني','والماس','الدار البيضاء','المحمدية','خريبكة','بن سليمان','سطات','الكارة','البروج','وادي زم','ابن أحمد','بوزنيقة','برشيد','آسفي','الجديدة','آزمور','الوالدية','سيدي بنور','اليوسفية','خميس الزمامرة','طنجة','تطوان','العرائش','أصيلة','شفشاون','مارتيل','المضيق','القصر الكبير','القصر الصغير','سبتة','الفنيدق','الجبهة','واد لاو','باب برد','وزان','القنيطرة','سيدي قاسم','سيدي يحيى الغرب','سيدي سليمان','سوق أربعاء الغرب','عرباوة','فاس','صفرو','مولاي يعقوب','بولمان','ميسور','رباط الخير','تنديت','المنزل بني يازغة','إموزار كندر','الحسيمة','تازة','تاونات','أكنول','كرسيف','تيزي وسلي','بورد','تاهلة','تيسة','قرية با محمد','كتامة','واد أمليل','بوسكور','وجدة','بركان','فكيك','بوعرفة','جرادة','عين الشعير','تاوريرت','الناظور','مليلية','دبدو','سلوان','بني أنصار','فرخانة','تالسينت','تندرارة','العيون الشرقية','بني ادرار','السعيدية','رأس الماء','تافوغالت','فزوان','أحفير','زايو','دريوش','بني تاجيت','بوعنان','مكناس','إفران','خنيفرة','الحاجب','الرشيدية','الريصاني','أرفود','كلميمة','إملشيل','تنجداد','الريش','مولاي بوعزة','زاوية أحنصال','زرهون','أزرو','ميدلت','بني ملال','أزيلال','الفقيه بنصالح','دمنات','القصيبة','قصبة تادلة','مراكش','قلعة السراغنة','الصويرة','شيشاوة','بنجرير','الرحامنة','أكادير','تارودانت','تزنيت','زاكورة','ورزازات','تنغير','سيدي إفني','اغرام','هسكورة','قلعة مكونة','أكدز','تالوين','تافراوت','تمنار','بومالن دادس','النيف','أسول','أمسمير','تازارين','العيون','بوجدور','طرفاية','الداخلة','الكويرة','أوسرد','كلميم','أسا','الزاك','طانطان','السمارة','طاطا','أقا','بويزكارن','بوكراع','فم لحصن']

/*============== End City Names ==============*/

/*============== Start daraj toul ==============*/

var c = [6 ,6 ,6 ,6 ,6 ,7 ,7 ,6 ,7 ,7 ,7 ,7 ,6 ,7 ,7 ,7 ,9 ,8 ,8 ,9 ,8 ,8 ,8 ,5 ,5 ,6 ,6 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,4 ,5 ,4 ,5 ,6 ,5 ,6 ,5 ,6 ,5 ,5 ,4 ,5 ,4 ,4 ,4 ,3 ,4 ,5 ,3 ,4 ,4 ,3 ,3 ,3 ,4 ,4 ,4 ,5 ,4 ,4 ,3 ,1 ,2 ,1 ,1 ,2 ,2 ,2 ,2 ,2 ,3 ,2 ,2 ,2 ,3 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,3 ,3 ,3 ,5 ,5 ,5 ,5 ,4 ,4 ,4 ,4 ,5 ,5 ,4 ,6 ,6 ,5 ,5 ,4 ,6 ,6 ,6 ,7 ,6 ,6 ,8 ,7 ,9 ,8 ,7 ,7 ,9 ,8 ,9 ,5 ,6 ,5 ,10 ,8 ,6 ,6 ,6 ,7 ,8 ,9 ,6 ,5 ,5 ,5 ,5 ,13 ,14 ,12 ,15 ,17 ,14 ,10 ,9 ,9 ,11 ,11 ,7 ,8 ,9 ,12 ,8 ]

var d = [51 ,5 ,20 ,37 ,0 ,40 ,24 ,55 ,8 ,36 ,14 ,11 ,35 ,15 ,10 ,36 ,15 ,31 ,21 ,2 ,26 ,33 ,42 ,50 ,23 ,12 ,3 ,17 ,17 ,20 ,56 ,33 ,21 ,20 ,51 ,6 ,53 ,36 ,36 ,44 ,19 ,57 ,1 ,56 ,1 ,51 ,11 ,45 ,1 ,25 ,33 ,33 ,1 ,56 ,2 ,40 ,52 ,22 ,48 ,6 ,26 ,41 ,12 ,36 ,17 ,36 ,56 ,21 ,14 ,58 ,10 ,31 ,53 ,56 ,58 ,1 ,56 ,55 ,59 ,26 ,0 ,30 ,59 ,15 ,25 ,24 ,12 ,6 ,43 ,23 ,28 ,3 ,34 ,7 ,41 ,23 ,27 ,16 ,14 ,57 ,37 ,2 ,30 ,12 ,5 ,32 ,14 ,45 ,22 ,35 ,42 ,1 ,3 ,17 ,0 ,25 ,47 ,46 ,58 ,55 ,37 ,53 ,45 ,51 ,56 ,32 ,11 ,28 ,34 ,9 ,27 ,55 ,59 ,40 ,0 ,11 ,11 ,49 ,34 ,14 ,32 ,56 ,59 ,6 ,18 ,4 ,27 ,18 ,7 ,41 ,59 ,15 ,43 ,50 ,54 ]

var e = [34 ,33 ,33 ,33 ,33 ,33 ,33 ,32 ,33 ,33 ,33 ,32 ,32 ,33 ,33 ,33 ,32 ,33 ,33 ,32 ,32 ,32 ,32 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,35 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,33 ,34 ,33 ,33 ,33 ,33 ,33 ,33 ,35 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,34 ,32 ,32 ,34 ,32 ,34 ,35 ,35 ,34 ,35 ,35 ,35 ,32 ,33 ,34 ,34 ,35 ,35 ,34 ,34 ,34 ,34 ,34 ,32 ,32 ,33 ,33 ,32 ,33 ,31 ,31 ,31 ,31 ,32 ,31 ,32 ,33 ,31 ,34 ,33 ,32 ,32 ,31 ,32 ,31 ,32 ,32 ,31 ,32 ,31 ,31 ,32 ,32 ,30 ,30 ,29 ,30 ,30 ,31 ,29 ,30 ,31 ,31 ,30 ,30 ,29 ,31 ,31 ,31 ,31 ,31 ,30 ,27 ,26 ,27 ,23 ,20 ,22 ,28 ,28 ,28 ,28 ,26 ,29 ,29 ,29 ,26 ,29 ]

var f = [1 ,50 ,55 ,32 ,25 ,34 ,42 ,53 ,37 ,0 ,17 ,30 ,52 ,4 ,48 ,16 ,18 ,15 ,17 ,43 ,40 ,15 ,38 ,47 ,34 ,11 ,28 ,10 ,37 ,41 ,0 ,51 ,54 ,51 ,12 ,26 ,0 ,48 ,15 ,12 ,19 ,16 ,41 ,55 ,4 ,50 ,5 ,11 ,3 ,49 ,37 ,50 ,44 ,15 ,14 ,32 ,40 ,14 ,46 ,44 ,3 ,18 ,22 ,52 ,11 ,42 ,41 ,55 ,7 ,32 ,19 ,12 ,25 ,11 ,18 ,0 ,4 ,16 ,17 ,32 ,3 ,35 ,49 ,11 ,9 ,48 ,55 ,57 ,56 ,58 ,18 ,3 ,54 ,32 ,56 ,41 ,56 ,16 ,25 ,42 ,9 ,30 ,15 ,14 ,50 ,3 ,26 ,41 ,20 ,57 ,30 ,44 ,34 ,36 ,38 ,3 ,31 ,32 ,15 ,29 ,25 ,28 ,42 ,19 ,55 ,30 ,23 ,5 ,4 ,15 ,41 ,32 ,43 ,0 ,22 ,7 ,56 ,42 ,46 ,9 ,8 ,56 ,42 ,50 ,33 ,59 ,34 ,1 ,26 ,46 ,45 ,24 ,11 ,22 ,0 ]

var g = [120 ,500 ,400 ,500 ,1250 ,200 ,120 ,850 ,300 ,500 ,450 ,500 ,900 ,650 ,120 ,250 ,200 ,150 ,150 ,100 ,250 ,500 ,200 ,240 ,450 ,100 ,100 ,1150 ,100 ,200 ,120 ,210 ,460 ,210 ,230 ,300 ,1300 ,630 ,100 ,450 ,100 ,100 ,120 ,200 ,510 ,1000 ,400 ,2500 ,980 ,1180 ,720 ,1040 ,1530 ,450 ,880 ,750 ,1350 ,400 ,1440 ,1090 ,720 ,430 ,230 ,1720 ,420 ,400 ,850 ,280 ,950 ,1160 ,1160 ,1020 ,470 ,570 ,200 ,1480 ,190 ,160 ,220 ,1620 ,1690 ,750 ,470 ,220 ,100 ,1270 ,570 ,420 ,500 ,390 ,1360 ,870 ,550 ,1480 ,990 ,1120 ,1090 ,770 ,830 ,1200 ,2930 ,1090 ,1350 ,1130 ,2500 ,800 ,1800 ,1620 ,880 ,1440 ,460 ,1220 ,1290 ,560 ,540 ,520 ,120 ,500 ,510 ,730 ,200 ,300 ,280 ,750 ,1200 ,1500 ,350 ,2000 ,1230 ,1490 ,1540 ,1420 ,1520 ,420 ,1600 ,880 ,2800 ,2100 ,500 ,100 ,100 ,100 ,150 ,100 ,520 ,600 ,360 ,540 ,170 ,240 ,1080 ,790 ,800 ,590 ,1040 ]

var h = [6.85 ,6.08 ,6.33 ,6.62 ,6.00 ,7.67 ,7.40 ,6.92 ,7.13 ,7.60 ,7.23 ,7.18 ,6.58 ,7.25 ,7.17 ,7.60 ,9.25 ,8.52 ,8.35 ,9.03 ,8.43 ,8.55 ,8.70 ,5.83 ,5.38 ,6.20 ,6.05 ,5.28 ,5.28 ,5.33 ,5.93 ,5.55 ,5.35 ,5.33 ,4.85 ,5.10 ,4.88 ,5.60 ,6.60 ,5.73 ,6.32 ,5.95 ,6.02 ,5.93 ,5.02 ,4.85 ,5.18 ,4.75 ,4.02 ,4.42 ,3.55 ,4.55 ,5.02 ,3.93 ,4.03 ,4.67 ,3.87 ,3.37 ,3.80 ,4.10 ,4.43 ,4.68 ,5.20 ,4.60 ,4.28 ,3.60 ,1.93 ,2.35 ,1.23 ,1.97 ,2.17 ,2.52 ,2.88 ,2.93 ,2.97 ,3.02 ,2.93 ,2.92 ,2.98 ,3.43 ,2.00 ,2.50 ,1.98 ,2.25 ,2.42 ,2.40 ,2.20 ,2.10 ,2.72 ,3.38 ,3.47 ,3.05 ,5.57 ,5.12 ,5.68 ,5.38 ,4.45 ,4.27 ,4.23 ,4.95 ,5.62 ,5.03 ,4.50 ,6.20 ,6.08 ,5.53 ,5.23 ,4.75 ,6.37 ,6.58 ,6.70 ,7.02 ,6.05 ,6.28 ,8.00 ,7.42 ,9.78 ,8.77 ,7.97 ,7.92 ,9.62 ,8.88 ,9.75 ,5.85 ,6.93 ,5.53 ,10.18 ,8.47 ,6.57 ,6.15 ,6.45 ,7.92 ,8.98 ,9.67 ,6.00 ,5.18 ,5.18 ,5.82 ,5.57 ,13.23 ,14.53 ,12.93 ,15.98 ,17.10 ,14.30 ,10.07 ,9.45 ,9.30 ,11.12 ,11.68 ,7.98 ,8.25 ,9.72 ,12.83 ,8.90 ]

var i = [34.02 ,33.83 ,33.92 ,33.53 ,33.42 ,33.57 ,33.70 ,32.88 ,33.62 ,33.00 ,33.28 ,32.50 ,32.87 ,33.07 ,33.80 ,33.27 ,32.30 ,33.25 ,33.28 ,32.72 ,32.67 ,32.25 ,32.63 ,35.78 ,35.57 ,35.18 ,35.47 ,35.17 ,35.62 ,35.68 ,35.00 ,35.85 ,35.90 ,35.85 ,35.20 ,35.43 ,35.00 ,34.80 ,34.25 ,34.20 ,34.32 ,34.27 ,34.68 ,34.92 ,34.07 ,33.83 ,34.08 ,33.18 ,33.05 ,33.82 ,33.62 ,33.83 ,33.73 ,35.25 ,34.23 ,34.53 ,34.67 ,34.23 ,34.77 ,34.73 ,34.05 ,34.30 ,34.37 ,34.87 ,34.18 ,34.70 ,34.68 ,34.92 ,32.12 ,32.53 ,34.32 ,32.20 ,34.42 ,35.18 ,35.30 ,34.00 ,35.07 ,35.27 ,35.28 ,32.53 ,33.05 ,34.58 ,34.82 ,35.18 ,35.15 ,34.80 ,34.92 ,34.95 ,34.93 ,34.97 ,32.30 ,32.05 ,33.90 ,33.53 ,32.93 ,33.68 ,31.93 ,31.27 ,31.42 ,31.70 ,32.15 ,31.50 ,32.25 ,33.23 ,31.83 ,34.05 ,33.43 ,32.68 ,32.33 ,31.95 ,32.50 ,31.73 ,32.57 ,32.60 ,31.63 ,32.05 ,31.52 ,31.53 ,32.25 ,32.48 ,30.42 ,30.47 ,29.70 ,30.32 ,30.92 ,31.50 ,29.38 ,30.08 ,31.07 ,31.25 ,30.68 ,30.53 ,29.72 ,31.00 ,31.37 ,31.12 ,31.93 ,31.70 ,30.77 ,27.15 ,26.13 ,27.93 ,23.70 ,20.83 ,22.55 ,28.98 ,28.57 ,28.02 ,28.43 ,26.77 ,29.75 ,29.40 ,29.18 ,26.37 ,29.00 ]

var k = [46.67613056 ,45.90946389 ,46.15946389 ,46.44279722 ,45.82613056 ,47.49279722 ,47.22613056 ,46.74279722 ,46.95946389 ,47.42613056 ,47.05946389 ,47.00946389 ,46.40946389 ,47.07613056 ,46.99279722 ,47.42613056 ,49.07613056 ,48.34279722 ,48.17613056 ,48.85946389 ,48.25946389 ,48.37613056 ,48.52613056 ,45.65946389 ,45.20946389 ,46.02613056 ,45.87613056 ,45.10946389 ,45.10946389 ,45.15946389 ,45.75946389 ,45.37613056 ,45.17613056 ,45.15946389 ,44.67613056 ,44.92613056 ,44.70946389 ,45.42613056 ,46.42613056 ,45.55946389 ,46.14279722 ,45.77613056 ,45.84279722 ,45.75946389 ,44.84279722 ,44.67613056 ,45.00946389 ,44.57613056 ,43.84279722 ,44.24279722 ,43.37613056 ,44.37613056 ,44.84279722 ,43.75946389 ,43.85946389 ,44.49279722 ,43.69279722 ,43.19279722 ,43.62613056 ,43.92613056 ,44.25946389 ,44.50946389 ,45.02613056 ,44.42613056 ,44.10946389 ,43.42613056 ,41.75946389 ,42.17613056 ,41.05946389 ,41.79279722 ,41.99279722 ,42.34279722 ,42.70946389 ,42.75946389 ,42.79279722 ,42.84279722 ,42.75946389 ,42.74279722 ,42.80946389 ,43.25946389 ,41.82613056 ,42.32613056 ,41.80946389 ,42.07613056 ,42.24279722 ,42.22613056 ,42.02613056 ,41.92613056 ,42.54279722 ,43.20946389 ,43.29279722 ,42.87613056 ,45.39279722 ,44.94279722 ,45.50946389 ,45.20946389 ,44.27613056 ,44.09279722 ,44.05946389 ,44.77613056 ,45.44279722 ,44.85946389 ,44.32613056 ,46.02613056 ,45.90946389 ,45.35946389 ,45.05946389 ,44.57613056 ,46.19279722 ,46.40946389 ,46.52613056 ,46.84279722 ,45.87613056 ,46.10946389 ,47.82613056 ,47.24279722 ,49.60946389 ,48.59279722 ,47.79279722 ,47.74279722 ,49.44279722 ,48.70946389 ,49.57613056 ,45.67613056 ,46.75946389 ,45.35946389 ,50.00946389 ,48.29279722 ,46.39279722 ,45.97613056 ,46.27613056 ,47.74279722 ,48.80946389 ,49.49279722 ,45.82613056 ,45.00946389 ,45.00946389 ,45.64279722 ,45.39279722 ,53.05946389 ,54.35946389 ,52.75946389 ,55.80946389 ,56.92613056 ,54.12613056 ,49.89279722 ,49.27613056 ,49.12613056 ,50.94279722 ,51.50946389 ,47.80946389 ,48.07613056 ,49.54279722 ,52.65946389 ,48.72613056 ]

var l = [68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ,68.57744722 ]

var m = [55.98333333 ,56.16666667 ,56.08333333 ,56.46666667 ,56.58333333 ,56.43333333 ,56.3 ,57.11666667 ,56.38333333 ,57 ,56.71666667 ,57.5 ,57.13333333 ,56.93333333 ,56.2 ,56.73333333 ,57.7 ,56.75 ,56.71666667 ,57.28333333 ,57.33333333 ,57.75 ,57.36666667 ,54.21666667 ,54.43333333 ,54.81666667 ,54.53333333 ,54.83333333 ,54.38333333 ,54.31666667 ,55 ,54.15 ,54.1 ,54.15 ,54.8 ,54.56666667 ,55 ,55.2 ,55.75 ,55.8 ,55.68333333 ,55.73333333 ,55.31666667 ,55.08333333 ,55.93333333 ,56.16666667 ,55.91666667 ,56.81666667 ,56.95 ,56.18333333 ,56.38333333 ,56.16666667 ,56.26666667 ,54.75 ,55.76666667 ,55.46666667 ,55.33333333 ,55.76666667 ,55.23333333 ,55.26666667 ,55.95 ,55.7 ,55.63333333 ,55.13333333 ,55.81666667 ,55.3 ,55.31666667 ,55.08333333 ,57.88333333 ,57.46666667 ,55.68333333 ,57.8 ,55.58333333 ,54.81666667 ,54.7 ,56 ,54.93333333 ,54.73333333 ,54.71666667 ,57.46666667 ,56.95 ,55.41666667 ,55.18333333 ,54.81666667 ,54.85 ,55.2 ,55.08333333 ,55.05 ,55.06666667 ,55.03333333 ,57.7 ,57.95 ,56.1 ,56.46666667 ,57.06666667 ,56.31666667 ,58.06666667 ,58.73333333 ,58.58333333 ,58.3 ,57.85 ,58.5 ,57.75 ,56.76666667 ,58.16666667 ,55.95 ,56.56666667 ,57.31666667 ,57.66666667 ,58.05 ,57.5 ,58.26666667 ,57.43333333 ,57.4 ,58.36666667 ,57.95 ,58.48333333 ,58.46666667 ,57.75 ,57.51666667 ,59.58333333 ,59.53333333 ,60.3 ,59.68333333 ,59.08333333 ,58.5 ,60.61666667 ,59.91666667 ,58.93333333 ,58.75 ,59.31666667 ,59.46666667 ,60.28333333 ,59 ,58.63333333 ,58.88333333 ,58.06666667 ,58.3 ,59.23333333 ,62.85 ,63.86666667 ,62.06666667 ,66.3 ,69.16666667 ,67.45 ,61.01666667 ,61.43333333 ,61.98333333 ,61.56666667 ,63.23333333 ,60.25 ,60.6 ,60.81666667 ,63.63333333 ,61 ]

var n = [2.317734234 ,2.361037051 ,2.346767207 ,2.330770333 ,2.365826383 ,2.273060445 ,2.287487589 ,2.314032209 ,2.302069154 ,2.276652897 ,2.296582804 ,2.299323227 ,2.332642738 ,2.29567055 ,2.300237924 ,2.276652897 ,2.190442107 ,2.228074922 ,2.23677788 ,2.201450486 ,2.232419336 ,2.226341096 ,2.218566584 ,2.375454664 ,2.401786589 ,2.354359548 ,2.362950809 ,2.407705696 ,2.407705696 ,2.404743037 ,2.369669731 ,2.391976353 ,2.403756865 ,2.404743037 ,2.433645346 ,2.41862225 ,2.431633059 ,2.38904658 ,2.331706218 ,2.38126363 ,2.347713981 ,2.368707901 ,2.364867199 ,2.369669731 ,2.423612295 ,2.433645346 ,2.413649729 ,2.439699338 ,2.484896066 ,2.460066875 ,2.514413466 ,2.451884999 ,2.423612295 ,2.490123108 ,2.483852924 ,2.444764059 ,2.494318391 ,2.526175592 ,2.498525868 ,2.479687882 ,2.45904158 ,2.443749675 ,2.412657318 ,2.44882882 ,2.468295725 ,2.511222022 ,2.621523369 ,2.593168726 ,2.670396289 ,2.61923513 ,2.605578573 ,2.581976067 ,2.557645635 ,2.554358681 ,2.552171446 ,2.548896675 ,2.554358681 ,2.555453518 ,2.551079045 ,2.521887474 ,2.616950375 ,2.583091548 ,2.618092318 ,2.599924935 ,2.588681549 ,2.589802075 ,2.603314549 ,2.610116933 ,2.56865534 ,2.525102381 ,2.519748131 ,2.546717538 ,2.390999083 ,2.417626347 ,2.384177176 ,2.401786589 ,2.458017019 ,2.469327656 ,2.471393742 ,2.427617013 ,2.388071347 ,2.422612879 ,2.454947725 ,2.354359548 ,2.361037051 ,2.392954303 ,2.410674586 ,2.439699338 ,2.344875597 ,2.332642738 ,2.326100408 ,2.308497822 ,2.362950809 ,2.34960947 ,2.255239721 ,2.286581396 ,2.163728961 ,2.215125723 ,2.25701126 ,2.259672934 ,2.172018787 ,2.209125507 ,2.165382749 ,2.374488844 ,2.31310826 ,2.392954303 ,2.1440446 ,2.230679879 ,2.333579893 ,2.35721741 ,2.340157841 ,2.259672934 ,2.204003906 ,2.169526346 ,2.365826383 ,2.413649729 ,2.413649729 ,2.376421152 ,2.390999083 ,2.00308599 ,1.947483778 ,2.016277508 ,1.888294214 ,1.844605555 ,1.957281611 ,2.149755348 ,2.180361154 ,2.187914652 ,2.09923979 ,2.07277708 ,2.2561252 ,2.242026886 ,2.167038621 ,2.020705674 ,2.208270536 ]

var o = [62.28039028 ,62.37205694 ,62.33039028 ,62.52205694 ,62.58039028 ,62.50539028 ,62.43872361 ,62.84705694 ,62.48039028 ,62.78872361 ,62.64705694 ,63.03872361 ,62.85539028 ,62.75539028 ,62.38872361 ,62.65539028 ,63.13872361 ,62.66372361 ,62.64705694 ,62.93039028 ,62.95539028 ,63.16372361 ,62.97205694 ,61.39705694 ,61.50539028 ,61.69705694 ,61.55539028 ,61.70539028 ,61.48039028 ,61.44705694 ,61.78872361 ,61.36372361 ,61.33872361 ,61.36372361 ,61.68872361 ,61.57205694 ,61.78872361 ,61.88872361 ,62.16372361 ,62.18872361 ,62.13039028 ,62.15539028 ,61.94705694 ,61.83039028 ,62.25539028 ,62.37205694 ,62.24705694 ,62.69705694 ,62.76372361 ,62.38039028 ,62.48039028 ,62.37205694 ,62.42205694 ,61.66372361 ,62.17205694 ,62.02205694 ,61.95539028 ,62.17205694 ,61.90539028 ,61.92205694 ,62.26372361 ,62.13872361 ,62.10539028 ,61.85539028 ,62.19705694 ,61.93872361 ,61.94705694 ,61.83039028 ,63.23039028 ,63.02205694 ,62.13039028 ,63.18872361 ,62.08039028 ,61.69705694 ,61.63872361 ,62.28872361 ,61.75539028 ,61.65539028 ,61.64705694 ,63.02205694 ,62.76372361 ,61.99705694 ,61.88039028 ,61.69705694 ,61.71372361 ,61.88872361 ,61.83039028 ,61.81372361 ,61.82205694 ,61.80539028 ,63.13872361 ,63.26372361 ,62.33872361 ,62.52205694 ,62.82205694 ,62.44705694 ,63.32205694 ,63.65539028 ,63.58039028 ,63.43872361 ,63.21372361 ,63.53872361 ,63.16372361 ,62.67205694 ,63.37205694 ,62.26372361 ,62.57205694 ,62.94705694 ,63.12205694 ,63.31372361 ,63.03872361 ,63.42205694 ,63.00539028 ,62.98872361 ,63.47205694 ,63.26372361 ,63.53039028 ,63.52205694 ,63.16372361 ,63.04705694 ,64.08039028 ,64.05539028 ,64.43872361 ,64.13039028 ,63.83039028 ,63.53872361 ,64.59705694 ,64.24705694 ,63.75539028 ,63.66372361 ,63.94705694 ,64.02205694 ,64.43039028 ,63.78872361 ,63.60539028 ,63.73039028 ,63.32205694 ,63.43872361 ,63.90539028 ,65.71372361 ,66.22205694 ,65.32205694 ,67.43872361 ,68.87205694 ,68.01372361 ,64.79705694 ,65.00539028 ,65.28039028 ,65.07205694 ,65.90539028 ,64.41372361 ,64.58872361 ,64.69705694 ,66.10539028 ,64.78872361 ]

var p = [-6.297056944 ,-6.205390278 ,-6.247056944 ,-6.055390278 ,-5.997056944 ,-6.072056944 ,-6.138723611 ,-5.730390278 ,-6.097056944 ,-5.788723611 ,-5.930390278 ,-5.538723611 ,-5.722056944 ,-5.822056944 ,-6.188723611 ,-5.922056944 ,-5.438723611 ,-5.913723611 ,-5.930390278 ,-5.647056944 ,-5.622056944 ,-5.413723611 ,-5.605390278 ,-7.180390278 ,-7.072056944 ,-6.880390278 ,-7.022056944 ,-6.872056944 ,-7.097056944 ,-7.130390278 ,-6.788723611 ,-7.213723611 ,-7.238723611 ,-7.213723611 ,-6.888723611 ,-7.005390278 ,-6.788723611 ,-6.688723611 ,-6.413723611 ,-6.388723611 ,-6.447056944 ,-6.422056944 ,-6.630390278 ,-6.747056944 ,-6.322056944 ,-6.205390278 ,-6.330390278 ,-5.880390278 ,-5.813723611 ,-6.197056944 ,-6.097056944 ,-6.205390278 ,-6.155390278 ,-6.913723611 ,-6.405390278 ,-6.555390278 ,-6.622056944 ,-6.405390278 ,-6.672056944 ,-6.655390278 ,-6.313723611 ,-6.438723611 ,-6.472056944 ,-6.722056944 ,-6.380390278 ,-6.638723611 ,-6.630390278 ,-6.747056944 ,-5.347056944 ,-5.555390278 ,-6.447056944 ,-5.388723611 ,-6.497056944 ,-6.880390278 ,-6.938723611 ,-6.288723611 ,-6.822056944 ,-6.922056944 ,-6.930390278 ,-5.555390278 ,-5.813723611 ,-6.580390278 ,-6.697056944 ,-6.880390278 ,-6.863723611 ,-6.688723611 ,-6.747056944 ,-6.763723611 ,-6.755390278 ,-6.772056944 ,-5.438723611 ,-5.313723611 ,-6.238723611 ,-6.055390278 ,-5.755390278 ,-6.130390278 ,-5.255390278 ,-4.922056944 ,-4.997056944 ,-5.138723611 ,-5.363723611 ,-5.038723611 ,-5.413723611 ,-5.905390278 ,-5.205390278 ,-6.313723611 ,-6.005390278 ,-5.630390278 ,-5.455390278 ,-5.263723611 ,-5.538723611 ,-5.155390278 ,-5.572056944 ,-5.588723611 ,-5.105390278 ,-5.313723611 ,-5.047056944 ,-5.055390278 ,-5.413723611 ,-5.530390278 ,-4.497056944 ,-4.522056944 ,-4.138723611 ,-4.447056944 ,-4.747056944 ,-5.038723611 ,-3.980390278 ,-4.330390278 ,-4.822056944 ,-4.913723611 ,-4.630390278 ,-4.555390278 ,-4.147056944 ,-4.788723611 ,-4.972056944 ,-4.847056944 ,-5.255390278 ,-5.138723611 ,-4.672056944 ,-2.863723611 ,-2.355390278 ,-3.255390278 ,-1.138723611 ,0.294609722 ,-0.563723611 ,-3.780390278 ,-3.572056944 ,-3.297056944 ,-3.505390278 ,-2.672056944 ,-4.163723611 ,-3.988723611 ,-3.880390278 ,-2.472056944 ,-3.788723611 ]

var q = [4.952757003 ,5.061592894 ,5.023623595 ,5.023254881 ,5.109360176 ,4.895989482 ,4.915465148 ,5.045209042 ,4.954088357 ,4.953372407 ,4.971574905 ,5.047745187 ,5.087301837 ,4.988810347 ,4.93414984 ,4.929891751 ,4.826089356 ,4.826130581 ,4.842110964 ,4.814102974 ,4.886207641 ,4.909617181 ,4.858795036 ,4.923006726 ,4.996087905 ,4.929845108 ,4.92375109 ,5.042998299 ,5.004107126 ,4.992242779 ,4.97764967 ,4.95160076 ,4.971739794 ,4.978028916 ,5.094398021 ,5.042643742 ,5.107807782 ,5.035778559 ,4.96226432 ,5.072170603 ,4.990506522 ,5.039539655 ,4.994926513 ,4.984838135 ,5.174461171 ,5.217250608 ,5.151683378 ,5.290793323 ,5.401629467 ,5.275442436 ,5.411056595 ,5.25635279 ,5.204912753 ,5.208130801 ,5.287601009 ,5.177182603 ,5.269872716 ,5.377697076 ,5.269594798 ,5.232893357 ,5.251640125 ,5.19616298 ,5.124074792 ,5.155824073 ,5.259087551 ,5.302511238 ,5.537019832 ,5.454990704 ,5.90309104 ,5.746605056 ,5.538646091 ,5.699028247 ,5.427262941 ,5.348627679 ,5.333308098 ,5.44832261 ,5.359417285 ,5.343234975 ,5.332556397 ,5.533024181 ,5.688687125 ,5.465349963 ,5.516978977 ,5.444039859 ,5.42361703 ,5.458943274 ,5.476333462 ,5.487473232 ,5.401864226 ,5.307207838 ,5.551632519 ,5.63649761 ,5.11981053 ,5.210446169 ,5.193497967 ,5.162595807 ,5.451715642 ,5.543923401 ,5.533309924 ,5.40721144 ,5.275806856 ,5.415820218 ,5.413749739 ,5.101181974 ,5.246152308 ,5.110501154 ,5.204677952 ,5.338294387 ,5.16323628 ,5.172077631 ,5.106529609 ,5.13876382 ,5.181209491 ,5.148869742 ,5.029378434 ,5.060753845 ,4.835602791 ,4.948957483 ,4.977252264 ,4.962188986 ,4.95375011 ,5.033687672 ,5.005458523 ,5.425640145 ,5.226797229 ,5.349517624 ,4.985932284 ,5.119344508 ,5.25847508 ,5.293844192 ,5.310820154 ,5.142478416 ,5.09313207 ,4.894813636 ,5.301808917 ,5.43389475 ,5.353311991 ,5.293179101 ,5.417821914 ,4.86409859 ,4.826071453 ,4.821414387 ,4.920674015 ,5.117414724 ,5.227745455 ,5.037453903 ,5.150190019 ,5.223357534 ,4.971342719 ,5.071771943 ,5.210299188 ,5.212139049 ,5.058607675 ,4.984069563 ,5.172922311 ]

var r = [78.5850045 ,78.82420966 ,78.74189101 ,78.74108576 ,78.92609751 ,78.45618437 ,78.50070165 ,78.78883517 ,78.58799164 ,78.58638546 ,78.62708334 ,78.79432543 ,78.87927589 ,78.66535589 ,78.54309371 ,78.53346006 ,78.29356893 ,78.29366617 ,78.33123936 ,78.26522903 ,78.43369662 ,78.48737005 ,78.37021411 ,78.51784927 ,78.68144002 ,78.53335444 ,78.51953903 ,78.78404501 ,78.69911119 ,78.67294753 ,78.64060187 ,78.58240899 ,78.62745069 ,78.64144477 ,78.89438104 ,78.78327639 ,78.9228151 ,78.76837333 ,78.6063022 ,78.84693121 ,78.66910864 ,78.77654282 ,78.67887624 ,78.65655787 ,79.06203964 ,79.14960971 ,79.01485222 ,79.29692363 ,79.51161763 ,79.26650155 ,79.529486 ,79.22843083 ,79.12450233 ,79.13106207 ,79.29061121 ,79.0676507 ,79.2554213 ,79.46598365 ,79.25486782 ,79.18127833 ,79.2189912 ,79.10662695 ,78.95711526 ,79.02346014 ,79.23390117 ,79.32003148 ,79.76258869 ,79.61197169 ,80.38521533 ,80.12847922 ,79.76553106 ,80.04771053 ,79.56006355 ,79.41002368 ,79.38029562 ,79.59953527 ,79.43086265 ,79.39957778 ,79.37883268 ,79.7553523 ,80.02998154 ,79.63123412 ,79.72619114 ,79.59153212 ,79.55319998 ,79.61932961 ,79.65158028 ,79.67213539 ,79.51206333 ,79.32926557 ,79.78896734 ,79.93954445 ,78.94814406 ,79.13577694 ,79.10117092 ,79.03750894 ,79.60586717 ,79.77506772 ,79.75587013 ,79.52220509 ,79.26722573 ,79.5384922 ,79.5345796 ,78.90878373 ,79.20797828 ,78.9285088 ,79.12402339 ,79.38998974 ,79.03883584 ,79.05712057 ,78.92011106 ,78.98790837 ,79.07594294 ,79.00899546 ,78.75444457 ,78.82240342 ,78.31596604 ,78.57647106 ,78.63971846 ,78.60613375 ,78.58723287 ,78.76382662 ,78.70208377 ,79.55700967 ,79.16895851 ,79.41174559 ,78.65898264 ,78.94716276 ,79.23267652 ,79.30294948 ,79.33635709 ,78.99566855 ,78.89168927 ,78.45348574 ,79.31864928 ,79.57252534 ,79.4190809 ,79.30163641 ,79.54227207 ,78.38254972 ,78.2935267 ,78.28253178 ,78.51255068 ,78.94309742 ,79.17087663 ,78.7720138 ,79.01174447 ,79.16199491 ,78.62656601 ,78.84607652 ,79.13547776 ,79.13922166 ,78.81778068 ,78.65485401 ,79.05886429 ]

var s = [-0.287174349 ,-0.28805618 ,-0.28833992 ,-0.277136856 ,-0.278457904 ,-0.271057077 ,-0.275928248 ,-0.259668011 ,-0.275704916 ,-0.25820029 ,-0.267152753 ,-0.248988997 ,-0.261357501 ,-0.261929593 ,-0.279845031 ,-0.264443673 ,-0.232722668 ,-0.258418803 ,-0.260195873 ,-0.243272751 ,-0.245551628 ,-0.235400707 ,-0.243270688 ,-0.338190059 ,-0.336460069 ,-0.320341169 ,-0.328535595 ,-0.327179109 ,-0.33855572 ,-0.339826597 ,-0.317875492 ,-0.342223398 ,-0.345176644 ,-0.344049945 ,-0.331554124 ,-0.335428941 ,-0.326187462 ,-0.315480804 ,-0.294551711 ,-0.299575373 ,-0.298200401 ,-0.299636102 ,-0.309408439 ,-0.315810426 ,-0.301549492 ,-0.296914689 ,-0.300727183 ,-0.281289753 ,-0.283094079 ,-0.299713924 ,-0.301136112 ,-0.299140002 ,-0.293183494 ,-0.340553804 ,-0.31334153 ,-0.316039354 ,-0.325911651 ,-0.318680594 ,-0.329068353 ,-0.325724598 ,-0.305532627 ,-0.309975239 ,-0.307703639 ,-0.325080477 ,-0.310097311 ,-0.328993433 ,-0.342988161 ,-0.345596565 ,-0.278721866 ,-0.284524522 ,-0.330953677 ,-0.271686613 ,-0.327525346 ,-0.347553647 ,-0.350378086 ,-0.315375722 ,-0.344432354 ,-0.349935161 ,-0.34978209 ,-0.273949758 ,-0.298138488 ,-0.335266824 ,-0.346182657 ,-0.353753527 ,-0.351319584 ,-0.341991173 ,-0.346948718 ,-0.348764915 ,-0.342777175 ,-0.337845339 ,-0.267709658 ,-0.264083172 ,-0.29336185 ,-0.287464344 ,-0.268762742 ,-0.289301823 ,-0.251966032 ,-0.236424228 ,-0.240374523 ,-0.243092248 ,-0.250065639 ,-0.237675592 ,-0.259572278 ,-0.272661748 ,-0.23962358 ,-0.297321371 ,-0.284150812 ,-0.268767526 ,-0.249928367 ,-0.239509781 ,-0.251888643 ,-0.231945573 ,-0.257490439 ,-0.256838112 ,-0.224304843 ,-0.237108222 ,-0.212642799 ,-0.218068173 ,-0.238643597 ,-0.244310263 ,-0.189350509 ,-0.193694862 ,-0.173234472 ,-0.204617708 ,-0.213289758 ,-0.234765874 ,-0.164758969 ,-0.187007729 ,-0.218709978 ,-0.22529291 ,-0.210282457 ,-0.199640755 ,-0.176690937 ,-0.201874227 ,-0.228908837 ,-0.227433325 ,-0.247418037 ,-0.237965691 ,-0.216857189 ,-0.109791745 ,-0.087461337 ,-0.126006035 ,-0.040636294 ,0.010168287 ,-0.020767395 ,-0.156650869 ,-0.149881504 ,-0.138526875 ,-0.141538584 ,-0.105854194 ,-0.181620312 ,-0.172660459 ,-0.162214561 ,-0.095327718 ,-0.161280061 ]

var t = [-16.02270788 ,-16.06937285 ,-16.08438322 ,-15.49001378 ,-15.5602816 ,-15.16601089 ,-15.42568489 ,-14.55639762 ,-15.41379355 ,-14.47758739 ,-14.95741573 ,-13.98171175 ,-14.6470462 ,-14.67772451 ,-15.63401257 ,-14.81243933 ,-13.10083586 ,-14.48932416 ,-14.5847278 ,-13.67290336 ,-13.79611311 ,-13.24630653 ,-13.67279177 ,-18.68502576 ,-18.59603117 ,-17.76240169 ,-18.18719262 ,-18.11701511 ,-18.70382422 ,-18.76912701 ,-17.63418516 ,-18.89214661 ,-19.04347832 ,-18.98577588 ,-18.34315282 ,-18.54294332 ,-18.06567686 ,-17.50948521 ,-16.41242758 ,-16.67692116 ,-16.60460163 ,-16.68011406 ,-17.19250868 ,-17.52665998 ,-16.7806584 ,-16.53692769 ,-16.73746091 ,-15.71074855 ,-15.80650359 ,-16.68420548 ,-16.75894518 ,-16.65402779 ,-16.34026622 ,-18.8064711 ,-17.39794054 ,-17.53858623 ,-18.05139258 ,-17.676071 ,-18.21473929 ,-18.04170377 ,-16.98962173 ,-17.22214189 ,-17.10332203 ,-18.00833198 ,-17.22852275 ,-18.21086606 ,-18.93136134 ,-19.06497377 ,-15.57431625 ,-15.88235247 ,-18.31215151 ,-15.19960655 ,-18.13493299 ,-19.16508186 ,-19.30934261 ,-17.50400926 ,-19.00536494 ,-19.28673655 ,-19.27892268 ,-15.32029252 ,-16.60134393 ,-18.53459368 ,-19.09496609 ,-19.48141285 ,-19.35737401 ,-18.88023515 ,-19.13415169 ,-19.22697949 ,-18.92054441 ,-18.66730002 ,-14.98719428 ,-14.79313245 ,-16.34967598 ,-16.03805633 ,-15.04348163 ,-16.13525276 ,-14.14221347 ,-13.30185823 ,-13.51602142 ,-13.66313874 ,-14.03978303 ,-13.36974154 ,-14.5512589 ,-15.25162429 ,-13.47533886 ,-16.55833866 ,-15.86254208 ,-15.04373725 ,-14.03238059 ,-13.46917258 ,-14.13804405 ,-13.0585919 ,-14.43945136 ,-14.40439427 ,-12.64246753 ,-13.33896793 ,-12.00472735 ,-12.30180018 ,-13.42222716 ,-13.72901351 ,-10.72204629 ,-10.9621518 ,-9.828064776 ,-11.56410429 ,-12.04018711 ,-13.21183813 ,-9.355940534 ,-10.59240572 ,-12.33689889 ,-12.6963563 ,-11.87527828 ,-11.29013957 ,-10.02022309 ,-11.41315026 ,-12.89337246 ,-12.81301541 ,-13.89692559 ,-13.38547325 ,-12.23554893 ,-6.265508715 ,-4.998446196 ,-7.181764052 ,-2.327007861 ,0.582579877 ,-1.189713082 ,-8.903078525 ,-8.5241256 ,-7.886812377 ,-8.056051826 ,-6.042496658 ,-10.29387176 ,-9.796131408 ,-9.2139518 ,-5.44542084 ,-9.161773992 ]

var u = [274.6077124 ,274.8935825 ,274.8262742 ,274.2310995 ,274.4863791 ,273.6221953 ,273.9263865 ,273.3452328 ,274.0017852 ,273.0639729 ,273.5844991 ,272.7760372 ,273.5263221 ,273.3430804 ,274.1771063 ,273.3458994 ,271.3944048 ,272.7829903 ,272.9159672 ,271.9381324 ,272.2298097 ,271.7336766 ,272.0430059 ,277.202875 ,277.2774712 ,276.2957561 ,276.7067317 ,276.9010601 ,277.4029354 ,277.4420745 ,276.274787 ,277.4745556 ,277.670929 ,277.6272207 ,277.2375339 ,277.3262197 ,276.988492 ,276.2778585 ,275.0187298 ,275.5238524 ,275.2737103 ,275.4566569 ,275.8713849 ,276.1832178 ,275.842698 ,275.6865374 ,275.7523131 ,275.0076722 ,275.3181212 ,275.950707 ,276.2884312 ,275.8824586 ,275.4647685 ,277.9375332 ,276.6885517 ,276.6062369 ,277.3068139 ,277.1420547 ,277.4696071 ,277.2229821 ,276.2086129 ,276.3287688 ,276.0604373 ,277.0317921 ,276.4624239 ,277.5308975 ,278.69395 ,278.6769455 ,275.9595316 ,276.0108317 ,278.0776826 ,275.2473171 ,277.6949965 ,278.5751055 ,278.6896382 ,277.1035445 ,278.4362276 ,278.6863143 ,278.6577554 ,275.0756448 ,276.6313255 ,278.1658278 ,278.8211572 ,279.072945 ,278.910574 ,278.4995648 ,278.785732 ,278.8991149 ,278.4326077 ,277.9965656 ,274.7761616 ,274.7326769 ,275.29782 ,275.1738333 ,274.1446526 ,275.1727617 ,273.7480806 ,273.0769259 ,273.2718916 ,273.1853438 ,273.3070088 ,272.9082337 ,274.0858385 ,274.160408 ,272.6833171 ,275.4868475 ,274.9865655 ,274.433727 ,273.0712164 ,272.5262931 ,273.0581551 ,272.0465003 ,273.5153943 ,273.4133897 ,271.3969121 ,272.1613713 ,270.3206934 ,270.8782712 ,272.0619456 ,272.3351473 ,269.3092792 ,269.7259784 ,268.5301485 ,271.121114 ,271.2091456 ,272.6235837 ,268.0149232 ,269.5395685 ,271.5695754 ,271.9993058 ,271.2116354 ,270.2858081 ,268.9119124 ,269.866636 ,272.2120217 ,272.3855408 ,273.3160065 ,272.6871097 ,271.777821 ,264.6480584 ,263.2919729 ,265.4642958 ,260.8395585 ,258.3605175 ,260.3605897 ,267.6750923 ,267.5358701 ,267.0488073 ,266.6826178 ,264.8885732 ,269.4293495 ,268.9353531 ,268.0317325 ,264.1002748 ,268.2206383 ]

var v = [94 ,94 ,94 ,94 ,94 ,93 ,93 ,93 ,94 ,93 ,93 ,92 ,93 ,93 ,94 ,93 ,91 ,92 ,92 ,91 ,92 ,91 ,92 ,97 ,97 ,96 ,96 ,96 ,97 ,97 ,96 ,97 ,97 ,97 ,97 ,97 ,96 ,96 ,95 ,95 ,95 ,95 ,95 ,96 ,95 ,95 ,95 ,95 ,95 ,95 ,96 ,95 ,95 ,97 ,96 ,96 ,97 ,97 ,97 ,97 ,96 ,96 ,96 ,97 ,96 ,97 ,98 ,98 ,95 ,96 ,98 ,95 ,97 ,98 ,98 ,97 ,98 ,98 ,98 ,95 ,96 ,98 ,98 ,99 ,98 ,98 ,98 ,98 ,98 ,97 ,94 ,94 ,95 ,95 ,94 ,95 ,93 ,93 ,93 ,93 ,93 ,92 ,94 ,94 ,92 ,95 ,94 ,94 ,93 ,92 ,93 ,92 ,93 ,93 ,91 ,92 ,90 ,90 ,92 ,92 ,89 ,89 ,88 ,91 ,91 ,92 ,88 ,89 ,91 ,91 ,91 ,90 ,88 ,89 ,92 ,92 ,93 ,92 ,91 ,84 ,83 ,85 ,80 ,78 ,80 ,87 ,87 ,87 ,86 ,84 ,89 ,88 ,88 ,84 ,88 ]

var w = [36 ,54 ,50 ,14 ,29 ,37 ,56 ,21 ,0 ,4 ,35 ,47 ,32 ,21 ,11 ,21 ,24 ,47 ,55 ,56 ,14 ,44 ,3 ,12 ,17 ,18 ,42 ,54 ,24 ,27 ,16 ,28 ,40 ,38 ,14 ,20 ,59 ,17 ,1 ,31 ,16 ,27 ,52 ,11 ,51 ,41 ,45 ,0 ,19 ,57 ,17 ,53 ,28 ,56 ,41 ,36 ,18 ,9 ,28 ,13 ,13 ,20 ,4 ,2 ,28 ,32 ,42 ,41 ,58 ,1 ,5 ,15 ,42 ,35 ,41 ,6 ,26 ,41 ,39 ,5 ,38 ,10 ,49 ,4 ,55 ,30 ,47 ,54 ,26 ,60 ,47 ,44 ,18 ,10 ,9 ,10 ,45 ,5 ,16 ,11 ,18 ,54 ,5 ,10 ,41 ,29 ,59 ,26 ,4 ,32 ,3 ,3 ,31 ,25 ,24 ,10 ,19 ,53 ,4 ,20 ,19 ,44 ,32 ,7 ,13 ,37 ,1 ,32 ,34 ,60 ,13 ,17 ,55 ,52 ,13 ,23 ,19 ,41 ,47 ,39 ,18 ,28 ,50 ,22 ,22 ,41 ,32 ,3 ,41 ,53 ,26 ,56 ,2 ,6 ,13 ]

/*====================== List Vars =========================*/