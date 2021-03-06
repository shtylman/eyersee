var Widget = require('bamboo').widgets.Widget;
var App = require('bamboo').core.App;

var JoinServer = function(parent, element) {
    JoinServer.super.call(this, parent, element);
    var self = this;

    var ui = App.ui('ui/servers')(self);

    var join = function() {

        // hide the join server panel
        self.hide();

        // TODO read from some input box
        var host = 'irc.freenode.net';
        var username = ui.username.value();

        chrome.storage.sync.set({'nick': username}, function() {
            // ??
        });

        self.emit('connect', host, username);
    };

    chrome.storage.sync.get('nick', function(obj) {
        if (!obj.nick) {
            return;
        }

        ui.username.value(obj.nick);
    });

    ui['connect-form'].on('submit', join);
    ui.connect.on('click', join);
};
Widget.extend(JoinServer);

module.exports = JoinServer;

