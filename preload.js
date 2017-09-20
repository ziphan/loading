($ => {

  class Preload {
    constructor(imgs, opts) {
      this.imgs = [...imgs];
      this.options = Object.assign({}, this.DEFAULTS, opts);
      this.DEFAULTS = {
        each: null,
        all: null
      };
      this.unoredered();
    }

    // 无序加载
    unoredered() {
      let count = 0;
      this.imgs.forEach((item) => {
        const img = new Image();
        img.addEventListener('load', () => {
          count++;
        });
        img.src = item;
      });
      document.title = `${count + 1}/${this.imgs.length}`;
    }
  }

  $.extend({
    preload(imgs, opts) {
      new Preload(imgs, opts);
    }
  })
})(jQuery);