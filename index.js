function newImage(label, source, pleft, pbottom, item){
    label = document.createElement('img');
    label.src = source;
    label.style.position = 'fixed';
    label.style.left = pleft;
    label.style.bottom = pbottom;
    document.body.append(label);

    if(item){
        newItem(label);
    }
};

function newItem(label){
    label.addEventListener('click', function(){label.remove()});
}

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px');

newImage('pineTree', 'assets/pine-tree.png', '450px', '200px');

newImage('tree', 'assets/tree.png', '200px', '300px' );

newImage('pillar', 'assets/pillar.png', '350px', '100px');

newImage('crate', 'assets/crate.png', '150px', '200px');

newImage('well', 'assets/well.png', '500px', '425px');

newImage('sword', 'assets/sword.png', '500px', '405px',1);

newImage('shield', 'assets/shield.png', '165px', '185px',1);

newImage('staff', 'assets/staff.png', '600px', '100px',1);
