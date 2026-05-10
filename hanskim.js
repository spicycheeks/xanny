<script id="mixed-tracker">
(function(w,d,s,l,i){

  // =========================
  // GTM INIT
  // =========================
  w[l]=w[l]||[];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event:'gtm.js'
  });

  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s);

  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i;
  f.parentNode.insertBefore(j,f);

  // =========================
  // CLICK TRACKING
  // =========================
  d.addEventListener('click', function(e){

    var el = e.target.closest('a, button, img, [onclick]');

    if(!el) return;

    var rect = el.getBoundingClientRect();

    var data = {

      event: 'all_click',

      element_tag: el.tagName || '',
      element_text: (el.innerText || el.alt || el.title || '').trim().substring(0,100),
      element_url: el.href || '',
      element_id: el.id || '',
      element_class: el.className || '',

      click_x: e.clientX,
      click_y: e.clientY,

      viewport_w: w.innerWidth,
      viewport_h: w.innerHeight,

      element_top: Math.round(rect.top),
      element_left: Math.round(rect.left),
      element_width: Math.round(rect.width),
      element_height: Math.round(rect.height)

    };

    w[l].push(data);

  }, {passive:true});

  // =========================
  // SCROLL DEPTH
  // =========================
  var marks = [25,50,75,100];
  var triggered = {};

  w.addEventListener('scroll', function(){

    var scrollTop = w.scrollY;
    var docHeight = d.documentElement.scrollHeight - w.innerHeight;

    if(docHeight <= 0) return;

    var percent = Math.round((scrollTop / docHeight) * 100);

    marks.forEach(function(mark){

      if(percent >= mark && !triggered[mark]){

        triggered[mark] = true;

        w[l].push({
          event: 'scroll_depth',
          scroll_percent: mark
        });

      }

    });

  }, {passive:true});

})(window,document,'script','dataLayer','GTM-NFPSBDQD');
</script>