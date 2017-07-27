if (typeof Zepto === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires Zepto')
}

+function ($) {
  var version = $.fn.Zepto.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires Zepto version')
  }
}(Zepto);