var React = require('react');

var TextView = React.createClass({

    render :function(){
        return (
           <div id="text">
               <div id="summary">
                   <p className="page" data-page="1">1. Vivamus semper dignissim lacinia. Mauris placerat ante nibh, eget fermentum lorem suscipit a. Curabitur pretium venenatis justo, et viverra felis faucibus ac. Aliquam at sem augue. Aenean tincidunt mi libero, vel gravida dolor finibus eu. In porttitor leo sed elementum venenatis. Aliquam laoreet sapien consequat elementum ullamcorper. Mauris venenatis aliquam ultricies.</p>
                   <p className="page" data-page="2">2. Cras elementum, augue sit amet lobortis dignissim, purus diam feugiat risus, vel condimentum leo nisl at nibh. Nam luctus a est et tempus. Phasellus aliquam nisl urna, sed aliquet metus cursus nec. Sed nibh mauris, maximus ac pellentesque id, venenatis a diam. Morbi facilisis nibh non urna volutpat semper. Ut egestas fringilla nulla et facilisis. Mauris sit amet libero vulputate, interdum arcu eu, mattis purus. Quisque nec nulla et augue sodales porta eget in leo. Sed lobortis arcu a massa varius, sed accumsan est ullamcorper. Sed nibh arcu, iaculis vel pretium ac, imperdiet eu lacus. Donec commodo mollis tristique. Praesent et eros facilisis, eleifend dolor sed, eleifend libero. Nullam quis efficitur quam, a tempor eros. Donec id fermentum dui. Ut vulputate lacus ut mauris placerat pharetra nec sed lacus. Proin porttitor orci id dui ultrices posuere fringilla in urna.</p>
                   <p className="page" data-page="3">3. Maecenas nibh leo, laoreet ut erat ornare, sagittis porta eros. Cras efficitur mattis lectus, quis laoreet velit suscipit ut. In finibus magna at felis tristique bibendum. Suspendisse hendrerit tincidunt lacus, at ullamcorper diam tempor vel. Donec et cursus neque. Sed id tristique neque. Vestibulum egestas volutpat justo, non sollicitudin velit vehicula a. Nulla porta pharetra nunc, vitae interdum nulla commodo eu. In ac massa purus. Nulla suscipit nisl arcu, nec ullamcorper lorem dignissim ut. Fusce at faucibus libero, eget vulputate erat. Nunc consequat vulputate semper. Fusce ut felis porta, iaculis felis a, congue magna.</p>
                   <p className="page" data-page="4">4. Quisque imperdiet nunc id erat dictum efficitur. Sed blandit diam est, sit amet pharetra justo placerat ac. Cras tristique mauris eu nulla mattis, ut interdum odio commodo. Quisque pulvinar mattis augue et aliquet. Fusce gravida dui a risus euismod pharetra eu eget tortor. Suspendisse facilisis magna posuere mi rhoncus, ut posuere lectus convallis. In orci erat, tincidunt quis justo vitae, accumsan rutrum ante.</p>
                   <p className="page" data-page="5">5. Vivamus sed posuere quam, in fringilla lacus. Duis id suscipit mi. Nullam consequat sodales nisl vel cursus. Donec tellus diam, ullamcorper vitae elementum id, malesuada sed metus. Cras ut est imperdiet, bibendum orci vitae, ornare arcu. In ut sodales eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sed nulla et lorem luctus auctor. Sed magna dolor, porta sed neque sed, semper vehicula justo. Mauris vel cursus lacus. Suspendisse consectetur auctor velit, at interdum nisi feugiat a. Integer consectetur sit amet arcu sed consequat. Nunc at pulvinar odio, in bibendum elit. Aenean eget ligula iaculis, consectetur nisl at, dapibus nisi.</p>
                   <p className="page" data-page="6">6. Nunc bibendum efficitur neque. Vestibulum elit libero, elementum id consequat quis, dictum non risus. Phasellus non dolor congue nisi laoreet semper a quis tellus. Fusce suscipit leo vitae massa finibus auctor. Phasellus tempor metus at mi scelerisque faucibus. Aenean et purus cursus, porta justo ac, vulputate lorem. Morbi sodales enim nibh, ut gravida purus faucibus id. Curabitur vitae diam eu ipsum lacinia finibus vel nec ipsum. Etiam at tellus risus.</p>
               </div>
          </div>
        )
    }

});

module.exports = TextView;