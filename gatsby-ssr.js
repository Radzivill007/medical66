const React = require("react");

const yandexMetrika = {
  __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(80566777, "init", {
         clickmap:true,
         trackLinks:true,
         accurateTrackBounce:true,
         webvisor:true
    });`,
};

export const onRenderBody = (
  { setPostBodyComponents, setPreBodyComponents, setHeadComponents },
  pluginOptions,
) => {
  setPreBodyComponents([
    <script dangerouslySetInnerHTML={yandexMetrika} />,
    <div>
      <img
        src="https://mc.yandex.ru/watch/80566777"
        style={{ position: "absolute", left: "-9999px" }}
      />
    </div>,
  ]);
};
