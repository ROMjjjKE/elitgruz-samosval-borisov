<section class="cont" id="contacts"><div class="wrap cgrid">
  <div>
    <span class="mark" style="color:#b6c78a">Связь</span>
    <h2 style="color:#f4f3ee;margin-bottom:16px">Скажите адрес и объём — назову рейс и цену</h2>
    <a class="ph" href="tel:+375297658266">+375 29 765-82-66</a><br>
    <a class="ph" href="tel:+375447492079">+375 44 749-20-79</a>
    <p style="margin-top:16px">ЧУП «ЭлитГруз», Борисов. Самосвал 20–30 тонн, вывоз строительного мусора и грунта, демонтаж зданий и сооружений по всей Беларуси.</p>
    <div class="hero-cta">
      <a class="btn btn-ink" style="background:#b6c78a;color:#20232a" href="https://wa.me/375297658266" target="_blank" rel="noopener">Написать в WhatsApp</a>
      <a class="btn btn-ghost" style="color:#e9e8e3;border-color:rgba(255,255,255,.3)" href="tel:+375447492079">Второй номер</a>
    </div>
  </div>
  <div class="cbox">
    <b>Что указать в звонке</b>
    <p>Адрес объекта, что вывозим или разбираем, примерный объём и есть ли подъезд для самосвала.</p>
    <p>Если это демонтаж — скажите материал стен и этажность: от этого зависит способ разборки и цена.</p>
  </div>
</div></section>
</main>
<footer><div class="wrap frow">
  <span>ЧУП «ЭлитГруз» · Борисов · самосвал 20–30 т</span>
  <span><a href="tel:+375297658266">+375 29 765-82-66</a> · <a href="tel:+375447492079">+375 44 749-20-79</a></span>
</div></footer>
<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pin=document.getElementById('demontazh');
  var layers=[['l-roof',0],['l-top',.28],['l-mid',.56],['l-base',.8]];
  var items=[].slice.call(document.querySelectorAll('#stList li'));
  var fill=document.getElementById('barFill'), txt=document.getElementById('progressTxt'), dust=document.getElementById('dust');
  function apply(p){
    layers.forEach(function(l){
      var g=document.getElementById(l[0]); if(!g) return;
      var k=Math.min(1, Math.max(0, (p - l[1]) / .2));
      g.style.opacity=(1-k).toFixed(3);
    });
    dust.style.opacity=Math.min(1,p*1.2).toFixed(2);
    fill.style.width=(p*100).toFixed(1)+'%';
    txt.textContent=Math.round(p*100)+'%';
    var k2 = p<.25?0:(p<.5?1:(p<.75?2:3));
    items.forEach(function(li,i){ li.classList.toggle('on', i===k2); });
  }
  if(reduce){ apply(1); return; }
  apply(0);
  var raf=false;
  function upd(){
    raf=false;
    var r=pin.getBoundingClientRect(), span=r.height-innerHeight;
    apply(span>0?Math.min(1,Math.max(0,-r.top/span)):1);
  }
  addEventListener('scroll',function(){ if(!raf){raf=true;requestAnimationFrame(upd);} },{passive:true});
  addEventListener('resize',upd); upd();
})();
</script>
</body>
</html>
