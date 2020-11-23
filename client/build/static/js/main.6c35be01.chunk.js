(this.webpackJsonpnightin = this.webpackJsonpnightin || []).push([
  [0],
  {
    34: function (e, t, n) {
      e.exports = n(68);
    },
    39: function (e, t, n) {},
    58: function (e, t, n) {},
    64: function (e, t, n) {},
    68: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        l = n.n(a),
        r = n(31),
        c = n.n(r),
        o = n(11),
        i = n(5),
        u = n(13);
      n(39);
      var s = function (e) {
        return l.a.createElement(
          "span",
          Object.assign({ className: "delete-btn" }, e, {
            role: "button",
            tabIndex: "0",
          }),
          "\u2717"
        );
      };
      var m = function (e) {
          var t = e.children;
          return l.a.createElement(
            "div",
            {
              style: {
                height: 300,
                clear: "both",
                paddingTop: 120,
                textAlign: "center",
              },
              className: "jumbotron",
            },
            t
          );
        },
        E = n(16),
        d = n.n(E),
        f = function () {
          return d.a.get("/api/nightin");
        },
        h = function (e) {
          return d.a.get("/api/nightin/" + e);
        },
        g = function (e) {
          return d.a.delete("/api/nightin/" + e);
        };
      function v(e) {
        var t = e.fluid,
          n = e.children;
        return l.a.createElement(
          "div",
          { className: "container".concat(t ? "-fluid" : "") },
          n
        );
      }
      function p(e) {
        var t = e.fluid,
          n = e.children;
        return l.a.createElement(
          "div",
          { className: "row".concat(t ? "-fluid" : "") },
          n
        );
      }
      function b(e) {
        var t = e.size,
          n = e.children;
        return l.a.createElement(
          "div",
          {
            className: t
              .split(" ")
              .map(function (e) {
                return "col-" + e;
              })
              .join(" "),
          },
          n
        );
      }
      n(58);
      function w(e) {
        var t = e.children;
        return l.a.createElement(
          "div",
          { className: "list-overflow-container" },
          l.a.createElement("ul", { className: "list-group" }, t)
        );
      }
      function k(e) {
        var t = e.children;
        return l.a.createElement("li", { className: "list-group-item" }, t);
      }
      var N = function () {
        var e = Object(a.useState)([]),
          t = Object(u.a)(e, 2),
          n = t[0],
          r = t[1];
        function c() {
          f()
            .then(function (e) {
              return r(e.data);
            })
            .catch(function (e) {
              return console.log(e);
            });
        }
        return (
          Object(a.useEffect)(function () {
            c();
          }, []),
          l.a.createElement(
            v,
            { fluid: !0 },
            l.a.createElement(
              p,
              null,
              l.a.createElement(
                b,
                { size: "md-6 sm-12" },
                l.a.createElement(
                  m,
                  null,
                  l.a.createElement(
                    "h5",
                    null,
                    "The name of our mongo database is nightindb. In this version the data we are using is coming from a collection called nightin. This is the result of a find all on that collection. The Night collection is purely a test for connecting to a db and returning records from a collection."
                  )
                ),
                n.length
                  ? l.a.createElement(
                      w,
                      null,
                      n.map(function (e) {
                        return l.a.createElement(
                          k,
                          { key: n._id },
                          l.a.createElement(
                            o.b,
                            { to: "/nightin/" + e._id },
                            l.a.createElement("strong", null, e.title)
                          ),
                          l.a.createElement(s, {
                            onClick: function () {
                              return (
                                (t = e._id),
                                void g(t)
                                  .then(function (e) {
                                    return c();
                                  })
                                  .catch(function (e) {
                                    return console.log(e);
                                  })
                              );
                              var t;
                            },
                          })
                        );
                      })
                    )
                  : l.a.createElement("h3", null, "No Results to Display")
              )
            )
          )
        );
      };
      var j = function (e) {
        var t = Object(a.useState)({}),
          n = Object(u.a)(t, 2),
          r = n[0],
          c = n[1],
          s = Object(i.f)().id;
        return (
          Object(a.useEffect)(function () {
            h(s)
              .then(function (e) {
                return c(e.data);
              })
              .catch(function (e) {
                return console.log(e);
              });
          }, []),
          l.a.createElement(
            v,
            { fluid: !0 },
            l.a.createElement(
              p,
              null,
              l.a.createElement(
                b,
                { size: "md-12" },
                l.a.createElement(
                  m,
                  null,
                  l.a.createElement(
                    "h1",
                    null,
                    "DETAIL OF SPECIFIC RECORD IN COLLECTION"
                  )
                )
              )
            ),
            l.a.createElement(
              p,
              null,
              l.a.createElement(
                b,
                { size: "md-10 md-offset-1" },
                l.a.createElement(
                  "article",
                  null,
                  l.a.createElement("h1", null, "ID"),
                  l.a.createElement("p", null, r._id),
                  l.a.createElement("h1", null, "TITLE"),
                  l.a.createElement("p", null, r.title),
                  l.a.createElement("h1", null, "DATE"),
                  l.a.createElement("p", null, r.date)
                )
              )
            ),
            l.a.createElement(
              p,
              null,
              l.a.createElement(
                b,
                { size: "md-2" },
                l.a.createElement(o.b, { to: "/" }, "\u2190 Back to Main Page")
              )
            )
          )
        );
      };
      var O = function () {
        return l.a.createElement(
          v,
          { fluid: !0 },
          l.a.createElement(
            p,
            null,
            l.a.createElement(
              b,
              { size: "md-12" },
              l.a.createElement(
                m,
                null,
                l.a.createElement("h1", null, "404 Page Not Found"),
                l.a.createElement(
                  "h1",
                  null,
                  l.a.createElement(
                    "span",
                    {
                      role: "img",
                      "aria-label": "Face With Rolling Eyes Emoji",
                    },
                    "\ud83d\ude44"
                  )
                )
              )
            )
          )
        );
      };
      var I = function () {
          return l.a.createElement(
            "nav",
            { className: "navbar navbar-expand-lg navbar-dark" },
            l.a.createElement(
              "a",
              { className: "navbar-brand", href: "/" },
              "Night In"
            ),
            l.a.createElement(
              "span",
              { className: "nav-item" },
              l.a.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "Sign Up"
              )
            ),
            l.a.createElement(
              o.b,
              { to: "/login" },
              l.a.createElement("strong", null, "Log In")
            )
          );
        },
        y = n(12),
        C = n(33);
      n(64);
      function L() {
        var e = Object(a.useState)(""),
          t = Object(u.a)(e, 2),
          n = t[0],
          r = t[1],
          c = Object(a.useState)(""),
          o = Object(u.a)(c, 2),
          i = o[0],
          s = o[1];
        return l.a.createElement(
          "div",
          { className: "Login" },
          l.a.createElement(
            y.a,
            {
              onSubmit: function (e) {
                e.preventDefault();
              },
            },
            l.a.createElement(
              y.a.Group,
              { size: "lg", controlId: "email" },
              l.a.createElement(y.a.Label, null, "Email"),
              l.a.createElement(y.a.Control, {
                autoFocus: !0,
                type: "email",
                value: n,
                onChange: function (e) {
                  return r(e.target.value);
                },
              })
            ),
            l.a.createElement(
              y.a.Group,
              { size: "lg", controlId: "password" },
              l.a.createElement(y.a.Label, null, "Password"),
              l.a.createElement(y.a.Control, {
                type: "password",
                value: i,
                onChange: function (e) {
                  return s(e.target.value);
                },
              })
            ),
            l.a.createElement(
              C.a,
              {
                block: !0,
                size: "lg",
                type: "submit",
                disabled: !(n.length > 0 && i.length > 0),
              },
              "Login"
            )
          )
        );
      }
      var z = function () {
          return l.a.createElement(
            o.a,
            null,
            l.a.createElement(
              "div",
              null,
              l.a.createElement(I, null),
              l.a.createElement(
                i.c,
                null,
                l.a.createElement(
                  i.a,
                  { exact: !0, path: ["/", "/nightin"] },
                  l.a.createElement(N, null)
                ),
                l.a.createElement(
                  i.a,
                  { exact: !0, path: "/nightin/:id" },
                  l.a.createElement(j, null)
                ),
                l.a.createElement(
                  i.a,
                  { exact: !0, path: "/login" },
                  l.a.createElement(L, null)
                ),
                l.a.createElement(i.a, null, l.a.createElement(O, null))
              )
            )
          );
        },
        T = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function x(e) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var t = e.installing;
              t.onstatechange = function () {
                "installed" === t.state &&
                  (navigator.serviceWorker.controller
                    ? console.log("New content is available; please refresh.")
                    : console.log("Content is cached for offline use."));
              };
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      c.a.render(l.a.createElement(z, null), document.getElementById("root")),
        (function () {
          if ("serviceWorker" in navigator) {
            if (new URL("", window.location).origin !== window.location.origin)
              return;
            window.addEventListener("load", function () {
              var e = "".concat("", "/service-worker.js");
              T
                ? (function (e) {
                    fetch(e)
                      .then(function (t) {
                        404 === t.status ||
                        -1 ===
                          t.headers.get("content-type").indexOf("javascript")
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : x(e);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(e)
                : x(e);
            });
          }
        })();
    },
  },
  [[34, 1, 2]],
]);
//# sourceMappingURL=main.6c35be01.chunk.js.map
