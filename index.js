// Declare Variables
let horizonHeight = window.innerHeight / 1.75;
let skyHeight = window.innerHeight - horizonHeight;

// Declare Functions
function newImage(source, pleft, pbottom){
    let object = document.createElement('img');
    object.src = source;
    object.style.position = 'fixed';
    object.style.left = pleft + 'px';
    object.style.bottom = pbottom + 'px';
    document.body.append(object);

    return object;
};

function newItem(source, pleft, pbottom){
    let object = newImage(source, pleft, pbottom);
    object.addEventListener('dblclick', function(){object.remove()});
};

function newTile(source, pleft, pbottom, pheight){
    for(x=0; x<(window.innerWidth/100);x++){
        for(y=0; y<pheight/100; y++){
        newImage(source, (pleft+(x*100)), pbottom+(y*100));
        };
    };
};

// Invoke Functions
newTile('assets/sky.png', 0, horizonHeight, skyHeight);

newTile('assets/grass.png', 0, 0, horizonHeight);

newImage('assets/green-character.gif', 100, 100);

newImage('assets/pine-tree.png', 450, 200);

newImage('assets/tree.png', 200, 300 );

newImage('assets/pillar.png', 350, 100);

newImage('assets/crate.png', 150, 200);

newImage('assets/well.png', 500, 425);

newItem('assets/sword.png', 500, 405);

newItem('assets/shield.png', 165, 185);

newItem('assets/staff.png', 600, 100);