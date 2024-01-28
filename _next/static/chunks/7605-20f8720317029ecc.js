(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7605],
    {
      9471: function (e, t, i) {
        "use strict";
        i.d(t, {
          h: function () {
            return o;
          },
        });
        var r = i(1527),
          a = i(5924),
          s = i(594),
          n = i(9090),
          l = i.n(n);
        function o(e) {
          let { images: t, inverted: i = !1 } = e;
          return (0, r.jsxs)("div", {
            className: (0, a.Z)(
              l()["double-image"],
              "layout-grid",
              i && l().inverted
            ),
            children: [
              (0, r.jsx)("div", {
                className: l().image,
                children: (0, r.jsx)(s.r, {
                  src: t[0].url,
                  alt: t[0].description || "",
                  fill: !0,
                  sizes: "(max-width: 800px) 43vw, 31vw",
                }),
              }),
              (0, r.jsx)("div", {
                className: l().image,
                children: (0, r.jsx)(s.r, {
                  src: t[1].url,
                  alt: t[1].description || "",
                  fill: !0,
                  sizes: "(max-width: 800px) 43vw, 63vw",
                }),
              }),
            ],
          });
        }
      },
      8085: function (e, t, i) {
        "use strict";
        i.d(t, {
          k: function () {
            return h;
          },
        });
        var r = i(1527),
          a = i(7936),
          s = i(5924),
          n = i(594),
          l = i(2553),
          o = i(3100),
          c = i.n(o),
          d = i(4519),
          m = i.n(d);
        let u = c()(
          () =>
            i
              .e(5721)
              .then(i.bind(i, 5721))
              .then((e) => {
                let { Parallax: t } = e;
                return t;
              }),
          { loadableGenerated: { webpack: () => [5721] }, ssr: !1 }
        );
        function _(e) {
          let { media: t, className: i, parallaxDirection: a } = e;
          return (0, r.jsx)(u, {
            speed: -0.4 * a,
            className: (0, s.Z)(m().image, i),
            children: (0, r.jsx)(n.r, {
              src: t.url,
              alt: t.description || "",
              fill: !0,
              sizes: "(max-width: 800px) 64vw, 31vw",
            }),
          });
        }
        let h = (e) => {
          let { children: t, topText: i, bottomText: n, className: o } = e,
            [c, d] = (0, a.S1)({ threshold: 0.4, once: !0 }),
            u = Array.isArray(t)
              ? t.filter((e) => e.type === _)
              : [[t].find((e) => e.type === _)];
          return (0, r.jsxs)("section", {
            className: (0, s.Z)(m()["double-marquee"], "h2", o),
            ref: c,
            children: [
              u.map((e, t) =>
                (0, r.jsx)(
                  _,
                  {
                    media: null == e ? void 0 : e.props.media,
                    className: (0, s.Z)(null == e ? void 0 : e.props.className),
                    parallaxDirection: (t % 2) * 2 - 1,
                  },
                  "media-".concat(t)
                )
              ),
              (0, r.jsx)("div", {
                className: (0, s.Z)(
                  m().box,
                  d.isIntersecting && m().appear,
                  m().top
                ),
                children: (0, r.jsx)("div", {
                  className: (0, s.Z)(
                    m()["marquee-wrapper"],
                    d.isIntersecting && m().appear
                  ),
                  children: (0, r.jsx)(l.R, {
                    className: m().marquee,
                    duration: 40,
                    children: i.map((e, t) =>
                      (0, r.jsx)(
                        "span",
                        { children: e + "\xa0" },
                        "top-marquee-item".concat(t)
                      )
                    ),
                  }),
                }),
              }),
              (0, r.jsx)("div", {
                className: (0, s.Z)(
                  m().box,
                  d.isIntersecting && m().appear,
                  m().bottom
                ),
                children: (0, r.jsx)("div", {
                  className: (0, s.Z)(
                    m()["marquee-wrapper"],
                    d.isIntersecting && m().appear
                  ),
                  children: (0, r.jsx)(l.R, {
                    className: m().marquee,
                    duration: 40,
                    inverted: !0,
                    children: n.map((e, t) =>
                      (0, r.jsx)(
                        "span",
                        { children: e + "\xa0" },
                        "top-marquee-item".concat(t)
                      )
                    ),
                  }),
                }),
              }),
            ],
          });
        };
        h.Media = _;
      },
      594: function (e, t, i) {
        "use strict";
        i.d(t, {
          r: function () {
            return c;
          },
        });
        var r = i(1527),
          a = i(7936),
          s = i(5924),
          n = i(6966),
          l = i(5163),
          o = i.n(l);
        function c(e) {
          let {
              once: t = !0,
              visible: i,
              delay: l = "0s",
              threshold: c = 0.2,
              hoverable: d = !1,
              ...m
            } = e,
            [u, _] = (0, a.S1)({ threshold: c, once: t });
          return (0, r.jsx)("div", {
            ref: u,
            className: (0, s.Z)(o().wrapper, {
              [o().visible]: void 0 === i ? _.isIntersecting : i,
              [o().hoverable]: d,
            }),
            style: { "--delay": l },
            children: (0, r.jsx)(n.E, { ...m, alt: m.alt }),
          });
        }
      },
      6966: function (e, t, i) {
        "use strict";
        i.d(t, {
          E: function () {
            return c;
          },
        });
        var r = i(1527),
          a = i(5924),
          s = i(8725),
          n = i.n(s),
          l = i(1951),
          o = i.n(l);
        function c(e) {
          let {
            className: t,
            style: i,
            loading: s = "eager",
            objectFit: l = "cover",
            quality: c = 90,
            alt: d = "",
            ...m
          } = e;
          return (0, r.jsx)(n(), {
            ...m,
            className: (0, a.Z)(o().image, t),
            style: { objectFit: l, ...i },
            loading: s,
            quality: c,
            alt: d,
            draggable: !1,
            onDragStart: () => !1,
          });
        }
      },
      2553: function (e, t, i) {
        "use strict";
        i.d(t, {
          R: function () {
            return c;
          },
        });
        var r = i(1527),
          a = i(5924),
          s = i(959),
          n = i(919),
          l = i(7197),
          o = i.n(l);
        let c = (e) => {
          let {
              children: t,
              repeat: i = 2,
              duration: l = 5,
              offset: c = 0,
              inverted: d = !1,
              className: m,
              animationStart: u = !0,
              ..._
            } = e,
            h = (0, s.useRef)(),
            p = (0, n.Z)(h, { threshold: 0 });
          return (0, r.jsx)("div", {
            ref: h,
            ..._,
            className: (0, a.Z)(
              m,
              o().marquee,
              d && o().inverted,
              (null == p ? void 0 : p.isIntersecting) && "running"
            ),
            style: {
              "--duration": l + "s",
              "--offset": (c % 100) + "%",
              "--animation-status":
                (null == p ? void 0 : p.isIntersecting) && u
                  ? "running"
                  : "paused",
            },
            children: Array(i)
              .fill(t)
              .map((e, i) =>
                (0, r.jsx)("div", { className: o().inner, children: t }, i)
              ),
          });
        };
      },
      3994: function (e, t, i) {
        "use strict";
        i.d(t, {
          M: function () {
            return m;
          },
        });
        var r = i(1527),
          a = i(5924),
          s = i(3100),
          n = i.n(s),
          l = i(6544),
          o = i.n(l);
        let c = n()(
            () =>
              i
                .e(4705)
                .then(i.bind(i, 4705))
                .then((e) => {
                  let { Button: t } = e;
                  return t;
                }),
            { loadableGenerated: { webpack: () => [4705] }, ssr: !1 }
          ),
          d = n()(() => i.e(5862).then(i.bind(i, 5862)), {
            loadableGenerated: { webpack: () => [5862] },
            ssr: !1,
          }),
          m = (e) => {
            let {
              headline: t,
              cta: i,
              icon: s,
              description: n,
              annotation: l,
              firstSubtext: m,
              secondSubtext: u,
              className: _,
              notLine: h,
            } = e;
            return (0, r.jsxs)("div", {
              className: (0, a.Z)(o()["section-header"], _),
              children: [
                (0, r.jsxs)("div", {
                  className: (0, a.Z)(
                    o().heading,
                    "layout-grid",
                    h && o().notLine
                  ),
                  children: [
                    (0, r.jsxs)("div", {
                      className: o().left,
                      children: [
                        t && (0, r.jsx)("h5", { className: "h5", children: t }),
                        (null == i ? void 0 : i.text) &&
                          (0, r.jsx)(c, {
                            icon: !!s,
                            href: i.url,
                            className: "cta hide-on-mobile ",
                            children: i.text,
                          }),
                      ],
                    }),
                    n &&
                      (0, r.jsx)("aside", {
                        className: (0, a.Z)(o().description, "p-l"),
                        children: n,
                      }),
                    i &&
                      (0, r.jsx)(c, {
                        iconDirection: !0,
                        href: i.url,
                        className: (0, a.Z)(o().cta, "cta hide-on-desktop"),
                        children: i.text,
                      }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: (0, a.Z)(o()["bottom-columns-text"], "layout-grid"),
                  children: [
                    l &&
                      (0, r.jsxs)("p", {
                        className: (0, a.Z)(o().eyebrow, "p-s"),
                        children: [(0, r.jsx)(d, {}), " ", l],
                      }),
                    m &&
                      (0, r.jsx)("p", {
                        className: (0, a.Z)(o().left, "p"),
                        children: m,
                      }),
                    u &&
                      (0, r.jsx)("p", {
                        className: (0, a.Z)(o().right, "p"),
                        children: u,
                      }),
                  ],
                }),
              ],
            });
          };
      },
      9851: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            __N_SSG: function () {
              return Z;
            },
            default: function () {
              return k;
            },
          });
        var r = i(1527),
          a = i(5924),
          s = i(594),
          n = i(8782),
          l = i(2553),
          o = i(5997),
          c = i(959),
          d = i(9059),
          m = i(8848),
          u = i.n(m);
        function _(e) {
          let { cities: t, media: i, cta: m } = e,
            _ = (0, c.useRef)(),
            h = (0, c.useRef)([]),
            { width: p } = (0, d.Z)();
          return (
            (0, c.useEffect)(() => {
              let e, t;
              let i = _.current.offsetHeight,
                r = o.ZP.matchMedia();
              return (
                h.current[0] &&
                  (e = o.ZP.timeline({
                    scrollTrigger: {
                      id: "image0",
                      trigger: _.current,
                      scrub: !0,
                      start: "top bottom",
                      end: "bottom-=".concat(i / 2, "px top"),
                      invalidateOnRefresh: !0,
                    },
                  }).to(h.current[0], {
                    y: i / 2 - h.current[0].offsetHeight,
                    ease: "none",
                  })),
                h.current[1] &&
                  (t = o.ZP.timeline({
                    scrollTrigger: {
                      id: "image1",
                      trigger: _.current,
                      scrub: !0,
                      start: "top+=".concat(i / 2, "px bottom"),
                      end: "bottom top",
                      invalidateOnRefresh: !0,
                    },
                  }).to(h.current[1], {
                    y: i / 2 - h.current[1].offsetHeight,
                    ease: "none",
                  })),
                r.add(
                  { reduceMotion: "(prefers-reduced-motion: reduce)" },
                  (i) => {
                    let { reduceMotion: r } = i.conditions;
                    r &&
                      (o.ZP.set(h.current, { clearProps: "all" }),
                      null == e || e.kill(),
                      null == t || t.kill());
                  }
                ),
                () => {
                  null == e || e.kill(), null == t || t.kill();
                }
              );
            }, [p]),
            (0, r.jsxs)("div", {
              className: (0, a.Z)(u().wrapper, "layout-block"),
              ref: _,
              children: [
                i[0].url &&
                  (0, r.jsx)("div", {
                    className: (0, a.Z)(u().image, u().top),
                    ref: (e) => {
                      h.current[0] = e;
                    },
                    children: (0, r.jsx)(s.r, {
                      src: i[0].url,
                      alt: i[0].description || "",
                      fill: !0,
                      sizes: "(max-width: 800px) 0vw, 32vw",
                    }),
                  }),
                i[1].url &&
                  (0, r.jsx)("div", {
                    className: (0, a.Z)(u().image, u().bottom),
                    ref: (e) => {
                      h.current[1] = e;
                    },
                    children: (0, r.jsx)(s.r, {
                      src: i[1].url,
                      alt: i[1].description || "",
                      fill: !0,
                      sizes: "(max-width: 800px) 0vw, 32vw",
                    }),
                  }),
                (0, r.jsxs)("ul", {
                  className: (0, a.Z)(u()["cities-lists"], "h2"),
                  children: [
                    t.map((e, t) => {
                      let { city: i, airportCode: s, linkedFrom: n } = e;
                      return (0, r.jsxs)(
                        "li",
                        {
                          className: u().item,
                          children: [
                            (0, r.jsxs)("h3", {
                              className: u().city,
                              children: [
                                i,
                                (0, r.jsx)("span", {
                                  className: (0, a.Z)(u().number, "h4"),
                                  children: s,
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: u().jobs,
                              children: (0, r.jsx)(l.R, {
                                repeat: 5,
                                duration: 10 * n.companies.items.length,
                                children: n.companies.items.map((e, t) => {
                                  let { linkedTitle: i } = e;
                                  return (0, r.jsx)(
                                    "span",
                                    { children: i },
                                    "city-".concat(i, "-").concat(t)
                                  );
                                }),
                              }),
                            }),
                          ],
                        },
                        "city-".concat(i, "-").concat(t)
                      );
                    }),
                    (0, r.jsx)("li", {
                      className: u().more,
                      children: (0, r.jsx)(n.r, {
                        href: m.url,
                        className: "link",
                        children: m.text,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var h = i(9471),
          p = i(8085),
          x = i(3994),
          b = i(679),
          f = i(818),
          g = i(3100),
          v = i.n(g),
          j = i(1880),
          N = i.n(j);
        let q = v()(
            () =>
              i
                .e(889)
                .then(i.bind(i, 889))
                .then((e) => {
                  let { LetterVideo: t } = e;
                  return t;
                }),
            { loadableGenerated: { webpack: () => [889] }, ssr: !1 }
          ),
          y = v()(
            () =>
              i
                .e(4705)
                .then(i.bind(i, 4705))
                .then((e) => {
                  let { Button: t } = e;
                  return t;
                }),
            { loadableGenerated: { webpack: () => [4705] }, ssr: !1 }
          ),
          w = v()(() => i.e(5862).then(i.bind(i, 5862)), {
            loadableGenerated: { webpack: () => [5862] },
            ssr: !1,
          });
        var Z = !0;
        function k(e) {
          let { homeData: t, theme: i, companiesByCity: n, visible: o = !0 } = e,
            c = (0, b.w)({ condition: o });
          return (
            (t.metadata.image.url = "https://drivecapital.com/og.jpg"),
            (0, r.jsxs)(f.A, {
              theme: i,
              headerAppear: { use: !0, state: c },
              metadata: t.metadata,
              scroll: c,
              children: [
                (0, r.jsxs)("section", {
                  className: (0, a.Z)(
                    N().hero,
                    "layout-block-inner",
                    c && N().appear
                  ),
                  children: [
                    t.heroHeadline.length > 0 &&
                      (0, r.jsx)("h2", {
                        className: N().headline,
                        children: t.heroHeadline.map((e, t) =>
                          (0, r.jsx)("span", { className: "h6", children: e }, t)
                        ),
                      }),
                    (0, r.jsx)("div", {
                      className: (0, a.Z)(N()["letter-video"], c && N().intro),
                      children: (0, r.jsx)(q, {
                        title: "Drive",
                        video: t.heroBackgroundVideo.url,
                      }),
                    }),
                    t.heroMarquee.length > 0 &&
                      (0, r.jsx)(l.R, {
                        duration: 6 * t.heroMarquee.length,
                        className: N().marquee,
                        children: t.heroMarquee.map((e, t) =>
                          (0, r.jsx)("p", { className: "p-s", children: e }, t)
                        ),
                      }),
                    t.heroMedia.items.length > 0 &&
                      (0, r.jsx)("div", {
                        className: (0, a.Z)(N()["image-gallery"], "layout-grid"),
                        children: t.heroMedia.items.map((e, t) => {
                          let { url: i, description: a } = e;
                          return (0, r.jsx)(
                            "div",
                            {
                              className: N().image,
                              children: (0, r.jsx)(s.r, {
                                src: i,
                                alt: a || "",
                                fill: !0,
                                sizes: "(max-width: 800px) 43vw, 32vw",
                              }),
                            },
                            "image-gallery-".concat(t)
                          );
                        }),
                      }),
                  ],
                }),
                (0, r.jsxs)("section", {
                  className: N()["story-block"],
                  children: [
                    (0, r.jsx)(x.M, {
                      className: N().heading,
                      headline: t.porfolioHeadline,
                      cta: t.portfolioCta,
                      description: t.portfolioDescription,
                    }),
                    (0, r.jsx)(_, {
                      cities: n,
                      media: [t.portfolioMediaTop, t.portfolioMediaBottom],
                      cta: t.cityListCta,
                    }),
                  ],
                }),
                (0, r.jsxs)("section", {
                  className: N()["team-block"],
                  children: [
                    (0, r.jsx)("div", {
                      className: N()["team-image"],
                      children: (0, r.jsx)(h.h, { images: t.teamMedia.items }),
                    }),
                    (0, r.jsx)(x.M, {
                      headline: t.teamHeadline,
                      cta: t.teamCta,
                      description: t.teamDescription,
                      annotation: t.teamAnnotation,
                      firstSubtext: t.teamFirstSubtext,
                      secondSubtext: t.teamSecondSubtext,
                    }),
                  ],
                }),
                (0, r.jsxs)(p.k, {
                  topText: t.marqueeTopText,
                  bottomText: t.marqueeBottomText,
                  className: N()["double-marquee"],
                  children: [
                    (0, r.jsx)(p.k.Media, {
                      media: t.marqueeMedia.items[0],
                      className: N()["top-marquee-media"],
                    }),
                    (0, r.jsx)(p.k.Media, {
                      media: t.marqueeMedia.items[1],
                      className: N()["bottom-marquee-media"],
                    }),
                  ],
                }),
                (0, r.jsx)("section", {
                  className: (0, a.Z)(N().portfolio, "layout-block"),
                  children: (0, r.jsxs)("div", {
                    className: (0, a.Z)(N().heading, "layout-grid"),
                    children: [
                      t.storyAnnotation &&
                        (0, r.jsxs)("p", {
                          className: (0, a.Z)(N().label, "p-s"),
                          children: [(0, r.jsx)(w, {}), " ", t.storyAnnotation],
                        }),
                      t.storyHeadline &&
                        (0, r.jsx)("h5", {
                          className: (0, a.Z)(N().title, "h5"),
                          children: t.storyHeadline,
                        }),
                      t.storyDescription &&
                        (0, r.jsx)("p", {
                          className: (0, a.Z)(N().description, "p-l"),
                          children: t.storyDescription,
                        }),
                      t.storyCta.text &&
                        (0, r.jsx)(y, {
                          href: t.storyCta.url,
                          className: (0, a.Z)(N().cta, "cta"),
                          children: t.storyCta.text,
                        }),
                      (0, r.jsx)("div", { className: N().line }),
                      (0, r.jsx)("div", { className: N().line }),
                    ],
                  }),
                }),
                t.storyMedia.items.length > 0 &&
                  (0, r.jsxs)("section", {
                    className: (0, a.Z)(N().prefooter, "layout-grid"),
                    children: [
                      t.storyMedia.items[0].url &&
                        (0, r.jsx)("div", {
                          className: N().image,
                          children: (0, r.jsx)(s.r, {
                            src: t.storyMedia.items[0].url,
                            alt: t.storyMedia.items[1].description || "",
                            fill: !0,
                            sizes: "(max-width: 800px) 43vw, 31vw",
                          }),
                        }),
                      t.storyMedia.items[1].url &&
                        (0, r.jsx)("div", {
                          className: N().image,
                          children: (0, r.jsx)(s.r, {
                            src: t.storyMedia.items[1].url,
                            alt: t.storyMedia.items[0].description || "",
                            fill: !0,
                            sizes: "(max-width: 800px) 43vw, 63vw",
                          }),
                        }),
                    ],
                  }),
              ],
            })
          );
        }
      },
      8848: function (e) {
        e.exports = {
          wrapper: "cities-lists_wrapper__utzVF",
          image: "cities-lists_image__LFIO8",
          top: "cities-lists_top__WHBOq",
          bottom: "cities-lists_bottom__zVTnv",
          "cities-lists": "cities-lists_cities-lists__pk_jb",
          item: "cities-lists_item__qgU8G",
          city: "cities-lists_city__i9PfA",
          number: "cities-lists_number__titZg",
          jobs: "cities-lists_jobs__2GFtX",
          more: "cities-lists_more__rOrdA",
        };
      },
      9090: function (e) {
        e.exports = {
          "double-image": "double-image_double-image__94bJF",
          image: "double-image_image__FVreX",
          inverted: "double-image_inverted__4P3aM",
        };
      },
      4519: function (e) {
        e.exports = {
          translate: "double-marquee_translate__Z0t7T",
          "double-marquee": "double-marquee_double-marquee__WILNl",
          "marquee-wrapper": "double-marquee_marquee-wrapper__eBbRW",
          box: "double-marquee_box__gwyle",
          appear: "double-marquee_appear__nD_gM",
          top: "double-marquee_top__VX2t_",
          bottom: "double-marquee_bottom__jPjFz",
          marquee: "double-marquee_marquee__arROD",
          image: "double-marquee_image__xZuLk",
        };
      },
      5163: function (e) {
        e.exports = {
          wrapper: "image-reveal_wrapper__4li7t",
          visible: "image-reveal_visible__KMVLF",
        };
      },
      1951: function (e) {
        e.exports = { image: "image_image__4ehsq" };
      },
      7197: function (e) {
        e.exports = {
          marquee: "marquee_marquee__uZGHk",
          inner: "marquee_inner__gQs45",
          inverted: "marquee_inverted__We_5q",
          "marquee-inverted": "marquee_marquee-inverted__LWJcL",
        };
      },
      6544: function (e) {
        e.exports = {
          "section-header": "section-header_section-header__FJTv7",
          heading: "section-header_heading__40nqG",
          left: "section-header_left__tT7JO",
          description: "section-header_description__zsurX",
          cta: "section-header_cta__rlcW9",
          notLine: "section-header_notLine__ByxFM",
          "bottom-columns-text": "section-header_bottom-columns-text__rfxJY",
          eyebrow: "section-header_eyebrow__SoAp0",
          right: "section-header_right__SLIvI",
        };
      },
      1880: function (e) {
        e.exports = {
          hero: "home_hero__RYBFn",
          fade: "home_fade__Gm1pD",
          appear: "home_appear__90MVm",
          headline: "home_headline__B5tOq",
          "letter-video": "home_letter-video__Awz_s",
          intro: "home_intro__y_hFE",
          marquee: "home_marquee__zJmJc",
          "image-gallery": "home_image-gallery__k7rWU",
          image: "home_image__1PHjd",
          "story-block": "home_story-block__gm2YY",
          heading: "home_heading__GeslS",
          "team-block": "home_team-block__FnnvX",
          "team-image": "home_team-image__CHpqt",
          "double-marquee": "home_double-marquee__epvXn",
          "top-marquee-media": "home_top-marquee-media__sDcfs",
          "bottom-marquee-media": "home_bottom-marquee-media__JQlpr",
          portfolio: "home_portfolio__FUEVB",
          label: "home_label__XoEDN",
          title: "home_title__U0Uwb",
          description: "home_description__jL3eB",
          cta: "home_cta__G_htL",
          line: "home_line__0_l2D",
          prefooter: "home_prefooter__WrHUi",
        };
      },
      919: function (e, t, i) {
        "use strict";
        var r = i(959);
        t.Z = function (e, t) {
          var i = (0, r.useState)(null),
            a = i[0],
            s = i[1];
          return (
            (0, r.useEffect)(
              function () {
                if (e.current && "function" == typeof IntersectionObserver) {
                  var i = new IntersectionObserver(function (e) {
                    s(e[0]);
                  }, t);
                  return (
                    i.observe(e.current),
                    function () {
                      s(null), i.disconnect();
                    }
                  );
                }
                return function () {};
              },
              [e.current, t.threshold, t.root, t.rootMargin]
            ),
            a
          );
        };
      },
    },
  ]);
  