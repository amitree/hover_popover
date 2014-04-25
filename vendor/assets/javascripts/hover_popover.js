+function ($) {
  'use strict';

  var HoverPopover = function (element, options) {
    this.options    =
    this.enabled    =
    this.timeout    =
    this.popover    =
    this.$element   = null

    this.init(element, options)
  }

  if (!$.fn.popover) throw new Error('Hover Popover requires popover.js')

  HoverPopover.DEFAULTS = {
    html: false,
    container: 'body',
    trigger: 'manual',
    content: '',
    title: '',
    placement: 'top',
    delay: { show: 0, hide: 400 }
  }

  HoverPopover.prototype.constructor = HoverPopover

  HoverPopover.prototype.init = function (element, options) {
    this.$element = $(element)
    this.options = this.getOptions(options)
    this.$element.popover(this.options)
    this.popover = this.$element.data('bs.popover')

    var trigger = this.options.trigger
    if (trigger == 'manual') {
      this.$element.on('mouseenter', $.proxy(this.enter, this))
      this.$element.on('mouseleave', $.proxy(this.leave, this))
    }
  }

  HoverPopover.prototype.getDefaults = function () {
    return HoverPopover.DEFAULTS
  }

  HoverPopover.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)
    return options
  }

  HoverPopover.prototype.enter = function () {
    clearTimeout(this.timeout)

    if (!this.enabled) {
      this.enabled = true
      this.popover.enter(this.popover)
      this.popover.$tip.on('mouseenter', $.proxy(this.enter, this))
      this.popover.$tip.on('mouseleave', $.proxy(this.leave, this))
    }
  }

  HoverPopover.prototype.leave = function () {
    var self = this

    clearTimeout(self.timeout)
    self.timeout = setTimeout(function () {
      self.enabled = false
      self.popover.$tip.off('mouseenter')
      self.popover.$tip.off('mouseleave')
      self.popover.leave(self.popover)
    }, self.options.delay.hide)

  };

  var old = $.fn.hoverPopover

  $.fn.hoverPopover = function(option) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('hp.hoverPopover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('hp.hoverPopover', (data = new HoverPopover(this, options)))
    })
  }

  $.fn.hoverPopover.Constructor = HoverPopover

  $.fn.hoverPopover.noConflict = function () {
    $.fn.hoverPopover = old
    return this
  }

}(jQuery);
