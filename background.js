chrome.app.runtime.onLaunched.addListener(function(launch_data) {
    chrome.app.window.create('main.html', {
        id: 'eyersee',
        type: 'shell'
    });
});
