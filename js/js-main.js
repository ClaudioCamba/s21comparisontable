// You need to add the javascript functionality for your test here so it will work live on the page 

// Variation Selector
var rad = document.querySelectorAll('.cg-content-variation input');
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this.value === 'popup') {
            console.log('pop');
            $('#pznmyModal').addClass('pzn-pop-up');
            $('.pzn-screensize .pzn-sec-row-spec img[alt=sign]').attr('src', 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/canvas/comparison-grid/Screen-icon-black.png?$ORIGIN_PNG$');
        } else {
            console.log('page');
            $('#pznmyModal').removeClass('pzn-pop-up');
            $('.pzn-screensize .pzn-sec-row-spec img[alt=sign]').attr('src', 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/canvas/comparison-grid/Screen-icon-white.png?$ORIGIN_PNG$');
        };
    });
};

// Visitor devices
var pznYourDevices = {
    's9': {
        'name': 'Galaxy S9',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S9.png?$ORIGIN_PNG$',
        'frontCam': '8MP',
        'rearCam': '12MP(W) / 12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '1440p @30fps',
        'zoom': '8x Digital Zoom',
        'size': '5.8x2.7"',
        'weight': '163g',
        'screenSize': '5.8"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'batSize': '3000mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'storage': '64GB / 128GB / 256GB',
        'ram': '4GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Rear fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    's9plus': {
        'name': 'Galaxy S9+',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S9Plus.png?$ORIGIN_PNG$',
        'frontCam': '8MP',
        'rearCam': '12MP(W) / 12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '1440p @30fps',
        'zoom': '2x Optical zoom',
        'size': '6.2x2.9"',
        'weight': '189g',
        'screenSize': '6.2"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'batSize': '3500mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'storage': '64GB / 256GB',
        'ram': '6GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Rear fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    's10': {
        'name': 'Galaxy S10',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S10.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '16MP(UW) / 12MP(W)<br>12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '2160p@60fps',
        'zoom': '2x Optical zoom<br>10x Digital zoom',
        'size': '6.1 x 2.7"',
        'weight': '157g',
        'screenSize': '6.1"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '3400mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB / 512GB',
        'ram': '8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    's105g': {
        'name': 'Galaxy S10 5G',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S10Plus5G.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '16MP(UW) / 12MP(W)<br>12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps<br>4K@30fps',
        'zoom': '2x Optical zoom',
        'size': '6.4 x 3.0"',
        'weight': '198g',
        'screenSize': '6.7"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4500mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB / 512GB',
        'ram': '8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    's20': {
        'name': 'Galaxy S20',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S20.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '12MP(UW) / 12MP(W)<br>64MP(T) / DepthVision',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps<br>8K@24fps',
        'zoom': '3x Optical zoom<br>30 x Digital zoom',
        'size': '6.0 x 2.7"',
        'weight': '163g',
        'screenSize': '6.2"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4000mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB',
        'ram': '8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    's20plus': {
        'name': 'Galaxy S20+',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S20Plus.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '12MP(UW) / 12MP(W)<br>64MP(T) / DepthVision',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps<br>8K@24fps',
        'zoom': '3x Optical zoom<br>30 x Digital zoom',
        'size': '6.0x2.7"',
        'weight': '163g',
        'screenSize': '6.2"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4000mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB',
        'ram': '12GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    's20fe': {
        'name': 'Galaxy S20 FE',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S20FE.png?$ORIGIN_PNG$',
        'frontCam': '32MP',
        'rearCam': '12MP(UW) / 12MP(W)<br>8MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps',
        'zoom': '3x Optical zoom',
        'size': '6.2x2.9"',
        'weight': '190g',
        'screenSize': '6.5"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4500mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB / 256GB',
        'ram': '6GB / 8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    's20ultra': {
        'name': 'Galaxy S20 Ultra',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/S20Ultra.png?$ORIGIN_PNG$',
        'frontCam': '40MP',
        'rearCam': '108MP(UW) / 12MP(W)<br>48MP(T) / DepthVision',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps<br>8K@24fps',
        'zoom': '10x Hybrid Optic zoom<br>100x Space zoom (Digital)',
        'size': '6.5x2.9"',
        'weight': '220g',
        'screenSize': '6.9"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '5000mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB / 512GB',
        'ram': '12GB / 16GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    'note9': {
        'name': 'Galaxy Note9',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/Note9.png?$ORIGIN_PNG$',
        'frontCam': '8MP',
        'rearCam': '12MP(W) / 12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '2160p @60fps',
        'zoom': '2x Optical zoom',
        'size': '6.4x3.0"',
        'weight': '201g',
        'screenSize': '6.4"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'batSize': '4000mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'storage': '128GB / 512GB',
        'ram': '6GB / 8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'fingScan': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'otherBio': '3D face scanning)',
        'encryption': 'Knox'
    },
    'note10': {
        'name': 'Galaxy Note10',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/Note10.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '16MP(UW) / 12MP(W)<br>12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '2160p @30/60fps',
        'zoom': '2x Optical zoom<br>10x Digital zoom',
        'size': '5.9 x 2.8"',
        'weight': '168g',
        'screenSize': '6.3"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '3500mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB',
        'ram': '8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'encryption': 'Knox'
    },
    'note10plus': {
        'name': 'Galaxy Note10+',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/Note10Plus.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '16MP(UW) / 12MP(W)<br>12MP(T) / DepthVision',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '2160p @30fps',
        'zoom': '2x Optical zoom<br>10x Digital zoom',
        'size': '6.4x3.0"',
        'weight': '196g',
        'screenSize': '6.8"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4300mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB / 512GB',
        'ram': '12GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'encryption': 'Knox'
    },
    'note10plus5g': {
        'name': 'Galaxy Note10+ 5G',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/Note10Plus5G.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '16MP(UW) / 12MP(W)<br>12MP(T) / DepthVision',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '2160p @30/60fps',
        'zoom': '2x Optical zoom<br>10x Digital zoom',
        'size': '6.4x3.0"',
        'weight': '198g',
        'screenSize': '6.8"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4300mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB / 512GB',
        'ram': '12GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'encryption': 'Knox'
    },
    'note20': {
        'name': 'Galaxy Note20',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/Note20.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '12MP(UW) / 12MP(W)<br>64MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps<br>8K@24fps',
        'zoom': '3x Hybrid Optical Zoom<br>30x Space Zoom (Digital)',
        'size': '6.4 x 3.0"',
        'weight': '198g',
        'screenSize': '6.7"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4300mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB',
        'ram': '8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    'note20ultra': {
        'name': 'Galaxy Note20 Ultra',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/Note20Ultra.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '108MP(UW) / 12MP(W)<br>40MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps<br>8K@24fps',
        'zoom': '5x Optical Zoom<br>50x Space Zoom (Digital)',
        'size': '6.5 x 3.0"',
        'weight': '213g',
        'screenSize': '6.9"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4500mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB / 512GB',
        'ram': '12GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    'zflip': {
        'name': 'Galaxy Z Flip 5G',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/ZFlip.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '12MP(UW) / 12MP(W)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': '4K@30/60fps<br>1080p@60/240fps<br>720p@960fps',
        'zoom': '8x Digital Zoom',
        'size': '6.5x2.9"',
        'weight': '183g',
        'screenSize': '6.7"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '3300mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'storage': '256GB',
        'ram': '8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    'zfold': {
        'name': 'Galaxy Z Fold2 5G',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/ZFold2.png?$ORIGIN_PNG$',
        'frontCam': '10MP',
        'rearCam': '12MP(UW) / 12MP(W)<br>12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'vidRes': 'UHD 4K @60fps<br>960p@HD<br>240fps @FHD',
        'zoom': '2x Optical zoom<br>10x Digital zoom',
        'size': '6.3 x 4.6"',
        'weight': '282g',
        'screenSize': '7.6"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'batSize': '4235mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB',
        'ram': '12GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Ultrasonic fingerprint scanner',
        'otherBio': 'Face scanning',
        'encryption': 'Knox'
    },
    'lo12max': {
        'name': 'iPhone 12 Max',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/iphone12ProMax.png?$ORIGIN_PNG$',
        'frontCam': '12MP',
        'rearCam': '12MP(UW) / 12MP(W)<br>12MP(T) / TrueDepth',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '4K',
        'zoom': '5x Optical zoom<br>7x Digital zoom ',
        'size': '6.3 x 3.1"',
        'weight': '226g',
        'screenSize': '6.7"',
        'infinityO': 'Notch',
        'batSize': '3987mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'storage': '128GB / 256GB / 512GB',
        'ram': '6GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'otherBio': 'Iris and 3D face scanning',
        'encryption': 'iOS 14'
    },
    'p40proplus': {
        'name': 'Huawei P40 Pro+',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/P40ProPlus.png?$ORIGIN_PNG$',
        'frontCam': '32MP',
        'rearCam': '40MP(UW) / 50MP(W)<br>8MP(T) / 8MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '4K@60fps',
        'zoom': '10x Optical zoom ',
        'size': '6.2 x 2.8"',
        'weight': '226g',
        'screenSize': '6.5"',
        'infinityO': 'Notch',
        'batSize': '4200mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '512GB',
        'ram': '8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Fingerprint sensor',
        'otherBio': '3D face scanning',
        'encryption': 'EMUI 10.1'
    },
    'p40pro': {
        'name': 'Huawei P40 Pro',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/P40Pro.png?$ORIGIN_PNG$',
        'frontCam': '32MP',
        'rearCam': '40MP(UW) / 50MP(W)<br>12MP(T)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '4K@30/60fps',
        'zoom': '10x Optical zoom ',
        'size': '6.2 x 2.8"',
        'weight': '209g',
        'screenSize': '6.5"',
        'infinityO': 'Notch',
        'batSize': '4200mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '256GB',
        'ram': '12GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Fingerprint sensor',
        'otherBio': '3D face scanning',
        'encryption': 'EMUI 10.1'
    },
    'prolite5g': {
        'name': 'Huawei P40 Lite 5G',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/ProLite5G.png?$ORIGIN_PNG$',
        'frontCam': '16MP',
        'rearCam': '8MP(UW) / 48MP(W)<br>2MP(M) / 2MP(B)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '1080@30fps',
        'zoom': '6x Digital zoom',
        'size': '6.2 x 3.0"',
        'weight': '183g',
        'screenSize': '6.4"',
        'infinityO': 'Notch',
        'batSize': '4200mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB',
        'ram': '6GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Fingerprint sensor',
        'otherBio': '3D face scanning',
        'encryption': 'EMUI 10.1'
    },
    'p30pro': {
        'name': 'Huawei P30 Pro',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/P30Pro.png?$ORIGIN_PNG$',
        'frontCam': '32MP',
        'rearCam': '40MP(W) / 8MP(PT)<br>20MP(UW)>',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '4K@30fps<br>1080p@60fps',
        'zoom': '5x optical zoom',
        'size': '6.2 x 2.9"',
        'weight': '192g',
        'screenSize': '6.5"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'batSize': '4200mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB / 256GB / 512GB',
        'ram': '6GB / 8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Fingerprint',
        'otherBio': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'encryption': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">'
    },
    'mate20pro': {
        'name': 'Huawei Mate20 Pro',
        'img': 'https://images.samsung.com/is/image/samsung/p5/uk/pzn/toolkit2021/pct-pju/Mate20Pro.png?$ORIGIN_PNG$',
        'frontCam': '24MP',
        'rearCam': '40MP(W) / 8MP(T)<br>20MP(UW)',
        'singleTake': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'vidRes': '4K@30fps<br>1080p@60fps<br>1080p@30fps',
        'zoom': '3x optical zoom',
        'size': '6.2 x 2.8"',
        'weight': '189g',
        'screenSize': '6.39"',
        'infinityO': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'batSize': '4200mAh<br>(typical)*',
        'supFastCharg': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'powerShare': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'storage': '128GB / 256GB',
        'ram': '6GB / 8GB',
        'sim': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/tick.png?$ORIGIN_JPG">',
        'ready5G': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'spen': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">',
        'fingScan': 'Fingerprint',
        'otherBio': 'Face scanning',
        'encryption': '<img alt="sign" src="https://images.samsung.com/is/image/samsung/p5/uk/pzn/hubble/comparison_grid/close.png?$ORIGIN_JPG">'
    },
};

// Accordion function ----------------------------------------------------------
function pznAccordion() {
    var pznAcc = document.getElementsByClassName("pznaccordion");
    var i;

    for (i = 0; i < pznAcc.length; i++) {
        pznAcc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var pznpanel = this.nextElementSibling;
            if (pznpanel.classList.contains("pzn-open")) {
                pznpanel.style.maxHeight = null;
                pznpanel.classList.remove("pzn-open");
            } else {
                pznpanel.style.maxHeight = pznpanel.scrollHeight + "px";
                pznpanel.classList.add("pzn-open");
            };
        });
    };
};

// Update spec -----------------------------------------------------------------
function pznSpecUpdate() {
    //console.log($('.slick-active img').attr('alt'));
    $('.pzn-comp-device h3').text($('.slick-active img').attr('alt'));
    $('.pzn-name .pzn-sec-row-spec:nth-of-type(2) span').html($('.slick-active img').attr('alt'));
    // Colors
    $('.pzn-colours').empty();
    var pznHold1 = $('.slick-active img').attr('col');
    pznHold1 = pznHold1.split(",");
    for (var o = 0; o < pznHold1.length; o++) {
        var pznColelem = pznHold1[o].split(" | ");
        //console.log(pznColelem);
        if (o === 0) {
            $('.pzn-colours').append('<div class="pzn-col-wrap"><button img="' + pznColelem[1] + '"><span class="pzn-col-title">' + $('.slick-active img').attr('alt') + '</span><span class="pzn-col-bar" style="background:' + pznColelem[0] + '"></span><span class="pzn-col-name">' + pznColelem[2] + '</span></button></div>');
        } else {
            $('.pzn-colours').append('<div class="pzn-col-wrap"><button img="' + pznColelem[1] + '"><span class="pzn-col-bar" style="background:' + pznColelem[0] + '"></span><span class="pzn-col-name">' + pznColelem[2] + '</span></button></div>');
        };

    };

    //console.log($('.slick-active img').attr('frontcamera'));
    $('.pzn-frontcamera .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('frontcamera'));
    //console.log($('.slick-active img').attr('rearcamera'));
    $('.pzn-rearcamera .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('rearcamera'));
    //console.log($('.slick-active img').attr('singletake'));
    $('.pzn-singletake .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="' + $('.slick-active img').attr('singletake') + '">');
    //console.log($('.slick-active img').attr('videores'));
    $('.pzn-videores .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('videores'));
    //console.log($('.slick-active img').attr('zoom'));
    $('.pzn-zoom .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('zoom'));
    //console.log($('.slick-active img').attr('size'));
    $('.pzn-size .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('size') + '"');
    //console.log($('.slick-active img').attr('weight'));
    $('.pzn-weight .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('weight'));
    //console.log($('.slick-active img').attr('screensize'));
    $('.pzn-screensize .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('screensize') + '"');
    //console.log($('.slick-active img').attr('infinity'));
    $('.pzn-infinity .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="' + $('.slick-active img').attr('infinity') + '">');
    //console.log($('.slick-active img').attr('battery'));
    $('.pzn-battery .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('battery'));
    //console.log($('.slick-active img').attr('fastcharge'));
    $('.pzn-fastcharge .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="' + $('.slick-active img').attr('fastcharge') + '">');
    //console.log($('.slick-active img').attr('powershare'));
    $('.pzn-powershare .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="' + $('.slick-active img').attr('powershare') + '">');
    //console.log($('.slick-active img').attr('storage'));
    $('.pzn-storage .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('storage'));
    //console.log($('.slick-active img').attr('ram'));
    $('.pzn-ram .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('ram'));
    //console.log($('.slick-active img').attr('sim'));
    $('.pzn-sim .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="' + $('.slick-active img').attr('sim') + '">');
    //console.log($('.slick-active img').attr('5gready'));
    $('.pzn-5gready .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="' + $('.slick-active img').attr('fiveg') + '">');
    // console.log($('.slick-active img').attr('spen'));
    $('.pzn-spen .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="' + $('.slick-active img').attr('spen') + '">');
    //console.log($('.slick-active img').attr('fingerscan'));
    $('.pzn-fingerscan .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('fingerscan'));
    //console.log($('.slick-active img').attr('otherbio'));
    $('.pzn-otherbio .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('otherbio'));
    //console.log($('.slick-active img').attr('encrypt'));
    $('.pzn-encrypt .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('encrypt'));
};

// Slider Function -------------------------------------------------------------
function pznSlider() {
    if (!$('.pznmodal-body').hasClass('pzn-carousel')) {
        // Swiper functionality
        $('.cwiper-wrapper').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true
        });
        $('.pznmodal-body').addClass('pzn-carousel');
    };
    // On swipe event
    $('.cwiper-wrapper').on('afterChange', function(event, slick, direction) {
        console.log(direction);
        setTimeout(function() {
            pznSpecUpdate();
            pznColSelector();
            pznColReset();
            pznScreenSize();
            addEditableClass();
        }, 500);
    });
    //});
};
// Color reset -----------------------------------------------------------------
function pznColReset() {
    var pznColAct = $('.pzn-col-wrap button');
    for (var s = 0; s < pznColAct.length; s++) {
        if ($('.slick-active img').attr('src') === $(pznColAct[s]).attr('img')) {
            $(pznColAct[s]).removeClass('pzn-activ');
            $(pznColAct[s]).addClass('pzn-activ');
        };
    };
};

// Colour select function ------------------------------------------------------
function pznColSelector() {
    $('.pzn-col-wrap button').unbind('click');
    $('.pzn-col-wrap button').bind('click', function() {
        $('.pzn-col-wrap button').removeClass('pzn-activ');
        $(this).addClass('pzn-activ');
        $('.slick-active img').attr('src', $(this).attr('img'));
    });
};
// Screen Dynamic --------------------------------------------------------------
function pznScreenSize() {
    var pznscreen1 = parseFloat($('.pzn-screensize .pzn-sec-row-spec span').eq(0).text()),
        pznscreen2 = parseFloat($('.pzn-screensize .pzn-sec-row-spec span').eq(1).text());
    if (pznscreen1 > pznscreen2) {
        $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
        $('.pzn-screensize .pzn-sec-row-spec').eq(0).addClass('pzn-biggr');
    } else if (pznscreen1 < pznscreen2) {
        $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
        $('.pzn-screensize .pzn-sec-row-spec').eq(1).addClass('pzn-biggr');
    } else if (pznscreen1 === pznscreen2) {
        $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
    };
};
// Onload functions
// pznModaltop();
// pznCompModal();
// pznSlider();
// pznSpecUpdate();
// pznAccordion();
// pznColSelector();
// pznColReset();
// pznScreenSize();
// Calling Functions -----------------------------------------------------------
function pznTK21Inner() {
    pznAccordion();
    pznSlider();
    pznSpecUpdate();
    pznColSelector();
    pznColReset();
    pznScreenSize();
    console.log('func6');
};

var pznTK21Swiper = setInterval(function() {
    console.log('Check');
    if (window.$) {
        console.log('Cleared');
        clearInterval(pznTK21Swiper);
        pznTK21Inner();
    };
}, 100);

// Replace JavaScript code in script tag here with your test JavaScript code 

function optionControl() {
    console.log(pznYourDevices[document.getElementById("devicehandle").value]);

    // Name
    $('.pzn-your-device .pzn-title h3, .pzn-name .pzn-sec-row-spec:nth-of-type(1) span').text(pznYourDevices[document.getElementById("devicehandle").value].name);
    //$('.pzn-name .pzn-sec-row-spec:nth-of-type(1) span').text();
    $('.pzn-your-device .pzn-img img').attr('alt', pznYourDevices[document.getElementById("devicehandle").value].name);
    // Device Image
    $('.pzn-your-device .pzn-img img').attr('src', pznYourDevices[document.getElementById("devicehandle").value].img);
    // Front Camera
    $('.pzn-frontcamera .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].frontCam);
    // Rear Camera
    $('.pzn-rearcamera .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].rearCam);
    // Single Take
    $('.pzn-singletake .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].singleTake);
    // Video Resolution
    $('.pzn-videores .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].vidRes);
    // Zoom
    $('.pzn-zoom .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].zoom);
    // Device Size
    $('.pzn-size .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].size);
    // Weight
    $('.pzn-weight .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].weight);
    // Screen Size
    $('.pzn-screensize .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].screenSize);
    // Infinity Display
    $('.pzn-infinity .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].infinityO);
    // Battery size
    $('.pzn-battery .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].batSize);
    // Fast Charging
    $('.pzn-fastcharge .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].supFastCharg);
    // Wireless Powershare
    $('.pzn-powershare .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].powerShare);
    // Internal Storage
    $('.pzn-storage .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].storage);
    // Internal ram
    $('.pzn-ram .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].ram);
    // Dual / Hybrid SIM
    $('.pzn-sim .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].sim);
    // 5G Connectivity
    $('.pzn-5gready .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].ready5G);
    // S-pen
    $('.pzn-spen .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].ready5G);
    // Fingerprint
    $('.pzn-fingerscan .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].fingScan);
    // Other Bio
    $('.pzn-otherbio .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].otherBio);
    // Encryption
    $('.pzn-encrypt .pzn-sec-row-spec:nth-of-type(2) span').html(pznYourDevices[document.getElementById("devicehandle").value].encryption);

    addEditableClass();
};

/* Add tracking and links overlay */
var toolTipPosition, copyPoz;
var getCTA, getAccordian;

function addTrackingLinks() {
    jQuery('.pznaccordion').addClass("tooltip");
    jQuery('.pzn-comp-grid-cta').addClass("addlinks");
    jQuery('<label class="tooltiptext addTrackingText">[Click Me] Update Text & Add Tracking</label>').appendTo(".tooltip");
    jQuery('<label class="tooltiptext addLinkText">[Click Me] Add Links & Tracking</label>').appendTo(".addlinks");

    /* Evenet Handler for tracking/links pop up */
    jQuery(".tooltiptext.addTrackingText").on("click", function() {
        getAccordian = jQuery(this);
        jQuery('.tracking-container').show();
        toolTipPosition = $('.tooltiptext.addTrackingText').index(this);
        console.log('tooltip:' + toolTipPosition);
        copyPoz = $(this).parent().index() / 2;
        console.log(copyPoz);
    });

    jQuery(".tooltiptext.addLinkText").on("click", function() {
        getCTA = jQuery(this).parent();
        jQuery('.editLink-container').show();
        toolTipPosition = $('.tooltiptext.addLinkText').index(this);
        console.log(jQuery(".test-code .pzn-comp-grid-cta a").eq(toolTipPosition));
    });
};

addTrackingLinks();
optionControl();
/* Additional Input field functionality */
function addInputLightBox() {
    var pznSecTest1;
    var pznSecTest2;
    var pznBtnTest1;
    var pznBtnTest2;
    /* Event Handlers for Lightbox Edit Link */
    jQuery(".editLink-container .save-btn").on("click", function() {
        jQuery('.editLink-container').hide();

        for (var v = 0; v < jQuery(".test-code .pzn-comp-grid-cta a").length; v++) {

            // Text
            if (jQuery(".editLink-container .get-text").val().length > 0) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).text(jQuery(".editLink-container .get-text").val());
            };

            // Link
            if (jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-href-link") == undefined && jQuery(".editLink-container .get-link").val().length < 1) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-href-link", "https://www.samsung.com/uk/smartphones/galaxy-s21-5g/buy/");
            } else if (jQuery(".editLink-container .get-link").val().length > 0) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-href-link", jQuery(".editLink-container .get-link").val());
            } else if (jQuery(".editLink-container .get-link").val().length < 1 && jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-href-link").length > 0) {
                // nothing
            } else {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-href-link", "https://www.samsung.com/uk/smartphones/galaxy-s21-5g/buy/");
            };

            // Event
            if (jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-event") == undefined && jQuery(".editLink-container .get-event").val().length < 1) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-event", 35);
            } else if (jQuery(".editLink-container .get-event").val().length > 0) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-event", jQuery(".editLink-container .get-event").val());
            } else if (jQuery(".editLink-container .get-event").val().length < 1 && jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-event").length > 0) {
                // nothing
            } else {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-event", 35);
            };

            // Evar
            if (jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar") == undefined && jQuery(".editLink-container .get-evar").val().length < 1) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar", 35);
            } else if (jQuery(".editLink-container .get-evar").val().length > 0) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar", jQuery(".editLink-container .get-evar").val());
            } else if (jQuery(".editLink-container .get-evar").val().length < 1 && jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar").length > 0) {
                // nothing
            } else {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar", 35);
            };

            // Desc
            if (jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar-desc") == undefined && jQuery(".editLink-container .get-evar-desc").val().length < 1) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar-desc", "galaxy-s21:highlights:comparison-grid:pre-order");
            } else if (jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar-desc") == 'galaxy-s21:highlights:comparison-grid:pre-order' && jQuery(".editLink-container .get-evar-desc").val().length > 0) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar-desc", jQuery(".editLink-container .get-evar-desc").val().replace(/[']/g, "’").replace(/["]/g, "“"));
            } else if (jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar-desc") == undefined && jQuery(".editLink-container .get-evar-desc").val().length > 0) {
                jQuery(".test-code .pzn-comp-grid-cta a").eq(v).attr("data-aa-evar-desc", jQuery(".editLink-container .get-evar-desc").val().replace(/[']/g, "’").replace(/["]/g, "“"));
            };

        };

        if (jQuery(".test-code .pzn-comp-grid-cta a").eq(toolTipPosition).attr("data-aa-evar-desc").length > 0 && jQuery(".editLink-container .get-evar-desc").val().length > 0) {
            jQuery(".test-code .pzn-comp-grid-cta a").eq(toolTipPosition).attr("data-aa-evar-desc", jQuery(".editLink-container .get-evar-desc").val().replace(/[']/g, "’").replace(/["]/g, "“"));
        };

    });
    jQuery(".editLink-container .cancel-btn").on("click", function() {
        jQuery('.editLink-container').hide();
    });

    /* Event Handlers for Lightbox Tracking */
    jQuery(".tracking-container .save-btn").on("click", function() {
        jQuery('.tracking-container').hide();

        //for(var a = 0; a < jQuery(".pznaccordion").length; a++){

        // Text
        if (jQuery(".tracking-container .get-text").val().length > 0) {
            console.log(jQuery(".tracking-container .get-text").val());
            jQuery(".pznaccordion").eq(copyPoz).find('span').text(jQuery(".tracking-container .get-text").val());
        };

        // Desc
        if (jQuery(".tracking-container .get-evar-desc").val().length < 1 && jQuery(".accordion_container").eq(a).find('.pznaccordion').eq(copyPoz).attr('data-aa-evar-desc') == undefined) {
            jQuery(".accordion_container").eq(a).find('.pznaccordion').eq(copyPoz).attr('data-aa-evar-desc', 'galaxy-s21:highlights:comparison-grid:section:' + jQuery(".accordion_container").eq(a).find('.pznaccordion').eq(copyPoz).find('.pzn-sec-title').text().toLowerCase());
        } else if (jQuery(".tracking-container .get-evar-desc").val().length < 1 && jQuery(".accordion_container").eq(a).find('.pznaccordion').eq(copyPoz).attr('data-aa-evar-desc').length > 0) {
            // nothing
        } else {
            jQuery(".accordion_container").eq(a).find('.pznaccordion').eq(copyPoz).attr('data-aa-evar-desc', jQuery(".tracking-container .get-evar-desc").val().replace(/[']/g, "’").replace(/["]/g, "“") + ':' + jQuery(".accordion_container").eq(a).find('.pznaccordion').eq(copyPoz).find('.pzn-sec-title').text().toLowerCase());
        };

        //};

        // Event
        if (jQuery(".tracking-container .get-event").val().length > 0) {
            jQuery('.accordion_container .pznaccordion').attr("data-aa-event", jQuery(".tracking-container .get-event").val());
        } else {
            jQuery('.accordion_container .pznaccordion').attr("data-aa-event", 26);
        };

        // eVar
        if (jQuery(".tracking-container .get-evar").val().length > 0) {
            jQuery('.accordion_container .pznaccordion').attr("data-aa-evar", jQuery(".tracking-container .get-evar").val());
        } else {
            jQuery('.accordion_container .pznaccordion').attr("data-aa-evar", 26);
        };
    });

    jQuery(".tracking-container .cancel-btn").on("click", function() {
        jQuery('.tracking-container').hide();
    });
};
addInputLightBox();

// Editable & Updating variable ------------------------------------------------
function addEditableClass() {
    var editableElem = [];
    jQuery(".test-code").find(".pzn-comp-top .pzn-title h3, .pzn-comp-top-title h2, .pzn-sec-row-title span, .pznmodal-footer p, .pzn-sec-row-spec span, .pzn-comp-grid-offer p").addClass("").attr("contenteditable", "true").addClass('editablecheck');
    //$('.pzn-singletake .pzn-sec-row-spec span, .pzn-screensize .pzn-sec-row-spec span, .pzn-infinity .pzn-sec-row-spec span, .pzn-fastcharge .pzn-sec-row-spec span, .pzn-powershare .pzn-sec-row-spec span, .pzn-powershare .pzn-sec-row-spec span, .pzn-5gready .pzn-sec-row-spec span, .pzn-spen .pzn-sec-row-spec span, .pzn-sim .pzn-sec-row-spec span').removeAttr('contenteditable').removeClass('editablecheck');
    jQuery(".test-code a").removeAttr("href");

    for (var u = 0; u < $('.pzn-sec-row-spec span').length; u++) {
        if ($('.pzn-sec-row-spec span').eq(u).find('img').length > 0) {
            console.log($('.pzn-sec-row-spec span').eq(u));
            $('.pzn-sec-row-spec span').eq(u).removeClass('editablecheck').removeAttr('contenteditable');
        } else {
            $('.pzn-sec-row-spec span').eq(u).addClass('editablecheck').attr('contenteditable', 'true');
        };
    };
};
addEditableClass();
// pznYourDevices[document.getElementById("devicehandle").value][$('.test-code .pzn-title h3').attr('var-update')] = $('.test-code .pzn-title h3').html();


$('[var-update]').on('blur', function() {
    //
    if ($(this).parent().parent().hasClass('pzn-your-device') || $(this).parent().parent().hasClass('pzn-name')) {
        pznYourDevices[document.getElementById("devicehandle").value][$(this).attr('var-update')] = $(this).text();
        console.log('text');
    } else {
        //pznYourDevices[document.getElementById("devicehandle").value][$(this).attr('var-update')] = $(this).html().replace(/[']/g,"&#39;").replace(/["]/g,"&#34;").replace(/[']/g,"&#39;");
        pznYourDevices[document.getElementById("devicehandle").value][$(this).attr('var-update')] = $(this).html().replace(/[']/g, "’").replace(/["]/g, "“").replace(/[']/g, "’");
        console.log('html');
    };
    optionControl();
    console.log(pznYourDevices);

});
// Update comparison spec
$('[comp-update]').on('blur', function() {
    if ($(this).parent().parent().hasClass('pzn-comp-device') || $(this).parent().parent().hasClass('pzn-name')) {
        $('.slick-active img').attr($(this).attr('comp-update'), $(this).text());
        console.log('text');
    } else {
        // $('.slick-active img').attr($(this).attr('comp-update'), $(this).html().replace(/[']/g,"&#39;").replace(/["]/g,"&#34;").replace(/[']/g,"&#39;"));
        $('.slick-active img').attr($(this).attr('comp-update'), $(this).html().replace(/[']/g, "’").replace(/["]/g, "“").replace(/[']/g, "’"));
        console.log('html');
    };
    console.log($(this).text());

    pznSpecUpdate();
});

/* Your test styling if in style tags needs to be added here within the brackets */
var s = `<style>
/* Modal =====================================================================*/
.slick-dots li button:before,
.slick-dots li.slick-active button:before {
  color: #fff!important;
}
.pznRealCTA {
  display:none!important;
}
/* Modal Content */
.pzn-pop-up .pznmodal-content {
  position: fixed;
  bottom: 0;
}
/* The Modal (background) */
.pzn-pop-up.pznmodal {
  display: none;
  position: fixed;
  z-index: 9999999;
  left: 0;
  top: 0;
  height: 100%;
}
#pznmyModal * {
    box-sizing: border-box!important;
    vertical-align: middle!important;
}
html.pznShowModal #pznmyModal {
      display: block;
}
html.pznShowModal .f_backtotop {
  display:none!important;
}
html.pznShowModal .pzn-top-btn-wrap button {
  display:none;
}
html.pznShowModal {
    overflow: hidden!important;
}
.pzn-comp-top-title {
    padding: 0 2.2222vw 11vw;
    text-align: center;
}
.pzn-comp-top-title h2 {
    font-size: 6.5VW;
    transition: 0.5s;
    font-family: 'SamsungSharpSans',arial;
    font-weight: bold !important;
    color: #fff;
}
.pzn-comp-grid-cta a {
    letter-spacing: 2px;
    font-weight: 100;
    border: 2px solid #fff;
    padding: 3VW 5VW;
    color: #fff;
    border-radius: 5px;
    font-family: "SamsungOne",arial;
    font-family: 'sssM',"SamsungOne",arial;
    font-size: 2.8666vw;
    text-transform: uppercase;
    display: inline-block;
}
.pzn-comp-grid-cta {
  display: inline-block;
      text-align: right;
      padding: 4vw 0 2vw 0;
      width: 100%;
      -webkit-box-sizing: border-box;
box-sizing: border-box;
background-color: #000;
}
.pzn-comp-grid-offer {
  display:none;
    width: 40%;
    display: inline-block;
    padding: 4vw 2vw 2vw 0;
    font-family: 'SamsungSharpSans',arial;
    font-weight: bold !important;
    font-size: 2.8666vw;
    -webkit-box-sizing: border-box;
box-sizing: border-box;
    vertical-align: middle;
        color: #fff;
        background-color: #000;
}
/* #kv-type2.bright .m_feature-kv {
      margin-bottom: 17vw;
} */
/* Launch Button */
button.pznmyBtn {
  background: #2d2926;
  color: #fff;
  padding: 2.5VW 4VW;
  border-radius: 1.6VW;
  text-transform: uppercase;
  font-size: 2.7777vw;
  margin: 0 1VW;
  font-family: 'SamsungOne';
  font-weight: bold !important;
  outline: none;
  transition: 0.5s;
  border: 1px solid #2d2926!important;
}
button.pznmyBtn:focus,
button.pznmyBtn:active,
button.pznmyBtn:hover {
    color: #2d2926;
    background: #fff;
    border: 1px solid #2d2926!important;
}
/* .f_header-inner button.pznmyBtn {
    position: relative;
    top: 307px;
    border-radius: 50px;
} */
.pzn-top-btn-wrap button {
    border-radius: 15vw;
    padding: 2vw 4vw;
}
.pzn-top-btn-wrap {
  text-align: center;
  position: relative;
  top: -70px;
  z-index: 9;
  transition: 0.5s;
}
.pzn-top-btn-wrap.pzn-position-update {
    top: 60px;
}
.s12 .mc_design .btn-area {
    width: 100%!important;
    padding: 0!important;
}
.pzn-attach-2 {
    display: none!important;
}
/* The Modal (background) */
.pznmodal {
  /* display: none; */
  /* position: fixed; */
  /* z-index: 9999999; */
  /* left: 0; */
  /* top: 0; */
  width: 100%;
  /* height: 100%; */
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 0.5s;
  animation-name: fadeIn;
  animation-duration: 0.5s;
}

/* Modal Content */
.pznmodal-content {
  /* position: fixed; */
  /* bottom: 0; */
  /* top: 77px; */
  background-color: #000;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.5s;
  animation-name: slideIn;
  animation-duration: 0.5s;
  max-height: 100%;
  overflow-y: auto;
}
.pzn-sec-row-spec td {
    padding: 1px;
}
/* The Close Button */
.pznclose {
  position: absolute;
  right: 5px;
  top: 5px;
  height: 8vw;
  width: 8vw;
  max-width: 45px;
  max-height: 45px;
  background: url(https://www.samsung.com/etc/designs/smg/global/imgs/pf/filter-sort-close.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.pznclose:hover,
.pznclose:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.pznmodal-header {
    padding: 7.25VW 0;
}

.pznmodal-body {
  padding: 0px 20px 10.6666vw;
}

.pznmodal-footer {
  background-color: #000;
  color: #eee;
  font-size: 2.1333vw;
  font-family: 'SamsungOne';
  font-weight: 100;
  margin: 2.6666vw 0;
}
span.pznclose img {
  width: 7.25VW;
}

/* Add Animation */
@-webkit-keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}

@keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}

@-webkit-keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

@keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

/* Modal Inside ==============================================================*/
/*top*/
.pzn-comp-top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
.pzn-title {
    margin-bottom: 3.125VW;
}
.pzn-title h3 {
    font-family: 'SamsungSharpSans';
    font-weight: bold !important;
    color: #fff;
    font-size: 3.3333vw;
}
.pzn-comp-top .pzn-img img {
    width: 100%;
    height: auto;
    padding-bottom:7vw;
}
.pzn-comp-device .pzn-img img {
      padding-bottom:0px!important;
}
.pzn-comp-top > div {
    max-width: 50%;
}

/*bottom*/
.pzn-sec-row {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    padding-bottom: 1.1111vw;
        background-color: #000;
}
.pzn-col-wrap .pzn-activ {
    background: #555;
}
.pzn-col-wrap button {
  width: 100%;
  padding: 7.7650vw 2.6666vw 2.6666vw;
  text-align: left;
  outline: none;
}
.pzn-col-wrap:nth-of-type(1) button {
  position: relative;
}
.pzn-sec-row .pzn-sec-row-spec img {
  width: 4.2666vw;
  height: auto;
}
.pzn-col-wrap .pzn-col-bar {
  display: block;
  height: 1.3333vw;
  max-height: 10px;
  border: 1px solid #bbb;
}
.pzn-sec-row.pzn-name .pzn-sec-row-spec {
    background: #000;
    font-weight: 900;
    color: #fff;
    font-size: 2.6666vw;
    width: 31.75%!important;
    display: flex;
    align-items: center;
    justify-content: center;
        height: unset!important;
        font-family: 'SamsungSharpSans';
        color: #fff;
}
.pzn-sec-row.pzn-name .pzn-col-bar {
    color: #888;
}
.pzn-col-wrap .pzn-col-name {
    font-size: 2.1111vw;
    font-weight: bold;
    letter-spacing: 0.2px;
    display: block;
    margin-top: 2.1333vw;
    font-family: "SamsungOne",arial;
    color: #fff;
}
span.pzn-col-title {
  font-size: 2.4VW;
      font-weight: bold;
      display: block;
      font-family: "SamsungOne",arial;
      color: #aaa;
      position: absolute;
      top: 3.1vw;
}
.pzn-sec-row.pzn-colours {
  justify-content: space-evenly;
}
.pzn-sec-row.pzn-name {
    justify-content: flex-end;
    margin-top: 2.6666vw;
}
.pzn-sec-row.pzn-colours > div {
    width: 100%;
}
.pzn-sec-row > div {
        width: 31.75%;
}
.pzn-sec-row-title {
    text-align: left;
    color: #fff;
    font-family: 'SamsungSharpSans';
    font-weight: bold !important;
    font-size: 2.8666vw;
   width: 33%!important;
}
.pzn-sec-row-spec {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #555;
  font-size: 2.2333vw;
  color: #fff;
  font-weight: 900;
  /* padding: 1.3333vw; */
  padding: 1vw;
  height: 11.6666vw;
  margin-left: 1.3333vw;
  font-family: 'SamsungOne';
}
.pzn-name .pzn-sec-row-spec:nth-of-type(1) {
    color: #aaa;
}
.pzn-screensize .pzn-sec-row-spec img {
    height: 8.8695vw;
    width: auto;
}
.pzn-screensize .pzn-sec-row-spec.pzn-biggr img {
    height: 10.8695vw!important;
  }
.pzn-screensize .pzn-sec-row-spec span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.1;
}
.pzn-screensize .pzn-sec-row-spec{
  position: relative!important;
}

/* Accordion =================================================================*/
.pznaccordion {
  color: #fff;
  cursor: pointer;
  padding: 2.5555vw 2.2222vw;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 4.5VW;
  transition: 0.5s;
  font-family: 'SamsungSharpSans';
  font-weight: bold !important;
  border-bottom: 2px solid #ccc!important;
}
.active, .pznaccordion:hover {
  /* background-color: #ccc; */
}
.pznaccordion:after {
  content: '+';
  color: #fff;
  font-weight: bold;
  float: right;
  margin-left: 5px;
  font-size: 4.5vw;
  font-family: initial;

}
.pznaccordion.active:after {
  content: "-";
  font-size: 4.5vw;
  font-family: inherit;
}
.pznpanel {
  background-color: #000;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.pznpanel.pzn-open {
    max-height: 1000px!important;
}
/* Invert */
  .pzn-pop-up .pzn-comp-top-title h2,
  .pzn-whitebg .pzn-comp-top-title h2 {
    color: #000;
  }
  .pzn-pop-up .pzn-title h3,
  .pzn-whitebg .pzn-title h3 {
    color: #000;
  }
  .pzn-pop-up .pznaccordion,
  .pzn-whitebg .pznaccordion {
    color: #000;
    background: #fff;
  }
  .pzn-pop-up .pzn-col-wrap .pzn-col-name,
  .pzn-whitebg .pzn-col-wrap .pzn-col-name {
    color: #000;
  }
  .pzn-pop-up span.pzn-col-title,
  .pzn-whitebg span.pzn-col-title {
    color: #777;
  }
  .pzn-pop-up .pzn-sec-row-title,
  .pzn-whitebg .pzn-sec-row-title {
    color: #000;
  }
  .pzn-pop-up .pzn-sec-row-spec,
  .pzn-whitebg .pzn-sec-row-spec  {
    background: #eee;
    color: #000;
  }
  .pzn-pop-up .pzn-comp-grid-cta a,
  .pzn-whitebg .pzn-comp-grid-cta a {
    border: 2px solid #000;
    color: #000;
  }
  .pzn-pop-up .pzn-name .pzn-sec-row-spec:nth-of-type(1),
  .pzn-whitebg .pzn-name .pzn-sec-row-spec:nth-of-type(1) {
    color: #777;
  }
  .pzn-pop-up .pznaccordion:after,
  .pzn-whitebg .pznaccordion:after {
      color: #000;
    }
    .pzn-pop-up .pzn-comp-grid-offer,
    .pzn-whitebg .pzn-comp-grid-offer {
    color: #000;
  }
  .pzn-pop-up .pzn-comp-grid-offer,
  .pzn-whitebg .pzn-comp-grid-offer {
    background-color: #fff;
  }
  .pzn-pop-up .tooltip .tooltiptext,
  .pzn-pop-up .addlinks .tooltiptext,
  .pzn-whitebg .tooltip .tooltiptext,
  .pzn-whitebg .addlinks .tooltiptext {
    background-color: #000 !important;
    color: #fff !important;
  }
  .pzn-pop-up .pznmodal-content,
  .pzn-whitebg .pznmodal-content {
    background-color: #fff;
  }

  .pzn-pop-up .slick-dots li button:before,
  .pzn-pop-up .slick-dots li.slick-active button:before,
  .pzn-whitebg .slick-dots li button:before,
  .pzn-whitebg .slick-dots li.slick-active button:before {
      color: #000!important;
  }

.pzn-pop-up .pzn-pop-up .pzn-sec-row,
.pzn-whitebg .pzn-pop-up .pzn-sec-row {
    background-color: #fff;
}
.pzn-pop-up .pzn-comp-grid-cta,
.pzn-whitebg .pzn-comp-grid-cta {
    background-color: #fff;
}
.pzn-pop-up .pznpanel,
.pzn-whitebg .pznpanel {
    background-color: #fff;
  }
  .pzn-pop-up .pznmodal-footer,
  .pzn-whitebg .pznmodal-footer {
      background-color: #fff;
      color: #4b4c4c;
    }
    .pzn-pop-up .pzn-sec-row.pzn-name .pzn-sec-row-spec,
    .pzn-whitebg .pzn-sec-row.pzn-name .pzn-sec-row-spec  {
    background: #fff;
    color: #000;
  }
  .pzn-pop-up .pzn-sec-row,
  .pzn-whitebg .pzn-sec-row {
    background-color: #fff;
}
.pzn-pop-up .pzn-col-wrap .pzn-activ,
.pzn-whitebg .pzn-col-wrap .pzn-activ  {
    background: #eee;
}
.pzn-pop-up .pzn-col-wrap button,
.pzn-whitebg .pzn-col-wrap button {
    background: #fff;
  }
  .pznclose {
      display: none;
    }
.pzn-pop-up .pznclose {
      display: block;
    }
/* Slick -------------------------------------------------------------------- */
#pznmyModal .slick-dotted.slick-slider {
    margin-bottom: 7vw;
}
#pznmyModal .slick-dots li button:before {
    font-size: 8px;
  }
  #pznmyModal .slick-dots li {
    margin: 0;
  }
  #pznmyModal .slick-prev:before {
    content: "<";
    /* font-size: 30px; */
    font-size:7.5vw;
  }
  #pznmyModal .slick-next:before {
    content: ">";
    /* font-size: 30px; */
    font-size:7.5vw;
  }
  #pznmyModal .slick-prev {
    left: 0;
}
#pznmyModal .slick-next {
  right: 0;
}
#pznmyModal .slick-prev:before,
#pznmyModal .slick-next:before {
    font-family: "SamsungOne",arial;
      color: #999;
}
#pznmyModal .slick-prev,
#pznmyModal .slick-next {
    z-index: 99999;
    /* height: 30px; */
    height:7.5vw;
  }
.pznmodal-footer {
  display:none;
}
</style>`;
jQuery(s).prependTo("head");

/* Keep this function for copying the code block */
function copied() {
    const el = jQuery(".code-block");
    el.select();
    document.execCommand('copy');
}
/* Keep this function for generating the code but change the values to suit your test */
function submission() {
    var cleanHTML;

    /* Add Tracking & HREF for CTA's */
    var getURL, getEvent, getEVar, getEVarDesc, getTxt;
    var getSecEvent, getSecEVar, getSecEVarDesc, getSecTxt;

    for (var t = 0; t < jQuery(".test-code .pzn-comp-grid-cta a").length; t++) {
        // Button
        if ($(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-event") != null) {
            getEvent = jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-event");
        } else {
            //getEvent = "35";
            jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-event", "35");
            getEvent = jQuery(".test-code .pzn-comp-grid-cta a").attr("data-aa-event");
        };

        if ($(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar") != null) {
            getEVar = jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar");
        } else {
            //getEVar = "35";
            jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar", "35");
            getEVar = jQuery(".test-code .pzn-comp-grid-cta a").attr("data-aa-evar");
        };

        if ($(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar-desc") != null) {
            getEVarDesc = jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar-desc");
        } else {
            //  getEVarDesc = "galaxy-s21:highlights:comparison-grid:pre-order";
            jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar-desc", "galaxy-s21:highlights:comparison-grid:pre-order");
            getEVarDesc = jQuery(".test-code .pzn-comp-grid-cta a").attr("data-aa-evar-desc");
        };

        if ($(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-href-link") != null) {
            getURL = jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-href-link");
            jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("href", getURL);
        } else {
            getURL = "https://www.samsung.com/uk/smartphones/galaxy-s21-5g/buy/";
            jQuery(".test-code .pzn-comp-grid-cta a").eq(t).attr("href", getURL);
        };

        // Section
        if ($(".pznaccordion").eq(t).attr("data-aa-event") != null) {
            getSecEvent = jQuery(".pznaccordion").eq(t).attr("data-aa-event");
        } else {
            //getEvent = "26";
            jQuery(".pznaccordion").eq(t).attr("data-aa-event", "26");
            getSecEvent = jQuery(".pznaccordion").eq(t).attr("data-aa-event");
        };

        if ($(".pznaccordion").eq(t).attr("data-aa-evar") != null) {
            getSecEVar = jQuery(".pznaccordion").eq(t).attr("data-aa-evar");
        } else {
            //getEVar = "26";
            jQuery(".pznaccordion").eq(t).attr("data-aa-evar", "26");
            getSecEVar = jQuery(".pznaccordion").eq(t).attr("data-aa-evar");
        };

        if ($(".pznaccordion").eq(t).attr("data-aa-evar-desc") != null) {
            getSecEVarDesc = jQuery(".pznaccordion").eq(t).attr("data-aa-evar-desc");
        } else {
            //  getEVarDesc = "galaxy-s21:highlights:comparison-grid:pre-order";
            jQuery(".pznaccordion").eq(t).attr("data-aa-evar-desc", "galaxy-s21:highlights:comparison-grid:section");
            getSecEVarDesc = jQuery(".pznaccordion").eq(t).attr("data-aa-evar-desc");
        };

        // Add sections title to evar descriptions
        pznBtnTest1 = $('.pznaccordion').eq(t).find('.pzn-sec-title').text().toLowerCase();
        pznBtnTest2 = $(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar-desc");
        if (pznBtnTest2.includes(pznBtnTest1) == false) {
            $(".test-code .pzn-comp-grid-cta a").eq(t).attr("data-aa-evar-desc", pznBtnTest2 + ':' + pznBtnTest1);
        };

        pznSecTest1 = $('.pznaccordion').eq(t).find('.pzn-sec-title').text().toLowerCase();
        pznSecTest2 = $('.pznaccordion').eq(t).attr("data-aa-evar-desc");
        if (pznSecTest2.includes(pznSecTest1) == false) {
            $('.pznaccordion').eq(t).attr("data-aa-evar-desc", pznSecTest2 + ':' + pznSecTest1);
        };

    };


    /* Clean up the entire HTML before getting ready to push it into Code Block */
    jQuery(".test-code").find("h5, h4, h3, h2, h1, p, span, .pzn-models td, .pznaccordion").removeClass("").removeAttr("contenteditable");
    jQuery('.tooltiptext.addTrackingText, .tooltiptext.addLinkText').remove();
    jQuery(".pznaccordion").removeClass("tooltip");
    jQuery(".pzn-comp-grid-cta").removeClass("addlinks");
    $('.accordion_body').css('display', 'none');
    $('.pznaccordion').removeClass('active');
    $('.pznpanel').removeClass('pzn-open').removeAttr('style');




    //
    // var removeAtr = ['tabindex','role', 'id', 'aria-describedby'];
    // $('.cwiper-wrapper').slick('unslick');
    // for (var v=0; v <removeAtr.length; v++){
    //   console.log(removeAtr[v]);
    //   $('.cwiper-slide').removeAttr(removeAtr[v]);
    // };
    var pznHoldSlideImg = [],
        pznSlidechk = [];
    for (var v = 1; v < $('.test-code .pzn-comp-top .pzn-img img').length; v++) {
        if (pznSlidechk.indexOf($('.test-code .pzn-comp-device .pzn-img img').eq(v).attr('alt')) < 0 && $('.test-code .pzn-comp-device .pzn-img img').eq(v).attr('alt') != undefined) {
            $('.test-code .pzn-comp-device .pzn-img img').eq(v).attr('alt');
            pznSlidechk.push($('.test-code .pzn-comp-device .pzn-img img').eq(v).attr('alt'));
            pznHoldSlideImg.push('<div class="cwiper-slide">' + $('.test-code .pzn-comp-device .pzn-img .cwiper-slide').eq(v).html() + '</div>');
            console.log($('.test-code .pzn-comp-device .pzn-img img').eq(v).attr('alt'));
        };
    };
    console.log(pznHoldSlideImg);

    $('.pznGenHTML').clone().appendTo('.test-code').addClass('pzn-copy-html');
    $('.pzn-copy-html .cwiper-container').empty().append('<div class="cwiper-wrapper">' + pznHoldSlideImg.join('') + '</div>');
    $('.pzn-copy-html .pznmodal-body').removeClass('pzn-carousel');
    $('.pzn-copy-html .pzn-sec-row-spec').removeClass('pzn-biggr');
    $('.pzn-copy-html .pzn-col-wrap button').removeClass('pzn-activ');
    $('.pznGenHTML.pzn-copy-html [contenteditable]').addClass('editable check');

    var changeAllThis = ".pzn-copy-html .editablecheck,.pzn-copy-html .pzn-comp-grid-cta a, .pzn-copy-html .pznaccordion";
    //console.log($('.pzn-copy-html [contenteditable]'))
    for (var a = 0; a < jQuery(changeAllThis).length; a++) {
        //if(jQuery(changeAllThis).eq(a).text().indexOf("'") > -1){

        jQuery(changeAllThis).eq(a).html(jQuery(changeAllThis).eq(a).html().replaceAll('<br>', "|"));
        jQuery(changeAllThis).eq(a).text(jQuery(changeAllThis).eq(a).text().replace(/[']/g, "’").replace(/["]/g, "“"));
        //jQuery(changeAllThis).eq(a).text(jQuery(changeAllThis).eq(a).text().replace(/[']/g,"&#39;").replace(/["]/g,"&#34;").replace(/[']/g,"&#39;"));
        //}
        //if(jQuery(changeAllThis).eq(a).text().indexOf('"') > -1){
        //jQuery(changeAllThis).eq(a).text(jQuery(changeAllThis).eq(a).text().replace(/["]/g,"“"));
        //};
    };

    /* Get the right selection */
    cleanHTML = jQuery(".test-code .pznGenHTML.pzn-copy-html").html();

    addEditableClass(); //turn content editable back on
    addTrackingLinks(); //turn tracking/links pop up back on

    //cleanHTML = cleanHTML.replace(/\s\s+/g, ' ');
    cleanHTML = cleanHTML.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
    /* Your test javascript code if any needs to be added here within the brackets */

    var c = `
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"><` + `/script>
    <script type="text/javascript">

    //function to send analytics data
    function sendBuyData(data) {
      s.linkTrackVars="eVar35,events";
      s.linkTrackEvents ="event35";
      s.events="event35";
      s.eVar35 = data;
      s.tl(this,'o');
    };
    //function to send analytics data
    function sendGridData(data) {
      s.linkTrackVars="eVar26,events";
      s.linkTrackEvents ="event26";
      s.events="event26";
      s.eVar26 = data;
      s.tl(this,'o');
    };


    function senaCompGrid() {
        "use strict";

        // $.getScript("https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function( data, textStatus, jqxhr ) {
        //   console.log('loaded CDN');
        // });

                          // HTML
                        var pznModalHtml ='` + cleanHTML.trim() + `';
                        pznModalHtml = pznModalHtml.replaceAll('&amp;#34;','"').replaceAll('&amp;#39;',"'");

                        //$(pznModalHtml).insertAfter('#kv-type2');
                        // Modal
                        $('#wrap').append(pznModalHtml);

                        // Modal
                        function pznCompModal() {
                          // Get the modal
                          var pznmodal = document.getElementById("pznmyModal"),
                          // Get the button that opens the modal
                              pznbtn = document.getElementById("pznmyBtn"),
                          // Get the <span> element that closes the modal
                              pznspan = document.getElementsByClassName("pznclose")[0];

                          // When the user clicks the button, open the modal


                          if (window.location.href.indexOf("/smartphones/galaxy-s21-5g") > -1) {
                            $('#design-and-display .c_btn_palette').eq(0).addClass('pznRealCTA');
                          } else if (window.location.href.indexOf("/smartphones/galaxy-s21-ultra-5g") > -1){
                            $('#colors .c_btn_palette').eq(0).addClass('pznRealCTA');
                          };
                          $(".pznRealCTA").clone().attr('id','pznMyBtn').removeClass('pznRealCTA').insertAfter(".pznRealCTA").removeClass('o_modal_controller');;

                          $('#pznMyBtn').eq(0).on('click', function(e){
                            e.preventDefault();
                            $('html').addClass('pznShowModal');
                          });

                          // When the user clicks on <span> (x), close the modal
                          pznspan.onclick = function() {
                            $('html').removeClass('pznShowModal');
                          };
                          // When the user clicks anywhere outside of the modal, close it
                          window.onclick = function(event) {
                            if (event.target == pznmodal) {
                              $('html').removeClass('pznShowModal');
                            };
                          };
                        };

                        // Accordion function
                        function pznAccordion() {
                          var pznAcc = document.getElementsByClassName("pznaccordion");
                          var i;

                          for (i = 0; i < pznAcc.length; i++) {
                            pznAcc[i].addEventListener("click", function() {
                              this.classList.toggle("active");
                              var pznpanel = this.nextElementSibling;
                              if (pznpanel.classList.contains("pzn-open")) {
                                pznpanel.style.maxHeight = null;
                                pznpanel.classList.remove("pzn-open");
                              } else {
                                pznpanel.style.maxHeight = pznpanel.scrollHeight + "px";
                                pznpanel.classList.add("pzn-open");
                              };
                            });
                          };
                        };

                        // =========================
                        // Screen Dynamic
                        function pznScreenSize() {
                          var pznscreen1 = parseFloat($('.pzn-screensize .pzn-sec-row-spec span').eq(0).text()),
                              pznscreen2 = parseFloat($('.pzn-screensize .pzn-sec-row-spec span').eq(1).text());
                            if (pznscreen1 > pznscreen2){
                              $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
                              $('.pzn-screensize .pzn-sec-row-spec').eq(0).addClass('pzn-biggr');
                            } else if (pznscreen1 < pznscreen2) {
                              $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
                              $('.pzn-screensize .pzn-sec-row-spec').eq(1).addClass('pzn-biggr');
                            } else if (pznscreen1 === pznscreen2){
                              $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
                            };
                        };

                        // =========================
                        // Update spec
                        function pznSpecUpdate() {
                          //console.log($('.slick-active img').attr('alt'));
                          $('.pzn-comp-device h3').text($('.slick-active img').attr('alt'));
                          $('.pzn-name .pzn-sec-row-spec:nth-of-type(2) span').html($('.slick-active img').attr('alt'));
                          // Colors
                          $('.pzn-colours').empty();
                          var pznHold1 = $('.slick-active img').attr('col');
                          pznHold1 = pznHold1.split(",");
                          for (var o=0;o<pznHold1.length; o++){
                            var pznColelem = pznHold1[o].split(" | ");
                            //console.log(pznColelem);
                            if (o===0) {
                            $('.pzn-colours').append('<div class="pzn-col-wrap"><button img="'+pznColelem[1]+'"><span class="pzn-col-title">'+$('.slick-active img').attr('alt')+'</span><span class="pzn-col-bar" style="background:'+pznColelem[0]+'"></span><span class="pzn-col-name">'+pznColelem[2]+'</span></button></div>');
                            } else {
                            $('.pzn-colours').append('<div class="pzn-col-wrap"><button img="'+pznColelem[1]+'"><span class="pzn-col-bar" style="background:'+pznColelem[0]+'"></span><span class="pzn-col-name">'+pznColelem[2]+'</span></button></div>');
                          };

                          };

                          //console.log($('.slick-active img').attr('frontcamera'));
                          $('.pzn-frontcamera .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('frontcamera'));
                          //console.log($('.slick-active img').attr('rearcamera'));
                          $('.pzn-rearcamera .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('rearcamera'));
                          //console.log($('.slick-active img').attr('singletake'));
                          $('.pzn-singletake .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('singletake')+'">');
                          //console.log($('.slick-active img').attr('videores'));
                          $('.pzn-videores .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('videores'));
                          //console.log($('.slick-active img').attr('zoom'));
                          $('.pzn-zoom .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('zoom'));
                          //console.log($('.slick-active img').attr('size'));
                          $('.pzn-size .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('size')+'"');
                          //console.log($('.slick-active img').attr('weight'));
                          $('.pzn-weight .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('weight'));
                          //console.log($('.slick-active img').attr('screensize'));
                          $('.pzn-screensize .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('screensize')+'"');
                          //console.log($('.slick-active img').attr('infinity'));
                          $('.pzn-infinity .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('infinity')+'">');
                          //console.log($('.slick-active img').attr('battery'));
                          $('.pzn-battery .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('battery'));
                          //console.log($('.slick-active img').attr('fastcharge'));
                          $('.pzn-fastcharge .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('fastcharge')+'">');
                          //console.log($('.slick-active img').attr('powershare'));
                          $('.pzn-powershare .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('powershare')+'">');
                          //console.log($('.slick-active img').attr('storage'));
                          $('.pzn-storage .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('storage'));
                          //console.log($('.slick-active img').attr('ram'));
                          $('.pzn-ram .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('ram'));
                          //console.log($('.slick-active img').attr('sim'));
                          $('.pzn-sim .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('sim')+'">');
                          //console.log($('.slick-active img').attr('5gready'));
                          $('.pzn-5gready .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('fiveg')+'">');
                          // console.log($('.slick-active img').attr('spen'));
                          $('.pzn-spen .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('spen')+'">');
                          //console.log($('.slick-active img').attr('fingerscan'));
                          $('.pzn-fingerscan .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('fingerscan'));
                          //console.log($('.slick-active img').attr('otherbio'));
                          $('.pzn-otherbio .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('otherbio'));
                          //console.log($('.slick-active img').attr('encrypt'));
                          $('.pzn-encrypt .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('encrypt'));
                        };

                        // Slider Function
                        function pznSlider(){
                          if (!$('.pznmodal-body').hasClass('pzn-carousel')){
                            // Swiper functionality
                            $('.cwiper-wrapper').slick({
                              dots: true,
                              infinite: true,
                              speed: 300,
                              slidesToShow: 1,
                              arrows:true,
                              adaptiveHeight: true
                            });
                            $('.pznmodal-body').addClass('pzn-carousel');
                          };
                          // On swipe event
                        $('.cwiper-wrapper').on('afterChange', function(event, slick, direction){
                          console.log(direction);
                          //pznSwiper.on('slideChange', function () {
                            setTimeout(function(){
                              pznSpecUpdate();
                              pznColSelector();
                              pznColReset();
                              pznScreenSize();
                            }, 500);
                            });
                          //});
                        };

                        function pznColReset() {
                          var pznColAct = $('.pzn-col-wrap button');
                          for (var s=0; s<pznColAct.length; s++){
                            if ($('.slick-active img').attr('src') === $(pznColAct[s]).attr('img')){
                              $(pznColAct[s]).removeClass('pzn-activ');
                              $(pznColAct[s]).addClass('pzn-activ');
                            };
                          };
                        };

                        // Colour select function
                        function pznColSelector(){
                          $('.pzn-col-wrap button').unbind('click');
                          $('.pzn-col-wrap button').bind('click', function(){
                            $('.pzn-col-wrap button').removeClass('pzn-activ');
                            $(this).addClass('pzn-activ');
                            $('.slick-active img').attr('src', $(this).attr('img'));
                          });
                        };

                        // Onload functions
                        // Modal
                        pznCompModal()
                        pznSlider();
                        pznSpecUpdate();
                        pznAccordion();
                        pznColSelector();
                        pznColReset();
                        pznScreenSize();

                        if (window.location.href.indexOf("/smartphones/galaxy-s21-ultra-5g/") > -1){
                          $('.cwiper-wrapper').slick('slickGoTo',2);
                        };

                        for (var o=0; o<$('.editablecheck').length; o++){
                          $('.editablecheck').eq(o).html($('.editablecheck').eq(o).html().replaceAll('|','<br>').replaceAll('&nbsp;','<br>'));
                        }

                        $('.pznaccordion').on('click', function(){
                          sendGridData($(this).attr('pzn-get-data'));
                        });
                        $('.pzn-comp-grid-cta a').on('click', function(){
                          sendBuyData($(this).attr('pzn-get-data'));
                        });

                        document.documentElement.style.opacity = "1"; //at the very end of the main function to lessen flicker
                        }

                        /**** Check if jQuery exists ****/
                        var gridCheckjQuery = setInterval(function() {
                        if (window.jQuery){
                            clearInterval(gridCheckjQuery); //clear interval (Always clear your timers/intervals when the task has been completed)
                            senaCompGrid(); //load main function
                        }else if(document.readyState === 'complete'){ //aditional chck in case jQuery never exists
                            document.documentElement.style.opacity = "1"; //bring back current content so page does not stay blank
                        }
                        }, 100);
                <` + `/script>`;

    var q = `
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
                <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"><` + `/script>
                <script type="text/javascript">

                //function to send analytics data
                function sendBuyData(data) {
                  s.linkTrackVars="eVar35,events";
                  s.linkTrackEvents ="event35";
                  s.events="event35";
                  s.eVar35 = data;
                  s.tl(this,'o');
                };
                //function to send analytics data
                function sendGridData(data) {
                  s.linkTrackVars="eVar26,events";
                  s.linkTrackEvents ="event26";
                  s.events="event26";
                  s.eVar26 = data;
                  s.tl(this,'o');
                };

                function senaCompGrid() {
                    "use strict";

                    // $.getScript("https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function( data, textStatus, jqxhr ) {
                    // 	console.log('loaded CDN');
                    // });

                                      // HTML
                                    var pznModalHtml ='` + cleanHTML.trim() + `';
                                    pznModalHtml = pznModalHtml.replaceAll('&amp;#34;','"').replaceAll('&amp;#39;',"'");

                                    $(pznModalHtml).insertAfter('#kv-type2');


                                    // Accordion function
                                    function pznAccordion() {
                                      var pznAcc = document.getElementsByClassName("pznaccordion");
                                      var i;

                                      for (i = 0; i < pznAcc.length; i++) {
                                        pznAcc[i].addEventListener("click", function() {
                                          this.classList.toggle("active");
                                          var pznpanel = this.nextElementSibling;
                                          if (pznpanel.classList.contains("pzn-open")) {
                                            pznpanel.style.maxHeight = null;
                                            pznpanel.classList.remove("pzn-open");
                                          } else {
                                            pznpanel.style.maxHeight = pznpanel.scrollHeight + "px";
                                            pznpanel.classList.add("pzn-open");
                                          };
                                        });
                                      };
                                    };



                                    // =========================
                                    // Screen Dynamic
                                    function pznScreenSize() {
                                      var pznscreen1 = parseFloat($('.pzn-screensize .pzn-sec-row-spec span').eq(0).text()),
                                          pznscreen2 = parseFloat($('.pzn-screensize .pzn-sec-row-spec span').eq(1).text());
                                        if (pznscreen1 > pznscreen2){
                                          $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
                                          $('.pzn-screensize .pzn-sec-row-spec').eq(0).addClass('pzn-biggr');
                                        } else if (pznscreen1 < pznscreen2) {
                                          $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
                                          $('.pzn-screensize .pzn-sec-row-spec').eq(1).addClass('pzn-biggr');
                                        } else if (pznscreen1 === pznscreen2){
                                          $('.pzn-screensize .pzn-sec-row-spec').removeClass('pzn-biggr');
                                        };
                                    };

                                    // =========================
                                    // Update spec
                                    function pznSpecUpdate() {
                                      //console.log($('.slick-active img').attr('alt'));
                                      $('.pzn-comp-device h3').text($('.slick-active img').attr('alt'));
                                      $('.pzn-name .pzn-sec-row-spec:nth-of-type(2) span').html($('.slick-active img').attr('alt'));
                                      // Colors
                                      $('.pzn-colours').empty();
                                      var pznHold1 = $('.slick-active img').attr('col');
                                      pznHold1 = pznHold1.split(",");
                                      for (var o=0;o<pznHold1.length; o++){
                                        var pznColelem = pznHold1[o].split(" | ");
                                        //console.log(pznColelem);
                                        if (o===0) {
                                        $('.pzn-colours').append('<div class="pzn-col-wrap"><button img="'+pznColelem[1]+'"><span class="pzn-col-title">'+$('.slick-active img').attr('alt')+'</span><span class="pzn-col-bar" style="background:'+pznColelem[0]+'"></span><span class="pzn-col-name">'+pznColelem[2]+'</span></button></div>');
                                        } else {
                                        $('.pzn-colours').append('<div class="pzn-col-wrap"><button img="'+pznColelem[1]+'"><span class="pzn-col-bar" style="background:'+pznColelem[0]+'"></span><span class="pzn-col-name">'+pznColelem[2]+'</span></button></div>');
                                      };

                                      };

                                      //console.log($('.slick-active img').attr('frontcamera'));
                                      $('.pzn-frontcamera .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('frontcamera'));
                                      //console.log($('.slick-active img').attr('rearcamera'));
                                      $('.pzn-rearcamera .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('rearcamera'));
                                      //console.log($('.slick-active img').attr('singletake'));
                                      $('.pzn-singletake .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('singletake')+'">');
                                      //console.log($('.slick-active img').attr('videores'));
                                      $('.pzn-videores .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('videores'));
                                      //console.log($('.slick-active img').attr('zoom'));
                                      $('.pzn-zoom .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('zoom'));
                                      //console.log($('.slick-active img').attr('size'));
                                      $('.pzn-size .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('size')+'"');
                                      //console.log($('.slick-active img').attr('weight'));
                                      $('.pzn-weight .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('weight'));
                                      //console.log($('.slick-active img').attr('screensize'));
                                      $('.pzn-screensize .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('screensize')+'"');
                                      //console.log($('.slick-active img').attr('infinity'));
                                      $('.pzn-infinity .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('infinity')+'">');
                                      //console.log($('.slick-active img').attr('battery'));
                                      $('.pzn-battery .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('battery'));
                                      //console.log($('.slick-active img').attr('fastcharge'));
                                      $('.pzn-fastcharge .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('fastcharge')+'">');
                                      //console.log($('.slick-active img').attr('powershare'));
                                      $('.pzn-powershare .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('powershare')+'">');
                                      //console.log($('.slick-active img').attr('storage'));
                                      $('.pzn-storage .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('storage'));
                                      //console.log($('.slick-active img').attr('ram'));
                                      $('.pzn-ram .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('ram'));
                                      //console.log($('.slick-active img').attr('sim'));
                                      $('.pzn-sim .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('sim')+'">');
                                      //console.log($('.slick-active img').attr('5gready'));
                                      $('.pzn-5gready .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('fiveg')+'">');
                                      // console.log($('.slick-active img').attr('spen'));
                                      $('.pzn-spen .pzn-sec-row-spec:nth-of-type(3) span').html('<img src="'+$('.slick-active img').attr('spen')+'">');
                                      //console.log($('.slick-active img').attr('fingerscan'));
                                      $('.pzn-fingerscan .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('fingerscan'));
                                      //console.log($('.slick-active img').attr('otherbio'));
                                      $('.pzn-otherbio .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('otherbio'));
                                      //console.log($('.slick-active img').attr('encrypt'));
                                      $('.pzn-encrypt .pzn-sec-row-spec:nth-of-type(3) span').html($('.slick-active img').attr('encrypt'));
                                    };

                                    // Slider Function
                                    function pznSlider(){
                                      if (!$('.pznmodal-body').hasClass('pzn-carousel')){
                                        // Swiper functionality
                                        $('.cwiper-wrapper').slick({
                                          dots: true,
                                          infinite: true,
                                          speed: 300,
                                          slidesToShow: 1,
                                          arrows:true,
                                          adaptiveHeight: true
                                        });
                                        $('.pznmodal-body').addClass('pzn-carousel');
                                      };
                                      // On swipe event
                                    $('.cwiper-wrapper').on('afterChange', function(event, slick, direction){
                                      console.log(direction);
                                      //pznSwiper.on('slideChange', function () {
                                        setTimeout(function(){
                                          pznSpecUpdate();
                                          pznColSelector();
                                          pznColReset();
                                          pznScreenSize();
                                        }, 500);
                                        });
                                      //});
                                    };

                                    function pznColReset() {
                                      var pznColAct = $('.pzn-col-wrap button');
                                      for (var s=0; s<pznColAct.length; s++){
                                        if ($('.slick-active img').attr('src') === $(pznColAct[s]).attr('img')){
                                          $(pznColAct[s]).removeClass('pzn-activ');
                                          $(pznColAct[s]).addClass('pzn-activ');
                                        };
                                      };
                                    };

                                    // Colour select function
                                    function pznColSelector(){
                                      $('.pzn-col-wrap button').unbind('click');
                                      $('.pzn-col-wrap button').bind('click', function(){
                                        $('.pzn-col-wrap button').removeClass('pzn-activ');
                                        $(this).addClass('pzn-activ');
                                        $('.slick-active img').attr('src', $(this).attr('img'));
                                      });
                                    };

                                    // Onload functions
                                    // pznModaltop();
                                    // pznCompModal();
                                    pznSlider();
                                    pznSpecUpdate();
                                    pznAccordion();
                                    pznColSelector();
                                    pznColReset();
                                    pznScreenSize();

                                    if (window.location.href.indexOf("/smartphones/galaxy-s20/") > -1 || window.location.href.indexOf("/smartphones/galaxy-s21-5g/") > -1) {
                                      $('#pznmyModal').addClass('pzn-whitebg');
                                      $('.pzn-screensize .pzn-sec-row-spec img[alt=sign]').attr('src','https://images.samsung.com/is/image/samsung/p5/uk/pzn/canvas/comparison-grid/Screen-icon-black.png?$ORIGIN_PNG$');
                                    };

                                    if (window.location.href.indexOf("/smartphones/galaxy-s21-ultra-5g/") > -1){
                                      $('.cwiper-wrapper').slick('slickGoTo',2);
                                    };

                                    for (var o=0; o<$('.editablecheck').length; o++){
                                      $('.editablecheck').eq(o).html($('.editablecheck').eq(o).html().replaceAll('|','<br>').replaceAll('&nbsp;','<br>'));
                                    }

                                    $('.pznaccordion').on('click', function(){
                                      sendGridData($(this).attr('pzn-get-data'));
                                    });
                                    $('.pzn-comp-grid-cta a').on('click', function(){
                                      sendBuyData($(this).attr('pzn-get-data'));
                                    });

                                    document.documentElement.style.opacity = "1"; //at the very end of the main function to lessen flicker
                                    }

                                    /**** Check if jQuery exists ****/
                                    var gridCheckjQuery = setInterval(function() {
                                    if (window.jQuery){
                                        clearInterval(gridCheckjQuery); //clear interval (Always clear your timers/intervals when the task has been completed)
                                        senaCompGrid(); //load main function
                                    }else if(document.readyState === 'complete'){ //aditional chck in case jQuery never exists
                                        document.documentElement.style.opacity = "1"; //bring back current content so page does not stay blank
                                    }
                                    }, 100);
                            <` + `/script>`;

    if ($('.pzn-pop-up').length > 0) {
        jQuery(".code-block").val(s + '\n' + c);
        console.log('test1');
    } else {
        jQuery(".code-block").val(s + '\n' + q);
        console.log('test2');
    };

    $('.pznGenHTML.pzn-copy-html').remove();
}
/* Find all content editable fields and change the way test is pasted into them */
for (var i = 0; i < jQuery('[contenteditable]').length; i++) {
    jQuery('[contenteditable]')[i].addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    });
};