module HoverPopover
  module Rails
    if defined? ::Rails::Engine
      require 'hover_popover/engine'
    elsif defined? ::Sprockets
      require 'hover_popover/sprockets'
    end
  end
end
