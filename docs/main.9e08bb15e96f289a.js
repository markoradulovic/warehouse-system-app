"use strict";
(self.webpackChunkwarehouse_system_app =
  self.webpackChunkwarehouse_system_app || []).push([
  [179],
  {
    3926: (qe, fe, I) => {
      I.d(fe, { M: () => G });
      var d = I(8256),
        P = I(529);
      class G {
        constructor(Z) {
          (this.http = Z),
            (this.productsUrl = "http://localhost:8080/api/products");
        }
        getProducts() {
          return this.http.get(this.productsUrl);
        }
        getProduct(Z) {
          return this.http.get(`${this.productsUrl}/${Z}`);
        }
        createProduct(Z) {
          return this.http.post(`${this.productsUrl}`, Z);
        }
        deleteProduct(Z) {
          return this.http.delete(`${this.productsUrl}/${Z}`);
        }
        updateProduct(Z) {
          return this.http.put(`${this.productsUrl}/${Z.id}`, Z);
        }
      }
      (G.ɵfac = function (Z) {
        return new (Z || G)(d.LFG(P.eN));
      }),
        (G.ɵprov = d.Yz7({ token: G, factory: G.ɵfac, providedIn: "root" }));
    },
    4250: (qe, fe, I) => {
      var d = I(1481),
        P = I(529),
        G = I(9751),
        X = I(1135),
        Z = I(2076),
        we = I(9646),
        ye = I(590),
        Ae = I(4351),
        Oe = I(4004),
        N = I(8256),
        oe = I(6895);
      const ge = {
        100: {
          code: 100,
          text: "Continue",
          description:
            '"The initial part of a request has been received and has not yet been rejected by the server."',
          spec_title: "RFC7231#6.2.1",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.2.1",
        },
        101: {
          code: 101,
          text: "Switching Protocols",
          description:
            '"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection."',
          spec_title: "RFC7231#6.2.2",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.2.2",
        },
        200: {
          code: 200,
          text: "OK",
          description: '"The request has succeeded."',
          spec_title: "RFC7231#6.3.1",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.3.1",
        },
        201: {
          code: 201,
          text: "Created",
          description:
            '"The request has been fulfilled and has resulted in one or more new resources being created."',
          spec_title: "RFC7231#6.3.2",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.3.2",
        },
        202: {
          code: 202,
          text: "Accepted",
          description:
            '"The request has been accepted for processing, but the processing has not been completed."',
          spec_title: "RFC7231#6.3.3",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.3.3",
        },
        203: {
          code: 203,
          text: "Non-Authoritative Information",
          description:
            '"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy."',
          spec_title: "RFC7231#6.3.4",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.3.4",
        },
        204: {
          code: 204,
          text: "No Content",
          description:
            '"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body."',
          spec_title: "RFC7231#6.3.5",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.3.5",
        },
        205: {
          code: 205,
          text: "Reset Content",
          description:
            '"The server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server."',
          spec_title: "RFC7231#6.3.6",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.3.6",
        },
        206: {
          code: 206,
          text: "Partial Content",
          description:
            '"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field."',
          spec_title: "RFC7233#4.1",
          spec_href: "https://tools.ietf.org/html/rfc7233#section-4.1",
        },
        300: {
          code: 300,
          text: "Multiple Choices",
          description:
            '"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers."',
          spec_title: "RFC7231#6.4.1",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.4.1",
        },
        301: {
          code: 301,
          text: "Moved Permanently",
          description:
            '"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."',
          spec_title: "RFC7231#6.4.2",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.4.2",
        },
        302: {
          code: 302,
          text: "Found",
          description:
            '"The target resource resides temporarily under a different URI."',
          spec_title: "RFC7231#6.4.3",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.4.3",
        },
        303: {
          code: 303,
          text: "See Other",
          description:
            '"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request."',
          spec_title: "RFC7231#6.4.4",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.4.4",
        },
        304: {
          code: 304,
          text: "Not Modified",
          description:
            '"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false."',
          spec_title: "RFC7232#4.1",
          spec_href: "https://tools.ietf.org/html/rfc7232#section-4.1",
        },
        305: {
          code: 305,
          text: "Use Proxy",
          description: "*deprecated*",
          spec_title: "RFC7231#6.4.5",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.4.5",
        },
        307: {
          code: 307,
          text: "Temporary Redirect",
          description:
            '"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI."',
          spec_title: "RFC7231#6.4.7",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.4.7",
        },
        400: {
          code: 400,
          text: "Bad Request",
          description:
            '"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."',
          spec_title: "RFC7231#6.5.1",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        },
        401: {
          code: 401,
          text: "Unauthorized",
          description:
            '"The request has not been applied because it lacks valid authentication credentials for the target resource."',
          spec_title: "RFC7235#6.3.1",
          spec_href: "https://tools.ietf.org/html/rfc7235#section-3.1",
        },
        402: {
          code: 402,
          text: "Payment Required",
          description: "*reserved*",
          spec_title: "RFC7231#6.5.2",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.2",
        },
        403: {
          code: 403,
          text: "Forbidden",
          description:
            '"The server understood the request but refuses to authorize it."',
          spec_title: "RFC7231#6.5.3",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.3",
        },
        404: {
          code: 404,
          text: "Not Found",
          description:
            '"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists."',
          spec_title: "RFC7231#6.5.4",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.4",
        },
        405: {
          code: 405,
          text: "Method Not Allowed",
          description:
            '"The method specified in the request-line is known by the origin server but not supported by the target resource."',
          spec_title: "RFC7231#6.5.5",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.5",
        },
        406: {
          code: 406,
          text: "Not Acceptable",
          description:
            '"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation."',
          spec_title: "RFC7231#6.5.6",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.6",
        },
        407: {
          code: 407,
          text: "Proxy Authentication Required",
          description:
            '"The client needs to authenticate itself in order to use a proxy."',
          spec_title: "RFC7231#6.3.2",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.3.2",
        },
        408: {
          code: 408,
          text: "Request Timeout",
          description:
            '"The server did not receive a complete request message within the time that it was prepared to wait."',
          spec_title: "RFC7231#6.5.7",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.7",
        },
        409: {
          code: 409,
          text: "Conflict",
          description:
            '"The request could not be completed due to a conflict with the current state of the resource."',
          spec_title: "RFC7231#6.5.8",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.8",
        },
        410: {
          code: 410,
          text: "Gone",
          description:
            '"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."',
          spec_title: "RFC7231#6.5.9",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.9",
        },
        411: {
          code: 411,
          text: "Length Required",
          description:
            '"The server refuses to accept the request without a defined Content-Length."',
          spec_title: "RFC7231#6.5.10",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.10",
        },
        412: {
          code: 412,
          text: "Precondition Failed",
          description:
            '"One or more preconditions given in the request header fields evaluated to false when tested on the server."',
          spec_title: "RFC7232#4.2",
          spec_href: "https://tools.ietf.org/html/rfc7232#section-4.2",
        },
        413: {
          code: 413,
          text: "Payload Too Large",
          description:
            '"The server is refusing to process a request because the request payload is larger than the server is willing or able to process."',
          spec_title: "RFC7231#6.5.11",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.11",
        },
        414: {
          code: 414,
          text: "URI Too Long",
          description:
            '"The server is refusing to service the request because the request-target is longer than the server is willing to interpret."',
          spec_title: "RFC7231#6.5.12",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.12",
        },
        415: {
          code: 415,
          text: "Unsupported Media Type",
          description:
            '"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method."',
          spec_title: "RFC7231#6.5.13",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.13",
        },
        416: {
          code: 416,
          text: "Range Not Satisfiable",
          description:
            '"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."',
          spec_title: "RFC7233#4.4",
          spec_href: "https://tools.ietf.org/html/rfc7233#section-4.4",
        },
        417: {
          code: 417,
          text: "Expectation Failed",
          description:
            '"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers."',
          spec_title: "RFC7231#6.5.14",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.14",
        },
        418: {
          code: 418,
          text: "I'm a teapot",
          description:
            '"1988 April Fools Joke. Returned by tea pots requested to brew coffee."',
          spec_title: "RFC 2324",
          spec_href: "https://tools.ietf.org/html/rfc2324",
        },
        426: {
          code: 426,
          text: "Upgrade Required",
          description:
            '"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."',
          spec_title: "RFC7231#6.5.15",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.5.15",
        },
        500: {
          code: 500,
          text: "Internal Server Error",
          description:
            '"The server encountered an unexpected condition that prevented it from fulfilling the request."',
          spec_title: "RFC7231#6.6.1",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.6.1",
        },
        501: {
          code: 501,
          text: "Not Implemented",
          description:
            '"The server does not support the functionality required to fulfill the request."',
          spec_title: "RFC7231#6.6.2",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.6.2",
        },
        502: {
          code: 502,
          text: "Bad Gateway",
          description:
            '"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request."',
          spec_title: "RFC7231#6.6.3",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.6.3",
        },
        503: {
          code: 503,
          text: "Service Unavailable",
          description:
            '"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay."',
          spec_title: "RFC7231#6.6.4",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.6.4",
        },
        504: {
          code: 504,
          text: "Gateway Time-out",
          description:
            '"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request."',
          spec_title: "RFC7231#6.6.5",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.6.5",
        },
        505: {
          code: 505,
          text: "HTTP Version Not Supported",
          description:
            '"The server does not support, or refuses to support, the protocol version that was used in the request message."',
          spec_title: "RFC7231#6.6.6",
          spec_href: "https://tools.ietf.org/html/rfc7231#section-6.6.6",
        },
        102: {
          code: 102,
          text: "Processing",
          description:
            '"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it."',
          spec_title: "RFC5218#10.1",
          spec_href: "https://tools.ietf.org/html/rfc2518#section-10.1",
        },
        207: {
          code: 207,
          text: "Multi-Status",
          description: '"Status for multiple independent operations."',
          spec_title: "RFC5218#10.2",
          spec_href: "https://tools.ietf.org/html/rfc2518#section-10.2",
        },
        226: {
          code: 226,
          text: "IM Used",
          description:
            '"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."',
          spec_title: "RFC3229#10.4.1",
          spec_href: "https://tools.ietf.org/html/rfc3229#section-10.4.1",
        },
        308: {
          code: 308,
          text: "Permanent Redirect",
          description:
            '"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET."',
          spec_title: "RFC7238",
          spec_href: "https://tools.ietf.org/html/rfc7238",
        },
        422: {
          code: 422,
          text: "Unprocessable Entity",
          description:
            '"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions."',
          spec_title: "RFC5218#10.3",
          spec_href: "https://tools.ietf.org/html/rfc2518#section-10.3",
        },
        423: {
          code: 423,
          text: "Locked",
          description:
            '"The source or destination resource of a method is locked."',
          spec_title: "RFC5218#10.4",
          spec_href: "https://tools.ietf.org/html/rfc2518#section-10.4",
        },
        424: {
          code: 424,
          text: "Failed Dependency",
          description:
            '"The method could not be performed on the resource because the requested action depended on another action and that action failed."',
          spec_title: "RFC5218#10.5",
          spec_href: "https://tools.ietf.org/html/rfc2518#section-10.5",
        },
        428: {
          code: 428,
          text: "Precondition Required",
          description:
            '"The origin server requires the request to be conditional."',
          spec_title: "RFC6585#3",
          spec_href: "https://tools.ietf.org/html/rfc6585#section-3",
        },
        429: {
          code: 429,
          text: "Too Many Requests",
          description:
            '"The user has sent too many requests in a given amount of time ("rate limiting")."',
          spec_title: "RFC6585#4",
          spec_href: "https://tools.ietf.org/html/rfc6585#section-4",
        },
        431: {
          code: 431,
          text: "Request Header Fields Too Large",
          description:
            '"The server is unwilling to process the request because its header fields are too large."',
          spec_title: "RFC6585#5",
          spec_href: "https://tools.ietf.org/html/rfc6585#section-5",
        },
        451: {
          code: 451,
          text: "Unavailable For Legal Reasons",
          description:
            '"The server is denying access to the resource in response to a legal demand."',
          spec_title: "draft-ietf-httpbis-legally-restricted-status",
          spec_href:
            "https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status",
        },
        506: {
          code: 506,
          text: "Variant Also Negotiates",
          description:
            '"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."',
          spec_title: "RFC2295#8.1",
          spec_href: "https://tools.ietf.org/html/rfc2295#section-8.1",
        },
        507: {
          code: 507,
          text: "Insufficient Storage",
          description:
            'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."',
          spec_title: "RFC5218#10.6",
          spec_href: "https://tools.ietf.org/html/rfc2518#section-10.6",
        },
        511: {
          code: 511,
          text: "Network Authentication Required",
          description:
            '"The client needs to authenticate to gain network access."',
          spec_title: "RFC6585#6",
          spec_href: "https://tools.ietf.org/html/rfc6585#section-6",
        },
      };
      class Qe {}
      class at {}
      let wt = (() => {
        class ce {
          constructor(T = {}) {
            Object.assign(
              this,
              {
                caseSensitiveSearch: !1,
                dataEncapsulation: !1,
                delay: 500,
                delete404: !1,
                passThruUnknownUrl: !1,
                post204: !0,
                post409: !1,
                put204: !0,
                put404: !1,
                apiBase: void 0,
                host: void 0,
                rootPath: void 0,
              },
              T
            );
          }
        }
        return (
          (ce.ɵfac = function (T) {
            return new (T || ce)(N.LFG(at));
          }),
          (ce.ɵprov = N.Yz7({ token: ce, factory: ce.ɵfac })),
          ce
        );
      })();
      class Ce {
        constructor(F, T = {}) {
          (this.inMemDbService = F),
            (this.config = new wt()),
            (this.db = {}),
            (this.requestInfoUtils = this.getRequestInfoUtils());
          const O = this.getLocation("/");
          (this.config.host = O.host),
            (this.config.rootPath = O.path),
            Object.assign(this.config, T);
        }
        get dbReady() {
          return (
            this.dbReadySubject ||
              ((this.dbReadySubject = new X.X(!1)), this.resetDb()),
            this.dbReadySubject.asObservable().pipe((0, ye.P)((F) => F))
          );
        }
        handleRequest(F) {
          return this.dbReady.pipe((0, Ae.b)(() => this.handleRequest_(F)));
        }
        handleRequest_(F) {
          const T = F.urlWithParams ? F.urlWithParams : F.url,
            O = this.bind("parseRequestUrl"),
            ue = (O && O(T, this.requestInfoUtils)) || this.parseRequestUrl(T),
            Se = ue.collectionName,
            je = this.db[Se],
            Ke = {
              req: F,
              apiBase: ue.apiBase,
              collection: je,
              collectionName: Se,
              headers: this.createHeaders({
                "Content-Type": "application/json",
              }),
              id: this.parseId(je, Se, ue.id),
              method: this.getRequestMethod(F),
              query: ue.query,
              resourceUrl: ue.resourceUrl,
              url: T,
              utils: this.requestInfoUtils,
            };
          let st;
          if (/commands\/?$/i.test(Ke.apiBase)) return this.commands(Ke);
          const Je = this.bind(Ke.method);
          if (Je) {
            const bt = Je(Ke);
            if (bt) return bt;
          }
          return this.db[Se]
            ? this.createResponse$(() => this.collectionHandler(Ke))
            : this.config.passThruUnknownUrl
            ? this.getPassThruBackend().handle(F)
            : ((st = this.createErrorResponseOptions(
                T,
                404,
                `Collection '${Se}' not found`
              )),
              this.createResponse$(() => st));
        }
        addDelay(F) {
          const T = this.config.delay;
          return 0 === T
            ? F
            : (function _e(ce, F) {
                return new G.y((T) => {
                  let O = !1,
                    ue = !1;
                  const Se = ce.subscribe(
                    (je) => {
                      (ue = !0),
                        setTimeout(() => {
                          T.next(je), O && T.complete();
                        }, F);
                    },
                    (je) => setTimeout(() => T.error(je), F),
                    () => {
                      (O = !0), ue || T.complete();
                    }
                  );
                  return () => Se.unsubscribe();
                });
              })(F, T || 500);
        }
        applyQuery(F, T) {
          const O = [],
            ue = this.config.caseSensitiveSearch ? void 0 : "i";
          T.forEach((je, Ke) => {
            je.forEach((st) =>
              O.push({ name: Ke, rx: new RegExp(decodeURI(st), ue) })
            );
          });
          const Se = O.length;
          return Se
            ? F.filter((je) => {
                let Ke = !0,
                  st = Se;
                for (; Ke && st; ) {
                  st -= 1;
                  const Je = O[st];
                  Ke = Je.rx.test(je[Je.name]);
                }
                return Ke;
              })
            : F;
        }
        bind(F) {
          const T = this.inMemDbService[F];
          return T ? T.bind(this.inMemDbService) : void 0;
        }
        bodify(F) {
          return this.config.dataEncapsulation ? { data: F } : F;
        }
        clone(F) {
          return JSON.parse(JSON.stringify(F));
        }
        collectionHandler(F) {
          let T;
          switch (F.method) {
            case "get":
              T = this.get(F);
              break;
            case "post":
              T = this.post(F);
              break;
            case "put":
              T = this.put(F);
              break;
            case "delete":
              T = this.delete(F);
              break;
            default:
              T = this.createErrorResponseOptions(
                F.url,
                405,
                "Method not allowed"
              );
          }
          const O = this.bind("responseInterceptor");
          return O ? O(T, F) : T;
        }
        commands(F) {
          const T = F.collectionName.toLowerCase(),
            O = F.method;
          let ue = { url: F.url };
          switch (T) {
            case "resetdb":
              return (
                (ue.status = 204),
                this.resetDb(F).pipe(
                  (0, Ae.b)(() => this.createResponse$(() => ue, !1))
                )
              );
            case "config":
              if ("get" === O)
                (ue.status = 200), (ue.body = this.clone(this.config));
              else {
                const Se = this.getJsonBody(F.req);
                Object.assign(this.config, Se),
                  (this.passThruBackend = void 0),
                  (ue.status = 204);
              }
              break;
            default:
              ue = this.createErrorResponseOptions(
                F.url,
                500,
                `Unknown command "${T}"`
              );
          }
          return this.createResponse$(() => ue, !1);
        }
        createErrorResponseOptions(F, T, O) {
          return {
            body: { error: `${O}` },
            url: F,
            headers: this.createHeaders({ "Content-Type": "application/json" }),
            status: T,
          };
        }
        createResponse$(F, T = !0) {
          const O = this.createResponseOptions$(F);
          let ue = this.createResponse$fromResponseOptions$(O);
          return T ? this.addDelay(ue) : ue;
        }
        createResponseOptions$(F) {
          return new G.y((T) => {
            let O;
            try {
              O = F();
            } catch (Se) {
              O = this.createErrorResponseOptions(
                "",
                500,
                `${Se.message || Se}`
              );
            }
            const ue = O.status;
            try {
              O.statusText =
                null != ue
                  ? (function Ve(ce) {
                      return ge[ce + ""].text || "Unknown Status";
                    })(ue)
                  : void 0;
            } catch {}
            return (
              null != ue &&
              (function $e(ce) {
                return ce >= 200 && ce < 300;
              })(ue)
                ? (T.next(O), T.complete())
                : T.error(O),
              () => {}
            );
          });
        }
        delete({
          collection: F,
          collectionName: T,
          headers: O,
          id: ue,
          url: Se,
        }) {
          return null == ue
            ? this.createErrorResponseOptions(Se, 404, `Missing "${T}" id`)
            : {
                headers: O,
                status:
                  this.removeById(F, ue) || !this.config.delete404 ? 204 : 404,
              };
        }
        findById(F, T) {
          return F.find((O) => O.id === T);
        }
        genId(F, T) {
          const O = this.bind("genId");
          if (O) {
            const ue = O(F, T);
            if (null != ue) return ue;
          }
          return this.genIdDefault(F, T);
        }
        genIdDefault(F, T) {
          if (!this.isCollectionIdNumeric(F, T))
            throw new Error(
              `Collection '${T}' id type is non-numeric or unknown. Can only generate numeric ids.`
            );
          let O = 0;
          return (
            F.reduce((ue, Se) => {
              O = Math.max(O, "number" == typeof Se.id ? Se.id : O);
            }, void 0),
            O + 1
          );
        }
        get({
          collection: F,
          collectionName: T,
          headers: O,
          id: ue,
          query: Se,
          url: je,
        }) {
          let Ke = F;
          return (
            null != ue && "" !== ue
              ? (Ke = this.findById(F, ue))
              : Se && (Ke = this.applyQuery(F, Se)),
            Ke
              ? { body: this.bodify(this.clone(Ke)), headers: O, status: 200 }
              : this.createErrorResponseOptions(
                  je,
                  404,
                  `'${T}' with id='${ue}' not found`
                )
          );
        }
        getLocation(F) {
          if (!F.startsWith("http")) {
            const T = typeof document > "u" ? void 0 : document,
              O = T
                ? T.location.protocol + "//" + T.location.host
                : "http://fake";
            F = F.startsWith("/") ? O + F : O + "/" + F;
          }
          return (function Te(ce) {
            const T =
                /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                  ce
                ),
              O = {
                source: "",
                protocol: "",
                authority: "",
                userInfo: "",
                user: "",
                password: "",
                host: "",
                port: "",
                relative: "",
                path: "",
                directory: "",
                file: "",
                query: "",
                anchor: "",
              },
              ue = Object.keys(O);
            let Se = ue.length;
            for (; Se--; ) O[ue[Se]] = (T && T[Se]) || "";
            return O;
          })(F);
        }
        getPassThruBackend() {
          return this.passThruBackend
            ? this.passThruBackend
            : (this.passThruBackend = this.createPassThruBackend());
        }
        getRequestInfoUtils() {
          return {
            createResponse$: this.createResponse$.bind(this),
            findById: this.findById.bind(this),
            isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
            getConfig: () => this.config,
            getDb: () => this.db,
            getJsonBody: this.getJsonBody.bind(this),
            getLocation: this.getLocation.bind(this),
            getPassThruBackend: this.getPassThruBackend.bind(this),
            parseRequestUrl: this.parseRequestUrl.bind(this),
          };
        }
        indexOf(F, T) {
          return F.findIndex((O) => O.id === T);
        }
        parseId(F, T, O) {
          if (!this.isCollectionIdNumeric(F, T)) return O;
          const ue = parseFloat(O);
          return isNaN(ue) ? O : ue;
        }
        isCollectionIdNumeric(F, T) {
          return !(!F || !F[0]) && "number" == typeof F[0].id;
        }
        parseRequestUrl(F) {
          try {
            const T = this.getLocation(F);
            let O = (this.config.rootPath || "").length,
              ue = "";
            T.host !== this.config.host &&
              ((O = 1), (ue = T.protocol + "//" + T.host + "/"));
            const je = T.path.substring(O).split("/");
            let st,
              Ke = 0;
            null == this.config.apiBase
              ? (st = je[Ke++])
              : ((st = (function Me(ce) {
                  return ce.replace(/\/$/, "");
                })(this.config.apiBase.trim())),
                (Ke = st ? st.split("/").length : 0)),
              (st += "/");
            let Je = je[Ke++];
            Je = Je && Je.split(".")[0];
            return {
              apiBase: st,
              collectionName: Je,
              id: je[Ke++],
              query: this.createQueryMap(T.query),
              resourceUrl: ue + st + Je + "/",
            };
          } catch (T) {
            throw new Error(
              `unable to parse url '${F}'; original error: ${T.message}`
            );
          }
        }
        post({
          collection: F,
          collectionName: T,
          headers: O,
          id: ue,
          req: Se,
          resourceUrl: je,
          url: Ke,
        }) {
          const st = this.clone(this.getJsonBody(Se));
          if (null == st.id)
            try {
              st.id = ue || this.genId(F, T);
            } catch (vr) {
              const _t = vr.message || "";
              return /id type is non-numeric/.test(_t)
                ? this.createErrorResponseOptions(Ke, 422, _t)
                : this.createErrorResponseOptions(
                    Ke,
                    500,
                    `Failed to generate new id for '${T}'`
                  );
            }
          if (ue && ue !== st.id)
            return this.createErrorResponseOptions(
              Ke,
              400,
              "Request id does not match item.id"
            );
          const Je = this.indexOf(F, (ue = st.id)),
            bt = this.bodify(st);
          return -1 === Je
            ? (F.push(st),
              O.set("Location", je + "/" + ue),
              { headers: O, body: bt, status: 201 })
            : this.config.post409
            ? this.createErrorResponseOptions(
                Ke,
                409,
                `'${T}' item with id='${ue} exists and may not be updated with POST; use PUT instead.`
              )
            : ((F[Je] = st),
              this.config.post204
                ? { headers: O, status: 204 }
                : { headers: O, body: bt, status: 200 });
        }
        put({
          collection: F,
          collectionName: T,
          headers: O,
          id: ue,
          req: Se,
          url: je,
        }) {
          const Ke = this.clone(this.getJsonBody(Se));
          if (null == Ke.id)
            return this.createErrorResponseOptions(
              je,
              404,
              `Missing '${T}' id`
            );
          if (ue && ue !== Ke.id)
            return this.createErrorResponseOptions(
              je,
              400,
              `Request for '${T}' id does not match item.id`
            );
          const st = this.indexOf(F, (ue = Ke.id)),
            Je = this.bodify(Ke);
          return st > -1
            ? ((F[st] = Ke),
              this.config.put204
                ? { headers: O, status: 204 }
                : { headers: O, body: Je, status: 200 })
            : this.config.put404
            ? this.createErrorResponseOptions(
                je,
                404,
                `'${T}' item with id='${ue} not found and may not be created with PUT; use POST instead.`
              )
            : (F.push(Ke), { headers: O, body: Je, status: 201 });
        }
        removeById(F, T) {
          const O = this.indexOf(F, T);
          return O > -1 && (F.splice(O, 1), !0);
        }
        resetDb(F) {
          this.dbReadySubject && this.dbReadySubject.next(!1);
          const T = this.inMemDbService.createDb(F);
          return (
            (T instanceof G.y
              ? T
              : "function" == typeof T.then
              ? (0, Z.D)(T)
              : (0, we.of)(T)
            )
              .pipe((0, ye.P)())
              .subscribe((ue) => {
                (this.db = ue),
                  this.dbReadySubject && this.dbReadySubject.next(!0);
              }),
            this.dbReady
          );
        }
      }
      let Ue = (() => {
        class ce extends Ce {
          constructor(T, O, ue) {
            super(T, O), (this.xhrFactory = ue);
          }
          handle(T) {
            try {
              return this.handleRequest(T);
            } catch (O) {
              const Se = this.createErrorResponseOptions(
                T.url,
                500,
                `${O.message || O}`
              );
              return this.createResponse$(() => Se);
            }
          }
          getJsonBody(T) {
            return T.body;
          }
          getRequestMethod(T) {
            return (T.method || "get").toLowerCase();
          }
          createHeaders(T) {
            return new P.WM(T);
          }
          createQueryMap(T) {
            const O = new Map();
            if (T) {
              const ue = new P.LE({ fromString: T });
              ue.keys().forEach((Se) => O.set(Se, ue.getAll(Se) || []));
            }
            return O;
          }
          createResponse$fromResponseOptions$(T) {
            return T.pipe((0, Oe.U)((O) => new P.Zn(O)));
          }
          createPassThruBackend() {
            try {
              return new P.AF(this.xhrFactory);
            } catch (T) {
              throw (
                ((T.message =
                  "Cannot create passThru404 backend; " + (T.message || "")),
                T)
              );
            }
          }
        }
        return (
          (ce.ɵfac = function (T) {
            return new (T || ce)(N.LFG(Qe), N.LFG(wt, 8), N.LFG(oe.JF));
          }),
          (ce.ɵprov = N.Yz7({ token: ce, factory: ce.ɵfac })),
          ce
        );
      })();
      function ft(ce, F, T) {
        return new Ue(ce, F, T);
      }
      let Ee = (() => {
        class ce {
          static forRoot(T, O) {
            return {
              ngModule: ce,
              providers: [
                { provide: Qe, useClass: T },
                { provide: wt, useValue: O },
                { provide: P.jN, useFactory: ft, deps: [Qe, wt, oe.JF] },
              ],
            };
          }
          static forFeature(T, O) {
            return ce.forRoot(T, O);
          }
        }
        return (
          (ce.ɵfac = function (T) {
            return new (T || ce)();
          }),
          (ce.ɵmod = N.oAB({ type: ce })),
          (ce.ɵinj = N.cJS({})),
          ce
        );
      })();
      var Q = I(4940),
        me = I(433),
        Ge = I(7579),
        lt = I(2722),
        Pe = I(727);
      class H extends Pe.w0 {
        constructor(F, T) {
          super();
        }
        schedule(F, T = 0) {
          return this;
        }
      }
      const W = {
        setInterval(ce, F, ...T) {
          const { delegate: O } = W;
          return O?.setInterval
            ? O.setInterval(ce, F, ...T)
            : setInterval(ce, F, ...T);
        },
        clearInterval(ce) {
          const { delegate: F } = W;
          return (F?.clearInterval || clearInterval)(ce);
        },
        delegate: void 0,
      };
      var re = I(8737);
      const De = { now: () => (De.delegate || Date).now(), delegate: void 0 };
      class se {
        constructor(F, T = se.now) {
          (this.schedulerActionCtor = F), (this.now = T);
        }
        schedule(F, T = 0, O) {
          return new this.schedulerActionCtor(this, F).schedule(O, T);
        }
      }
      se.now = De.now;
      const dt = new (class Be extends se {
        constructor(F, T = se.now) {
          super(F, T), (this.actions = []), (this._active = !1);
        }
        flush(F) {
          const { actions: T } = this;
          if (this._active) return void T.push(F);
          let O;
          this._active = !0;
          do {
            if ((O = F.execute(F.state, F.delay))) break;
          } while ((F = T.shift()));
          if (((this._active = !1), O)) {
            for (; (F = T.shift()); ) F.unsubscribe();
            throw O;
          }
        }
      })(
        class he extends H {
          constructor(F, T) {
            super(F, T),
              (this.scheduler = F),
              (this.work = T),
              (this.pending = !1);
          }
          schedule(F, T = 0) {
            var O;
            if (this.closed) return this;
            this.state = F;
            const ue = this.id,
              Se = this.scheduler;
            return (
              null != ue && (this.id = this.recycleAsyncId(Se, ue, T)),
              (this.pending = !0),
              (this.delay = T),
              (this.id =
                null !== (O = this.id) && void 0 !== O
                  ? O
                  : this.requestAsyncId(Se, this.id, T)),
              this
            );
          }
          requestAsyncId(F, T, O = 0) {
            return W.setInterval(F.flush.bind(F, this), O);
          }
          recycleAsyncId(F, T, O = 0) {
            if (null != O && this.delay === O && !1 === this.pending) return T;
            null != T && W.clearInterval(T);
          }
          execute(F, T) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            const O = this._execute(F, T);
            if (O) return O;
            !1 === this.pending &&
              null != this.id &&
              (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
          }
          _execute(F, T) {
            let ue,
              O = !1;
            try {
              this.work(F);
            } catch (Se) {
              (O = !0),
                (ue = Se || new Error("Scheduled action threw falsy error"));
            }
            if (O) return this.unsubscribe(), ue;
          }
          unsubscribe() {
            if (!this.closed) {
              const { id: F, scheduler: T } = this,
                { actions: O } = T;
              (this.work = this.state = this.scheduler = null),
                (this.pending = !1),
                (0, re.P)(O, this),
                null != F && (this.id = this.recycleAsyncId(T, F, null)),
                (this.delay = null),
                super.unsubscribe();
            }
          }
        }
      );
      var He = I(4482),
        vt = I(5403),
        It = I(4671);
      function Ft(ce, F) {
        return ce === F;
      }
      const tt = function (ce) {
        return ["/product", ce];
      };
      class en {}
      function En(ce, F) {
        1 & ce && N._UZ(0, "app-product-item", 3),
          2 & ce && N.Q6J("product", F.$implicit);
      }
      (en.ɵfac = function (F) {
        return new (F || en)();
      }),
        (en.ɵcmp = N.Xpm({
          type: en,
          selectors: [["app-product-item"]],
          inputs: { product: "product" },
          standalone: !0,
          features: [N.jDz],
          decls: 15,
          vars: 7,
          consts: [
            [1, "product-card"],
            [1, "card-row"],
            [1, "card-label"],
            [1, "warehouse-link", 3, "routerLink"],
          ],
          template: function (F, T) {
            1 & F &&
              (N.TgZ(0, "div", 0)(1, "span", 1)(2, "span", 2),
              N._uU(3, "Code: "),
              N.qZA(),
              N._uU(4),
              N.qZA(),
              N.TgZ(5, "span", 1)(6, "span", 2),
              N._uU(7, "Quantity: "),
              N.qZA(),
              N._uU(8),
              N.qZA(),
              N.TgZ(9, "span", 1)(10, "span", 2),
              N._uU(11, "Location: "),
              N.qZA(),
              N._uU(12),
              N.qZA(),
              N.TgZ(13, "a", 3),
              N._uU(14, "Edit Product"),
              N.qZA()()),
              2 & F &&
                (N.xp6(4),
                N.Oqu(T.product.code),
                N.xp6(4),
                N.Oqu(T.product.quantity),
                N.xp6(4),
                N.AsE("", T.product.floor, " / ", T.product.section, ""),
                N.xp6(1),
                N.Q6J("routerLink", N.VKq(5, tt, T.product.id)));
          },
          dependencies: [Q.rH],
          styles: [
            ".warehouse-link[_ngcontent-%COMP%]{font-size:1.3rem;text-decoration:none;color:#ff285a}.warehouse-link[_ngcontent-%COMP%]:hover{cursor:pointer}.warehouse-link[_ngcontent-%COMP%]:visited{color:#ff285a}.product-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;border:.1rem solid #333;border-radius:.5rem;padding:.5rem;width:15rem}.product-card[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]{font-size:#000;font-size:1.1rem}.product-card[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%]{color:#22c064;font-size:1.2rem}",
          ],
          changeDetection: 0,
        }));
      class hn {
        constructor() {
          this.products = [];
        }
        productTrackBy(F, T) {
          return T.id;
        }
      }
      (hn.ɵfac = function (F) {
        return new (F || hn)();
      }),
        (hn.ɵcmp = N.Xpm({
          type: hn,
          selectors: [["app-product-list"]],
          inputs: { products: "products" },
          standalone: !0,
          features: [N.jDz],
          decls: 4,
          vars: 3,
          consts: [
            [1, "warehouse-product"],
            [1, "product-title"],
            [3, "product", 4, "ngFor", "ngForOf", "ngForTrackBy"],
            [3, "product"],
          ],
          template: function (F, T) {
            1 & F &&
              (N.TgZ(0, "div", 0)(1, "span", 1),
              N._uU(2),
              N.qZA(),
              N.YNc(3, En, 1, 1, "app-product-item", 2),
              N.qZA()),
              2 & F &&
                (N.xp6(2),
                N.hij("", T.products.length, " products found"),
                N.xp6(1),
                N.Q6J("ngForOf", T.products)("ngForTrackBy", T.productTrackBy));
          },
          dependencies: [en, oe.ax],
          styles: [
            ".warehouse-product[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;padding:.5rem}.warehouse-product[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]{color:#000;font-size:1.3rem}",
          ],
          changeDetection: 0,
        }));
      var Ut = I(3926);
      function Ye(ce, F) {
        if ((1 & ce && (N.TgZ(0, "option", 15), N._uU(1), N.qZA()), 2 & ce)) {
          const T = F.$implicit;
          N.Q6J("value", T), N.xp6(1), N.hij(" Floor ", T, " ");
        }
      }
      function pn(ce, F) {
        if ((1 & ce && (N.TgZ(0, "option", 15), N._uU(1), N.qZA()), 2 & ce)) {
          const T = F.$implicit;
          N.Q6J("value", T), N.xp6(1), N.hij(" Section ", T, " ");
        }
      }
      class Rt {
        get code() {
          return this.filtersForm?.get("productCode");
        }
        get floor() {
          return this.filtersForm?.get("productFloor");
        }
        get section() {
          return this.filtersForm?.get("productSection");
        }
        constructor(F, T) {
          (this.productService = F),
            (this.formBuilder = T),
            (this.destroy$ = new Ge.x()),
            (this.products = []),
            (this.dropdownOprions = [1, 2, 3]);
        }
        ngOnInit() {
          this.getProducts(), this.buildForm(), this.filterProducts();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        getProducts(F, T, O) {
          this.productService
            .getProducts()
            .pipe((0, lt.R)(this.destroy$))
            .subscribe((ue) => {
              if (((this.products = [...ue]), F)) {
                const Se = this.products.filter((je) =>
                  je.code.includes(F.toUpperCase())
                );
                this.products = [...Se];
              }
              if (T) {
                const Se = this.products.filter((je) => je.floor === T);
                this.products = [...Se];
              }
              if (O) {
                const Se = this.products.filter((je) => je.section === O);
                this.products = [...Se];
              }
            });
        }
        buildForm() {
          this.filtersForm = this.formBuilder.group({
            productCode: [""],
            productFloor: [""],
            productSection: [""],
          });
        }
        filterProducts() {
          this.filtersForm.valueChanges
            .pipe(
              (function Dt(ce, F = dt) {
                return (0, He.e)((T, O) => {
                  let ue = null,
                    Se = null,
                    je = null;
                  const Ke = () => {
                    if (ue) {
                      ue.unsubscribe(), (ue = null);
                      const Je = Se;
                      (Se = null), O.next(Je);
                    }
                  };
                  function st() {
                    const Je = je + ce,
                      bt = F.now();
                    if (bt < Je)
                      return (
                        (ue = this.schedule(void 0, Je - bt)), void O.add(ue)
                      );
                    Ke();
                  }
                  T.subscribe(
                    (0, vt.x)(
                      O,
                      (Je) => {
                        (Se = Je),
                          (je = F.now()),
                          ue || ((ue = F.schedule(st, ce)), O.add(ue));
                      },
                      () => {
                        Ke(), O.complete();
                      },
                      void 0,
                      () => {
                        Se = ue = null;
                      }
                    )
                  );
                });
              })(500),
              (function tn(ce, F = It.y) {
                return (
                  (ce = ce ?? Ft),
                  (0, He.e)((T, O) => {
                    let ue,
                      Se = !0;
                    T.subscribe(
                      (0, vt.x)(O, (je) => {
                        const Ke = F(je);
                        (Se || !ce(ue, Ke)) &&
                          ((Se = !1), (ue = Ke), O.next(je));
                      })
                    );
                  })
                );
              })(),
              (0, lt.R)(this.destroy$)
            )
            .subscribe((F) => {
              this.getProducts(
                F?.productCode,
                +F?.productFloor,
                +F?.productSection
              );
            });
        }
        onClear() {
          this.code.setValue(""),
            this.floor.setValue(""),
            this.section.setValue(""),
            this.getProducts();
        }
      }
      (Rt.ɵfac = function (F) {
        return new (F || Rt)(N.Y36(Ut.M), N.Y36(me.qu));
      }),
        (Rt.ɵcmp = N.Xpm({
          type: Rt,
          selectors: [["app-home"]],
          standalone: !0,
          features: [N.jDz],
          decls: 26,
          vars: 4,
          consts: [
            [1, "warehouse-home"],
            ["autocomplete", "off", 1, "form", 3, "formGroup"],
            [1, "form-title"],
            [1, "form-row"],
            ["for", "code", 1, "form-label"],
            [
              "type",
              "search",
              "id",
              "code",
              "placeholder",
              "Search products by code",
              "formControlName",
              "productCode",
              1,
              "form-input",
            ],
            ["for", "floor", 1, "form-label"],
            [
              "id",
              "floor",
              "formControlName",
              "productFloor",
              1,
              "form-select",
            ],
            ["value", "", "selected", "", 1, "form-option"],
            ["class", "form-option", 3, "value", 4, "ngFor", "ngForOf"],
            ["for", "section", 1, "form-label"],
            [
              "id",
              "section",
              "formControlName",
              "productSection",
              1,
              "form-select",
            ],
            ["type", "button", 1, "form-button", 3, "click"],
            [1, "warehouse-products"],
            [3, "products"],
            [1, "form-option", 3, "value"],
          ],
          template: function (F, T) {
            1 & F &&
              (N.TgZ(0, "div", 0)(1, "form", 1)(2, "span", 2),
              N._uU(3, "Filter products"),
              N.qZA(),
              N.TgZ(4, "div", 3)(5, "label", 4),
              N._uU(6, "Code"),
              N.qZA(),
              N._UZ(7, "input", 5),
              N.qZA(),
              N.TgZ(8, "div", 3)(9, "label", 6),
              N._uU(10, "Floor"),
              N.qZA(),
              N.TgZ(11, "select", 7)(12, "option", 8),
              N._uU(13, "All Floors"),
              N.qZA(),
              N.YNc(14, Ye, 2, 2, "option", 9),
              N.qZA()(),
              N.TgZ(15, "div", 3)(16, "label", 10),
              N._uU(17, "Section"),
              N.qZA(),
              N.TgZ(18, "select", 11)(19, "option", 8),
              N._uU(20, "All Sections"),
              N.qZA(),
              N.YNc(21, pn, 2, 2, "option", 9),
              N.qZA()(),
              N.TgZ(22, "button", 12),
              N.NdJ("click", function () {
                return T.onClear();
              }),
              N._uU(23, " Clear All Filters "),
              N.qZA()(),
              N.TgZ(24, "div", 13),
              N._UZ(25, "app-product-list", 14),
              N.qZA()()),
              2 & F &&
                (N.xp6(1),
                N.Q6J("formGroup", T.filtersForm),
                N.xp6(13),
                N.Q6J("ngForOf", T.dropdownOprions),
                N.xp6(7),
                N.Q6J("ngForOf", T.dropdownOprions),
                N.xp6(4),
                N.Q6J("products", T.products));
          },
          dependencies: [
            hn,
            oe.ax,
            me.UX,
            me._Y,
            me.YN,
            me.Kr,
            me.Fj,
            me.EJ,
            me.JJ,
            me.JL,
            me.sg,
            me.u,
          ],
          styles: [
            ".form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;justify-content:flex-start;margin:1rem}.form-title[_ngcontent-%COMP%]{color:#000;font-size:1.3rem}.form-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:2.5%}.form-label[_ngcontent-%COMP%]{font-size:1.1rem;color:#333;padding:.25rem;max-width:20rem}.form-input[_ngcontent-%COMP%]{color:#333;font-size:1.1rem;border:.05rem solid #333;border-radius:1.5rem;padding:.25rem;max-width:20rem;outline:transparent}.form-select[_ngcontent-%COMP%]{color:#333;font-size:1.1rem;border:.05rem solid #333;border-radius:1.5rem;padding:.25rem;outline:transparent}.form-button[_ngcontent-%COMP%]{color:#fff;background-color:#22c064;font-size:1.2rem;border:.05rem solid #22c064;border-radius:1.5rem;padding:.5rem}.form-button[_ngcontent-%COMP%]:hover{cursor:pointer}.form-button[_ngcontent-%COMP%]:disabled{background-color:#333;border:.05rem solid #333}.form-button[_ngcontent-%COMP%]:disabled:hover{cursor:default}.form-footer[_ngcontent-%COMP%]{display:flex;gap:1rem;padding:1rem}.form[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%]{border:.1rem solid #ff285a}.form[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{margin-top:.5rem}.form[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{font-size:1.1rem;color:#ff285a}.warehouse-link[_ngcontent-%COMP%]{font-size:1.3rem;text-decoration:none;color:#ff285a}.warehouse-link[_ngcontent-%COMP%]:hover{cursor:pointer}.warehouse-link[_ngcontent-%COMP%]:visited{color:#ff285a}.warehouse-home[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:2rem;padding:.5rem}@media screen and (max-width: 600px){.warehouse-home[_ngcontent-%COMP%]{flex-direction:column}}.warehouse-products[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1.5rem;padding:0 1rem}",
          ],
        }));
      class zt {}
      (zt.ɵfac = function (F) {
        return new (F || zt)();
      }),
        (zt.ɵcmp = N.Xpm({
          type: zt,
          selectors: [["app-page-not-found"]],
          standalone: !0,
          features: [N.jDz],
          decls: 2,
          vars: 0,
          template: function (F, T) {
            1 & F &&
              (N.TgZ(0, "h1"),
              N._uU(1, "This is not the page you were looking for!"),
              N.qZA());
          },
          encapsulation: 2,
        }));
      const Ht = [
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "home", component: Rt },
        {
          path: "product",
          loadComponent: () =>
            I.e(67)
              .then(I.bind(I, 3067))
              .then((ce) => ce.ProductFormComponent),
          data: { isNew: !0 },
        },
        {
          path: "product/:id",
          loadComponent: () =>
            I.e(67)
              .then(I.bind(I, 3067))
              .then((ce) => ce.ProductFormComponent),
          data: { isNew: !1 },
        },
        { path: "**", component: zt },
      ];
      class Jt {}
      (Jt.ɵfac = function (F) {
        return new (F || Jt)();
      }),
        (Jt.ɵmod = N.oAB({ type: Jt })),
        (Jt.ɵinj = N.cJS({ imports: [Q.Bz.forRoot(Ht), Q.Bz] }));
      class Wt {}
      (Wt.ɵfac = function (F) {
        return new (F || Wt)();
      }),
        (Wt.ɵcmp = N.Xpm({
          type: Wt,
          selectors: [["app-root"]],
          decls: 10,
          vars: 0,
          consts: [
            [1, "warehouse-header"],
            ["routerLink", "/home", 1, "warehouse-link"],
            ["routerLink", "/product", 1, "warehouse-link"],
            [1, "warehouse-main"],
            [1, "warehouse-footer"],
            [1, "copy"],
          ],
          template: function (F, T) {
            1 & F &&
              (N.TgZ(0, "header", 0)(1, "a", 1),
              N._uU(2, "Home"),
              N.qZA(),
              N.TgZ(3, "a", 2),
              N._uU(4, "New Product"),
              N.qZA()(),
              N.TgZ(5, "main", 3),
              N._UZ(6, "router-outlet"),
              N.qZA(),
              N.TgZ(7, "footer", 4)(8, "span", 5),
              N._uU(9, "\xa9 2023 Marko Radulovic"),
              N.qZA()());
          },
          dependencies: [Q.lC, Q.rH],
          styles: [
            ".warehouse-link[_ngcontent-%COMP%]{font-size:1.3rem;text-decoration:none;color:#ff285a}.warehouse-link[_ngcontent-%COMP%]:hover{cursor:pointer}.warehouse-link[_ngcontent-%COMP%]:visited{color:#ff285a}.warehouse-header[_ngcontent-%COMP%]{background-color:#fff;border-bottom:.1rem solid #333;padding:1.5rem;display:flex;gap:1rem}.warehouse-title[_ngcontent-%COMP%]{font-size:2rem;color:#ff285a;margin-right:.5rem}.warehouse-footer[_ngcontent-%COMP%]{background-color:#ff285a;padding:1.5rem;display:flex;justify-content:center}.warehouse-footer[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]{color:#fff;font-size:1.5rem}",
          ],
        }));
      class wn {
        constructor() {}
        createDb() {
          return {
            products: [
              {
                id: 1,
                code: "MYTZ 123456",
                quantity: 100,
                floor: 1,
                section: 1,
              },
              { id: 2, code: "UK 13462", quantity: 12, floor: 1, section: 2 },
              { id: 3, code: "KOB 8472", quantity: 1, floor: 1, section: 3 },
            ],
          };
        }
      }
      (wn.ɵfac = function (F) {
        return new (F || wn)();
      }),
        (wn.ɵprov = N.Yz7({ token: wn, factory: wn.ɵfac, providedIn: "root" }));
      class Yt {}
      (Yt.ɵfac = function (F) {
        return new (F || Yt)();
      }),
        (Yt.ɵmod = N.oAB({ type: Yt, bootstrap: [Wt] })),
        (Yt.ɵinj = N.cJS({ imports: [d.b2, Jt, P.JF, Ee.forRoot(wn)] })),
        d
          .q6()
          .bootstrapModule(Yt)
          .catch((ce) => console.error(ce));
    },
    1135: (qe, fe, I) => {
      I.d(fe, { X: () => P });
      var d = I(7579);
      class P extends d.x {
        constructor(X) {
          super(), (this._value = X);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(X) {
          const Z = super._subscribe(X);
          return !Z.closed && X.next(this._value), Z;
        }
        getValue() {
          const { hasError: X, thrownError: Z, _value: we } = this;
          if (X) throw Z;
          return this._throwIfClosed(), we;
        }
        next(X) {
          super.next((this._value = X));
        }
      }
    },
    9751: (qe, fe, I) => {
      I.d(fe, { y: () => Ae });
      var d = I(930),
        P = I(727),
        G = I(8822),
        X = I(9635),
        Z = I(2416),
        we = I(576),
        ye = I(2806);
      let Ae = (() => {
        class _e {
          constructor(ge) {
            ge && (this._subscribe = ge);
          }
          lift(ge) {
            const Ve = new _e();
            return (Ve.source = this), (Ve.operator = ge), Ve;
          }
          subscribe(ge, Ve, $e) {
            const Qe = (function oe(_e) {
              return (
                (_e && _e instanceof d.Lv) ||
                ((function N(_e) {
                  return (
                    _e &&
                    (0, we.m)(_e.next) &&
                    (0, we.m)(_e.error) &&
                    (0, we.m)(_e.complete)
                  );
                })(_e) &&
                  (0, P.Nn)(_e))
              );
            })(ge)
              ? ge
              : new d.Hp(ge, Ve, $e);
            return (
              (0, ye.x)(() => {
                const { operator: at, source: wt } = this;
                Qe.add(
                  at
                    ? at.call(Qe, wt)
                    : wt
                    ? this._subscribe(Qe)
                    : this._trySubscribe(Qe)
                );
              }),
              Qe
            );
          }
          _trySubscribe(ge) {
            try {
              return this._subscribe(ge);
            } catch (Ve) {
              ge.error(Ve);
            }
          }
          forEach(ge, Ve) {
            return new (Ve = Oe(Ve))(($e, Qe) => {
              const at = new d.Hp({
                next: (wt) => {
                  try {
                    ge(wt);
                  } catch (Te) {
                    Qe(Te), at.unsubscribe();
                  }
                },
                error: Qe,
                complete: $e,
              });
              this.subscribe(at);
            });
          }
          _subscribe(ge) {
            var Ve;
            return null === (Ve = this.source) || void 0 === Ve
              ? void 0
              : Ve.subscribe(ge);
          }
          [G.L]() {
            return this;
          }
          pipe(...ge) {
            return (0, X.U)(ge)(this);
          }
          toPromise(ge) {
            return new (ge = Oe(ge))((Ve, $e) => {
              let Qe;
              this.subscribe(
                (at) => (Qe = at),
                (at) => $e(at),
                () => Ve(Qe)
              );
            });
          }
        }
        return (_e.create = (xe) => new _e(xe)), _e;
      })();
      function Oe(_e) {
        var xe;
        return null !== (xe = _e ?? Z.v.Promise) && void 0 !== xe
          ? xe
          : Promise;
      }
    },
    7579: (qe, fe, I) => {
      I.d(fe, { x: () => ye });
      var d = I(9751),
        P = I(727);
      const X = (0, I(3888).d)(
        (Oe) =>
          function () {
            Oe(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var Z = I(8737),
        we = I(2806);
      let ye = (() => {
        class Oe extends d.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(oe) {
            const _e = new Ae(this, this);
            return (_e.operator = oe), _e;
          }
          _throwIfClosed() {
            if (this.closed) throw new X();
          }
          next(oe) {
            (0, we.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const _e of this.currentObservers) _e.next(oe);
              }
            });
          }
          error(oe) {
            (0, we.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = oe);
                const { observers: _e } = this;
                for (; _e.length; ) _e.shift().error(oe);
              }
            });
          }
          complete() {
            (0, we.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: oe } = this;
                for (; oe.length; ) oe.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var oe;
            return (
              (null === (oe = this.observers) || void 0 === oe
                ? void 0
                : oe.length) > 0
            );
          }
          _trySubscribe(oe) {
            return this._throwIfClosed(), super._trySubscribe(oe);
          }
          _subscribe(oe) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(oe),
              this._innerSubscribe(oe)
            );
          }
          _innerSubscribe(oe) {
            const { hasError: _e, isStopped: xe, observers: ge } = this;
            return _e || xe
              ? P.Lc
              : ((this.currentObservers = null),
                ge.push(oe),
                new P.w0(() => {
                  (this.currentObservers = null), (0, Z.P)(ge, oe);
                }));
          }
          _checkFinalizedStatuses(oe) {
            const { hasError: _e, thrownError: xe, isStopped: ge } = this;
            _e ? oe.error(xe) : ge && oe.complete();
          }
          asObservable() {
            const oe = new d.y();
            return (oe.source = this), oe;
          }
        }
        return (Oe.create = (N, oe) => new Ae(N, oe)), Oe;
      })();
      class Ae extends ye {
        constructor(N, oe) {
          super(), (this.destination = N), (this.source = oe);
        }
        next(N) {
          var oe, _e;
          null ===
            (_e =
              null === (oe = this.destination) || void 0 === oe
                ? void 0
                : oe.next) ||
            void 0 === _e ||
            _e.call(oe, N);
        }
        error(N) {
          var oe, _e;
          null ===
            (_e =
              null === (oe = this.destination) || void 0 === oe
                ? void 0
                : oe.error) ||
            void 0 === _e ||
            _e.call(oe, N);
        }
        complete() {
          var N, oe;
          null ===
            (oe =
              null === (N = this.destination) || void 0 === N
                ? void 0
                : N.complete) ||
            void 0 === oe ||
            oe.call(N);
        }
        _subscribe(N) {
          var oe, _e;
          return null !==
            (_e =
              null === (oe = this.source) || void 0 === oe
                ? void 0
                : oe.subscribe(N)) && void 0 !== _e
            ? _e
            : P.Lc;
        }
      }
    },
    930: (qe, fe, I) => {
      I.d(fe, { Hp: () => $e, Lv: () => _e });
      var d = I(576),
        P = I(727),
        G = I(2416),
        X = I(7849),
        Z = I(5032);
      const we = Oe("C", void 0, void 0);
      function Oe(Me, Ce, Ue) {
        return { kind: Me, value: Ce, error: Ue };
      }
      var N = I(3410),
        oe = I(2806);
      class _e extends P.w0 {
        constructor(Ce) {
          super(),
            (this.isStopped = !1),
            Ce
              ? ((this.destination = Ce), (0, P.Nn)(Ce) && Ce.add(this))
              : (this.destination = Te);
        }
        static create(Ce, Ue, ft) {
          return new $e(Ce, Ue, ft);
        }
        next(Ce) {
          this.isStopped
            ? wt(
                (function Ae(Me) {
                  return Oe("N", Me, void 0);
                })(Ce),
                this
              )
            : this._next(Ce);
        }
        error(Ce) {
          this.isStopped
            ? wt(
                (function ye(Me) {
                  return Oe("E", void 0, Me);
                })(Ce),
                this
              )
            : ((this.isStopped = !0), this._error(Ce));
        }
        complete() {
          this.isStopped
            ? wt(we, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(Ce) {
          this.destination.next(Ce);
        }
        _error(Ce) {
          try {
            this.destination.error(Ce);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const xe = Function.prototype.bind;
      function ge(Me, Ce) {
        return xe.call(Me, Ce);
      }
      class Ve {
        constructor(Ce) {
          this.partialObserver = Ce;
        }
        next(Ce) {
          const { partialObserver: Ue } = this;
          if (Ue.next)
            try {
              Ue.next(Ce);
            } catch (ft) {
              Qe(ft);
            }
        }
        error(Ce) {
          const { partialObserver: Ue } = this;
          if (Ue.error)
            try {
              Ue.error(Ce);
            } catch (ft) {
              Qe(ft);
            }
          else Qe(Ce);
        }
        complete() {
          const { partialObserver: Ce } = this;
          if (Ce.complete)
            try {
              Ce.complete();
            } catch (Ue) {
              Qe(Ue);
            }
        }
      }
      class $e extends _e {
        constructor(Ce, Ue, ft) {
          let J;
          if ((super(), (0, d.m)(Ce) || !Ce))
            J = {
              next: Ce ?? void 0,
              error: Ue ?? void 0,
              complete: ft ?? void 0,
            };
          else {
            let Ee;
            this && G.v.useDeprecatedNextContext
              ? ((Ee = Object.create(Ce)),
                (Ee.unsubscribe = () => this.unsubscribe()),
                (J = {
                  next: Ce.next && ge(Ce.next, Ee),
                  error: Ce.error && ge(Ce.error, Ee),
                  complete: Ce.complete && ge(Ce.complete, Ee),
                }))
              : (J = Ce);
          }
          this.destination = new Ve(J);
        }
      }
      function Qe(Me) {
        G.v.useDeprecatedSynchronousErrorHandling
          ? (0, oe.O)(Me)
          : (0, X.h)(Me);
      }
      function wt(Me, Ce) {
        const { onStoppedNotification: Ue } = G.v;
        Ue && N.z.setTimeout(() => Ue(Me, Ce));
      }
      const Te = {
        closed: !0,
        next: Z.Z,
        error: function at(Me) {
          throw Me;
        },
        complete: Z.Z,
      };
    },
    727: (qe, fe, I) => {
      I.d(fe, { Lc: () => we, w0: () => Z, Nn: () => ye });
      var d = I(576);
      const G = (0, I(3888).d)(
        (Oe) =>
          function (oe) {
            Oe(this),
              (this.message = oe
                ? `${oe.length} errors occurred during unsubscription:\n${oe
                    .map((_e, xe) => `${xe + 1}) ${_e.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = oe);
          }
      );
      var X = I(8737);
      class Z {
        constructor(N) {
          (this.initialTeardown = N),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let N;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: oe } = this;
            if (oe)
              if (((this._parentage = null), Array.isArray(oe)))
                for (const ge of oe) ge.remove(this);
              else oe.remove(this);
            const { initialTeardown: _e } = this;
            if ((0, d.m)(_e))
              try {
                _e();
              } catch (ge) {
                N = ge instanceof G ? ge.errors : [ge];
              }
            const { _finalizers: xe } = this;
            if (xe) {
              this._finalizers = null;
              for (const ge of xe)
                try {
                  Ae(ge);
                } catch (Ve) {
                  (N = N ?? []),
                    Ve instanceof G ? (N = [...N, ...Ve.errors]) : N.push(Ve);
                }
            }
            if (N) throw new G(N);
          }
        }
        add(N) {
          var oe;
          if (N && N !== this)
            if (this.closed) Ae(N);
            else {
              if (N instanceof Z) {
                if (N.closed || N._hasParent(this)) return;
                N._addParent(this);
              }
              (this._finalizers =
                null !== (oe = this._finalizers) && void 0 !== oe
                  ? oe
                  : []).push(N);
            }
        }
        _hasParent(N) {
          const { _parentage: oe } = this;
          return oe === N || (Array.isArray(oe) && oe.includes(N));
        }
        _addParent(N) {
          const { _parentage: oe } = this;
          this._parentage = Array.isArray(oe)
            ? (oe.push(N), oe)
            : oe
            ? [oe, N]
            : N;
        }
        _removeParent(N) {
          const { _parentage: oe } = this;
          oe === N
            ? (this._parentage = null)
            : Array.isArray(oe) && (0, X.P)(oe, N);
        }
        remove(N) {
          const { _finalizers: oe } = this;
          oe && (0, X.P)(oe, N), N instanceof Z && N._removeParent(this);
        }
      }
      Z.EMPTY = (() => {
        const Oe = new Z();
        return (Oe.closed = !0), Oe;
      })();
      const we = Z.EMPTY;
      function ye(Oe) {
        return (
          Oe instanceof Z ||
          (Oe &&
            "closed" in Oe &&
            (0, d.m)(Oe.remove) &&
            (0, d.m)(Oe.add) &&
            (0, d.m)(Oe.unsubscribe))
        );
      }
      function Ae(Oe) {
        (0, d.m)(Oe) ? Oe() : Oe.unsubscribe();
      }
    },
    2416: (qe, fe, I) => {
      I.d(fe, { v: () => d });
      const d = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (qe, fe, I) => {
      I.d(fe, { E: () => P });
      const P = new (I(9751).y)((Z) => Z.complete());
    },
    2076: (qe, fe, I) => {
      I.d(fe, { D: () => ft });
      var d = I(8421),
        P = I(9672),
        G = I(4482),
        X = I(5403);
      function Z(J, Ee = 0) {
        return (0, G.e)((Q, me) => {
          Q.subscribe(
            (0, X.x)(
              me,
              (Ge) => (0, P.f)(me, J, () => me.next(Ge), Ee),
              () => (0, P.f)(me, J, () => me.complete(), Ee),
              (Ge) => (0, P.f)(me, J, () => me.error(Ge), Ee)
            )
          );
        });
      }
      function we(J, Ee = 0) {
        return (0, G.e)((Q, me) => {
          me.add(J.schedule(() => Q.subscribe(me), Ee));
        });
      }
      var Oe = I(9751),
        oe = I(2202),
        _e = I(576);
      function ge(J, Ee) {
        if (!J) throw new Error("Iterable cannot be null");
        return new Oe.y((Q) => {
          (0, P.f)(Q, Ee, () => {
            const me = J[Symbol.asyncIterator]();
            (0, P.f)(
              Q,
              Ee,
              () => {
                me.next().then((Ge) => {
                  Ge.done ? Q.complete() : Q.next(Ge.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Ve = I(3670),
        $e = I(8239),
        Qe = I(1144),
        at = I(6495),
        wt = I(2206),
        Te = I(4532),
        Me = I(3260);
      function ft(J, Ee) {
        return Ee
          ? (function Ue(J, Ee) {
              if (null != J) {
                if ((0, Ve.c)(J))
                  return (function ye(J, Ee) {
                    return (0, d.Xf)(J).pipe(we(Ee), Z(Ee));
                  })(J, Ee);
                if ((0, Qe.z)(J))
                  return (function N(J, Ee) {
                    return new Oe.y((Q) => {
                      let me = 0;
                      return Ee.schedule(function () {
                        me === J.length
                          ? Q.complete()
                          : (Q.next(J[me++]), Q.closed || this.schedule());
                      });
                    });
                  })(J, Ee);
                if ((0, $e.t)(J))
                  return (function Ae(J, Ee) {
                    return (0, d.Xf)(J).pipe(we(Ee), Z(Ee));
                  })(J, Ee);
                if ((0, wt.D)(J)) return ge(J, Ee);
                if ((0, at.T)(J))
                  return (function xe(J, Ee) {
                    return new Oe.y((Q) => {
                      let me;
                      return (
                        (0, P.f)(Q, Ee, () => {
                          (me = J[oe.h]()),
                            (0, P.f)(
                              Q,
                              Ee,
                              () => {
                                let Ge, lt;
                                try {
                                  ({ value: Ge, done: lt } = me.next());
                                } catch (Pe) {
                                  return void Q.error(Pe);
                                }
                                lt ? Q.complete() : Q.next(Ge);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, _e.m)(me?.return) && me.return()
                      );
                    });
                  })(J, Ee);
                if ((0, Me.L)(J))
                  return (function Ce(J, Ee) {
                    return ge((0, Me.Q)(J), Ee);
                  })(J, Ee);
              }
              throw (0, Te.z)(J);
            })(J, Ee)
          : (0, d.Xf)(J);
      }
    },
    8421: (qe, fe, I) => {
      I.d(fe, { Xf: () => xe });
      var d = I(655),
        P = I(1144),
        G = I(8239),
        X = I(9751),
        Z = I(3670),
        we = I(2206),
        ye = I(4532),
        Ae = I(6495),
        Oe = I(3260),
        N = I(576),
        oe = I(7849),
        _e = I(8822);
      function xe(Me) {
        if (Me instanceof X.y) return Me;
        if (null != Me) {
          if ((0, Z.c)(Me))
            return (function ge(Me) {
              return new X.y((Ce) => {
                const Ue = Me[_e.L]();
                if ((0, N.m)(Ue.subscribe)) return Ue.subscribe(Ce);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(Me);
          if ((0, P.z)(Me))
            return (function Ve(Me) {
              return new X.y((Ce) => {
                for (let Ue = 0; Ue < Me.length && !Ce.closed; Ue++)
                  Ce.next(Me[Ue]);
                Ce.complete();
              });
            })(Me);
          if ((0, G.t)(Me))
            return (function $e(Me) {
              return new X.y((Ce) => {
                Me.then(
                  (Ue) => {
                    Ce.closed || (Ce.next(Ue), Ce.complete());
                  },
                  (Ue) => Ce.error(Ue)
                ).then(null, oe.h);
              });
            })(Me);
          if ((0, we.D)(Me)) return at(Me);
          if ((0, Ae.T)(Me))
            return (function Qe(Me) {
              return new X.y((Ce) => {
                for (const Ue of Me) if ((Ce.next(Ue), Ce.closed)) return;
                Ce.complete();
              });
            })(Me);
          if ((0, Oe.L)(Me))
            return (function wt(Me) {
              return at((0, Oe.Q)(Me));
            })(Me);
        }
        throw (0, ye.z)(Me);
      }
      function at(Me) {
        return new X.y((Ce) => {
          (function Te(Me, Ce) {
            var Ue, ft, J, Ee;
            return (0, d.mG)(this, void 0, void 0, function* () {
              try {
                for (Ue = (0, d.KL)(Me); !(ft = yield Ue.next()).done; )
                  if ((Ce.next(ft.value), Ce.closed)) return;
              } catch (Q) {
                J = { error: Q };
              } finally {
                try {
                  ft && !ft.done && (Ee = Ue.return) && (yield Ee.call(Ue));
                } finally {
                  if (J) throw J.error;
                }
              }
              Ce.complete();
            });
          })(Me, Ce).catch((Ue) => Ce.error(Ue));
        });
      }
    },
    9646: (qe, fe, I) => {
      I.d(fe, { of: () => G });
      var d = I(7669),
        P = I(2076);
      function G(...X) {
        const Z = (0, d.yG)(X);
        return (0, P.D)(X, Z);
      }
    },
    5403: (qe, fe, I) => {
      I.d(fe, { x: () => P });
      var d = I(930);
      function P(X, Z, we, ye, Ae) {
        return new G(X, Z, we, ye, Ae);
      }
      class G extends d.Lv {
        constructor(Z, we, ye, Ae, Oe, N) {
          super(Z),
            (this.onFinalize = Oe),
            (this.shouldUnsubscribe = N),
            (this._next = we
              ? function (oe) {
                  try {
                    we(oe);
                  } catch (_e) {
                    Z.error(_e);
                  }
                }
              : super._next),
            (this._error = Ae
              ? function (oe) {
                  try {
                    Ae(oe);
                  } catch (_e) {
                    Z.error(_e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = ye
              ? function () {
                  try {
                    ye();
                  } catch (oe) {
                    Z.error(oe);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var Z;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: we } = this;
            super.unsubscribe(),
              !we &&
                (null === (Z = this.onFinalize) ||
                  void 0 === Z ||
                  Z.call(this));
          }
        }
      }
    },
    4351: (qe, fe, I) => {
      I.d(fe, { b: () => G });
      var d = I(5577),
        P = I(576);
      function G(X, Z) {
        return (0, P.m)(Z) ? (0, d.z)(X, Z, 1) : (0, d.z)(X, 1);
      }
    },
    6590: (qe, fe, I) => {
      I.d(fe, { d: () => G });
      var d = I(4482),
        P = I(5403);
      function G(X) {
        return (0, d.e)((Z, we) => {
          let ye = !1;
          Z.subscribe(
            (0, P.x)(
              we,
              (Ae) => {
                (ye = !0), we.next(Ae);
              },
              () => {
                ye || we.next(X), we.complete();
              }
            )
          );
        });
      }
    },
    9300: (qe, fe, I) => {
      I.d(fe, { h: () => G });
      var d = I(4482),
        P = I(5403);
      function G(X, Z) {
        return (0, d.e)((we, ye) => {
          let Ae = 0;
          we.subscribe(
            (0, P.x)(ye, (Oe) => X.call(Z, Oe, Ae++) && ye.next(Oe))
          );
        });
      }
    },
    590: (qe, fe, I) => {
      I.d(fe, { P: () => ye });
      var d = I(6805),
        P = I(9300),
        G = I(5698),
        X = I(6590),
        Z = I(8068),
        we = I(4671);
      function ye(Ae, Oe) {
        const N = arguments.length >= 2;
        return (oe) =>
          oe.pipe(
            Ae ? (0, P.h)((_e, xe) => Ae(_e, xe, oe)) : we.y,
            (0, G.q)(1),
            N ? (0, X.d)(Oe) : (0, Z.T)(() => new d.K())
          );
      }
    },
    4004: (qe, fe, I) => {
      I.d(fe, { U: () => G });
      var d = I(4482),
        P = I(5403);
      function G(X, Z) {
        return (0, d.e)((we, ye) => {
          let Ae = 0;
          we.subscribe(
            (0, P.x)(ye, (Oe) => {
              ye.next(X.call(Z, Oe, Ae++));
            })
          );
        });
      }
    },
    8189: (qe, fe, I) => {
      I.d(fe, { J: () => G });
      var d = I(5577),
        P = I(4671);
      function G(X = 1 / 0) {
        return (0, d.z)(P.y, X);
      }
    },
    5577: (qe, fe, I) => {
      I.d(fe, { z: () => Ae });
      var d = I(4004),
        P = I(8421),
        G = I(4482),
        X = I(9672),
        Z = I(5403),
        ye = I(576);
      function Ae(Oe, N, oe = 1 / 0) {
        return (0, ye.m)(N)
          ? Ae(
              (_e, xe) =>
                (0, d.U)((ge, Ve) => N(_e, ge, xe, Ve))((0, P.Xf)(Oe(_e, xe))),
              oe
            )
          : ("number" == typeof N && (oe = N),
            (0, G.e)((_e, xe) =>
              (function we(Oe, N, oe, _e, xe, ge, Ve, $e) {
                const Qe = [];
                let at = 0,
                  wt = 0,
                  Te = !1;
                const Me = () => {
                    Te && !Qe.length && !at && N.complete();
                  },
                  Ce = (ft) => (at < _e ? Ue(ft) : Qe.push(ft)),
                  Ue = (ft) => {
                    ge && N.next(ft), at++;
                    let J = !1;
                    (0, P.Xf)(oe(ft, wt++)).subscribe(
                      (0, Z.x)(
                        N,
                        (Ee) => {
                          xe?.(Ee), ge ? Ce(Ee) : N.next(Ee);
                        },
                        () => {
                          J = !0;
                        },
                        void 0,
                        () => {
                          if (J)
                            try {
                              for (at--; Qe.length && at < _e; ) {
                                const Ee = Qe.shift();
                                Ve ? (0, X.f)(N, Ve, () => Ue(Ee)) : Ue(Ee);
                              }
                              Me();
                            } catch (Ee) {
                              N.error(Ee);
                            }
                        }
                      )
                    );
                  };
                return (
                  Oe.subscribe(
                    (0, Z.x)(N, Ce, () => {
                      (Te = !0), Me();
                    })
                  ),
                  () => {
                    $e?.();
                  }
                );
              })(_e, xe, Oe, oe)
            ));
      }
    },
    5698: (qe, fe, I) => {
      I.d(fe, { q: () => X });
      var d = I(515),
        P = I(4482),
        G = I(5403);
      function X(Z) {
        return Z <= 0
          ? () => d.E
          : (0, P.e)((we, ye) => {
              let Ae = 0;
              we.subscribe(
                (0, G.x)(ye, (Oe) => {
                  ++Ae <= Z && (ye.next(Oe), Z <= Ae && ye.complete());
                })
              );
            });
      }
    },
    2722: (qe, fe, I) => {
      I.d(fe, { R: () => Z });
      var d = I(4482),
        P = I(5403),
        G = I(8421),
        X = I(5032);
      function Z(we) {
        return (0, d.e)((ye, Ae) => {
          (0, G.Xf)(we).subscribe((0, P.x)(Ae, () => Ae.complete(), X.Z)),
            !Ae.closed && ye.subscribe(Ae);
        });
      }
    },
    8068: (qe, fe, I) => {
      I.d(fe, { T: () => X });
      var d = I(6805),
        P = I(4482),
        G = I(5403);
      function X(we = Z) {
        return (0, P.e)((ye, Ae) => {
          let Oe = !1;
          ye.subscribe(
            (0, G.x)(
              Ae,
              (N) => {
                (Oe = !0), Ae.next(N);
              },
              () => (Oe ? Ae.complete() : Ae.error(we()))
            )
          );
        });
      }
      function Z() {
        return new d.K();
      }
    },
    3410: (qe, fe, I) => {
      I.d(fe, { z: () => d });
      const d = {
        setTimeout(P, G, ...X) {
          const { delegate: Z } = d;
          return Z?.setTimeout
            ? Z.setTimeout(P, G, ...X)
            : setTimeout(P, G, ...X);
        },
        clearTimeout(P) {
          const { delegate: G } = d;
          return (G?.clearTimeout || clearTimeout)(P);
        },
        delegate: void 0,
      };
    },
    2202: (qe, fe, I) => {
      I.d(fe, { h: () => P });
      const P = (function d() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    8822: (qe, fe, I) => {
      I.d(fe, { L: () => d });
      const d =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    6805: (qe, fe, I) => {
      I.d(fe, { K: () => P });
      const P = (0, I(3888).d)(
        (G) =>
          function () {
            G(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
    },
    7669: (qe, fe, I) => {
      I.d(fe, { _6: () => we, jO: () => X, yG: () => Z });
      var d = I(576);
      function G(ye) {
        return ye[ye.length - 1];
      }
      function X(ye) {
        return (0, d.m)(G(ye)) ? ye.pop() : void 0;
      }
      function Z(ye) {
        return (function P(ye) {
          return ye && (0, d.m)(ye.schedule);
        })(G(ye))
          ? ye.pop()
          : void 0;
      }
      function we(ye, Ae) {
        return "number" == typeof G(ye) ? ye.pop() : Ae;
      }
    },
    4742: (qe, fe, I) => {
      I.d(fe, { D: () => Z });
      const { isArray: d } = Array,
        { getPrototypeOf: P, prototype: G, keys: X } = Object;
      function Z(ye) {
        if (1 === ye.length) {
          const Ae = ye[0];
          if (d(Ae)) return { args: Ae, keys: null };
          if (
            (function we(ye) {
              return ye && "object" == typeof ye && P(ye) === G;
            })(Ae)
          ) {
            const Oe = X(Ae);
            return { args: Oe.map((N) => Ae[N]), keys: Oe };
          }
        }
        return { args: ye, keys: null };
      }
    },
    8737: (qe, fe, I) => {
      function d(P, G) {
        if (P) {
          const X = P.indexOf(G);
          0 <= X && P.splice(X, 1);
        }
      }
      I.d(fe, { P: () => d });
    },
    3888: (qe, fe, I) => {
      function d(P) {
        const X = P((Z) => {
          Error.call(Z), (Z.stack = new Error().stack);
        });
        return (
          (X.prototype = Object.create(Error.prototype)),
          (X.prototype.constructor = X),
          X
        );
      }
      I.d(fe, { d: () => d });
    },
    1810: (qe, fe, I) => {
      function d(P, G) {
        return P.reduce((X, Z, we) => ((X[Z] = G[we]), X), {});
      }
      I.d(fe, { n: () => d });
    },
    2806: (qe, fe, I) => {
      I.d(fe, { O: () => X, x: () => G });
      var d = I(2416);
      let P = null;
      function G(Z) {
        if (d.v.useDeprecatedSynchronousErrorHandling) {
          const we = !P;
          if ((we && (P = { errorThrown: !1, error: null }), Z(), we)) {
            const { errorThrown: ye, error: Ae } = P;
            if (((P = null), ye)) throw Ae;
          }
        } else Z();
      }
      function X(Z) {
        d.v.useDeprecatedSynchronousErrorHandling &&
          P &&
          ((P.errorThrown = !0), (P.error = Z));
      }
    },
    9672: (qe, fe, I) => {
      function d(P, G, X, Z = 0, we = !1) {
        const ye = G.schedule(function () {
          X(), we ? P.add(this.schedule(null, Z)) : this.unsubscribe();
        }, Z);
        if ((P.add(ye), !we)) return ye;
      }
      I.d(fe, { f: () => d });
    },
    4671: (qe, fe, I) => {
      function d(P) {
        return P;
      }
      I.d(fe, { y: () => d });
    },
    1144: (qe, fe, I) => {
      I.d(fe, { z: () => d });
      const d = (P) =>
        P && "number" == typeof P.length && "function" != typeof P;
    },
    2206: (qe, fe, I) => {
      I.d(fe, { D: () => P });
      var d = I(576);
      function P(G) {
        return Symbol.asyncIterator && (0, d.m)(G?.[Symbol.asyncIterator]);
      }
    },
    576: (qe, fe, I) => {
      function d(P) {
        return "function" == typeof P;
      }
      I.d(fe, { m: () => d });
    },
    3670: (qe, fe, I) => {
      I.d(fe, { c: () => G });
      var d = I(8822),
        P = I(576);
      function G(X) {
        return (0, P.m)(X[d.L]);
      }
    },
    6495: (qe, fe, I) => {
      I.d(fe, { T: () => G });
      var d = I(2202),
        P = I(576);
      function G(X) {
        return (0, P.m)(X?.[d.h]);
      }
    },
    8239: (qe, fe, I) => {
      I.d(fe, { t: () => P });
      var d = I(576);
      function P(G) {
        return (0, d.m)(G?.then);
      }
    },
    3260: (qe, fe, I) => {
      I.d(fe, { L: () => X, Q: () => G });
      var d = I(655),
        P = I(576);
      function G(Z) {
        return (0, d.FC)(this, arguments, function* () {
          const ye = Z.getReader();
          try {
            for (;;) {
              const { value: Ae, done: Oe } = yield (0, d.qq)(ye.read());
              if (Oe) return yield (0, d.qq)(void 0);
              yield yield (0, d.qq)(Ae);
            }
          } finally {
            ye.releaseLock();
          }
        });
      }
      function X(Z) {
        return (0, P.m)(Z?.getReader);
      }
    },
    4482: (qe, fe, I) => {
      I.d(fe, { A: () => P, e: () => G });
      var d = I(576);
      function P(X) {
        return (0, d.m)(X?.lift);
      }
      function G(X) {
        return (Z) => {
          if (P(Z))
            return Z.lift(function (we) {
              try {
                return X(we, this);
              } catch (ye) {
                this.error(ye);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    3268: (qe, fe, I) => {
      I.d(fe, { Z: () => X });
      var d = I(4004);
      const { isArray: P } = Array;
      function X(Z) {
        return (0, d.U)((we) =>
          (function G(Z, we) {
            return P(we) ? Z(...we) : Z(we);
          })(Z, we)
        );
      }
    },
    5032: (qe, fe, I) => {
      function d() {}
      I.d(fe, { Z: () => d });
    },
    9635: (qe, fe, I) => {
      I.d(fe, { U: () => G, z: () => P });
      var d = I(4671);
      function P(...X) {
        return G(X);
      }
      function G(X) {
        return 0 === X.length
          ? d.y
          : 1 === X.length
          ? X[0]
          : function (we) {
              return X.reduce((ye, Ae) => Ae(ye), we);
            };
      }
    },
    7849: (qe, fe, I) => {
      I.d(fe, { h: () => G });
      var d = I(2416),
        P = I(3410);
      function G(X) {
        P.z.setTimeout(() => {
          const { onUnhandledError: Z } = d.v;
          if (!Z) throw X;
          Z(X);
        });
      }
    },
    4532: (qe, fe, I) => {
      function d(P) {
        return new TypeError(
          `You provided ${
            null !== P && "object" == typeof P ? "an invalid object" : `'${P}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      I.d(fe, { z: () => d });
    },
    655: (qe, fe, I) => {
      function _e(H, W, re, he) {
        return new (re || (re = Promise))(function (se, Be) {
          function dt(vt) {
            try {
              He(he.next(vt));
            } catch (Dt) {
              Be(Dt);
            }
          }
          function gt(vt) {
            try {
              He(he.throw(vt));
            } catch (Dt) {
              Be(Dt);
            }
          }
          function He(vt) {
            vt.done
              ? se(vt.value)
              : (function De(se) {
                  return se instanceof re
                    ? se
                    : new re(function (Be) {
                        Be(se);
                      });
                })(vt.value).then(dt, gt);
          }
          He((he = he.apply(H, W || [])).next());
        });
      }
      function Me(H) {
        return this instanceof Me ? ((this.v = H), this) : new Me(H);
      }
      function Ce(H, W, re) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var De,
          he = re.apply(H, W || []),
          se = [];
        return (
          (De = {}),
          Be("next"),
          Be("throw"),
          Be("return"),
          (De[Symbol.asyncIterator] = function () {
            return this;
          }),
          De
        );
        function Be(It) {
          he[It] &&
            (De[It] = function (tn) {
              return new Promise(function (Ft, tt) {
                se.push([It, tn, Ft, tt]) > 1 || dt(It, tn);
              });
            });
        }
        function dt(It, tn) {
          try {
            !(function gt(It) {
              It.value instanceof Me
                ? Promise.resolve(It.value.v).then(He, vt)
                : Dt(se[0][2], It);
            })(he[It](tn));
          } catch (Ft) {
            Dt(se[0][3], Ft);
          }
        }
        function He(It) {
          dt("next", It);
        }
        function vt(It) {
          dt("throw", It);
        }
        function Dt(It, tn) {
          It(tn), se.shift(), se.length && dt(se[0][0], se[0][1]);
        }
      }
      function ft(H) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var re,
          W = H[Symbol.asyncIterator];
        return W
          ? W.call(H)
          : ((H = (function $e(H) {
              var W = "function" == typeof Symbol && Symbol.iterator,
                re = W && H[W],
                he = 0;
              if (re) return re.call(H);
              if (H && "number" == typeof H.length)
                return {
                  next: function () {
                    return (
                      H && he >= H.length && (H = void 0),
                      { value: H && H[he++], done: !H }
                    );
                  },
                };
              throw new TypeError(
                W
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(H)),
            (re = {}),
            he("next"),
            he("throw"),
            he("return"),
            (re[Symbol.asyncIterator] = function () {
              return this;
            }),
            re);
        function he(se) {
          re[se] =
            H[se] &&
            function (Be) {
              return new Promise(function (dt, gt) {
                !(function De(se, Be, dt, gt) {
                  Promise.resolve(gt).then(function (He) {
                    se({ value: He, done: dt });
                  }, Be);
                })(dt, gt, (Be = H[se](Be)).done, Be.value);
              });
            };
        }
      }
      I.d(fe, { FC: () => Ce, KL: () => ft, mG: () => _e, qq: () => Me });
    },
    6895: (qe, fe, I) => {
      I.d(fe, {
        Do: () => wt,
        EM: () => Nr,
        HT: () => X,
        JF: () => or,
        K0: () => we,
        Mx: () => Pr,
        O5: () => rt,
        S$: () => $e,
        V_: () => Oe,
        Ye: () => Te,
        ax: () => ln,
        b0: () => at,
        bD: () => Eo,
        ez: () => Co,
        mk: () => _r,
        q: () => G,
        w_: () => Z,
      });
      var d = I(8256);
      let P = null;
      function G() {
        return P;
      }
      function X(h) {
        P || (P = h);
      }
      class Z {}
      const we = new d.OlP("DocumentToken");
      let ye = (() => {
        class h {
          historyGo(m) {
            throw new Error("Not implemented");
          }
        }
        return (
          (h.ɵfac = function (m) {
            return new (m || h)();
          }),
          (h.ɵprov = d.Yz7({
            token: h,
            factory: function () {
              return (function Ae() {
                return (0, d.LFG)(N);
              })();
            },
            providedIn: "platform",
          })),
          h
        );
      })();
      const Oe = new d.OlP("Location Initialized");
      let N = (() => {
        class h extends ye {
          constructor(m) {
            super(),
              (this._doc = m),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return G().getBaseHref(this._doc);
          }
          onPopState(m) {
            const M = G().getGlobalEventTarget(this._doc, "window");
            return (
              M.addEventListener("popstate", m, !1),
              () => M.removeEventListener("popstate", m)
            );
          }
          onHashChange(m) {
            const M = G().getGlobalEventTarget(this._doc, "window");
            return (
              M.addEventListener("hashchange", m, !1),
              () => M.removeEventListener("hashchange", m)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(m) {
            this._location.pathname = m;
          }
          pushState(m, M, x) {
            oe() ? this._history.pushState(m, M, x) : (this._location.hash = x);
          }
          replaceState(m, M, x) {
            oe()
              ? this._history.replaceState(m, M, x)
              : (this._location.hash = x);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(m = 0) {
            this._history.go(m);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (h.ɵfac = function (m) {
            return new (m || h)(d.LFG(we));
          }),
          (h.ɵprov = d.Yz7({
            token: h,
            factory: function () {
              return (function _e() {
                return new N((0, d.LFG)(we));
              })();
            },
            providedIn: "platform",
          })),
          h
        );
      })();
      function oe() {
        return !!window.history.pushState;
      }
      function xe(h, C) {
        if (0 == h.length) return C;
        if (0 == C.length) return h;
        let m = 0;
        return (
          h.endsWith("/") && m++,
          C.startsWith("/") && m++,
          2 == m ? h + C.substring(1) : 1 == m ? h + C : h + "/" + C
        );
      }
      function ge(h) {
        const C = h.match(/#|\?|$/),
          m = (C && C.index) || h.length;
        return h.slice(0, m - ("/" === h[m - 1] ? 1 : 0)) + h.slice(m);
      }
      function Ve(h) {
        return h && "?" !== h[0] ? "?" + h : h;
      }
      let $e = (() => {
        class h {
          historyGo(m) {
            throw new Error("Not implemented");
          }
        }
        return (
          (h.ɵfac = function (m) {
            return new (m || h)();
          }),
          (h.ɵprov = d.Yz7({
            token: h,
            factory: function () {
              return (0, d.f3M)(at);
            },
            providedIn: "root",
          })),
          h
        );
      })();
      const Qe = new d.OlP("appBaseHref");
      let at = (() => {
          class h extends $e {
            constructor(m, M) {
              super(),
                (this._platformLocation = m),
                (this._removeListenerFns = []),
                (this._baseHref =
                  M ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, d.f3M)(we).location?.origin ??
                  "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(m) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(m),
                this._platformLocation.onHashChange(m)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(m) {
              return xe(this._baseHref, m);
            }
            path(m = !1) {
              const M =
                  this._platformLocation.pathname +
                  Ve(this._platformLocation.search),
                x = this._platformLocation.hash;
              return x && m ? `${M}${x}` : M;
            }
            pushState(m, M, x, K) {
              const ne = this.prepareExternalUrl(x + Ve(K));
              this._platformLocation.pushState(m, M, ne);
            }
            replaceState(m, M, x, K) {
              const ne = this.prepareExternalUrl(x + Ve(K));
              this._platformLocation.replaceState(m, M, ne);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(m = 0) {
              this._platformLocation.historyGo?.(m);
            }
          }
          return (
            (h.ɵfac = function (m) {
              return new (m || h)(d.LFG(ye), d.LFG(Qe, 8));
            }),
            (h.ɵprov = d.Yz7({
              token: h,
              factory: h.ɵfac,
              providedIn: "root",
            })),
            h
          );
        })(),
        wt = (() => {
          class h extends $e {
            constructor(m, M) {
              super(),
                (this._platformLocation = m),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != M && (this._baseHref = M);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(m) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(m),
                this._platformLocation.onHashChange(m)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(m = !1) {
              let M = this._platformLocation.hash;
              return null == M && (M = "#"), M.length > 0 ? M.substring(1) : M;
            }
            prepareExternalUrl(m) {
              const M = xe(this._baseHref, m);
              return M.length > 0 ? "#" + M : M;
            }
            pushState(m, M, x, K) {
              let ne = this.prepareExternalUrl(x + Ve(K));
              0 == ne.length && (ne = this._platformLocation.pathname),
                this._platformLocation.pushState(m, M, ne);
            }
            replaceState(m, M, x, K) {
              let ne = this.prepareExternalUrl(x + Ve(K));
              0 == ne.length && (ne = this._platformLocation.pathname),
                this._platformLocation.replaceState(m, M, ne);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(m = 0) {
              this._platformLocation.historyGo?.(m);
            }
          }
          return (
            (h.ɵfac = function (m) {
              return new (m || h)(d.LFG(ye), d.LFG(Qe, 8));
            }),
            (h.ɵprov = d.Yz7({ token: h, factory: h.ɵfac })),
            h
          );
        })(),
        Te = (() => {
          class h {
            constructor(m) {
              (this._subject = new d.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = m);
              const M = this._locationStrategy.getBaseHref();
              (this._basePath = (function ft(h) {
                if (new RegExp("^(https?:)?//").test(h)) {
                  const [, m] = h.split(/\/\/[^\/]+/);
                  return m;
                }
                return h;
              })(ge(Ue(M)))),
                this._locationStrategy.onPopState((x) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: x.state,
                    type: x.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(m = !1) {
              return this.normalize(this._locationStrategy.path(m));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(m, M = "") {
              return this.path() == this.normalize(m + Ve(M));
            }
            normalize(m) {
              return h.stripTrailingSlash(
                (function Ce(h, C) {
                  return h && new RegExp(`^${h}([/;?#]|$)`).test(C)
                    ? C.substring(h.length)
                    : C;
                })(this._basePath, Ue(m))
              );
            }
            prepareExternalUrl(m) {
              return (
                m && "/" !== m[0] && (m = "/" + m),
                this._locationStrategy.prepareExternalUrl(m)
              );
            }
            go(m, M = "", x = null) {
              this._locationStrategy.pushState(x, "", m, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(m + Ve(M)),
                  x
                );
            }
            replaceState(m, M = "", x = null) {
              this._locationStrategy.replaceState(x, "", m, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(m + Ve(M)),
                  x
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(m = 0) {
              this._locationStrategy.historyGo?.(m);
            }
            onUrlChange(m) {
              return (
                this._urlChangeListeners.push(m),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((M) => {
                    this._notifyUrlChangeListeners(M.url, M.state);
                  })),
                () => {
                  const M = this._urlChangeListeners.indexOf(m);
                  this._urlChangeListeners.splice(M, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(m = "", M) {
              this._urlChangeListeners.forEach((x) => x(m, M));
            }
            subscribe(m, M, x) {
              return this._subject.subscribe({
                next: m,
                error: M,
                complete: x,
              });
            }
          }
          return (
            (h.normalizeQueryParams = Ve),
            (h.joinWithSlash = xe),
            (h.stripTrailingSlash = ge),
            (h.ɵfac = function (m) {
              return new (m || h)(d.LFG($e));
            }),
            (h.ɵprov = d.Yz7({
              token: h,
              factory: function () {
                return (function Me() {
                  return new Te((0, d.LFG)($e));
                })();
              },
              providedIn: "root",
            })),
            h
          );
        })();
      function Ue(h) {
        return h.replace(/\/index.html$/, "");
      }
      function Pr(h, C) {
        C = encodeURIComponent(C);
        for (const m of h.split(";")) {
          const M = m.indexOf("="),
            [x, K] = -1 == M ? [m, ""] : [m.slice(0, M), m.slice(M + 1)];
          if (x.trim() === C) return decodeURIComponent(K);
        }
        return null;
      }
      const nr = /\s+/,
        Zr = [];
      let _r = (() => {
        class h {
          constructor(m, M, x, K) {
            (this._iterableDiffers = m),
              (this._keyValueDiffers = M),
              (this._ngEl = x),
              (this._renderer = K),
              (this.initialClasses = Zr),
              (this.stateMap = new Map());
          }
          set klass(m) {
            this.initialClasses = null != m ? m.trim().split(nr) : Zr;
          }
          set ngClass(m) {
            this.rawClass = "string" == typeof m ? m.trim().split(nr) : m;
          }
          ngDoCheck() {
            for (const M of this.initialClasses) this._updateState(M, !0);
            const m = this.rawClass;
            if (Array.isArray(m) || m instanceof Set)
              for (const M of m) this._updateState(M, !0);
            else if (null != m)
              for (const M of Object.keys(m))
                this._updateState(M, Boolean(m[M]));
            this._applyStateDiff();
          }
          _updateState(m, M) {
            const x = this.stateMap.get(m);
            void 0 !== x
              ? (x.enabled !== M && ((x.changed = !0), (x.enabled = M)),
                (x.touched = !0))
              : this.stateMap.set(m, { enabled: M, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const m of this.stateMap) {
              const M = m[0],
                x = m[1];
              x.changed
                ? (this._toggleClass(M, x.enabled), (x.changed = !1))
                : x.touched ||
                  (x.enabled && this._toggleClass(M, !1),
                  this.stateMap.delete(M)),
                (x.touched = !1);
            }
          }
          _toggleClass(m, M) {
            (m = m.trim()).length > 0 &&
              m.split(nr).forEach((x) => {
                M
                  ? this._renderer.addClass(this._ngEl.nativeElement, x)
                  : this._renderer.removeClass(this._ngEl.nativeElement, x);
              });
          }
        }
        return (
          (h.ɵfac = function (m) {
            return new (m || h)(
              d.Y36(d.ZZ4),
              d.Y36(d.aQg),
              d.Y36(d.SBq),
              d.Y36(d.Qsj)
            );
          }),
          (h.ɵdir = d.lG2({
            type: h,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
            standalone: !0,
          })),
          h
        );
      })();
      class Cr {
        constructor(C, m, M, x) {
          (this.$implicit = C),
            (this.ngForOf = m),
            (this.index = M),
            (this.count = x);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let ln = (() => {
        class h {
          set ngForOf(m) {
            (this._ngForOf = m), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(m) {
            this._trackByFn = m;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(m, M, x) {
            (this._viewContainer = m),
              (this._template = M),
              (this._differs = x),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(m) {
            m && (this._template = m);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const m = this._ngForOf;
              !this._differ &&
                m &&
                (this._differ = this._differs
                  .find(m)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const m = this._differ.diff(this._ngForOf);
              m && this._applyChanges(m);
            }
          }
          _applyChanges(m) {
            const M = this._viewContainer;
            m.forEachOperation((x, K, ne) => {
              if (null == x.previousIndex)
                M.createEmbeddedView(
                  this._template,
                  new Cr(x.item, this._ngForOf, -1, -1),
                  null === ne ? void 0 : ne
                );
              else if (null == ne) M.remove(null === K ? void 0 : K);
              else if (null !== K) {
                const Le = M.get(K);
                M.move(Le, ne), Tn(Le, x);
              }
            });
            for (let x = 0, K = M.length; x < K; x++) {
              const Le = M.get(x).context;
              (Le.index = x), (Le.count = K), (Le.ngForOf = this._ngForOf);
            }
            m.forEachIdentityChange((x) => {
              Tn(M.get(x.currentIndex), x);
            });
          }
          static ngTemplateContextGuard(m, M) {
            return !0;
          }
        }
        return (
          (h.ɵfac = function (m) {
            return new (m || h)(d.Y36(d.s_b), d.Y36(d.Rgc), d.Y36(d.ZZ4));
          }),
          (h.ɵdir = d.lG2({
            type: h,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
            standalone: !0,
          })),
          h
        );
      })();
      function Tn(h, C) {
        h.context.$implicit = C.item;
      }
      let rt = (() => {
        class h {
          constructor(m, M) {
            (this._viewContainer = m),
              (this._context = new $t()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = M);
          }
          set ngIf(m) {
            (this._context.$implicit = this._context.ngIf = m),
              this._updateView();
          }
          set ngIfThen(m) {
            on("ngIfThen", m),
              (this._thenTemplateRef = m),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(m) {
            on("ngIfElse", m),
              (this._elseTemplateRef = m),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(m, M) {
            return !0;
          }
        }
        return (
          (h.ɵfac = function (m) {
            return new (m || h)(d.Y36(d.s_b), d.Y36(d.Rgc));
          }),
          (h.ɵdir = d.lG2({
            type: h,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          })),
          h
        );
      })();
      class $t {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function on(h, C) {
        if (C && !C.createEmbeddedView)
          throw new Error(
            `${h} must be a TemplateRef, but received '${(0, d.AaK)(C)}'.`
          );
      }
      let Co = (() => {
        class h {}
        return (
          (h.ɵfac = function (m) {
            return new (m || h)();
          }),
          (h.ɵmod = d.oAB({ type: h })),
          (h.ɵinj = d.cJS({})),
          h
        );
      })();
      const Eo = "browser";
      let Nr = (() => {
        class h {}
        return (
          (h.ɵprov = (0, d.Yz7)({
            token: h,
            providedIn: "root",
            factory: () => new no((0, d.LFG)(we), window),
          })),
          h
        );
      })();
      class no {
        constructor(C, m) {
          (this.document = C), (this.window = m), (this.offset = () => [0, 0]);
        }
        setOffset(C) {
          this.offset = Array.isArray(C) ? () => C : C;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(C) {
          this.supportsScrolling() && this.window.scrollTo(C[0], C[1]);
        }
        scrollToAnchor(C) {
          if (!this.supportsScrolling()) return;
          const m = (function cr(h, C) {
            const m = h.getElementById(C) || h.getElementsByName(C)[0];
            if (m) return m;
            if (
              "function" == typeof h.createTreeWalker &&
              h.body &&
              (h.body.createShadowRoot || h.body.attachShadow)
            ) {
              const M = h.createTreeWalker(h.body, NodeFilter.SHOW_ELEMENT);
              let x = M.currentNode;
              for (; x; ) {
                const K = x.shadowRoot;
                if (K) {
                  const ne =
                    K.getElementById(C) || K.querySelector(`[name="${C}"]`);
                  if (ne) return ne;
                }
                x = M.nextNode();
              }
            }
            return null;
          })(this.document, C);
          m && (this.scrollToElement(m), m.focus());
        }
        setHistoryScrollRestoration(C) {
          if (this.supportScrollRestoration()) {
            const m = this.window.history;
            m && m.scrollRestoration && (m.scrollRestoration = C);
          }
        }
        scrollToElement(C) {
          const m = C.getBoundingClientRect(),
            M = m.left + this.window.pageXOffset,
            x = m.top + this.window.pageYOffset,
            K = this.offset();
          this.window.scrollTo(M - K[0], x - K[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const C =
              Mo(this.window.history) ||
              Mo(Object.getPrototypeOf(this.window.history));
            return !(!C || (!C.writable && !C.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function Mo(h) {
        return Object.getOwnPropertyDescriptor(h, "scrollRestoration");
      }
      class or {}
    },
    529: (qe, fe, I) => {
      I.d(fe, {
        AF: () => Rt,
        JF: () => gn,
        LE: () => at,
        WM: () => N,
        Zn: () => lt,
        eN: () => W,
        jN: () => Oe,
      });
      var d = I(6895),
        P = I(8256),
        G = I(9646),
        X = I(9751),
        Z = I(4351),
        we = I(9300),
        ye = I(4004);
      class Ae {}
      class Oe {}
      class N {
        constructor(L) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            L
              ? (this.lazyInit =
                  "string" == typeof L
                    ? () => {
                        (this.headers = new Map()),
                          L.split("\n").forEach((B) => {
                            const de = B.indexOf(":");
                            if (de > 0) {
                              const ie = B.slice(0, de),
                                Ze = ie.toLowerCase(),
                                We = B.slice(de + 1).trim();
                              this.maybeSetNormalizedName(ie, Ze),
                                this.headers.has(Ze)
                                  ? this.headers.get(Ze).push(We)
                                  : this.headers.set(Ze, [We]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(L).forEach((B) => {
                            let de = L[B];
                            const ie = B.toLowerCase();
                            "string" == typeof de && (de = [de]),
                              de.length > 0 &&
                                (this.headers.set(ie, de),
                                this.maybeSetNormalizedName(B, ie));
                          });
                      })
              : (this.headers = new Map());
        }
        has(L) {
          return this.init(), this.headers.has(L.toLowerCase());
        }
        get(L) {
          this.init();
          const B = this.headers.get(L.toLowerCase());
          return B && B.length > 0 ? B[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(L) {
          return this.init(), this.headers.get(L.toLowerCase()) || null;
        }
        append(L, B) {
          return this.clone({ name: L, value: B, op: "a" });
        }
        set(L, B) {
          return this.clone({ name: L, value: B, op: "s" });
        }
        delete(L, B) {
          return this.clone({ name: L, value: B, op: "d" });
        }
        maybeSetNormalizedName(L, B) {
          this.normalizedNames.has(B) || this.normalizedNames.set(B, L);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof N
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((L) => this.applyUpdate(L)),
              (this.lazyUpdate = null)));
        }
        copyFrom(L) {
          L.init(),
            Array.from(L.headers.keys()).forEach((B) => {
              this.headers.set(B, L.headers.get(B)),
                this.normalizedNames.set(B, L.normalizedNames.get(B));
            });
        }
        clone(L) {
          const B = new N();
          return (
            (B.lazyInit =
              this.lazyInit && this.lazyInit instanceof N
                ? this.lazyInit
                : this),
            (B.lazyUpdate = (this.lazyUpdate || []).concat([L])),
            B
          );
        }
        applyUpdate(L) {
          const B = L.name.toLowerCase();
          switch (L.op) {
            case "a":
            case "s":
              let de = L.value;
              if (("string" == typeof de && (de = [de]), 0 === de.length))
                return;
              this.maybeSetNormalizedName(L.name, B);
              const ie = ("a" === L.op ? this.headers.get(B) : void 0) || [];
              ie.push(...de), this.headers.set(B, ie);
              break;
            case "d":
              const Ze = L.value;
              if (Ze) {
                let We = this.headers.get(B);
                if (!We) return;
                (We = We.filter((Ot) => -1 === Ze.indexOf(Ot))),
                  0 === We.length
                    ? (this.headers.delete(B), this.normalizedNames.delete(B))
                    : this.headers.set(B, We);
              } else this.headers.delete(B), this.normalizedNames.delete(B);
          }
        }
        forEach(L) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((B) =>
              L(this.normalizedNames.get(B), this.headers.get(B))
            );
        }
      }
      class _e {
        encodeKey(L) {
          return $e(L);
        }
        encodeValue(L) {
          return $e(L);
        }
        decodeKey(L) {
          return decodeURIComponent(L);
        }
        decodeValue(L) {
          return decodeURIComponent(L);
        }
      }
      const ge = /%(\d[a-f0-9])/gi,
        Ve = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function $e(te) {
        return encodeURIComponent(te).replace(ge, (L, B) => Ve[B] ?? L);
      }
      function Qe(te) {
        return `${te}`;
      }
      class at {
        constructor(L = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = L.encoder || new _e()),
            L.fromString)
          ) {
            if (L.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function xe(te, L) {
              const B = new Map();
              return (
                te.length > 0 &&
                  te
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((ie) => {
                      const Ze = ie.indexOf("="),
                        [We, Ot] =
                          -1 == Ze
                            ? [L.decodeKey(ie), ""]
                            : [
                                L.decodeKey(ie.slice(0, Ze)),
                                L.decodeValue(ie.slice(Ze + 1)),
                              ],
                        ht = B.get(We) || [];
                      ht.push(Ot), B.set(We, ht);
                    }),
                B
              );
            })(L.fromString, this.encoder);
          } else
            L.fromObject
              ? ((this.map = new Map()),
                Object.keys(L.fromObject).forEach((B) => {
                  const de = L.fromObject[B],
                    ie = Array.isArray(de) ? de.map(Qe) : [Qe(de)];
                  this.map.set(B, ie);
                }))
              : (this.map = null);
        }
        has(L) {
          return this.init(), this.map.has(L);
        }
        get(L) {
          this.init();
          const B = this.map.get(L);
          return B ? B[0] : null;
        }
        getAll(L) {
          return this.init(), this.map.get(L) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(L, B) {
          return this.clone({ param: L, value: B, op: "a" });
        }
        appendAll(L) {
          const B = [];
          return (
            Object.keys(L).forEach((de) => {
              const ie = L[de];
              Array.isArray(ie)
                ? ie.forEach((Ze) => {
                    B.push({ param: de, value: Ze, op: "a" });
                  })
                : B.push({ param: de, value: ie, op: "a" });
            }),
            this.clone(B)
          );
        }
        set(L, B) {
          return this.clone({ param: L, value: B, op: "s" });
        }
        delete(L, B) {
          return this.clone({ param: L, value: B, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((L) => {
                const B = this.encoder.encodeKey(L);
                return this.map
                  .get(L)
                  .map((de) => B + "=" + this.encoder.encodeValue(de))
                  .join("&");
              })
              .filter((L) => "" !== L)
              .join("&")
          );
        }
        clone(L) {
          const B = new at({ encoder: this.encoder });
          return (
            (B.cloneFrom = this.cloneFrom || this),
            (B.updates = (this.updates || []).concat(L)),
            B
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((L) => this.map.set(L, this.cloneFrom.map.get(L))),
              this.updates.forEach((L) => {
                switch (L.op) {
                  case "a":
                  case "s":
                    const B =
                      ("a" === L.op ? this.map.get(L.param) : void 0) || [];
                    B.push(Qe(L.value)), this.map.set(L.param, B);
                    break;
                  case "d":
                    if (void 0 === L.value) {
                      this.map.delete(L.param);
                      break;
                    }
                    {
                      let de = this.map.get(L.param) || [];
                      const ie = de.indexOf(Qe(L.value));
                      -1 !== ie && de.splice(ie, 1),
                        de.length > 0
                          ? this.map.set(L.param, de)
                          : this.map.delete(L.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class Te {
        constructor() {
          this.map = new Map();
        }
        set(L, B) {
          return this.map.set(L, B), this;
        }
        get(L) {
          return (
            this.map.has(L) || this.map.set(L, L.defaultValue()),
            this.map.get(L)
          );
        }
        delete(L) {
          return this.map.delete(L), this;
        }
        has(L) {
          return this.map.has(L);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Ce(te) {
        return typeof ArrayBuffer < "u" && te instanceof ArrayBuffer;
      }
      function Ue(te) {
        return typeof Blob < "u" && te instanceof Blob;
      }
      function ft(te) {
        return typeof FormData < "u" && te instanceof FormData;
      }
      class Ee {
        constructor(L, B, de, ie) {
          let Ze;
          if (
            ((this.url = B),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = L.toUpperCase()),
            (function Me(te) {
              switch (te) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || ie
              ? ((this.body = void 0 !== de ? de : null), (Ze = ie))
              : (Ze = de),
            Ze &&
              ((this.reportProgress = !!Ze.reportProgress),
              (this.withCredentials = !!Ze.withCredentials),
              Ze.responseType && (this.responseType = Ze.responseType),
              Ze.headers && (this.headers = Ze.headers),
              Ze.context && (this.context = Ze.context),
              Ze.params && (this.params = Ze.params)),
            this.headers || (this.headers = new N()),
            this.context || (this.context = new Te()),
            this.params)
          ) {
            const We = this.params.toString();
            if (0 === We.length) this.urlWithParams = B;
            else {
              const Ot = B.indexOf("?");
              this.urlWithParams =
                B + (-1 === Ot ? "?" : Ot < B.length - 1 ? "&" : "") + We;
            }
          } else (this.params = new at()), (this.urlWithParams = B);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Ce(this.body) ||
              Ue(this.body) ||
              ft(this.body) ||
              (function J(te) {
                return (
                  typeof URLSearchParams < "u" && te instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof at
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || ft(this.body)
            ? null
            : Ue(this.body)
            ? this.body.type || null
            : Ce(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof at
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(L = {}) {
          const B = L.method || this.method,
            de = L.url || this.url,
            ie = L.responseType || this.responseType,
            Ze = void 0 !== L.body ? L.body : this.body,
            We =
              void 0 !== L.withCredentials
                ? L.withCredentials
                : this.withCredentials,
            Ot =
              void 0 !== L.reportProgress
                ? L.reportProgress
                : this.reportProgress;
          let ht = L.headers || this.headers,
            Lt = L.params || this.params;
          const Hn = L.context ?? this.context;
          return (
            void 0 !== L.setHeaders &&
              (ht = Object.keys(L.setHeaders).reduce(
                (qt, nn) => qt.set(nn, L.setHeaders[nn]),
                ht
              )),
            L.setParams &&
              (Lt = Object.keys(L.setParams).reduce(
                (qt, nn) => qt.set(nn, L.setParams[nn]),
                Lt
              )),
            new Ee(B, de, Ze, {
              params: Lt,
              headers: ht,
              context: Hn,
              reportProgress: Ot,
              responseType: ie,
              withCredentials: We,
            })
          );
        }
      }
      var Q = (() => (
        ((Q = Q || {})[(Q.Sent = 0)] = "Sent"),
        (Q[(Q.UploadProgress = 1)] = "UploadProgress"),
        (Q[(Q.ResponseHeader = 2)] = "ResponseHeader"),
        (Q[(Q.DownloadProgress = 3)] = "DownloadProgress"),
        (Q[(Q.Response = 4)] = "Response"),
        (Q[(Q.User = 5)] = "User"),
        Q
      ))();
      class me {
        constructor(L, B = 200, de = "OK") {
          (this.headers = L.headers || new N()),
            (this.status = void 0 !== L.status ? L.status : B),
            (this.statusText = L.statusText || de),
            (this.url = L.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Ge extends me {
        constructor(L = {}) {
          super(L), (this.type = Q.ResponseHeader);
        }
        clone(L = {}) {
          return new Ge({
            headers: L.headers || this.headers,
            status: void 0 !== L.status ? L.status : this.status,
            statusText: L.statusText || this.statusText,
            url: L.url || this.url || void 0,
          });
        }
      }
      class lt extends me {
        constructor(L = {}) {
          super(L),
            (this.type = Q.Response),
            (this.body = void 0 !== L.body ? L.body : null);
        }
        clone(L = {}) {
          return new lt({
            body: void 0 !== L.body ? L.body : this.body,
            headers: L.headers || this.headers,
            status: void 0 !== L.status ? L.status : this.status,
            statusText: L.statusText || this.statusText,
            url: L.url || this.url || void 0,
          });
        }
      }
      class Pe extends me {
        constructor(L) {
          super(L, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${L.url || "(unknown url)"}`
                : `Http failure response for ${L.url || "(unknown url)"}: ${
                    L.status
                  } ${L.statusText}`),
            (this.error = L.error || null);
        }
      }
      function H(te, L) {
        return {
          body: L,
          headers: te.headers,
          context: te.context,
          observe: te.observe,
          params: te.params,
          reportProgress: te.reportProgress,
          responseType: te.responseType,
          withCredentials: te.withCredentials,
        };
      }
      let W = (() => {
        class te {
          constructor(B) {
            this.handler = B;
          }
          request(B, de, ie = {}) {
            let Ze;
            if (B instanceof Ee) Ze = B;
            else {
              let ht, Lt;
              (ht = ie.headers instanceof N ? ie.headers : new N(ie.headers)),
                ie.params &&
                  (Lt =
                    ie.params instanceof at
                      ? ie.params
                      : new at({ fromObject: ie.params })),
                (Ze = new Ee(B, de, void 0 !== ie.body ? ie.body : null, {
                  headers: ht,
                  context: ie.context,
                  params: Lt,
                  reportProgress: ie.reportProgress,
                  responseType: ie.responseType || "json",
                  withCredentials: ie.withCredentials,
                }));
            }
            const We = (0, G.of)(Ze).pipe(
              (0, Z.b)((ht) => this.handler.handle(ht))
            );
            if (B instanceof Ee || "events" === ie.observe) return We;
            const Ot = We.pipe((0, we.h)((ht) => ht instanceof lt));
            switch (ie.observe || "body") {
              case "body":
                switch (Ze.responseType) {
                  case "arraybuffer":
                    return Ot.pipe(
                      (0, ye.U)((ht) => {
                        if (
                          null !== ht.body &&
                          !(ht.body instanceof ArrayBuffer)
                        )
                          throw new Error("Response is not an ArrayBuffer.");
                        return ht.body;
                      })
                    );
                  case "blob":
                    return Ot.pipe(
                      (0, ye.U)((ht) => {
                        if (null !== ht.body && !(ht.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return ht.body;
                      })
                    );
                  case "text":
                    return Ot.pipe(
                      (0, ye.U)((ht) => {
                        if (null !== ht.body && "string" != typeof ht.body)
                          throw new Error("Response is not a string.");
                        return ht.body;
                      })
                    );
                  default:
                    return Ot.pipe((0, ye.U)((ht) => ht.body));
                }
              case "response":
                return Ot;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${ie.observe}}`
                );
            }
          }
          delete(B, de = {}) {
            return this.request("DELETE", B, de);
          }
          get(B, de = {}) {
            return this.request("GET", B, de);
          }
          head(B, de = {}) {
            return this.request("HEAD", B, de);
          }
          jsonp(B, de) {
            return this.request("JSONP", B, {
              params: new at().append(de, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(B, de = {}) {
            return this.request("OPTIONS", B, de);
          }
          patch(B, de, ie = {}) {
            return this.request("PATCH", B, H(ie, de));
          }
          post(B, de, ie = {}) {
            return this.request("POST", B, H(ie, de));
          }
          put(B, de, ie = {}) {
            return this.request("PUT", B, H(ie, de));
          }
        }
        return (
          (te.ɵfac = function (B) {
            return new (B || te)(P.LFG(Ae));
          }),
          (te.ɵprov = P.Yz7({ token: te, factory: te.ɵfac })),
          te
        );
      })();
      function re(te, L) {
        return L(te);
      }
      function he(te, L) {
        return (B, de) => L.intercept(B, { handle: (ie) => te(ie, de) });
      }
      const se = new P.OlP("HTTP_INTERCEPTORS"),
        Be = new P.OlP("HTTP_INTERCEPTOR_FNS");
      function dt() {
        let te = null;
        return (L, B) => (
          null === te &&
            (te = ((0, P.f3M)(se, { optional: !0 }) ?? []).reduceRight(he, re)),
          te(L, B)
        );
      }
      let gt = (() => {
        class te extends Ae {
          constructor(B, de) {
            super(),
              (this.backend = B),
              (this.injector = de),
              (this.chain = null);
          }
          handle(B) {
            if (null === this.chain) {
              const de = Array.from(new Set(this.injector.get(Be)));
              this.chain = de.reduceRight(
                (ie, Ze) =>
                  (function De(te, L, B) {
                    return (de, ie) =>
                      B.runInContext(() => L(de, (Ze) => te(Ze, ie)));
                  })(ie, Ze, this.injector),
                re
              );
            }
            return this.chain(B, (de) => this.backend.handle(de));
          }
        }
        return (
          (te.ɵfac = function (B) {
            return new (B || te)(P.LFG(Oe), P.LFG(P.lqb));
          }),
          (te.ɵprov = P.Yz7({ token: te, factory: te.ɵfac })),
          te
        );
      })();
      const Ye = /^\)\]\}',?\n/;
      let Rt = (() => {
        class te {
          constructor(B) {
            this.xhrFactory = B;
          }
          handle(B) {
            if ("JSONP" === B.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new X.y((de) => {
              const ie = this.xhrFactory.build();
              if (
                (ie.open(B.method, B.urlWithParams),
                B.withCredentials && (ie.withCredentials = !0),
                B.headers.forEach((j, k) =>
                  ie.setRequestHeader(j, k.join(","))
                ),
                B.headers.has("Accept") ||
                  ie.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !B.headers.has("Content-Type"))
              ) {
                const j = B.detectContentTypeHeader();
                null !== j && ie.setRequestHeader("Content-Type", j);
              }
              if (B.responseType) {
                const j = B.responseType.toLowerCase();
                ie.responseType = "json" !== j ? j : "text";
              }
              const Ze = B.serializeBody();
              let We = null;
              const Ot = () => {
                  if (null !== We) return We;
                  const j = ie.statusText || "OK",
                    k = new N(ie.getAllResponseHeaders()),
                    R =
                      (function pn(te) {
                        return "responseURL" in te && te.responseURL
                          ? te.responseURL
                          : /^X-Request-URL:/m.test(te.getAllResponseHeaders())
                          ? te.getResponseHeader("X-Request-URL")
                          : null;
                      })(ie) || B.url;
                  return (
                    (We = new Ge({
                      headers: k,
                      status: ie.status,
                      statusText: j,
                      url: R,
                    })),
                    We
                  );
                },
                ht = () => {
                  let { headers: j, status: k, statusText: R, url: z } = Ot(),
                    ae = null;
                  204 !== k &&
                    (ae =
                      typeof ie.response > "u" ? ie.responseText : ie.response),
                    0 === k && (k = ae ? 200 : 0);
                  let ze = k >= 200 && k < 300;
                  if ("json" === B.responseType && "string" == typeof ae) {
                    const nt = ae;
                    ae = ae.replace(Ye, "");
                    try {
                      ae = "" !== ae ? JSON.parse(ae) : null;
                    } catch (At) {
                      (ae = nt),
                        ze && ((ze = !1), (ae = { error: At, text: ae }));
                    }
                  }
                  ze
                    ? (de.next(
                        new lt({
                          body: ae,
                          headers: j,
                          status: k,
                          statusText: R,
                          url: z || void 0,
                        })
                      ),
                      de.complete())
                    : de.error(
                        new Pe({
                          error: ae,
                          headers: j,
                          status: k,
                          statusText: R,
                          url: z || void 0,
                        })
                      );
                },
                Lt = (j) => {
                  const { url: k } = Ot(),
                    R = new Pe({
                      error: j,
                      status: ie.status || 0,
                      statusText: ie.statusText || "Unknown Error",
                      url: k || void 0,
                    });
                  de.error(R);
                };
              let Hn = !1;
              const qt = (j) => {
                  Hn || (de.next(Ot()), (Hn = !0));
                  let k = { type: Q.DownloadProgress, loaded: j.loaded };
                  j.lengthComputable && (k.total = j.total),
                    "text" === B.responseType &&
                      ie.responseText &&
                      (k.partialText = ie.responseText),
                    de.next(k);
                },
                nn = (j) => {
                  let k = { type: Q.UploadProgress, loaded: j.loaded };
                  j.lengthComputable && (k.total = j.total), de.next(k);
                };
              return (
                ie.addEventListener("load", ht),
                ie.addEventListener("error", Lt),
                ie.addEventListener("timeout", Lt),
                ie.addEventListener("abort", Lt),
                B.reportProgress &&
                  (ie.addEventListener("progress", qt),
                  null !== Ze &&
                    ie.upload &&
                    ie.upload.addEventListener("progress", nn)),
                ie.send(Ze),
                de.next({ type: Q.Sent }),
                () => {
                  ie.removeEventListener("error", Lt),
                    ie.removeEventListener("abort", Lt),
                    ie.removeEventListener("load", ht),
                    ie.removeEventListener("timeout", Lt),
                    B.reportProgress &&
                      (ie.removeEventListener("progress", qt),
                      null !== Ze &&
                        ie.upload &&
                        ie.upload.removeEventListener("progress", nn)),
                    ie.readyState !== ie.DONE && ie.abort();
                }
              );
            });
          }
        }
        return (
          (te.ɵfac = function (B) {
            return new (B || te)(P.LFG(d.JF));
          }),
          (te.ɵprov = P.Yz7({ token: te, factory: te.ɵfac })),
          te
        );
      })();
      const zt = new P.OlP("XSRF_ENABLED"),
        Ht = "XSRF-TOKEN",
        Jt = new P.OlP("XSRF_COOKIE_NAME", {
          providedIn: "root",
          factory: () => Ht,
        }),
        Wt = "X-XSRF-TOKEN",
        wn = new P.OlP("XSRF_HEADER_NAME", {
          providedIn: "root",
          factory: () => Wt,
        });
      class Yt {}
      let ce = (() => {
        class te {
          constructor(B, de, ie) {
            (this.doc = B),
              (this.platform = de),
              (this.cookieName = ie),
              (this.lastCookieString = ""),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ("server" === this.platform) return null;
            const B = this.doc.cookie || "";
            return (
              B !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = (0, d.Mx)(B, this.cookieName)),
                (this.lastCookieString = B)),
              this.lastToken
            );
          }
        }
        return (
          (te.ɵfac = function (B) {
            return new (B || te)(P.LFG(d.K0), P.LFG(P.Lbi), P.LFG(Jt));
          }),
          (te.ɵprov = P.Yz7({ token: te, factory: te.ɵfac })),
          te
        );
      })();
      function F(te, L) {
        const B = te.url.toLowerCase();
        if (
          !(0, P.f3M)(zt) ||
          "GET" === te.method ||
          "HEAD" === te.method ||
          B.startsWith("http://") ||
          B.startsWith("https://")
        )
          return L(te);
        const de = (0, P.f3M)(Yt).getToken(),
          ie = (0, P.f3M)(wn);
        return (
          null != de &&
            !te.headers.has(ie) &&
            (te = te.clone({ headers: te.headers.set(ie, de) })),
          L(te)
        );
      }
      var O = (() => (
        ((O = O || {})[(O.Interceptors = 0)] = "Interceptors"),
        (O[(O.LegacyInterceptors = 1)] = "LegacyInterceptors"),
        (O[(O.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
        (O[(O.NoXsrfProtection = 3)] = "NoXsrfProtection"),
        (O[(O.JsonpSupport = 4)] = "JsonpSupport"),
        (O[(O.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
        O
      ))();
      function ue(te, L) {
        return { ɵkind: te, ɵproviders: L };
      }
      function Se(...te) {
        const L = [
          W,
          Rt,
          gt,
          { provide: Ae, useExisting: gt },
          { provide: Oe, useExisting: Rt },
          { provide: Be, useValue: F, multi: !0 },
          { provide: zt, useValue: !0 },
          { provide: Yt, useClass: ce },
        ];
        for (const B of te) L.push(...B.ɵproviders);
        return (0, P.MR2)(L);
      }
      const Ke = new P.OlP("LEGACY_INTERCEPTOR_FN");
      function Je({ cookieName: te, headerName: L }) {
        const B = [];
        return (
          void 0 !== te && B.push({ provide: Jt, useValue: te }),
          void 0 !== L && B.push({ provide: wn, useValue: L }),
          ue(O.CustomXsrfConfiguration, B)
        );
      }
      let gn = (() => {
        class te {}
        return (
          (te.ɵfac = function (B) {
            return new (B || te)();
          }),
          (te.ɵmod = P.oAB({ type: te })),
          (te.ɵinj = P.cJS({
            providers: [
              Se(
                ue(O.LegacyInterceptors, [
                  { provide: Ke, useFactory: dt },
                  { provide: Be, useExisting: Ke, multi: !0 },
                ]),
                Je({ cookieName: Ht, headerName: Wt })
              ),
            ],
          })),
          te
        );
      })();
    },
    8256: (qe, fe, I) => {
      I.d(fe, {
        tb: () => ng,
        AFp: () => Qp,
        ip1: () => Xp,
        CZH: () => ul,
        hGG: () => OE,
        z2F: () => dl,
        sBO: () => gE,
        Sil: () => JC,
        _Vd: () => Qs,
        EJc: () => KC,
        Xts: () => Kl,
        SBq: () => ea,
        lqb: () => Ti,
        qLn: () => ta,
        vpe: () => yo,
        XFs: () => O,
        OlP: () => jt,
        zs3: () => Ri,
        ZZ4: () => Dc,
        aQg: () => _c,
        soG: () => cl,
        YKP: () => ap,
        h0i: () => Is,
        PXZ: () => cE,
        R0b: () => Or,
        FiY: () => $s,
        Lbi: () => WC,
        g9A: () => tg,
        Qsj: () => ly,
        FYo: () => Nd,
        JOm: () => fo,
        tp0: () => Gs,
        Rgc: () => pa,
        dDg: () => sE,
        eoX: () => ug,
        GfV: () => Fd,
        s_b: () => sl,
        ifc: () => nt,
        MMx: () => qu,
        Lck: () => B_,
        eFA: () => fg,
        Gpc: () => wt,
        f3M: () => ht,
        $WT: () => Cr,
        MR2: () => Ym,
        _c5: () => RE,
        c2e: () => YC,
        zSh: () => Ql,
        wAp: () => it,
        vHH: () => J,
        lri: () => ag,
        rWj: () => lg,
        D6c: () => PE,
        cg1: () => Bu,
        kL8: () => Ph,
        dqk: () => Je,
        Z0I: () => zt,
        CqO: () => Vf,
        QGY: () => Ru,
        F4k: () => kf,
        RDi: () => bm,
        AaK: () => $e,
        qOj: () => wu,
        TTD: () => Yn,
        _Bn: () => sp,
        jDz: () => up,
        xp6: () => Hd,
        uIk: () => Su,
        ekj: () => Lu,
        Suo: () => Ap,
        Xpm: () => qr,
        lG2: () => Zr,
        Yz7: () => Ut,
        cJS: () => pn,
        oAB: () => ar,
        Yjl: () => _r,
        Y36: () => hs,
        _UZ: () => Tu,
        BQk: () => Ja,
        ynx: () => Za,
        qZA: () => Ka,
        TgZ: () => qa,
        EpF: () => Lf,
        n5z: () => Dl,
        LFG: () => We,
        $8M: () => Us,
        $Z: () => tf,
        NdJ: () => Ou,
        CRH: () => Tp,
        oxw: () => $f,
        Q6J: () => Iu,
        VKq: () => mp,
        iGM: () => Ip,
        MAs: () => Nf,
        KtG: () => pr,
        CHM: () => io,
        P3R: () => Ed,
        YNc: () => xf,
        W1O: () => xp,
        _uU: () => hh,
        Oqu: () => Vu,
        hij: () => el,
        AsE: () => Uu,
      });
      var d = I(7579),
        P = I(727),
        G = I(9751),
        X = I(8189),
        Z = I(8421),
        we = I(515),
        ye = I(7669),
        Ae = I(2076),
        N = I(930),
        oe = I(4482);
      function xe(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new N.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return (0, Z.Xf)(t(...n)).subscribe(r);
      }
      function ge(e) {
        for (let t in e) if (e[t] === ge) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function Ve(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function $e(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map($e).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function Qe(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const at = ge({ __forward_ref__: ge });
      function wt(e) {
        return (
          (e.__forward_ref__ = wt),
          (e.toString = function () {
            return $e(this());
          }),
          e
        );
      }
      function Te(e) {
        return Me(e) ? e() : e;
      }
      function Me(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(at) &&
          e.__forward_ref__ === wt
        );
      }
      function Ce(e) {
        return e && !!e.ɵproviders;
      }
      const ft = "https://g.co/ng/security#xss";
      class J extends Error {
        constructor(t, n) {
          super(
            (function Ee(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t.trim() : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function Q(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function H(e, t) {
        throw new J(-201, !1);
      }
      function Ft(e, t) {
        null == e &&
          (function tt(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function Ut(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function pn(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Rt(e) {
        return Ht(e, Yt) || Ht(e, F);
      }
      function zt(e) {
        return null !== Rt(e);
      }
      function Ht(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function wn(e) {
        return e && (e.hasOwnProperty(ce) || e.hasOwnProperty(T))
          ? e[ce]
          : null;
      }
      const Yt = ge({ ɵprov: ge }),
        ce = ge({ ɵinj: ge }),
        F = ge({ ngInjectableDef: ge }),
        T = ge({ ngInjectorDef: ge });
      var O = (() => (
        ((O = O || {})[(O.Default = 0)] = "Default"),
        (O[(O.Host = 1)] = "Host"),
        (O[(O.Self = 2)] = "Self"),
        (O[(O.SkipSelf = 4)] = "SkipSelf"),
        (O[(O.Optional = 8)] = "Optional"),
        O
      ))();
      let ue;
      function je(e) {
        const t = ue;
        return (ue = e), t;
      }
      function Ke(e, t, n) {
        const r = Rt(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & O.Optional
          ? null
          : void 0 !== t
          ? t
          : void H($e(e));
      }
      const Je = (() =>
          (typeof globalThis < "u" && globalThis) ||
          (typeof global < "u" && global) ||
          (typeof window < "u" && window) ||
          (typeof self < "u" &&
            typeof WorkerGlobalScope < "u" &&
            self instanceof WorkerGlobalScope &&
            self))(),
        Bn = {},
        gn = "__NG_DI_FLAG__",
        ut = "ngTempTokenPath",
        te = /\n/gm,
        B = "__source";
      let de;
      function ie(e) {
        const t = de;
        return (de = e), t;
      }
      function Ze(e, t = O.Default) {
        if (void 0 === de) throw new J(-203, !1);
        return null === de
          ? Ke(e, void 0, t)
          : de.get(e, t & O.Optional ? null : void 0, t);
      }
      function We(e, t = O.Default) {
        return (
          (function Se() {
            return ue;
          })() || Ze
        )(Te(e), t);
      }
      function ht(e, t = O.Default) {
        return We(e, Lt(t));
      }
      function Lt(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Hn(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = Te(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new J(900, !1);
            let o,
              i = O.Default;
            for (let a = 0; a < r.length; a++) {
              const c = r[a],
                p = nn(c);
              "number" == typeof p
                ? -1 === p
                  ? (o = c.token)
                  : (i |= p)
                : (o = c);
            }
            t.push(We(o, i));
          } else t.push(We(r));
        }
        return t;
      }
      function qt(e, t) {
        return (e[gn] = t), (e.prototype[gn] = t), e;
      }
      function nn(e) {
        return e[gn];
      }
      function R(e) {
        return { toString: e }.toString();
      }
      var z = (() => (
          ((z = z || {})[(z.OnPush = 0)] = "OnPush"),
          (z[(z.Default = 1)] = "Default"),
          z
        ))(),
        nt = (() => {
          return (
            ((e = nt || (nt = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            nt
          );
          var e;
        })();
      const At = {},
        et = [],
        $n = ge({ ɵcmp: ge }),
        Gn = ge({ ɵdir: ge }),
        tr = ge({ ɵpipe: ge }),
        zn = ge({ ɵmod: ge }),
        Jn = ge({ ɵfac: ge }),
        Sn = ge({ __NG_ELEMENT_ID__: ge });
      let Dr = 0;
      function qr(e) {
        return R(() => {
          const n = !0 === e.standalone,
            r = {},
            o = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === z.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || et,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || nt.Emulated,
              id: "c" + Dr++,
              styles: e.styles || et,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
              findHostDirectiveDefs: null,
              hostDirectives: null,
            },
            i = e.dependencies,
            a = e.features;
          return (
            (o.inputs = nr(e.inputs, r)),
            (o.outputs = nr(e.outputs)),
            a && a.forEach((c) => c(o)),
            (o.directiveDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Kr).filter(Go)
              : null),
            (o.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(rn).filter(Go)
              : null),
            o
          );
        });
      }
      function Kr(e) {
        return Tt(e) || Kt(e);
      }
      function Go(e) {
        return null !== e;
      }
      function ar(e) {
        return R(() => ({
          type: e.type,
          bootstrap: e.bootstrap || et,
          declarations: e.declarations || et,
          imports: e.imports || et,
          exports: e.exports || et,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function nr(e, t) {
        if (null == e) return At;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])),
              (n[o] = r),
              t && (t[o] = i);
          }
        return n;
      }
      const Zr = qr;
      function _r(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function Tt(e) {
        return e[$n] || null;
      }
      function Kt(e) {
        return e[Gn] || null;
      }
      function rn(e) {
        return e[tr] || null;
      }
      function Cr(e) {
        const t = Tt(e) || Kt(e) || rn(e);
        return null !== t && t.standalone;
      }
      function ln(e, t) {
        const n = e[zn] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${$e(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function vn(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Rn(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Ir(e) {
        return 0 != (4 & e.flags);
      }
      function ur(e) {
        return e.componentOffset > -1;
      }
      function cn(e) {
        return 1 == (1 & e.flags);
      }
      function dn(e) {
        return null !== e.template;
      }
      function eo(e) {
        return 0 != (256 & e[2]);
      }
      function or(e, t) {
        return e.hasOwnProperty(Jn) ? e[Jn] : null;
      }
      class ro {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Yn() {
        return So;
      }
      function So(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Io), di;
      }
      function di() {
        const e = Lr(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === At) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Io(e, t, n, r) {
        const o = this.declaredInputs[n],
          i =
            Lr(e) ||
            (function fi(e, t) {
              return (e[Fr] = t);
            })(e, { previous: At, current: null }),
          a = i.current || (i.current = {}),
          c = i.previous,
          p = c[o];
        (a[o] = new ro(p && p.currentValue, t, c === At)), (e[r] = t);
      }
      Yn.ngInherit = !0;
      const Fr = "__ngSimpleChanges__";
      function Lr(e) {
        return e[Fr] || null;
      }
      function sn(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Vr(e, t) {
        return sn(t[e]);
      }
      function Gt(e, t) {
        return sn(t[e.index]);
      }
      function dr(e, t) {
        return e.data[t];
      }
      function On(e, t) {
        const n = t[e];
        return vn(n) ? n : n[0];
      }
      function fr(e) {
        return 64 == (64 & e[2]);
      }
      function hr(e, t) {
        return null == t ? null : e[t];
      }
      function Ar(e) {
        e[18] = 0;
      }
      function Br(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const ct = { lFrame: Ki(null), bindingsEnabled: !0 };
      function Fe() {
        return ct.bindingsEnabled;
      }
      function le() {
        return ct.lFrame.lView;
      }
      function yt() {
        return ct.lFrame.tView;
      }
      function io(e) {
        return (ct.lFrame.contextLView = e), e[8];
      }
      function pr(e) {
        return (ct.lFrame.contextLView = null), e;
      }
      function Qt() {
        let e = jr();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function jr() {
        return ct.lFrame.currentTNode;
      }
      function Pn(e, t) {
        const n = ct.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Hi() {
        return ct.lFrame.isParent;
      }
      function $i() {
        ct.lFrame.isParent = !1;
      }
      function Ao() {
        return ct.lFrame.bindingIndex++;
      }
      function ir(e) {
        const t = ct.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function gi(e, t) {
        const n = ct.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), zi(t);
      }
      function zi(e) {
        ct.lFrame.currentDirectiveIndex = e;
      }
      function xs() {
        return ct.lFrame.currentQueryIndex;
      }
      function To(e) {
        ct.lFrame.currentQueryIndex = e;
      }
      function Yi(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function qi(e, t, n) {
        if (n & O.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & O.Host ||
              ((o = Yi(i)), null === o || ((i = i[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (ct.lFrame = Ro());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function so(e) {
        const t = Ro(),
          n = e[1];
        (ct.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Ro() {
        const e = ct.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Ki(e) : t;
      }
      function Ki(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Oo() {
        const e = ct.lFrame;
        return (
          (ct.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Zi = Oo;
      function Ji() {
        const e = Oo();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function Nn() {
        return ct.lFrame.selectedIndex;
      }
      function ao(e) {
        ct.lFrame.selectedIndex = e;
      }
      function Zt() {
        const e = ct.lFrame;
        return dr(e.tView, e.selectedIndex);
      }
      function ne(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: c,
              ngAfterViewInit: p,
              ngAfterViewChecked: _,
              ngOnDestroy: b,
            } = i;
          a && (e.contentHooks || (e.contentHooks = [])).push(-n, a),
            c &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, c),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, c)),
            p && (e.viewHooks || (e.viewHooks = [])).push(-n, p),
            _ &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, _),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, _)),
            null != b && (e.destroyHooks || (e.destroyHooks = [])).push(n, b);
        }
      }
      function Le(e, t, n) {
        xt(e, t, 3, n);
      }
      function Mt(e, t, n, r) {
        (3 & e[2]) === n && xt(e, t, n, r);
      }
      function St(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function xt(e, t, n, r) {
        const i = r ?? -1,
          a = t.length - 1;
        let c = 0;
        for (let p = void 0 !== r ? 65535 & e[18] : 0; p < a; p++)
          if ("number" == typeof t[p + 1]) {
            if (((c = t[p]), null != r && c >= r)) break;
          } else
            t[p] < 0 && (e[18] += 65536),
              (c < i || -1 == i) &&
                (Ct(e, n, t, p), (e[18] = (4294901760 & e[18]) + p + 2)),
              p++;
      }
      function Ct(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          c = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(c);
            } finally {
            }
          }
        } else
          try {
            i.call(c);
          } finally {
          }
      }
      class Nt {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Ns(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ("number" == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              a = n[r++],
              c = n[r++];
            e.setAttribute(t, a, c, i);
          } else {
            const i = o,
              a = n[++r];
            Po(i) ? e.setProperty(t, i, a) : e.setAttribute(t, i, a), r++;
          }
        }
        return r;
      }
      function Fs(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Po(e) {
        return 64 === e.charCodeAt(0);
      }
      function xo(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  _a(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function _a(e, t, n, r, o) {
        let i = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; i < e.length; ) {
            const c = e[i++];
            if ("number" == typeof c) {
              if (c === t) {
                a = -1;
                break;
              }
              if (c > t) {
                a = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const c = e[i];
          if ("number" == typeof c) break;
          if (c === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== a && (e.splice(a, 0, t), (i = a + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function Ls(e) {
        return -1 !== e;
      }
      function No(e) {
        return 32767 & e;
      }
      function vi(e, t) {
        let n = (function Xi(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Qi = !0;
      function es(e) {
        const t = Qi;
        return (Qi = e), t;
      }
      let gl = 0;
      const Xn = {};
      function ts(e, t) {
        const n = wa(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          ns(r.data, e),
          ns(t, null),
          ns(r.blueprint, null));
        const o = ks(e, t),
          i = e.injectorIndex;
        if (Ls(o)) {
          const a = No(o),
            c = vi(o, t),
            p = c[1].data;
          for (let _ = 0; _ < 8; _++) t[i + _] = c[a + _] | p[a + _];
        }
        return (t[i + 8] = o), i;
      }
      function ns(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function wa(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function ks(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = is(o)), null === r)) return -1;
          if ((n++, (o = o[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Vs(e, t, n) {
        !(function ml(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Sn) && (r = n[Sn]),
            null == r && (r = n[Sn] = gl++);
          const o = 255 & r;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function Un(e, t, n) {
        if (n & O.Optional || void 0 !== e) return e;
        H();
      }
      function ba(e, t, n, r) {
        if (
          (n & O.Optional && void 0 === r && (r = null),
          !(n & (O.Self | O.Host)))
        ) {
          const o = e[9],
            i = je(void 0);
          try {
            return o ? o.get(t, r, n & O.Optional) : Ke(t, r, n & O.Optional);
          } finally {
            je(i);
          }
        }
        return Un(r, 0, n);
      }
      function Di(e, t, n, r = O.Default, o) {
        if (null !== e) {
          if (1024 & t[2]) {
            const a = (function Lo(e, t, n, r, o) {
              let i = e,
                a = t;
              for (
                ;
                null !== i && null !== a && 1024 & a[2] && !(256 & a[2]);

              ) {
                const c = Ma(i, a, n, r | O.Self, Xn);
                if (c !== Xn) return c;
                let p = i.parent;
                if (!p) {
                  const _ = a[21];
                  if (_) {
                    const b = _.get(n, Xn, r);
                    if (b !== Xn) return b;
                  }
                  (p = is(a)), (a = a[15]);
                }
                i = p;
              }
              return o;
            })(e, t, n, r, Xn);
            if (a !== Xn) return a;
          }
          const i = Ma(e, t, n, r, Xn);
          if (i !== Xn) return i;
        }
        return ba(t, n, r, o);
      }
      function Ma(e, t, n, r, o) {
        const i = (function Ec(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Sn) ? e[Sn] : void 0;
          return "number" == typeof t ? (t >= 0 ? 255 & t : Qo) : t;
        })(n);
        if ("function" == typeof i) {
          if (!qi(t, e, r)) return r & O.Host ? Un(o, 0, r) : ba(t, n, r, o);
          try {
            const a = i(r);
            if (null != a || r & O.Optional) return a;
            H();
          } finally {
            Zi();
          }
        } else if ("number" == typeof i) {
          let a = null,
            c = wa(e, t),
            p = -1,
            _ = r & O.Host ? t[16][6] : null;
          for (
            (-1 === c || r & O.SkipSelf) &&
            ((p = -1 === c ? ks(e, t) : t[c + 8]),
            -1 !== p && rs(r, !1)
              ? ((a = t[1]), (c = No(p)), (t = vi(p, t)))
              : (c = -1));
            -1 !== c;

          ) {
            const b = t[1];
            if (Sa(i, c, b.data)) {
              const A = vl(c, t, n, a, r, _);
              if (A !== Xn) return A;
            }
            (p = t[c + 8]),
              -1 !== p && rs(r, t[1].data[c + 8] === _) && Sa(i, c, t)
                ? ((a = b), (c = No(p)), (t = vi(p, t)))
                : (c = -1);
          }
        }
        return o;
      }
      function vl(e, t, n, r, o, i) {
        const a = t[1],
          c = a.data[e + 8],
          b = _i(
            c,
            a,
            n,
            null == r ? ur(c) && Qi : r != a && 0 != (3 & c.type),
            o & O.Host && i === c
          );
        return null !== b ? Xo(t, a, b, c) : Xn;
      }
      function _i(e, t, n, r, o) {
        const i = e.providerIndexes,
          a = t.data,
          c = 1048575 & i,
          p = e.directiveStart,
          b = i >> 20,
          V = o ? c + b : e.directiveEnd;
        for (let $ = r ? c : c + b; $ < V; $++) {
          const ee = a[$];
          if (($ < p && n === ee) || ($ >= p && ee.type === n)) return $;
        }
        if (o) {
          const $ = a[p];
          if ($ && dn($) && $.type === n) return p;
        }
        return null;
      }
      function Xo(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function Dn(e) {
            return e instanceof Nt;
          })(o)
        ) {
          const a = o;
          a.resolving &&
            (function Ge(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new J(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function me(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : Q(e);
              })(i[n])
            );
          const c = es(a.canSeeViewProviders);
          a.resolving = !0;
          const p = a.injectImpl ? je(a.injectImpl) : null;
          qi(e, r, O.Default);
          try {
            (o = e[n] = a.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function K(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const a = So(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, a);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== p && je(p), es(c), (a.resolving = !1), Zi();
          }
        }
        return o;
      }
      function Sa(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function rs(e, t) {
        return !(e & O.Self || (e & O.Host && t));
      }
      class Fo {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Di(this._tNode, this._lView, t, Lt(r), n);
        }
      }
      function Qo() {
        return new Fo(Qt(), le());
      }
      function Dl(e) {
        return R(() => {
          const t = e.prototype.constructor,
            n = t[Jn] || os(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[Jn] || os(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return (i) => new i();
        });
      }
      function os(e) {
        return Me(e)
          ? () => {
              const t = os(Te(e));
              return t && t();
            }
          : or(e);
      }
      function is(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function Us(e) {
        return (function yl(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if (Fs(i)) break;
              if (0 === i) o += 2;
              else if ("number" == typeof i)
                for (o++; o < r && "string" == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(Qt(), e);
      }
      const Ei = "__parameters__";
      function ei(e, t, n) {
        return R(() => {
          const r = (function wi(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const a = new o(...i);
            return (c.annotation = a), c;
            function c(p, _, b) {
              const A = p.hasOwnProperty(Ei)
                ? p[Ei]
                : Object.defineProperty(p, Ei, { value: [] })[Ei];
              for (; A.length <= b; ) A.push(null);
              return (A[b] = A[b] || []).push(a), p;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class jt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Ut({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Vo(e, t) {
        e.forEach((n) => (Array.isArray(n) ? Vo(n, t) : t(n)));
      }
      function wl(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function l(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function w(e, t, n) {
        let r = q(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function v(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function U(e, t) {
        const n = q(e, t);
        if (n >= 0) return e[1 | n];
      }
      function q(e, t) {
        return (function Re(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              a = e[i << n];
            if (t === a) return i << n;
            a > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const $s = qt(ei("Optional"), 8),
        Gs = qt(ei("SkipSelf"), 4);
      var fo = (() => (
        ((fo = fo || {})[(fo.Important = 1)] = "Important"),
        (fo[(fo.DashCase = 2)] = "DashCase"),
        fo
      ))();
      const Il = new Map();
      let Yg = 0;
      const Tl = "__ngContext__";
      function Kn(e, t) {
        vn(t)
          ? ((e[Tl] = t[20]),
            (function Kg(e) {
              Il.set(e[20], e);
            })(t))
          : (e[Tl] = t);
      }
      function Ol(e, t) {
        return undefined(e, t);
      }
      function qs(e) {
        const t = e[3];
        return Rn(t) ? t[3] : t;
      }
      function Pl(e) {
        return Yc(e[13]);
      }
      function xl(e) {
        return Yc(e[4]);
      }
      function Yc(e) {
        for (; null !== e && !Rn(e); ) e = e[4];
        return e;
      }
      function ls(e, t, n, r, o) {
        if (null != r) {
          let i,
            a = !1;
          Rn(r) ? (i = r) : vn(r) && ((a = !0), (r = r[0]));
          const c = sn(r);
          0 === e && null !== n
            ? null == o
              ? Qc(t, n, c)
              : Si(t, n, c, o || null, !0)
            : 1 === e && null !== n
            ? Si(t, n, c, o || null, !0)
            : 2 === e
            ? (function Bl(e, t, n) {
                const r = Ra(e, t);
                r &&
                  (function gm(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, c, a)
            : 3 === e && t.destroyNode(c),
            null != i &&
              (function vm(e, t, n, r, o) {
                const i = n[7];
                i !== sn(n) && ls(t, e, r, i, o);
                for (let c = 10; c < n.length; c++) {
                  const p = n[c];
                  Ks(p[1], p, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function Fl(e, t, n) {
        return e.createElement(t, n);
      }
      function Kc(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          o = t[3];
        512 & t[2] && ((t[2] &= -513), Br(o, -1)), n.splice(r, 1);
      }
      function Ll(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const o = r[17];
          null !== o && o !== e && Kc(o, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = l(e, 10 + t);
          !(function am(e, t) {
            Ks(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const a = i[19];
          null !== a && a.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -65);
        }
        return r;
      }
      function Zc(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          n.destroyNode && Ks(e, t, n, 3, null, null),
            (function cm(e) {
              let t = e[13];
              if (!t) return kl(e[1], e);
              for (; t; ) {
                let n = null;
                if (vn(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    vn(t) && kl(t[1], t), (t = t[3]);
                  null === t && (t = e), vn(t) && kl(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function kl(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function pm(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof Nt)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let a = 0; a < i.length; a += 2) {
                        const c = o[i[a]],
                          p = i[a + 1];
                        try {
                          p.call(c);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function hm(e, t) {
              const n = e.cleanup,
                r = t[7];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const a = n[i + 3];
                    a >= 0 ? r[(o = a)]() : r[(o = -a)].unsubscribe(), (i += 2);
                  } else {
                    const a = r[(o = n[i + 1])];
                    n[i].call(a);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) (0, r[i])();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && t[11].destroy();
          const n = t[17];
          if (null !== n && Rn(t[3])) {
            n !== t[3] && Kc(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
          !(function Zg(e) {
            Il.delete(e[20]);
          })(t);
        }
      }
      function Jc(e, t, n) {
        return (function Xc(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } = e.data[r.directiveStart + o];
              if (i === nt.None || i === nt.Emulated) return null;
            }
            return Gt(r, n);
          }
        })(e, t.parent, n);
      }
      function Si(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function Qc(e, t, n) {
        e.appendChild(t, n);
      }
      function ed(e, t, n, r, o) {
        null !== r ? Si(e, t, n, r, o) : Qc(e, t, n);
      }
      function Ra(e, t) {
        return e.parentNode(t);
      }
      let $l,
        Na,
        rd = function nd(e, t, n) {
          return 40 & e.type ? Gt(e, n) : null;
        };
      function Oa(e, t, n, r) {
        const o = Jc(e, r, t),
          i = t[11],
          c = (function td(e, t, n) {
            return rd(e, t, n);
          })(r.parent || t[6], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let p = 0; p < n.length; p++) ed(i, o, n[p], c, !1);
          else ed(i, o, n, c, !1);
      }
      function Pa(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Gt(t, e);
          if (4 & n) return Ul(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Pa(e, r);
            {
              const o = e[t.index];
              return Rn(o) ? Ul(-1, o) : sn(o);
            }
          }
          if (32 & n) return Ol(t, e)() || sn(e[t.index]);
          {
            const r = id(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Pa(qs(e[16]), r)
              : Pa(e, t.next);
          }
        }
        return null;
      }
      function id(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function Ul(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[1].firstChild;
          if (null !== o) return Pa(r, o);
        }
        return t[7];
      }
      function jl(e, t, n, r, o, i, a) {
        for (; null != n; ) {
          const c = r[n.index],
            p = n.type;
          if (
            (a && 0 === t && (c && Kn(sn(c), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & p) jl(e, t, n.child, r, o, i, !1), ls(t, e, o, c, i);
            else if (32 & p) {
              const _ = Ol(n, r);
              let b;
              for (; (b = _()); ) ls(t, e, o, b, i);
              ls(t, e, o, c, i);
            } else 16 & p ? sd(e, t, r, n, o, i) : ls(t, e, o, c, i);
          n = a ? n.projectionNext : n.next;
        }
      }
      function Ks(e, t, n, r, o, i) {
        jl(n, r, e.firstChild, t, o, i, !1);
      }
      function sd(e, t, n, r, o, i) {
        const a = n[16],
          p = a[6].projection[r.projection];
        if (Array.isArray(p))
          for (let _ = 0; _ < p.length; _++) ls(t, e, o, p[_], i);
        else jl(e, t, p, a[3], o, i, !0);
      }
      function ad(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function ld(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && Ns(e, t, r),
          null !== o && ad(e, t, o),
          null !== i &&
            (function _m(e, t, n) {
              e.setAttribute(t, "style", n);
            })(e, t, i);
      }
      function bm(e) {
        $l = e;
      }
      function fd(e) {
        return (
          (function Gl() {
            if (void 0 === Na && ((Na = null), Je.trustedTypes))
              try {
                Na = Je.trustedTypes.createPolicy("angular#unsafe-bypass", {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return Na;
          })()?.createScriptURL(e) || e
        );
      }
      class hd {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ft})`;
        }
      }
      function ni(e) {
        return e instanceof hd ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Zs(e, t) {
        const n = (function Rm(e) {
          return (e instanceof hd && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${ft})`);
        }
        return n === t;
      }
      const Nm =
        /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      var Mn = (() => (
        ((Mn = Mn || {})[(Mn.NONE = 0)] = "NONE"),
        (Mn[(Mn.HTML = 1)] = "HTML"),
        (Mn[(Mn.STYLE = 2)] = "STYLE"),
        (Mn[(Mn.SCRIPT = 3)] = "SCRIPT"),
        (Mn[(Mn.URL = 4)] = "URL"),
        (Mn[(Mn.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        Mn
      ))();
      function _d(e) {
        const t = Xs();
        return t
          ? t.sanitize(Mn.URL, e) || ""
          : Zs(e, "URL")
          ? ni(e)
          : (function zl(e) {
              return (e = String(e)).match(Nm) ? e : "unsafe:" + e;
            })(Q(e));
      }
      function Cd(e) {
        const t = Xs();
        if (t) return fd(t.sanitize(Mn.RESOURCE_URL, e) || "");
        if (Zs(e, "ResourceURL")) return fd(ni(e));
        throw new J(904, !1);
      }
      function Ed(e, t, n) {
        return (function Wm(e, t) {
          return ("src" === t &&
            ("embed" === e ||
              "frame" === e ||
              "iframe" === e ||
              "media" === e ||
              "script" === e)) ||
            ("href" === t && ("base" === e || "link" === e))
            ? Cd
            : _d;
        })(
          t,
          n
        )(e);
      }
      function Xs() {
        const e = le();
        return e && e[12];
      }
      const Kl = new jt("ENVIRONMENT_INITIALIZER"),
        wd = new jt("INJECTOR", -1),
        bd = new jt("INJECTOR_DEF_TYPES");
      class Md {
        get(t, n = Bn) {
          if (n === Bn) {
            const r = new Error(`NullInjectorError: No provider for ${$e(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      function Ym(e) {
        return { ɵproviders: e };
      }
      function qm(...e) {
        return { ɵproviders: Sd(0, e), ɵfromNgModule: !0 };
      }
      function Sd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          Vo(t, (i) => {
            const a = i;
            Zl(a, n, [], r) && (o || (o = []), o.push(a));
          }),
          void 0 !== o && Id(o, n),
          n
        );
      }
      function Id(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          Jl(o, (i) => {
            t.push(i);
          });
        }
      }
      function Zl(e, t, n, r) {
        if (!(e = Te(e))) return !1;
        let o = null,
          i = wn(e);
        const a = !i && Tt(e);
        if (i || a) {
          if (a && !a.standalone) return !1;
          o = e;
        } else {
          const p = e.ngModule;
          if (((i = wn(p)), !i)) return !1;
          o = p;
        }
        const c = r.has(o);
        if (a) {
          if (c) return !1;
          if ((r.add(o), a.dependencies)) {
            const p =
              "function" == typeof a.dependencies
                ? a.dependencies()
                : a.dependencies;
            for (const _ of p) Zl(_, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !c) {
              let _;
              r.add(o);
              try {
                Vo(i.imports, (b) => {
                  Zl(b, t, n, r) && (_ || (_ = []), _.push(b));
                });
              } finally {
              }
              void 0 !== _ && Id(_, t);
            }
            if (!c) {
              const _ = or(o) || (() => new o());
              t.push(
                { provide: o, useFactory: _, deps: et },
                { provide: bd, useValue: o, multi: !0 },
                { provide: Kl, useValue: () => We(o), multi: !0 }
              );
            }
            const p = i.providers;
            null == p ||
              c ||
              Jl(p, (b) => {
                t.push(b);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Jl(e, t) {
        for (let n of e)
          Ce(n) && (n = n.ɵproviders), Array.isArray(n) ? Jl(n, t) : t(n);
      }
      const Km = ge({ provide: String, useValue: ge });
      function Xl(e) {
        return null !== e && "object" == typeof e && Km in e;
      }
      function Ai(e) {
        return "function" == typeof e;
      }
      const Ql = new jt("Set Injector scope."),
        La = {},
        Jm = {};
      let eu;
      function ka() {
        return void 0 === eu && (eu = new Md()), eu;
      }
      class Ti {}
      class Rd extends Ti {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            nu(t, (a) => this.processProvider(a)),
            this.records.set(wd, us(void 0, this)),
            o.has("environment") && this.records.set(Ti, us(void 0, this));
          const i = this.records.get(Ql);
          null != i && "string" == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(bd.multi, et, O.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = ie(this),
            r = je(void 0);
          try {
            return t();
          } finally {
            ie(n), je(r);
          }
        }
        get(t, n = Bn, r = O.Default) {
          this.assertNotDestroyed(), (r = Lt(r));
          const o = ie(this),
            i = je(void 0);
          try {
            if (!(r & O.SkipSelf)) {
              let c = this.records.get(t);
              if (void 0 === c) {
                const p =
                  (function ny(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof jt)
                    );
                  })(t) && Rt(t);
                (c = p && this.injectableDefInScope(p) ? us(tu(t), La) : null),
                  this.records.set(t, c);
              }
              if (null != c) return this.hydrate(t, c);
            }
            return (r & O.Self ? ka() : this.parent).get(
              t,
              (n = r & O.Optional && n === Bn ? null : n)
            );
          } catch (a) {
            if ("NullInjectorError" === a.name) {
              if (((a[ut] = a[ut] || []).unshift($e(t)), o)) throw a;
              return (function j(e, t, n, r) {
                const o = e[ut];
                throw (
                  (t[B] && o.unshift(t[B]),
                  (e.message = (function k(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = $e(t);
                    if (Array.isArray(t)) o = t.map($e).join(" -> ");
                    else if ("object" == typeof t) {
                      let i = [];
                      for (let a in t)
                        if (t.hasOwnProperty(a)) {
                          let c = t[a];
                          i.push(
                            a +
                              ":" +
                              ("string" == typeof c ? JSON.stringify(c) : $e(c))
                          );
                        }
                      o = `{${i.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
                      te,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[ut] = null),
                  e)
                );
              })(a, t, "R3InjectorError", this.source);
            }
            throw a;
          } finally {
            je(i), ie(o);
          }
        }
        resolveInjectorInitializers() {
          const t = ie(this),
            n = je(void 0);
          try {
            const r = this.get(Kl.multi, et, O.Self);
            for (const o of r) o();
          } finally {
            ie(t), je(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push($e(r));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new J(205, !1);
        }
        processProvider(t) {
          let n = Ai((t = Te(t))) ? t : Te(t && t.provide);
          const r = (function Qm(e) {
            return Xl(e) ? us(void 0, e.useValue) : us(Od(e), La);
          })(t);
          if (Ai(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o ||
              ((o = us(void 0, La, !0)),
              (o.factory = () => Hn(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === La && ((n.value = Jm), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function ty(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = Te(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function tu(e) {
        const t = Rt(e),
          n = null !== t ? t.factory : or(e);
        if (null !== n) return n;
        if (e instanceof jt) throw new J(204, !1);
        if (e instanceof Function)
          return (function Xm(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function u(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, "?"),
                new J(204, !1))
              );
            const n = (function Jt(e) {
              const t = e && (e[Yt] || e[F]);
              if (t) {
                const n = (function Wt(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new J(204, !1);
      }
      function Od(e, t, n) {
        let r;
        if (Ai(e)) {
          const o = Te(e);
          return or(o) || tu(o);
        }
        if (Xl(e)) r = () => Te(e.useValue);
        else if (
          (function Td(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Hn(e.deps || []));
        else if (
          (function Ad(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => We(Te(e.useExisting));
        else {
          const o = Te(e && (e.useClass || e.provide));
          if (
            !(function ey(e) {
              return !!e.deps;
            })(e)
          )
            return or(o) || tu(o);
          r = () => new o(...Hn(e.deps));
        }
        return r;
      }
      function us(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function nu(e, t) {
        for (const n of e)
          Array.isArray(n) ? nu(n, t) : n && Ce(n) ? nu(n.ɵproviders, t) : t(n);
      }
      class ry {}
      class Pd {}
      class iy {
        resolveComponentFactory(t) {
          throw (function oy(e) {
            const t = Error(
              `No component factory found for ${$e(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Qs = (() => {
        class e {}
        return (e.NULL = new iy()), e;
      })();
      function sy() {
        return cs(Qt(), le());
      }
      function cs(e, t) {
        return new ea(Gt(e, t));
      }
      let ea = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = sy), e;
      })();
      function ay(e) {
        return e instanceof ea ? e.nativeElement : e;
      }
      class Nd {}
      let ly = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function uy() {
                const e = le(),
                  n = On(Qt().index, e);
                return (vn(n) ? n : e)[11];
              })()),
            e
          );
        })(),
        cy = (() => {
          class e {}
          return (
            (e.ɵprov = Ut({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class Fd {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const dy = new Fd("15.1.4"),
        ru = {};
      function iu(e) {
        return e.ngOriginalError;
      }
      class ta {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && iu(t);
          for (; n && iu(n); ) n = iu(n);
          return n || null;
        }
      }
      function jo(e) {
        return e instanceof Function ? e() : e;
      }
      function kd(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const Vd = "ng-template";
      function Ey(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && "class" === o) {
            if (((o = e[r]), -1 !== kd(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && "string" == typeof (o = e[r++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Ud(e) {
        return 4 === e.type && e.value !== Vd;
      }
      function wy(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Vd);
      }
      function by(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function Iy(e) {
            for (let t = 0; t < e.length; t++) if (Fs(e[t])) return t;
            return e.length;
          })(o);
        let a = !1;
        for (let c = 0; c < t.length; c++) {
          const p = t[c];
          if ("number" != typeof p) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== p && !wy(e, p, n)) || ("" === p && 1 === t.length))
                ) {
                  if (Gr(r)) return !1;
                  a = !0;
                }
              } else {
                const _ = 8 & r ? p : t[++c];
                if (8 & r && null !== e.attrs) {
                  if (!Ey(e.attrs, _, n)) {
                    if (Gr(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const A = My(8 & r ? "class" : p, o, Ud(e), n);
                if (-1 === A) {
                  if (Gr(r)) return !1;
                  a = !0;
                  continue;
                }
                if ("" !== _) {
                  let V;
                  V = A > i ? "" : o[A + 1].toLowerCase();
                  const $ = 8 & r ? V : null;
                  if (($ && -1 !== kd($, _, 0)) || (2 & r && _ !== V)) {
                    if (Gr(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !Gr(r) && !Gr(p)) return !1;
            if (a && Gr(p)) continue;
            (a = !1), (r = p | (1 & r));
          }
        }
        return Gr(r) || a;
      }
      function Gr(e) {
        return 0 == (1 & e);
      }
      function My(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const a = t[o];
            if (a === e) return o;
            if (3 === a || 6 === a) i = !0;
            else {
              if (1 === a || 2 === a) {
                let c = t[++o];
                for (; "string" == typeof c; ) c = t[++o];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function Ay(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Bd(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (by(e, t[r], n)) return !0;
        return !1;
      }
      function jd(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function Ry(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = "",
          i = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              const c = e[++n];
              o += "[" + a + (c.length > 0 ? '="' + c + '"' : "") + "]";
            } else 8 & r ? (o += "." + a) : 4 & r && (o += " " + a);
          else
            "" !== o && !Gr(a) && ((t += jd(i, o)), (o = "")),
              (r = a),
              (i = i || !Gr(r));
          n++;
        }
        return "" !== o && (t += jd(i, o)), t;
      }
      const mt = {};
      function Hd(e) {
        $d(yt(), le(), Nn() + e, !1);
      }
      function $d(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && Le(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && Mt(t, i, 0, n);
          }
        ao(n);
      }
      function Yd(e, t = null, n = null, r) {
        const o = qd(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function qd(e, t = null, n = null, r, o = new Set()) {
        const i = [n || et, qm(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : $e(e))),
          new Rd(i, t || ka(), r || null, o)
        );
      }
      let Ri = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return Yd({ name: "" }, r, n, "");
            {
              const o = n.name ?? "";
              return Yd({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Bn),
          (e.NULL = new Md()),
          (e.ɵprov = Ut({
            token: e,
            providedIn: "any",
            factory: () => We(wd),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function hs(e, t = O.Default) {
        const n = le();
        return null === n ? We(e, t) : Di(Qt(), n, Te(e), t);
      }
      function tf() {
        throw new Error("invalid");
      }
      function nf(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r + 1];
            if (-1 !== i) {
              const a = e.data[i];
              To(n[r]), a.contentQueries(2, t[i], i);
            }
          }
      }
      function Ua(e, t, n, r, o, i, a, c, p, _, b) {
        const A = t.blueprint.slice();
        return (
          (A[0] = o),
          (A[2] = 76 | r),
          (null !== b || (e && 1024 & e[2])) && (A[2] |= 1024),
          Ar(A),
          (A[3] = A[15] = e),
          (A[8] = n),
          (A[10] = a || (e && e[10])),
          (A[11] = c || (e && e[11])),
          (A[12] = p || (e && e[12]) || null),
          (A[9] = _ || (e && e[9]) || null),
          (A[6] = i),
          (A[20] = (function qg() {
            return Yg++;
          })()),
          (A[21] = b),
          (A[16] = 2 == t.type ? e[16] : A),
          A
        );
      }
      function ps(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function cu(e, t, n, r, o) {
            const i = jr(),
              a = Hi(),
              p = (e.data[t] = (function nv(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = p),
              null !== i &&
                (a
                  ? null == i.child && null !== p.parent && (i.child = p)
                  : null === i.next && (i.next = p)),
              p
            );
          })(e, t, n, r, o)),
            (function Ps() {
              return ct.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const a = (function Hr() {
            const e = ct.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return Pn(i, !0), i;
      }
      function na(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function du(e, t, n) {
        so(t);
        try {
          const r = e.viewQuery;
          null !== r && Cu(1, r, n);
          const o = e.template;
          null !== o && rf(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && nf(e, t),
            e.staticViewQueries && Cu(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function Qy(e, t) {
              for (let n = 0; n < t.length; n++) Cv(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), Ji();
        }
      }
      function Ba(e, t, n, r) {
        const o = t[2];
        if (128 != (128 & o)) {
          so(t);
          try {
            Ar(t),
              (function Zo(e) {
                return (ct.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && rf(e, t, n, 2, r);
            const a = 3 == (3 & o);
            if (a) {
              const _ = e.preOrderCheckHooks;
              null !== _ && Le(t, _, null);
            } else {
              const _ = e.preOrderHooks;
              null !== _ && Mt(t, _, 0, null), St(t, 0);
            }
            if (
              ((function Dv(e) {
                for (let t = Pl(e); null !== t; t = xl(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    512 & o[2] || Br(o[3], 1), (o[2] |= 512);
                  }
                }
              })(t),
              (function vv(e) {
                for (let t = Pl(e); null !== t; t = xl(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      o = r[1];
                    fr(r) && Ba(o, r, o.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && nf(e, t),
              a)
            ) {
              const _ = e.contentCheckHooks;
              null !== _ && Le(t, _);
            } else {
              const _ = e.contentHooks;
              null !== _ && Mt(t, _, 1), St(t, 1);
            }
            !(function Jy(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) ao(~o);
                    else {
                      const i = o,
                        a = n[++r],
                        c = n[++r];
                      gi(a, i), c(2, t[i]);
                    }
                  }
                } finally {
                  ao(-1);
                }
            })(e, t);
            const c = e.components;
            null !== c &&
              (function Xy(e, t) {
                for (let n = 0; n < t.length; n++) _v(e, t[n]);
              })(t, c);
            const p = e.viewQuery;
            if ((null !== p && Cu(2, p, r), a)) {
              const _ = e.viewCheckHooks;
              null !== _ && Le(t, _);
            } else {
              const _ = e.viewHooks;
              null !== _ && Mt(t, _, 2), St(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), Br(t[3], -1));
          } finally {
            Ji();
          }
        }
      }
      function rf(e, t, n, r, o) {
        const i = Nn(),
          a = 2 & r;
        try {
          ao(-1), a && t.length > 22 && $d(e, t, 22, !1), n(r, o);
        } finally {
          ao(i);
        }
      }
      function fu(e, t, n) {
        if (Ir(t)) {
          const o = t.directiveEnd;
          for (let i = t.directiveStart; i < o; i++) {
            const a = e.data[i];
            a.contentQueries && a.contentQueries(1, n[i], i);
          }
        }
      }
      function hu(e, t, n) {
        Fe() &&
          ((function lv(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            ur(n) &&
              (function gv(e, t, n) {
                const r = Gt(t, e),
                  o = sf(n),
                  i = e[10],
                  a = ja(
                    e,
                    Ua(
                      e,
                      o,
                      null,
                      n.onPush ? 32 : 16,
                      r,
                      t,
                      i,
                      i.createRenderer(r, n),
                      null,
                      null,
                      null
                    )
                  );
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || ts(n, t),
              Kn(r, t);
            const a = n.initialInputs;
            for (let c = o; c < i; c++) {
              const p = e.data[c],
                _ = Xo(t, e, c, n);
              Kn(_, t),
                null !== a && mv(0, c - o, _, p, 0, a),
                dn(p) && (On(n.index, t)[8] = Xo(t, e, c, n));
            }
          })(e, t, n, Gt(n, t)),
          64 == (64 & n.flags) && ff(e, t, n));
      }
      function pu(e, t, n = Gt) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const a = r[i + 1],
              c = -1 === a ? n(t, e) : e[a];
            e[o++] = c;
          }
        }
      }
      function sf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = gu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function gu(e, t, n, r, o, i, a, c, p, _) {
        const b = 22 + r,
          A = b + o,
          V = (function ev(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : mt);
            return n;
          })(b, A),
          $ = "function" == typeof _ ? _() : _;
        return (V[1] = {
          type: e,
          blueprint: V,
          template: n,
          queries: null,
          viewQuery: c,
          declTNode: t,
          data: V.slice().fill(null, b),
          bindingStartIndex: b,
          expandoStartIndex: A,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: p,
          consts: $,
          incompleteFirstPass: !1,
        });
      }
      function af(e, t, n, r) {
        const o = pf(t);
        null === n
          ? o.push(r)
          : (o.push(n), e.firstCreatePass && gf(e).push(r, o.length - 1));
      }
      function lf(e, t, n, r) {
        for (let o in e)
          if (e.hasOwnProperty(o)) {
            n = null === n ? {} : n;
            const i = e[o];
            null === r
              ? uf(n, t, o, i)
              : r.hasOwnProperty(o) && uf(n, t, r[o], i);
          }
        return n;
      }
      function uf(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function cf(e, t) {
        const n = On(t, e);
        16 & n[2] || (n[2] |= 32);
      }
      function mu(e, t, n, r) {
        let o = !1;
        if (Fe()) {
          const i = null === r ? null : { "": -1 },
            a = (function cv(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const a = n[i];
                  if (Bd(t, a.selectors, !1))
                    if ((r || (r = []), dn(a)))
                      if (null !== a.findHostDirectiveDefs) {
                        const c = [];
                        (o = o || new Map()),
                          a.findHostDirectiveDefs(a, c, o),
                          r.unshift(...c, a),
                          yu(e, t, c.length);
                      } else r.unshift(a), yu(e, t, 0);
                    else
                      (o = o || new Map()),
                        a.findHostDirectiveDefs?.(a, r, o),
                        r.push(a);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let c, p;
          null === a ? (c = p = null) : ([c, p] = a),
            null !== c && ((o = !0), df(e, t, n, c, i, p)),
            i &&
              (function dv(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const i = n[t[o + 1]];
                    if (null == i) throw new J(-301, !1);
                    r.push(t[o], i);
                  }
                }
              })(n, r, i);
        }
        return (n.mergedAttrs = xo(n.mergedAttrs, n.attrs)), o;
      }
      function df(e, t, n, r, o, i) {
        for (let _ = 0; _ < r.length; _++) Vs(ts(n, t), e, r[_].type);
        !(function hv(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let _ = 0; _ < r.length; _++) {
          const b = r[_];
          b.providersResolver && b.providersResolver(b);
        }
        let a = !1,
          c = !1,
          p = na(e, t, r.length, null);
        for (let _ = 0; _ < r.length; _++) {
          const b = r[_];
          (n.mergedAttrs = xo(n.mergedAttrs, b.hostAttrs)),
            pv(e, n, t, p, b),
            fv(p, b, o),
            null !== b.contentQueries && (n.flags |= 4),
            (null !== b.hostBindings ||
              null !== b.hostAttrs ||
              0 !== b.hostVars) &&
              (n.flags |= 64);
          const A = b.type.prototype;
          !a &&
            (A.ngOnChanges || A.ngOnInit || A.ngDoCheck) &&
            ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
            (a = !0)),
            !c &&
              (A.ngOnChanges || A.ngDoCheck) &&
              ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                n.index
              ),
              (c = !0)),
            p++;
        }
        !(function rv(e, t, n) {
          const o = t.directiveEnd,
            i = e.data,
            a = t.attrs,
            c = [];
          let p = null,
            _ = null;
          for (let b = t.directiveStart; b < o; b++) {
            const A = i[b],
              V = n ? n.get(A) : null,
              ee = V ? V.outputs : null;
            (p = lf(A.inputs, b, p, V ? V.inputs : null)),
              (_ = lf(A.outputs, b, _, ee));
            const ve = null === p || null === a || Ud(t) ? null : yv(p, b, a);
            c.push(ve);
          }
          null !== p &&
            (p.hasOwnProperty("class") && (t.flags |= 8),
            p.hasOwnProperty("style") && (t.flags |= 16)),
            (t.initialInputs = c),
            (t.inputs = p),
            (t.outputs = _);
        })(e, n, i);
      }
      function ff(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          a = (function ya() {
            return ct.lFrame.currentDirectiveIndex;
          })();
        try {
          ao(i);
          for (let c = r; c < o; c++) {
            const p = e.data[c],
              _ = t[c];
            zi(c),
              (null !== p.hostBindings ||
                0 !== p.hostVars ||
                null !== p.hostAttrs) &&
                uv(p, _);
          }
        } finally {
          ao(-1), zi(a);
        }
      }
      function uv(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function yu(e, t, n) {
        (t.componentOffset = n),
          (e.components || (e.components = [])).push(t.index);
      }
      function fv(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          dn(t) && (n[""] = e);
        }
      }
      function pv(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = or(o.type)),
          a = new Nt(i, dn(o), hs);
        (e.blueprint[r] = a),
          (n[r] = a),
          (function sv(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let a = e.hostBindingOpCodes;
              null === a && (a = e.hostBindingOpCodes = []);
              const c = ~t.index;
              (function av(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ("number" == typeof n && n < 0) return n;
                }
                return 0;
              })(a) != c && a.push(c),
                a.push(n, r, i);
            }
          })(e, t, r, na(e, n, o.hostVars, mt), o);
      }
      function ho(e, t, n, r, o, i) {
        const a = Gt(e, t);
        !(function vu(e, t, n, r, o, i, a) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const c = null == a ? Q(i) : a(i, r || "", o);
            e.setAttribute(t, o, c, n);
          }
        })(t[11], a, i, e.value, n, r, o);
      }
      function mv(e, t, n, r, o, i) {
        const a = i[t];
        if (null !== a) {
          const c = r.setInput;
          for (let p = 0; p < a.length; ) {
            const _ = a[p++],
              b = a[p++],
              A = a[p++];
            null !== c ? r.setInput(n, A, _, b) : (n[b] = A);
          }
        }
      }
      function yv(e, t, n) {
        let r = null,
          o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (0 !== i)
            if (5 !== i) {
              if ("number" == typeof i) break;
              if (e.hasOwnProperty(i)) {
                null === r && (r = []);
                const a = e[i];
                for (let c = 0; c < a.length; c += 2)
                  if (a[c] === t) {
                    r.push(i, a[c + 1], n[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return r;
      }
      function hf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null];
      }
      function _v(e, t) {
        const n = On(t, e);
        if (fr(n)) {
          const r = n[1];
          48 & n[2] ? Ba(r, n, r.template, n[8]) : n[5] > 0 && Du(n);
        }
      }
      function Du(e) {
        for (let r = Pl(e); null !== r; r = xl(r))
          for (let o = 10; o < r.length; o++) {
            const i = r[o];
            if (fr(i))
              if (512 & i[2]) {
                const a = i[1];
                Ba(a, i, a.template, i[8]);
              } else i[5] > 0 && Du(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = On(n[r], e);
            fr(o) && o[5] > 0 && Du(o);
          }
      }
      function Cv(e, t) {
        const n = On(t, e),
          r = n[1];
        (function Ev(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          du(r, n, n[8]);
      }
      function ja(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function _u(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = qs(e);
          if (eo(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Ha(e, t, n, r = !0) {
        const o = t[10];
        o.begin && o.begin();
        try {
          Ba(e, t, e.template, n);
        } catch (a) {
          throw (r && yf(t, a), a);
        } finally {
          o.end && o.end();
        }
      }
      function Cu(e, t, n) {
        To(0), t(e, n);
      }
      function pf(e) {
        return e[7] || (e[7] = []);
      }
      function gf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function yf(e, t) {
        const n = e[9],
          r = n ? n.get(ta, null) : null;
        r && r.handleError(t);
      }
      function Eu(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const a = n[i++],
            c = n[i++],
            p = t[a],
            _ = e.data[a];
          null !== _.setInput ? _.setInput(p, o, r, c) : (p[c] = o);
        }
      }
      function Ho(e, t, n) {
        const r = Vr(t, e);
        !(function qc(e, t, n) {
          e.setValue(t, n);
        })(e[11], r, n);
      }
      function $a(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const c = t[a];
            "number" == typeof c
              ? (i = c)
              : 1 == i
              ? (o = Qe(o, c))
              : 2 == i && (r = Qe(r, c + ": " + t[++a] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function Ga(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(sn(i)), Rn(i)))
            for (let c = 10; c < i.length; c++) {
              const p = i[c],
                _ = p[1].firstChild;
              null !== _ && Ga(p[1], p, _, r);
            }
          const a = n.type;
          if (8 & a) Ga(e, t, n.child, r);
          else if (32 & a) {
            const c = Ol(n, t);
            let p;
            for (; (p = c()); ) r.push(p);
          } else if (16 & a) {
            const c = id(t, n);
            if (Array.isArray(c)) r.push(...c);
            else {
              const p = qs(t[16]);
              Ga(p[1], p, c, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class ra {
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Ga(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Rn(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Ll(t, r), l(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Zc(this._lView[1], this._lView);
        }
        onDestroy(t) {
          af(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          _u(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          Ha(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new J(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function um(e, t) {
              Ks(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new J(902, !1);
          this._appRef = t;
        }
      }
      class wv extends ra {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Ha(t[1], t, t[8], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class vf extends Qs {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = Tt(t);
          return new oa(n, this.ngModule);
        }
      }
      function Df(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Mv {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = Lt(r);
          const o = this.injector.get(t, ru, r);
          return o !== ru || n === ru ? o : this.parentInjector.get(t, n, r);
        }
      }
      class oa extends Pd {
        get inputs() {
          return Df(this.componentDef.inputs);
        }
        get outputs() {
          return Df(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Oy(e) {
              return e.map(Ry).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          let i = (o = o || this.ngModule) instanceof Ti ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const a = i ? new Mv(t, i) : t,
            c = a.get(Nd, null);
          if (null === c) throw new J(407, !1);
          const p = a.get(cy, null),
            _ = c.createRenderer(null, this.componentDef),
            b = this.componentDef.selectors[0][0] || "div",
            A = r
              ? (function tv(e, t, n) {
                  return e.selectRootElement(t, n === nt.ShadowDom);
                })(_, r, this.componentDef.encapsulation)
              : Fl(
                  _,
                  b,
                  (function bv(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })(b)
                ),
            V = this.componentDef.onPush ? 288 : 272,
            $ = gu(0, null, null, 1, 0, null, null, null, null, null),
            ee = Ua(null, $, null, V, null, null, c, _, p, a, null);
          let ve, Ie;
          so(ee);
          try {
            const ke = this.componentDef;
            let Xe,
              pe = null;
            ke.findHostDirectiveDefs
              ? ((Xe = []),
                (pe = new Map()),
                ke.findHostDirectiveDefs(ke, Xe, pe),
                Xe.push(ke))
              : (Xe = [ke]);
            const pt = (function Iv(e, t) {
                const n = e[1];
                return (e[22] = t), ps(n, 22, 2, "#host", null);
              })(ee, A),
              an = (function Av(e, t, n, r, o, i, a, c) {
                const p = o[1];
                !(function Tv(e, t, n, r) {
                  for (const o of e)
                    t.mergedAttrs = xo(t.mergedAttrs, o.hostAttrs);
                  null !== t.mergedAttrs &&
                    ($a(t, t.mergedAttrs, !0), null !== n && ld(r, n, t));
                })(r, e, t, a);
                const _ = i.createRenderer(t, n),
                  b = Ua(
                    o,
                    sf(n),
                    null,
                    n.onPush ? 32 : 16,
                    o[e.index],
                    e,
                    i,
                    _,
                    c || null,
                    null,
                    null
                  );
                return (
                  p.firstCreatePass && yu(p, e, r.length - 1),
                  ja(o, b),
                  (o[e.index] = b)
                );
              })(pt, A, ke, Xe, ee, c, _);
            (Ie = dr($, 22)),
              A &&
                (function Ov(e, t, n, r) {
                  if (r) Ns(e, n, ["ng-version", dy.full]);
                  else {
                    const { attrs: o, classes: i } = (function Py(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        o = 2;
                      for (; r < e.length; ) {
                        let i = e[r];
                        if ("string" == typeof i)
                          2 === o
                            ? "" !== i && t.push(i, e[++r])
                            : 8 === o && n.push(i);
                        else {
                          if (!Gr(o)) break;
                          o = i;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    o && Ns(e, n, o),
                      i && i.length > 0 && ad(e, n, i.join(" "));
                  }
                })(_, ke, A, r),
              void 0 !== n &&
                (function Pv(e, t, n) {
                  const r = (e.projection = []);
                  for (let o = 0; o < t.length; o++) {
                    const i = n[o];
                    r.push(null != i ? Array.from(i) : null);
                  }
                })(Ie, this.ngContentSelectors, n),
              (ve = (function Rv(e, t, n, r, o, i) {
                const a = Qt(),
                  c = o[1],
                  p = Gt(a, o);
                df(c, o, a, n, null, r);
                for (let b = 0; b < n.length; b++)
                  Kn(Xo(o, c, a.directiveStart + b, a), o);
                ff(c, o, a), p && Kn(p, o);
                const _ = Xo(o, c, a.directiveStart + a.componentOffset, a);
                if (((e[8] = o[8] = _), null !== i)) for (const b of i) b(_, t);
                return fu(c, a, e), _;
              })(an, ke, Xe, pe, ee, [xv])),
              du($, ee, null);
          } finally {
            Ji();
          }
          return new Sv(this.componentType, ve, cs(Ie, ee), ee, Ie);
        }
      }
      class Sv extends ry {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new wv(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            const i = this._rootLView;
            Eu(i[1], i, o, t, n), cf(i, this._tNode.index);
          }
        }
        get injector() {
          return new Fo(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function xv() {
        const e = Qt();
        ne(le()[1], e);
      }
      function wu(e) {
        let t = (function _f(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (dn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new J(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const a = e;
              (a.inputs = bu(e.inputs)),
                (a.declaredInputs = bu(e.declaredInputs)),
                (a.outputs = bu(e.outputs));
              const c = o.hostBindings;
              c && kv(e, c);
              const p = o.viewQuery,
                _ = o.contentQueries;
              if (
                (p && Fv(e, p),
                _ && Lv(e, _),
                Ve(e.inputs, o.inputs),
                Ve(e.declaredInputs, o.declaredInputs),
                Ve(e.outputs, o.outputs),
                dn(o) && o.data.animation)
              ) {
                const b = e.data;
                b.animation = (b.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let a = 0; a < i.length; a++) {
                const c = i[a];
                c && c.ngInherit && c(e), c === wu && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function Nv(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = xo(o.hostAttrs, (n = xo(n, o.hostAttrs))));
          }
        })(r);
      }
      function bu(e) {
        return e === At ? {} : e === et ? [] : e;
      }
      function Fv(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function Lv(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function kv(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      let za = null;
      function Oi() {
        if (!za) {
          const e = Je.Symbol;
          if (e && e.iterator) za = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (za = r);
            }
          }
        }
        return za;
      }
      function Wa(e) {
        return (
          !!Mu(e) && (Array.isArray(e) || (!(e instanceof Map) && Oi() in e))
        );
      }
      function Mu(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Zn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Su(e, t, n, r) {
        const o = le();
        return Zn(o, Ao(), t) && (yt(), ho(Zt(), o, e, t, n, r)), Su;
      }
      function ys(e, t, n, r, o, i) {
        const c = (function Pi(e, t, n, r) {
          const o = Zn(e, t, n);
          return Zn(e, t + 1, r) || o;
        })(
          e,
          (function gr() {
            return ct.lFrame.bindingIndex;
          })(),
          n,
          o
        );
        return ir(2), c ? t + Q(n) + r + Q(o) + i : mt;
      }
      function xf(e, t, n, r, o, i, a, c) {
        const p = le(),
          _ = yt(),
          b = e + 22,
          A = _.firstCreatePass
            ? (function Yv(e, t, n, r, o, i, a, c, p) {
                const _ = t.consts,
                  b = ps(t, e, 4, a || null, hr(_, c));
                mu(t, n, b, hr(_, p)), ne(t, b);
                const A = (b.tViews = gu(
                  2,
                  b,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  _
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, b),
                    (A.queries = t.queries.embeddedTView(b))),
                  b
                );
              })(b, _, p, t, n, r, o, i, a)
            : _.data[b];
        Pn(A, !1);
        const V = p[11].createComment("");
        Oa(_, p, V, A),
          Kn(V, p),
          ja(p, (p[b] = hf(V, p, V, A))),
          cn(A) && hu(_, p, A),
          null != a && pu(p, A, c);
      }
      function Nf(e) {
        return (function Ur(e, t) {
          return e[t];
        })(
          (function Gi() {
            return ct.lFrame.contextLView;
          })(),
          22 + e
        );
      }
      function Iu(e, t, n) {
        const r = le();
        return (
          Zn(r, Ao(), t) &&
            (function yr(e, t, n, r, o, i, a, c) {
              const p = Gt(t, n);
              let b,
                _ = t.inputs;
              !c && null != _ && (b = _[r])
                ? (Eu(e, n, b, r, o), ur(t) && cf(n, t.index))
                : 3 & t.type &&
                  ((r = (function ov(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(r)),
                  (o = null != a ? a(o, t.value || "", r) : o),
                  i.setProperty(p, r, o));
            })(yt(), Zt(), r, e, t, r[11], n, !1),
          Iu
        );
      }
      function Au(e, t, n, r, o) {
        const a = o ? "class" : "style";
        Eu(e, n, t.inputs[a], a, r);
      }
      function qa(e, t, n, r) {
        const o = le(),
          i = yt(),
          a = 22 + e,
          c = o[11],
          p = (o[a] = Fl(
            c,
            t,
            (function x() {
              return ct.lFrame.currentNamespace;
            })()
          )),
          _ = i.firstCreatePass
            ? (function Kv(e, t, n, r, o, i, a) {
                const c = t.consts,
                  _ = ps(t, e, 2, o, hr(c, i));
                return (
                  mu(t, n, _, hr(c, a)),
                  null !== _.attrs && $a(_, _.attrs, !1),
                  null !== _.mergedAttrs && $a(_, _.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, _),
                  _
                );
              })(a, i, o, 0, t, n, r)
            : i.data[a];
        return (
          Pn(_, !0),
          ld(c, p, _),
          32 != (32 & _.flags) && Oa(i, o, p, _),
          0 ===
            (function g() {
              return ct.lFrame.elementDepthCount;
            })() && Kn(p, o),
          (function S() {
            ct.lFrame.elementDepthCount++;
          })(),
          cn(_) && (hu(i, o, _), fu(i, _, o)),
          null !== r && pu(o, _),
          qa
        );
      }
      function Ka() {
        let e = Qt();
        Hi() ? $i() : ((e = e.parent), Pn(e, !1));
        const t = e;
        !(function Y() {
          ct.lFrame.elementDepthCount--;
        })();
        const n = yt();
        return (
          n.firstCreatePass && (ne(n, e), Ir(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Tr(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            Au(n, t, le(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Jo(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Au(n, t, le(), t.stylesWithoutHost, !1),
          Ka
        );
      }
      function Tu(e, t, n, r) {
        return qa(e, t, n, r), Ka(), Tu;
      }
      function Za(e, t, n) {
        const r = le(),
          o = yt(),
          i = e + 22,
          a = o.firstCreatePass
            ? (function Zv(e, t, n, r, o) {
                const i = t.consts,
                  a = hr(i, r),
                  c = ps(t, e, 8, "ng-container", a);
                return (
                  null !== a && $a(c, a, !0),
                  mu(t, n, c, hr(i, o)),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(i, o, r, t, n)
            : o.data[i];
        Pn(a, !0);
        const c = (r[i] = r[11].createComment(""));
        return (
          Oa(o, r, c, a),
          Kn(c, r),
          cn(a) && (hu(o, r, a), fu(o, a, r)),
          null != n && pu(r, a),
          Za
        );
      }
      function Ja() {
        let e = Qt();
        const t = yt();
        return (
          Hi() ? $i() : ((e = e.parent), Pn(e, !1)),
          t.firstCreatePass && (ne(t, e), Ir(e) && t.queries.elementEnd(e)),
          Ja
        );
      }
      function Lf() {
        return le();
      }
      function Ru(e) {
        return !!e && "function" == typeof e.then;
      }
      function kf(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const Vf = kf;
      function Ou(e, t, n, r) {
        const o = le(),
          i = yt(),
          a = Qt();
        return (
          (function Bf(e, t, n, r, o, i, a) {
            const c = cn(r),
              _ = e.firstCreatePass && gf(e),
              b = t[8],
              A = pf(t);
            let V = !0;
            if (3 & r.type || a) {
              const ve = Gt(r, t),
                Ie = a ? a(ve) : ve,
                ke = A.length,
                Xe = a ? (pt) => a(sn(pt[r.index])) : r.index;
              let pe = null;
              if (
                (!a &&
                  c &&
                  (pe = (function Jv(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const a = o[i];
                        if (a === n && o[i + 1] === r) {
                          const c = t[7],
                            p = o[i + 2];
                          return c.length > p ? c[p] : null;
                        }
                        "string" == typeof a && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== pe)
              )
                ((pe.__ngLastListenerFn__ || pe).__ngNextListenerFn__ = i),
                  (pe.__ngLastListenerFn__ = i),
                  (V = !1);
              else {
                i = Hf(r, t, b, i, !1);
                const pt = n.listen(Ie, o, i);
                A.push(i, pt), _ && _.push(o, Xe, ke, ke + 1);
              }
            } else i = Hf(r, t, b, i, !1);
            const $ = r.outputs;
            let ee;
            if (V && null !== $ && (ee = $[o])) {
              const ve = ee.length;
              if (ve)
                for (let Ie = 0; Ie < ve; Ie += 2) {
                  const an = t[ee[Ie]][ee[Ie + 1]].subscribe(i),
                    Cn = A.length;
                  A.push(i, an), _ && _.push(o, r.index, Cn, -(Cn + 1));
                }
            }
          })(i, o, o[11], a, e, t, r),
          Ou
        );
      }
      function jf(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (o) {
          return yf(e, o), !1;
        }
      }
      function Hf(e, t, n, r, o) {
        return function i(a) {
          if (a === Function) return r;
          _u(e.componentOffset > -1 ? On(e.index, t) : t);
          let p = jf(t, 0, r, a),
            _ = i.__ngNextListenerFn__;
          for (; _; ) (p = jf(t, 0, _, a) && p), (_ = _.__ngNextListenerFn__);
          return o && !1 === p && (a.preventDefault(), (a.returnValue = !1)), p;
        };
      }
      function $f(e = 1) {
        return (function va(e) {
          return (ct.lFrame.contextLView = (function Da(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, ct.lFrame.contextLView))[8];
        })(e);
      }
      function Xa(e, t) {
        return (e << 17) | (t << 2);
      }
      function ri(e) {
        return (e >> 17) & 32767;
      }
      function xu(e) {
        return 2 | e;
      }
      function xi(e) {
        return (131068 & e) >> 2;
      }
      function Nu(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Fu(e) {
        return 1 | e;
      }
      function Qf(e, t, n, r, o) {
        const i = e[n + 1],
          a = null === t;
        let c = r ? ri(i) : xi(i),
          p = !1;
        for (; 0 !== c && (!1 === p || a); ) {
          const b = e[c + 1];
          sD(e[c], t) && ((p = !0), (e[c + 1] = r ? Fu(b) : xu(b))),
            (c = r ? ri(b) : xi(b));
        }
        p && (e[n + 1] = r ? xu(i) : Fu(i));
      }
      function sD(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && q(e, t) >= 0)
        );
      }
      function Lu(e, t) {
        return (
          (function zr(e, t, n, r) {
            const o = le(),
              i = yt(),
              a = ir(2);
            i.firstUpdatePass &&
              (function lh(e, t, n, r) {
                const o = e.data;
                if (null === o[n + 1]) {
                  const i = o[Nn()],
                    a = (function ah(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function fh(e, t) {
                    return 0 != (e.flags & (t ? 8 : 16));
                  })(i, r) &&
                    null === t &&
                    !a &&
                    (t = !1),
                    (t = (function gD(e, t, n, r) {
                      const o = (function Wi(e) {
                        const t = ct.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let i = r ? t.residualClasses : t.residualStyles;
                      if (null === o)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = sa((n = ku(null, e, t, n, r)), t.attrs, r)),
                          (i = null));
                      else {
                        const a = t.directiveStylingLast;
                        if (-1 === a || e[a] !== o)
                          if (((n = ku(o, e, t, n, r)), null === i)) {
                            let p = (function mD(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== xi(r)) return e[ri(r)];
                            })(e, t, r);
                            void 0 !== p &&
                              Array.isArray(p) &&
                              ((p = ku(null, e, t, p[1], r)),
                              (p = sa(p, t.attrs, r)),
                              (function yD(e, t, n, r) {
                                e[ri(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, p));
                          } else
                            i = (function vD(e, t, n) {
                              let r;
                              const o = t.directiveEnd;
                              for (
                                let i = 1 + t.directiveStylingLast;
                                i < o;
                                i++
                              )
                                r = sa(r, e[i].hostAttrs, n);
                              return sa(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== i &&
                          (r
                            ? (t.residualClasses = i)
                            : (t.residualStyles = i)),
                        n
                      );
                    })(o, i, t, r)),
                    (function oD(e, t, n, r, o, i) {
                      let a = i ? t.classBindings : t.styleBindings,
                        c = ri(a),
                        p = xi(a);
                      e[r] = n;
                      let b,
                        _ = !1;
                      if (
                        (Array.isArray(n)
                          ? ((b = n[1]),
                            (null === b || q(n, b) > 0) && (_ = !0))
                          : (b = n),
                        o)
                      )
                        if (0 !== p) {
                          const V = ri(e[c + 1]);
                          (e[r + 1] = Xa(V, c)),
                            0 !== V && (e[V + 1] = Nu(e[V + 1], r)),
                            (e[c + 1] = (function nD(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[c + 1], r));
                        } else
                          (e[r + 1] = Xa(c, 0)),
                            0 !== c && (e[c + 1] = Nu(e[c + 1], r)),
                            (c = r);
                      else
                        (e[r + 1] = Xa(p, 0)),
                          0 === c ? (c = r) : (e[p + 1] = Nu(e[p + 1], r)),
                          (p = r);
                      _ && (e[r + 1] = xu(e[r + 1])),
                        Qf(e, b, r, !0),
                        Qf(e, b, r, !1),
                        (function iD(e, t, n, r, o) {
                          const i = o ? e.residualClasses : e.residualStyles;
                          null != i &&
                            "string" == typeof t &&
                            q(i, t) >= 0 &&
                            (n[r + 1] = Fu(n[r + 1]));
                        })(t, b, e, r, i),
                        (a = Xa(c, p)),
                        i ? (t.classBindings = a) : (t.styleBindings = a);
                    })(o, i, t, n, a, r);
                }
              })(i, e, a, r),
              t !== mt &&
                Zn(o, a, t) &&
                (function ch(e, t, n, r, o, i, a, c) {
                  if (!(3 & t.type)) return;
                  const p = e.data,
                    _ = p[c + 1],
                    b = (function rD(e) {
                      return 1 == (1 & e);
                    })(_)
                      ? dh(p, t, n, o, xi(_), a)
                      : void 0;
                  Qa(b) ||
                    (Qa(i) ||
                      ((function tD(e) {
                        return 2 == (2 & e);
                      })(_) &&
                        (i = dh(p, null, n, o, c, a))),
                    (function Dm(e, t, n, r, o) {
                      if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let i = -1 === r.indexOf("-") ? void 0 : fo.DashCase;
                        null == o
                          ? e.removeStyle(n, r, i)
                          : ("string" == typeof o &&
                              o.endsWith("!important") &&
                              ((o = o.slice(0, -10)), (i |= fo.Important)),
                            e.setStyle(n, r, o, i));
                      }
                    })(r, a, Vr(Nn(), n), o, i));
                })(
                  i,
                  i.data[Nn()],
                  o,
                  o[11],
                  e,
                  (o[a + 1] = (function CD(e, t) {
                    return (
                      null == e ||
                        ("string" == typeof t
                          ? (e += t)
                          : "object" == typeof e && (e = $e(ni(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  a
                );
          })(e, t, null, !0),
          Lu
        );
      }
      function ku(e, t, n, r, o) {
        let i = null;
        const a = n.directiveEnd;
        let c = n.directiveStylingLast;
        for (
          -1 === c ? (c = n.directiveStart) : c++;
          c < a && ((i = t[c]), (r = sa(r, i.hostAttrs, o)), i !== e);

        )
          c++;
        return null !== e && (n.directiveStylingLast = c), r;
      }
      function sa(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            "number" == typeof a
              ? (o = a)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                w(e, a, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function dh(e, t, n, r, o, i) {
        const a = null === t;
        let c;
        for (; o > 0; ) {
          const p = e[o],
            _ = Array.isArray(p),
            b = _ ? p[1] : p,
            A = null === b;
          let V = n[o + 1];
          V === mt && (V = A ? et : void 0);
          let $ = A ? U(V, r) : b === r ? V : void 0;
          if ((_ && !Qa($) && ($ = U(p, r)), Qa($) && ((c = $), a))) return c;
          const ee = e[o + 1];
          o = a ? ri(ee) : xi(ee);
        }
        if (null !== t) {
          let p = i ? t.residualClasses : t.residualStyles;
          null != p && (c = U(p, r));
        }
        return c;
      }
      function Qa(e) {
        return void 0 !== e;
      }
      function hh(e, t = "") {
        const n = le(),
          r = yt(),
          o = e + 22,
          i = r.firstCreatePass ? ps(r, o, 1, t, null) : r.data[o],
          a = (n[o] = (function Nl(e, t) {
            return e.createText(t);
          })(n[11], t));
        Oa(r, n, a, i), Pn(i, !1);
      }
      function Vu(e) {
        return el("", e, ""), Vu;
      }
      function el(e, t, n) {
        const r = le(),
          o = (function ms(e, t, n, r) {
            return Zn(e, Ao(), n) ? t + Q(n) + r : mt;
          })(r, e, t, n);
        return o !== mt && Ho(r, Nn(), o), el;
      }
      function Uu(e, t, n, r, o) {
        const i = le(),
          a = ys(i, e, t, n, r, o);
        return a !== mt && Ho(i, Nn(), a), Uu;
      }
      const Ni = void 0;
      var jD = [
        "en",
        [["a", "p"], ["AM", "PM"], Ni],
        [["AM", "PM"], Ni, Ni],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Ni,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Ni,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Ni, "{1} 'at' {0}", Ni],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function BD(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let Ms = {};
      function Bu(e) {
        const t = (function HD(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = xh(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = xh(r)), n)) return n;
        if ("en" === r) return jD;
        throw new J(701, !1);
      }
      function Ph(e) {
        return Bu(e)[it.PluralCase];
      }
      function xh(e) {
        return (
          e in Ms ||
            (Ms[e] =
              Je.ng &&
              Je.ng.common &&
              Je.ng.common.locales &&
              Je.ng.common.locales[e]),
          Ms[e]
        );
      }
      var it = (() => (
        ((it = it || {})[(it.LocaleId = 0)] = "LocaleId"),
        (it[(it.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (it[(it.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (it[(it.DaysFormat = 3)] = "DaysFormat"),
        (it[(it.DaysStandalone = 4)] = "DaysStandalone"),
        (it[(it.MonthsFormat = 5)] = "MonthsFormat"),
        (it[(it.MonthsStandalone = 6)] = "MonthsStandalone"),
        (it[(it.Eras = 7)] = "Eras"),
        (it[(it.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (it[(it.WeekendRange = 9)] = "WeekendRange"),
        (it[(it.DateFormat = 10)] = "DateFormat"),
        (it[(it.TimeFormat = 11)] = "TimeFormat"),
        (it[(it.DateTimeFormat = 12)] = "DateTimeFormat"),
        (it[(it.NumberSymbols = 13)] = "NumberSymbols"),
        (it[(it.NumberFormats = 14)] = "NumberFormats"),
        (it[(it.CurrencyCode = 15)] = "CurrencyCode"),
        (it[(it.CurrencySymbol = 16)] = "CurrencySymbol"),
        (it[(it.CurrencyName = 17)] = "CurrencyName"),
        (it[(it.Currencies = 18)] = "Currencies"),
        (it[(it.Directionality = 19)] = "Directionality"),
        (it[(it.PluralCase = 20)] = "PluralCase"),
        (it[(it.ExtraData = 21)] = "ExtraData"),
        it
      ))();
      const Ss = "en-US";
      let Nh = Ss;
      function $u(e, t, n, r, o) {
        if (((e = Te(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) $u(e[i], t, n, r, o);
        else {
          const i = yt(),
            a = le();
          let c = Ai(e) ? e : Te(e.provide),
            p = Od(e);
          const _ = Qt(),
            b = 1048575 & _.providerIndexes,
            A = _.directiveStart,
            V = _.providerIndexes >> 20;
          if (Ai(e) || !e.multi) {
            const $ = new Nt(p, o, hs),
              ee = zu(c, t, o ? b : b + V, A);
            -1 === ee
              ? (Vs(ts(_, a), i, c),
                Gu(i, e, t.length),
                t.push(c),
                _.directiveStart++,
                _.directiveEnd++,
                o && (_.providerIndexes += 1048576),
                n.push($),
                a.push($))
              : ((n[ee] = $), (a[ee] = $));
          } else {
            const $ = zu(c, t, b + V, A),
              ee = zu(c, t, b, b + V),
              Ie = ee >= 0 && n[ee];
            if ((o && !Ie) || (!o && !($ >= 0 && n[$]))) {
              Vs(ts(_, a), i, c);
              const ke = (function U_(e, t, n, r, o) {
                const i = new Nt(e, n, hs);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  ip(i, o, r && !n),
                  i
                );
              })(o ? V_ : k_, n.length, o, r, p);
              !o && Ie && (n[ee].providerFactory = ke),
                Gu(i, e, t.length, 0),
                t.push(c),
                _.directiveStart++,
                _.directiveEnd++,
                o && (_.providerIndexes += 1048576),
                n.push(ke),
                a.push(ke);
            } else Gu(i, e, $ > -1 ? $ : ee, ip(n[o ? ee : $], p, !o && r));
            !o && r && Ie && n[ee].componentProviders++;
          }
        }
      }
      function Gu(e, t, n, r) {
        const o = Ai(t),
          i = (function Zm(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const p = (i ? Te(t.useClass) : t).prototype.ngOnDestroy;
          if (p) {
            const _ = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const b = _.indexOf(n);
              -1 === b ? _.push(n, [r, p]) : _[b + 1].push(r, p);
            } else _.push(n, p);
          }
        }
      }
      function ip(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function zu(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function k_(e, t, n, r) {
        return Wu(this.multi, []);
      }
      function V_(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            c = Xo(n, n[1], this.providerFactory.index, r);
          (i = c.slice(0, a)), Wu(o, i);
          for (let p = a; p < c.length; p++) i.push(c[p]);
        } else (i = []), Wu(o, i);
        return i;
      }
      function Wu(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function sp(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function L_(e, t, n) {
              const r = yt();
              if (r.firstCreatePass) {
                const o = dn(e);
                $u(n, r.data, r.blueprint, o, !0),
                  $u(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class Is {}
      class ap {}
      function B_(e, t) {
        return new lp(e, t ?? null);
      }
      class lp extends Is {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new vf(this));
          const r = ln(t);
          (this._bootstrapComponents = jo(r.bootstrap)),
            (this._r3Injector = qd(
              t,
              n,
              [
                { provide: Is, useValue: this },
                { provide: Qs, useValue: this.componentFactoryResolver },
              ],
              $e(t),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Yu extends ap {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new lp(this.moduleType, t);
        }
      }
      class j_ extends Is {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new vf(this)),
            (this.instance = null);
          const o = new Rd(
            [
              ...t,
              { provide: Is, useValue: this },
              { provide: Qs, useValue: this.componentFactoryResolver },
            ],
            n || ka(),
            r,
            new Set(["environment"])
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function qu(e, t, n = null) {
        return new j_(e, t, n).injector;
      }
      let H_ = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = Sd(0, n.type),
                o =
                  r.length > 0
                    ? qu([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, o);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = Ut({
            token: e,
            providedIn: "environment",
            factory: () => new e(We(Ti)),
          })),
          e
        );
      })();
      function up(e) {
        e.getStandaloneInjector = (t) =>
          t.get(H_).getOrCreateStandaloneInjector(e);
      }
      function mp(e, t, n, r) {
        return (function yp(e, t, n, r, o, i) {
          const a = t + n;
          return Zn(e, a, o)
            ? (function po(e, t, n) {
                return (e[t] = n);
              })(e, a + 1, i ? r.call(i, o) : r(o))
            : (function fa(e, t) {
                const n = e[t];
                return n === mt ? void 0 : n;
              })(e, a + 1);
        })(
          le(),
          (function xn() {
            const e = ct.lFrame;
            let t = e.bindingRootIndex;
            return (
              -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex),
              t
            );
          })(),
          e,
          t,
          n,
          r
        );
      }
      function Zu(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const yo = class hC extends d.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            a = r;
          if (t && "object" == typeof t) {
            const p = t;
            (o = p.next?.bind(p)),
              (i = p.error?.bind(p)),
              (a = p.complete?.bind(p));
          }
          this.__isAsync && ((i = Zu(i)), o && (o = Zu(o)), a && (a = Zu(a)));
          const c = super.subscribe({ next: o, error: i, complete: a });
          return t instanceof P.w0 && t.add(c), c;
        }
      };
      function pC() {
        return this._results[Oi()]();
      }
      class Ju {
        get changes() {
          return this._changes || (this._changes = new yo());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Oi(),
            r = Ju.prototype;
          r[n] || (r[n] = pC);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const o = (function Qn(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function El(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(r._results, o, n)) &&
            ((r._results = o),
            (r.length = o.length),
            (r.last = o[this.length - 1]),
            (r.first = o[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let pa = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = yC), e;
      })();
      const gC = pa,
        mC = class extends gC {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tViews,
              o = Ua(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            o[17] = this._declarationLView[this._declarationTContainer.index];
            const a = this._declarationLView[19];
            return (
              null !== a && (o[19] = a.createEmbeddedView(r)),
              du(r, o, t),
              new ra(o)
            );
          }
        };
      function yC() {
        return il(Qt(), le());
      }
      function il(e, t) {
        return 4 & e.type ? new mC(t, e, cs(e, t)) : null;
      }
      let sl = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = vC), e;
      })();
      function vC() {
        return bp(Qt(), le());
      }
      const DC = sl,
        Ep = class extends DC {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return cs(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Fo(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = ks(this._hostTNode, this._hostLView);
            if (Ls(t)) {
              const n = vi(t, this._hostLView),
                r = No(t);
              return new Fo(n[1].data[r + 8], n);
            }
            return new Fo(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = wp(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            "number" == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const a = t.createEmbeddedView(n || {}, i);
            return this.insert(a, o), a;
          }
          createComponent(t, n, r, o, i) {
            const a =
              t &&
              !(function Mi(e) {
                return "function" == typeof e;
              })(t);
            let c;
            if (a) c = n;
            else {
              const A = n || {};
              (c = A.index),
                (r = A.injector),
                (o = A.projectableNodes),
                (i = A.environmentInjector || A.ngModuleRef);
            }
            const p = a ? t : new oa(Tt(t)),
              _ = r || this.parentInjector;
            if (!i && null == p.ngModule) {
              const V = (a ? _ : this.parentInjector).get(Ti, null);
              V && (i = V);
            }
            const b = p.create(_, o, void 0, i);
            return this.insert(b.hostView, c), b;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[1];
            if (
              (function ji(e) {
                return Rn(e[3]);
              })(r)
            ) {
              const b = this.indexOf(t);
              if (-1 !== b) this.detach(b);
              else {
                const A = r[3],
                  V = new Ep(A, A[6], A[3]);
                V.detach(V.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              a = this._lContainer;
            !(function dm(e, t, n, r) {
              const o = 10 + r,
                i = n.length;
              r > 0 && (n[o - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[o]), wl(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const a = t[17];
              null !== a &&
                n !== a &&
                (function fm(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(a, t);
              const c = t[19];
              null !== c && c.insertView(e), (t[2] |= 64);
            })(o, r, a, i);
            const c = Ul(i, a),
              p = r[11],
              _ = Ra(p, a[7]);
            return (
              null !== _ &&
                (function lm(e, t, n, r, o, i) {
                  (r[0] = o), (r[6] = t), Ks(e, r, n, 1, o, i);
                })(o, a[6], p, r, _, c),
              t.attachToViewContainerRef(),
              wl(Xu(a), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = wp(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Ll(this._lContainer, n);
            r && (l(Xu(this._lContainer), n), Zc(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Ll(this._lContainer, n);
            return r && null != l(Xu(this._lContainer), n) ? new ra(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function wp(e) {
        return e[8];
      }
      function Xu(e) {
        return e[8] || (e[8] = []);
      }
      function bp(e, t) {
        let n;
        const r = t[e.index];
        if (Rn(r)) n = r;
        else {
          let o;
          if (8 & e.type) o = sn(r);
          else {
            const i = t[11];
            o = i.createComment("");
            const a = Gt(e, t);
            Si(
              i,
              Ra(i, a),
              o,
              (function mm(e, t) {
                return e.nextSibling(t);
              })(i, a),
              !1
            );
          }
          (t[e.index] = n = hf(r, t, o, e)), ja(t, n);
        }
        return new Ep(n, e, t);
      }
      class Qu {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Qu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class ec {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const a = n.getByIndex(i);
              o.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new ec(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Pp(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Mp {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class tc {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new tc(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class nc {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new nc(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, _C(n, i)),
                this.matchTNodeWithReadOption(t, n, _i(n, t, i, !1, !1));
            }
          else
            r === pa
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, _i(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === ea || o === sl || (o === pa && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = _i(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function _C(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function EC(e, t, n, r) {
        return -1 === n
          ? (function CC(e, t) {
              return 11 & e.type ? cs(e, t) : 4 & e.type ? il(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function wC(e, t, n) {
              return n === ea
                ? cs(t, e)
                : n === pa
                ? il(t, e)
                : n === sl
                ? bp(t, e)
                : void 0;
            })(e, t, r)
          : Xo(e, e[1], n, t);
      }
      function Sp(e, t, n, r) {
        const o = t[19].queries[r];
        if (null === o.matches) {
          const i = e.data,
            a = n.matches,
            c = [];
          for (let p = 0; p < a.length; p += 2) {
            const _ = a[p];
            c.push(_ < 0 ? null : EC(t, i[_], a[p + 1], n.metadata.read));
          }
          o.matches = c;
        }
        return o.matches;
      }
      function rc(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const a = Sp(e, t, o, n);
          for (let c = 0; c < i.length; c += 2) {
            const p = i[c];
            if (p > 0) r.push(a[c / 2]);
            else {
              const _ = i[c + 1],
                b = t[-p];
              for (let A = 10; A < b.length; A++) {
                const V = b[A];
                V[17] === V[3] && rc(V[1], V, _, r);
              }
              if (null !== b[9]) {
                const A = b[9];
                for (let V = 0; V < A.length; V++) {
                  const $ = A[V];
                  rc($[1], $, _, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Ip(e) {
        const t = le(),
          n = yt(),
          r = xs();
        To(r + 1);
        const o = Pp(n, r);
        if (
          e.dirty &&
          (function Ko(e) {
            return 4 == (4 & e[2]);
          })(t) ===
            (2 == (2 & o.metadata.flags))
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = o.crossesNgTemplate ? rc(n, t, r, []) : Sp(n, t, o, r);
            e.reset(i, ay), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Ap(e, t, n, r) {
        const o = yt();
        if (o.firstCreatePass) {
          const i = Qt();
          (function Op(e, t, n) {
            null === e.queries && (e.queries = new tc()),
              e.queries.track(new nc(t, n));
          })(o, new Mp(t, n, r), i.index),
            (function SC(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        !(function Rp(e, t, n) {
          const r = new Ju(4 == (4 & n));
          af(e, t, r, r.destroy),
            null === t[19] && (t[19] = new ec()),
            t[19].queries.push(new Qu(r));
        })(o, le(), n);
      }
      function Tp() {
        return (function MC(e, t) {
          return e[19].queries[t].queryList;
        })(le(), xs());
      }
      function Pp(e, t) {
        return e.queries.getByIndex(t);
      }
      function xp(e, t) {
        return il(e, t);
      }
      function ll(...e) {}
      const Xp = new jt("Application Initializer");
      let ul = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = ll),
              (this.reject = ll),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (Ru(i)) n.push(i);
                else if (Vf(i)) {
                  const a = new Promise((c, p) => {
                    i.subscribe({ complete: c, error: p });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(We(Xp, 8));
          }),
          (e.ɵprov = Ut({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Qp = new jt("AppId", {
        providedIn: "root",
        factory: function eg() {
          return `${lc()}${lc()}${lc()}`;
        },
      });
      function lc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const tg = new jt("Platform Initializer"),
        WC = new jt("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        ng = new jt("appBootstrapListener");
      let YC = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Ut({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      const cl = new jt("LocaleId", {
          providedIn: "root",
          factory: () =>
            ht(cl, O.Optional | O.SkipSelf) ||
            (function qC() {
              return (typeof $localize < "u" && $localize.locale) || Ss;
            })(),
        }),
        KC = new jt("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD",
        });
      class ZC {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let JC = (() => {
        class e {
          compileModuleSync(n) {
            return new Yu(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = jo(ln(n).declarations).reduce((a, c) => {
                const p = Tt(c);
                return p && a.push(new oa(p)), a;
              }, []);
            return new ZC(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Ut({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const eE = (() => Promise.resolve(0))();
      function uc(e) {
        typeof Zone > "u"
          ? eE.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class Or {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new yo(!1)),
            (this.onMicrotaskEmpty = new yo(!1)),
            (this.onStable = new yo(!1)),
            (this.onError = new yo(!1)),
            typeof Zone > "u")
          )
            throw new J(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function tE() {
              let e = Je.requestAnimationFrame,
                t = Je.cancelAnimationFrame;
              if (typeof Zone < "u" && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function oE(e) {
              const t = () => {
                !(function rE(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Je, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                dc(e),
                                (e.isCheckStableRunning = !0),
                                cc(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    dc(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, a, c) => {
                  try {
                    return ig(e), n.invokeTask(o, i, a, c);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      sg(e);
                  }
                },
                onInvoke: (n, r, o, i, a, c, p) => {
                  try {
                    return ig(e), n.invoke(o, i, a, c, p);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), sg(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          dc(e),
                          cc(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Or.isInAngularZone()) throw new J(909, !1);
        }
        static assertNotInAngularZone() {
          if (Or.isInAngularZone()) throw new J(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            a = i.scheduleEventTask("NgZoneEvent: " + o, t, nE, ll, ll);
          try {
            return i.runTask(a, n, r);
          } finally {
            i.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const nE = {};
      function cc(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function dc(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function ig(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function sg(e) {
        e._nesting--, cc(e);
      }
      class iE {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new yo()),
            (this.onMicrotaskEmpty = new yo()),
            (this.onStable = new yo()),
            (this.onError = new yo());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const ag = new jt(""),
        lg = new jt("");
      let fc,
        sE = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                fc ||
                  ((function aE(e) {
                    fc = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Or.assertNotInAngularZone(),
                        uc(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                uc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (a) => a.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(We(Or), We(ug), We(lg));
            }),
            (e.ɵprov = Ut({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ug = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return fc?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Ut({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            e
          );
        })(),
        oi = null;
      const cg = new jt("AllowMultipleToken"),
        hc = new jt("PlatformDestroyListeners");
      class cE {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function fg(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new jt(r);
        return (i = []) => {
          let a = pc();
          if (!a || a.injector.get(cg, !1)) {
            const c = [...n, ...i, { provide: o, useValue: !0 }];
            e
              ? e(c)
              : (function dE(e) {
                  if (oi && !oi.get(cg, !1)) throw new J(400, !1);
                  oi = e;
                  const t = e.get(pg);
                  (function dg(e) {
                    const t = e.get(tg, null);
                    t && t.forEach((n) => n());
                  })(e);
                })(
                  (function hg(e = [], t) {
                    return Ri.create({
                      name: t,
                      providers: [
                        { provide: Ql, useValue: "platform" },
                        { provide: hc, useValue: new Set([() => (oi = null)]) },
                        ...e,
                      ],
                    });
                  })(c, r)
                );
          }
          return (function hE(e) {
            const t = pc();
            if (!t) throw new J(401, !1);
            return t;
          })();
        };
      }
      function pc() {
        return oi?.get(pg) ?? null;
      }
      let pg = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const o = (function mg(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new iE()
                      : ("zone.js" === e ? void 0 : e) || new Or(t)),
                  n
                );
              })(
                r?.ngZone,
                (function gg(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r)
              ),
              i = [{ provide: Or, useValue: o }];
            return o.run(() => {
              const a = Ri.create({
                  providers: i,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                c = n.create(a),
                p = c.injector.get(ta, null);
              if (!p) throw new J(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const _ = o.onError.subscribe({
                    next: (b) => {
                      p.handleError(b);
                    },
                  });
                  c.onDestroy(() => {
                    fl(this._modules, c), _.unsubscribe();
                  });
                }),
                (function yg(e, t, n) {
                  try {
                    const r = n();
                    return Ru(r)
                      ? r.catch((o) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(p, o, () => {
                  const _ = c.injector.get(ul);
                  return (
                    _.runInitializers(),
                    _.donePromise.then(
                      () => (
                        (function Fh(e) {
                          Ft(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (Nh = e.toLowerCase().replace(/_/g, "-"));
                        })(c.injector.get(cl, Ss) || Ss),
                        this._moduleDoBootstrap(c),
                        c
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = vg({}, r);
            return (function lE(e, t, n) {
              const r = new Yu(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(dl);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new J(-403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new J(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(hc, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(We(Ri));
          }),
          (e.ɵprov = Ut({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      function vg(e, t) {
        return Array.isArray(t) ? t.reduce(vg, e) : { ...e, ...t };
      }
      let dl = (() => {
        class e {
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          constructor(n, r, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new G.y((c) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    c.next(this._stable), c.complete();
                  });
              }),
              a = new G.y((c) => {
                let p;
                this._zone.runOutsideAngular(() => {
                  p = this._zone.onStable.subscribe(() => {
                    Or.assertNotInAngularZone(),
                      uc(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), c.next(!0));
                      });
                  });
                });
                const _ = this._zone.onUnstable.subscribe(() => {
                  Or.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        c.next(!1);
                      }));
                });
                return () => {
                  p.unsubscribe(), _.unsubscribe();
                };
              });
            this.isStable = (function Oe(...e) {
              const t = (0, ye.yG)(e),
                n = (0, ye._6)(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? (0, Z.Xf)(r[0])
                  : (0, X.J)(n)((0, Ae.D)(r, t))
                : we.E;
            })(
              i,
              a.pipe(
                (function _e(e = {}) {
                  const {
                    connector: t = () => new d.x(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (i) => {
                    let a,
                      c,
                      p,
                      _ = 0,
                      b = !1,
                      A = !1;
                    const V = () => {
                        c?.unsubscribe(), (c = void 0);
                      },
                      $ = () => {
                        V(), (a = p = void 0), (b = A = !1);
                      },
                      ee = () => {
                        const ve = a;
                        $(), ve?.unsubscribe();
                      };
                    return (0, oe.e)((ve, Ie) => {
                      _++, !A && !b && V();
                      const ke = (p = p ?? t());
                      Ie.add(() => {
                        _--, 0 === _ && !A && !b && (c = xe(ee, o));
                      }),
                        ke.subscribe(Ie),
                        !a &&
                          _ > 0 &&
                          ((a = new N.Hp({
                            next: (Xe) => ke.next(Xe),
                            error: (Xe) => {
                              (A = !0), V(), (c = xe($, n, Xe)), ke.error(Xe);
                            },
                            complete: () => {
                              (b = !0), V(), (c = xe($, r)), ke.complete();
                            },
                          })),
                          (0, Z.Xf)(ve).subscribe(a));
                    })(i);
                  };
                })()
              )
            );
          }
          bootstrap(n, r) {
            const o = n instanceof Pd;
            if (!this._injector.get(ul).done)
              throw (!o && Cr(n), new J(405, false));
            let a;
            (a = o ? n : this._injector.get(Qs).resolveComponentFactory(n)),
              this.componentTypes.push(a.componentType);
            const c = (function uE(e) {
                return e.isBoundToModule;
              })(a)
                ? void 0
                : this._injector.get(Is),
              _ = a.create(Ri.NULL, [], r || a.selector, c),
              b = _.location.nativeElement,
              A = _.injector.get(ag, null);
            return (
              A?.registerApplication(b),
              _.onDestroy(() => {
                this.detachView(_.hostView),
                  fl(this.components, _),
                  A?.unregisterApplication(b);
              }),
              this._loadComponent(_),
              _
            );
          }
          tick() {
            if (this._runningTick) throw new J(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            fl(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(ng, []);
            r.push(...this._bootstrapListeners), r.forEach((o) => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => fl(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new J(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(We(Or), We(Ti), We(ta));
          }),
          (e.ɵprov = Ut({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function fl(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let gE = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = mE), e;
      })();
      function mE(e) {
        return (function yE(e, t, n) {
          if (ur(e) && !n) {
            const r = On(e.index, t);
            return new ra(r, r);
          }
          return 47 & e.type ? new ra(t[16], t) : null;
        })(Qt(), le(), 16 == (16 & e));
      }
      class wg {
        constructor() {}
        supports(t) {
          return Wa(t);
        }
        create(t) {
          return new wE(t);
        }
      }
      const EE = (e, t) => t;
      class wE {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || EE);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < Mg(r, o, i)) ? n : r,
              c = Mg(a, o, i),
              p = a.currentIndex;
            if (a === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) o++;
            else {
              i || (i = []);
              const _ = c - o,
                b = p - o;
              if (_ != b) {
                for (let V = 0; V < _; V++) {
                  const $ = V < i.length ? i[V] : (i[V] = 0),
                    ee = $ + V;
                  b <= ee && ee < _ && (i[V] = $ + 1);
                }
                i[a.previousIndex] = b - _;
              }
            }
            c !== p && t(a, c, p);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Wa(t))) throw new J(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let c = 0; c < this.length; c++)
              (i = t[c]),
                (a = this._trackByFn(c, i)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, i, a, c)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, a, c)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function Gv(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Oi()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (c) => {
                (a = this._trackByFn(o, c)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, c, a, o)),
                      Object.is(n.item, c) || this._addIdentityChange(n, c))
                    : ((n = this._mismatch(n, c, a, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new bE(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new bg()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new bg()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class bE {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class ME {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class bg {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new ME()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Mg(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class Sg {
        constructor() {}
        supports(t) {
          return t instanceof Map || Mu(t);
        }
        create() {
          return new SE();
        }
      }
      class SE {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Mu(t))) throw new J(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              a = o._next;
            return (
              i && (i._next = a),
              a && (a._prev = i),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const r = new IE(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class IE {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Ig() {
        return new Dc([new wg()]);
      }
      let Dc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Ig()),
              deps: [[e, new Gs(), new $s()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (null != r) return r;
            throw new J(901, !1);
          }
        }
        return (e.ɵprov = Ut({ token: e, providedIn: "root", factory: Ig })), e;
      })();
      function Ag() {
        return new _c([new Sg()]);
      }
      let _c = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Ag()),
              deps: [[e, new Gs(), new $s()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (r) return r;
            throw new J(901, !1);
          }
        }
        return (e.ɵprov = Ut({ token: e, providedIn: "root", factory: Ag })), e;
      })();
      const RE = fg(null, "core", []);
      let OE = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(We(dl));
          }),
          (e.ɵmod = ar({ type: e })),
          (e.ɵinj = pn({})),
          e
        );
      })();
      function PE(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
    },
    433: (qe, fe, I) => {
      I.d(fe, {
        Fj: () => Me,
        qu: () => fr,
        u: () => li,
        sg: () => cn,
        qQ: () => Yn,
        JJ: () => ce,
        JL: () => F,
        YN: () => wo,
        wV: () => zo,
        UX: () => ct,
        EJ: () => to,
        kI: () => me,
        _Y: () => Do,
        Kr: () => Nr,
      });
      var d = I(8256),
        P = I(6895),
        G = I(2076),
        X = I(9751),
        Z = I(4742),
        we = I(8421),
        ye = I(7669),
        Ae = I(5403),
        Oe = I(3268),
        N = I(1810),
        _e = I(4004);
      let xe = (() => {
          class D {
            constructor(g, S) {
              (this._renderer = g),
                (this._elementRef = S),
                (this.onChange = (Y) => {}),
                (this.onTouched = () => {});
            }
            setProperty(g, S) {
              this._renderer.setProperty(this._elementRef.nativeElement, g, S);
            }
            registerOnTouched(g) {
              this.onTouched = g;
            }
            registerOnChange(g) {
              this.onChange = g;
            }
            setDisabledState(g) {
              this.setProperty("disabled", g);
            }
          }
          return (
            (D.ɵfac = function (g) {
              return new (g || D)(d.Y36(d.Qsj), d.Y36(d.SBq));
            }),
            (D.ɵdir = d.lG2({ type: D })),
            D
          );
        })(),
        ge = (() => {
          class D extends xe {}
          return (
            (D.ɵfac = (function () {
              let y;
              return function (S) {
                return (y || (y = d.n5z(D)))(S || D);
              };
            })()),
            (D.ɵdir = d.lG2({ type: D, features: [d.qOj] })),
            D
          );
        })();
      const Ve = new d.OlP("NgValueAccessor"),
        at = { provide: Ve, useExisting: (0, d.Gpc)(() => Me), multi: !0 },
        Te = new d.OlP("CompositionEventMode");
      let Me = (() => {
        class D extends xe {
          constructor(g, S, Y) {
            super(g, S),
              (this._compositionMode = Y),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function wt() {
                  const D = (0, P.q)() ? (0, P.q)().getUserAgent() : "";
                  return /android (\d+)/.test(D.toLowerCase());
                })());
          }
          writeValue(g) {
            this.setProperty("value", g ?? "");
          }
          _handleInput(g) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(g);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(g) {
            (this._composing = !1), this._compositionMode && this.onChange(g);
          }
        }
        return (
          (D.ɵfac = function (g) {
            return new (g || D)(d.Y36(d.Qsj), d.Y36(d.SBq), d.Y36(Te, 8));
          }),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (g, S) {
              1 & g &&
                d.NdJ("input", function (Fe) {
                  return S._handleInput(Fe.target.value);
                })("blur", function () {
                  return S.onTouched();
                })("compositionstart", function () {
                  return S._compositionStart();
                })("compositionend", function (Fe) {
                  return S._compositionEnd(Fe.target.value);
                });
            },
            features: [d._Bn([at]), d.qOj],
          })),
          D
        );
      })();
      function Ue(D) {
        return (
          null == D ||
          (("string" == typeof D || Array.isArray(D)) && 0 === D.length)
        );
      }
      function ft(D) {
        return null != D && "number" == typeof D.length;
      }
      const J = new d.OlP("NgValidators"),
        Ee = new d.OlP("NgAsyncValidators"),
        Q =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class me {
        static min(y) {
          return Ge(y);
        }
        static max(y) {
          return (function lt(D) {
            return (y) => {
              if (Ue(y.value) || Ue(D)) return null;
              const g = parseFloat(y.value);
              return !isNaN(g) && g > D
                ? { max: { max: D, actual: y.value } }
                : null;
            };
          })(y);
        }
        static required(y) {
          return (function Pe(D) {
            return Ue(D.value) ? { required: !0 } : null;
          })(y);
        }
        static requiredTrue(y) {
          return (function H(D) {
            return !0 === D.value ? null : { required: !0 };
          })(y);
        }
        static email(y) {
          return (function W(D) {
            return Ue(D.value) || Q.test(D.value) ? null : { email: !0 };
          })(y);
        }
        static minLength(y) {
          return (function re(D) {
            return (y) =>
              Ue(y.value) || !ft(y.value)
                ? null
                : y.value.length < D
                ? {
                    minlength: {
                      requiredLength: D,
                      actualLength: y.value.length,
                    },
                  }
                : null;
          })(y);
        }
        static maxLength(y) {
          return (function he(D) {
            return (y) =>
              ft(y.value) && y.value.length > D
                ? {
                    maxlength: {
                      requiredLength: D,
                      actualLength: y.value.length,
                    },
                  }
                : null;
          })(y);
        }
        static pattern(y) {
          return (function De(D) {
            if (!D) return se;
            let y, g;
            return (
              "string" == typeof D
                ? ((g = ""),
                  "^" !== D.charAt(0) && (g += "^"),
                  (g += D),
                  "$" !== D.charAt(D.length - 1) && (g += "$"),
                  (y = new RegExp(g)))
                : ((g = D.toString()), (y = D)),
              (S) => {
                if (Ue(S.value)) return null;
                const Y = S.value;
                return y.test(Y)
                  ? null
                  : { pattern: { requiredPattern: g, actualValue: Y } };
              }
            );
          })(y);
        }
        static nullValidator(y) {
          return null;
        }
        static compose(y) {
          return It(y);
        }
        static composeAsync(y) {
          return Ft(y);
        }
      }
      function Ge(D) {
        return (y) => {
          if (Ue(y.value) || Ue(D)) return null;
          const g = parseFloat(y.value);
          return !isNaN(g) && g < D
            ? { min: { min: D, actual: y.value } }
            : null;
        };
      }
      function se(D) {
        return null;
      }
      function Be(D) {
        return null != D;
      }
      function dt(D) {
        return (0, d.QGY)(D) ? (0, G.D)(D) : D;
      }
      function gt(D) {
        let y = {};
        return (
          D.forEach((g) => {
            y = null != g ? { ...y, ...g } : y;
          }),
          0 === Object.keys(y).length ? null : y
        );
      }
      function He(D, y) {
        return y.map((g) => g(D));
      }
      function Dt(D) {
        return D.map((y) =>
          (function vt(D) {
            return !D.validate;
          })(y)
            ? y
            : (g) => y.validate(g)
        );
      }
      function It(D) {
        if (!D) return null;
        const y = D.filter(Be);
        return 0 == y.length
          ? null
          : function (g) {
              return gt(He(g, y));
            };
      }
      function tn(D) {
        return null != D ? It(Dt(D)) : null;
      }
      function Ft(D) {
        if (!D) return null;
        const y = D.filter(Be);
        return 0 == y.length
          ? null
          : function (g) {
              return (function oe(...D) {
                const y = (0, ye.jO)(D),
                  { args: g, keys: S } = (0, Z.D)(D),
                  Y = new X.y((Fe) => {
                    const { length: Vt } = g;
                    if (!Vt) return void Fe.complete();
                    const In = new Array(Vt);
                    let le = Vt,
                      yt = Vt;
                    for (let io = 0; io < Vt; io++) {
                      let pr = !1;
                      (0, we.Xf)(g[io]).subscribe(
                        (0, Ae.x)(
                          Fe,
                          (Qt) => {
                            pr || ((pr = !0), yt--), (In[io] = Qt);
                          },
                          () => le--,
                          void 0,
                          () => {
                            (!le || !pr) &&
                              (yt || Fe.next(S ? (0, N.n)(S, In) : In),
                              Fe.complete());
                          }
                        )
                      );
                    }
                  });
                return y ? Y.pipe((0, Oe.Z)(y)) : Y;
              })(He(g, y).map(dt)).pipe((0, _e.U)(gt));
            };
      }
      function tt(D) {
        return null != D ? Ft(Dt(D)) : null;
      }
      function en(D, y) {
        return null === D ? [y] : Array.isArray(D) ? [...D, y] : [D, y];
      }
      function En(D) {
        return D._rawValidators;
      }
      function hn(D) {
        return D._rawAsyncValidators;
      }
      function Ut(D) {
        return D ? (Array.isArray(D) ? D : [D]) : [];
      }
      function Ye(D, y) {
        return Array.isArray(D) ? D.includes(y) : D === y;
      }
      function pn(D, y) {
        const g = Ut(y);
        return (
          Ut(D).forEach((Y) => {
            Ye(g, Y) || g.push(Y);
          }),
          g
        );
      }
      function Rt(D, y) {
        return Ut(y).filter((g) => !Ye(D, g));
      }
      class zt {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(y) {
          (this._rawValidators = y || []),
            (this._composedValidatorFn = tn(this._rawValidators));
        }
        _setAsyncValidators(y) {
          (this._rawAsyncValidators = y || []),
            (this._composedAsyncValidatorFn = tt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(y) {
          this._onDestroyCallbacks.push(y);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((y) => y()),
            (this._onDestroyCallbacks = []);
        }
        reset(y) {
          this.control && this.control.reset(y);
        }
        hasError(y, g) {
          return !!this.control && this.control.hasError(y, g);
        }
        getError(y, g) {
          return this.control ? this.control.getError(y, g) : null;
        }
      }
      class Ht extends zt {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Jt extends zt {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Wt {
        constructor(y) {
          this._cd = y;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let ce = (() => {
          class D extends Wt {
            constructor(g) {
              super(g);
            }
          }
          return (
            (D.ɵfac = function (g) {
              return new (g || D)(d.Y36(Jt, 2));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (g, S) {
                2 & g &&
                  d.ekj("ng-untouched", S.isUntouched)(
                    "ng-touched",
                    S.isTouched
                  )("ng-pristine", S.isPristine)("ng-dirty", S.isDirty)(
                    "ng-valid",
                    S.isValid
                  )("ng-invalid", S.isInvalid)("ng-pending", S.isPending);
              },
              features: [d.qOj],
            })),
            D
          );
        })(),
        F = (() => {
          class D extends Wt {
            constructor(g) {
              super(g);
            }
          }
          return (
            (D.ɵfac = function (g) {
              return new (g || D)(d.Y36(Ht, 10));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (g, S) {
                2 & g &&
                  d.ekj("ng-untouched", S.isUntouched)(
                    "ng-touched",
                    S.isTouched
                  )("ng-pristine", S.isPristine)("ng-dirty", S.isDirty)(
                    "ng-valid",
                    S.isValid
                  )("ng-invalid", S.isInvalid)("ng-pending", S.isPending)(
                    "ng-submitted",
                    S.isSubmitted
                  );
              },
              features: [d.qOj],
            })),
            D
          );
        })();
      const de = "VALID",
        ie = "INVALID",
        Ze = "PENDING",
        We = "DISABLED";
      function Ot(D) {
        return (qt(D) ? D.validators : D) || null;
      }
      function Lt(D, y) {
        return (qt(y) ? y.asyncValidators : D) || null;
      }
      function qt(D) {
        return null != D && !Array.isArray(D) && "object" == typeof D;
      }
      function nn(D, y, g) {
        const S = D.controls;
        if (!(y ? Object.keys(S) : S).length) throw new d.vHH(1e3, "");
        if (!S[g]) throw new d.vHH(1001, "");
      }
      function j(D, y, g) {
        D._forEachChild((S, Y) => {
          if (void 0 === g[Y]) throw new d.vHH(1002, "");
        });
      }
      class k {
        constructor(y, g) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(y),
            this._assignAsyncValidators(g);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(y) {
          this._rawValidators = this._composedValidatorFn = y;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(y) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = y;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === de;
        }
        get invalid() {
          return this.status === ie;
        }
        get pending() {
          return this.status == Ze;
        }
        get disabled() {
          return this.status === We;
        }
        get enabled() {
          return this.status !== We;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(y) {
          this._assignValidators(y);
        }
        setAsyncValidators(y) {
          this._assignAsyncValidators(y);
        }
        addValidators(y) {
          this.setValidators(pn(y, this._rawValidators));
        }
        addAsyncValidators(y) {
          this.setAsyncValidators(pn(y, this._rawAsyncValidators));
        }
        removeValidators(y) {
          this.setValidators(Rt(y, this._rawValidators));
        }
        removeAsyncValidators(y) {
          this.setAsyncValidators(Rt(y, this._rawAsyncValidators));
        }
        hasValidator(y) {
          return Ye(this._rawValidators, y);
        }
        hasAsyncValidator(y) {
          return Ye(this._rawAsyncValidators, y);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(y = {}) {
          (this.touched = !0),
            this._parent && !y.onlySelf && this._parent.markAsTouched(y);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((y) => y.markAllAsTouched());
        }
        markAsUntouched(y = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((g) => {
              g.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        markAsDirty(y = {}) {
          (this.pristine = !1),
            this._parent && !y.onlySelf && this._parent.markAsDirty(y);
        }
        markAsPristine(y = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((g) => {
              g.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        markAsPending(y = {}) {
          (this.status = Ze),
            !1 !== y.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !y.onlySelf && this._parent.markAsPending(y);
        }
        disable(y = {}) {
          const g = this._parentMarkedDirty(y.onlySelf);
          (this.status = We),
            (this.errors = null),
            this._forEachChild((S) => {
              S.disable({ ...y, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...y, skipPristineCheck: g }),
            this._onDisabledChange.forEach((S) => S(!0));
        }
        enable(y = {}) {
          const g = this._parentMarkedDirty(y.onlySelf);
          (this.status = de),
            this._forEachChild((S) => {
              S.enable({ ...y, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            }),
            this._updateAncestors({ ...y, skipPristineCheck: g }),
            this._onDisabledChange.forEach((S) => S(!1));
        }
        _updateAncestors(y) {
          this._parent &&
            !y.onlySelf &&
            (this._parent.updateValueAndValidity(y),
            y.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(y) {
          this._parent = y;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(y = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === de || this.status === Ze) &&
                this._runAsyncValidator(y.emitEvent)),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !y.onlySelf &&
              this._parent.updateValueAndValidity(y);
        }
        _updateTreeValidity(y = { emitEvent: !0 }) {
          this._forEachChild((g) => g._updateTreeValidity(y)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? We : de;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(y) {
          if (this.asyncValidator) {
            (this.status = Ze), (this._hasOwnPendingAsyncValidator = !0);
            const g = dt(this.asyncValidator(this));
            this._asyncValidationSubscription = g.subscribe((S) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(S, { emitEvent: y });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(y, g = {}) {
          (this.errors = y), this._updateControlsErrors(!1 !== g.emitEvent);
        }
        get(y) {
          let g = y;
          return null == g ||
            (Array.isArray(g) || (g = g.split(".")), 0 === g.length)
            ? null
            : g.reduce((S, Y) => S && S._find(Y), this);
        }
        getError(y, g) {
          const S = g ? this.get(g) : this;
          return S && S.errors ? S.errors[y] : null;
        }
        hasError(y, g) {
          return !!this.getError(y, g);
        }
        get root() {
          let y = this;
          for (; y._parent; ) y = y._parent;
          return y;
        }
        _updateControlsErrors(y) {
          (this.status = this._calculateStatus()),
            y && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(y);
        }
        _initObservables() {
          (this.valueChanges = new d.vpe()), (this.statusChanges = new d.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? We
            : this.errors
            ? ie
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(Ze)
            ? Ze
            : this._anyControlsHaveStatus(ie)
            ? ie
            : de;
        }
        _anyControlsHaveStatus(y) {
          return this._anyControls((g) => g.status === y);
        }
        _anyControlsDirty() {
          return this._anyControls((y) => y.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((y) => y.touched);
        }
        _updatePristine(y = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        _updateTouched(y = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        _registerOnCollectionChange(y) {
          this._onCollectionChange = y;
        }
        _setUpdateStrategy(y) {
          qt(y) && null != y.updateOn && (this._updateOn = y.updateOn);
        }
        _parentMarkedDirty(y) {
          return (
            !y &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(y) {
          return null;
        }
        _assignValidators(y) {
          (this._rawValidators = Array.isArray(y) ? y.slice() : y),
            (this._composedValidatorFn = (function ht(D) {
              return Array.isArray(D) ? tn(D) : D || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(y) {
          (this._rawAsyncValidators = Array.isArray(y) ? y.slice() : y),
            (this._composedAsyncValidatorFn = (function Hn(D) {
              return Array.isArray(D) ? tt(D) : D || null;
            })(this._rawAsyncValidators));
        }
      }
      class R extends k {
        constructor(y, g, S) {
          super(Ot(g), Lt(S, g)),
            (this.controls = y),
            this._initObservables(),
            this._setUpdateStrategy(g),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(y, g) {
          return this.controls[y]
            ? this.controls[y]
            : ((this.controls[y] = g),
              g.setParent(this),
              g._registerOnCollectionChange(this._onCollectionChange),
              g);
        }
        addControl(y, g, S = {}) {
          this.registerControl(y, g),
            this.updateValueAndValidity({ emitEvent: S.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(y, g = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            this.updateValueAndValidity({ emitEvent: g.emitEvent }),
            this._onCollectionChange();
        }
        setControl(y, g, S = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            g && this.registerControl(y, g),
            this.updateValueAndValidity({ emitEvent: S.emitEvent }),
            this._onCollectionChange();
        }
        contains(y) {
          return this.controls.hasOwnProperty(y) && this.controls[y].enabled;
        }
        setValue(y, g = {}) {
          j(this, 0, y),
            Object.keys(y).forEach((S) => {
              nn(this, !0, S),
                this.controls[S].setValue(y[S], {
                  onlySelf: !0,
                  emitEvent: g.emitEvent,
                });
            }),
            this.updateValueAndValidity(g);
        }
        patchValue(y, g = {}) {
          null != y &&
            (Object.keys(y).forEach((S) => {
              const Y = this.controls[S];
              Y && Y.patchValue(y[S], { onlySelf: !0, emitEvent: g.emitEvent });
            }),
            this.updateValueAndValidity(g));
        }
        reset(y = {}, g = {}) {
          this._forEachChild((S, Y) => {
            S.reset(y[Y], { onlySelf: !0, emitEvent: g.emitEvent });
          }),
            this._updatePristine(g),
            this._updateTouched(g),
            this.updateValueAndValidity(g);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (y, g, S) => ((y[S] = g.getRawValue()), y)
          );
        }
        _syncPendingControls() {
          let y = this._reduceChildren(
            !1,
            (g, S) => !!S._syncPendingControls() || g
          );
          return y && this.updateValueAndValidity({ onlySelf: !0 }), y;
        }
        _forEachChild(y) {
          Object.keys(this.controls).forEach((g) => {
            const S = this.controls[g];
            S && y(S, g);
          });
        }
        _setUpControls() {
          this._forEachChild((y) => {
            y.setParent(this),
              y._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(y) {
          for (const [g, S] of Object.entries(this.controls))
            if (this.contains(g) && y(S)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (g, S, Y) => ((S.enabled || this.disabled) && (g[Y] = S.value), g)
          );
        }
        _reduceChildren(y, g) {
          let S = y;
          return (
            this._forEachChild((Y, Fe) => {
              S = g(S, Y, Fe);
            }),
            S
          );
        }
        _allControlsDisabled() {
          for (const y of Object.keys(this.controls))
            if (this.controls[y].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(y) {
          return this.controls.hasOwnProperty(y) ? this.controls[y] : null;
        }
      }
      class ze extends R {}
      const At = new d.OlP("CallSetDisabledState", {
          providedIn: "root",
          factory: () => et,
        }),
        et = "always";
      function Gn(D, y, g = et) {
        Sn(D, y),
          y.valueAccessor.writeValue(D.value),
          (D.disabled || "always" === g) &&
            y.valueAccessor.setDisabledState?.(D.disabled),
          (function qr(D, y) {
            y.valueAccessor.registerOnChange((g) => {
              (D._pendingValue = g),
                (D._pendingChange = !0),
                (D._pendingDirty = !0),
                "change" === D.updateOn && Kr(D, y);
            });
          })(D, y),
          (function Go(D, y) {
            const g = (S, Y) => {
              y.valueAccessor.writeValue(S), Y && y.viewToModelUpdate(S);
            };
            D.registerOnChange(g),
              y._registerOnDestroy(() => {
                D._unregisterOnChange(g);
              });
          })(D, y),
          (function vo(D, y) {
            y.valueAccessor.registerOnTouched(() => {
              (D._pendingTouched = !0),
                "blur" === D.updateOn && D._pendingChange && Kr(D, y),
                "submit" !== D.updateOn && D.markAsTouched();
            });
          })(D, y),
          (function Jn(D, y) {
            if (y.valueAccessor.setDisabledState) {
              const g = (S) => {
                y.valueAccessor.setDisabledState(S);
              };
              D.registerOnDisabledChange(g),
                y._registerOnDestroy(() => {
                  D._unregisterOnDisabledChange(g);
                });
            }
          })(D, y);
      }
      function tr(D, y, g = !0) {
        const S = () => {};
        y.valueAccessor &&
          (y.valueAccessor.registerOnChange(S),
          y.valueAccessor.registerOnTouched(S)),
          Dr(D, y),
          D &&
            (y._invokeOnDestroyCallbacks(),
            D._registerOnCollectionChange(() => {}));
      }
      function zn(D, y) {
        D.forEach((g) => {
          g.registerOnValidatorChange && g.registerOnValidatorChange(y);
        });
      }
      function Sn(D, y) {
        const g = En(D);
        null !== y.validator
          ? D.setValidators(en(g, y.validator))
          : "function" == typeof g && D.setValidators([g]);
        const S = hn(D);
        null !== y.asyncValidator
          ? D.setAsyncValidators(en(S, y.asyncValidator))
          : "function" == typeof S && D.setAsyncValidators([S]);
        const Y = () => D.updateValueAndValidity();
        zn(y._rawValidators, Y), zn(y._rawAsyncValidators, Y);
      }
      function Dr(D, y) {
        let g = !1;
        if (null !== D) {
          if (null !== y.validator) {
            const Y = En(D);
            if (Array.isArray(Y) && Y.length > 0) {
              const Fe = Y.filter((Vt) => Vt !== y.validator);
              Fe.length !== Y.length && ((g = !0), D.setValidators(Fe));
            }
          }
          if (null !== y.asyncValidator) {
            const Y = hn(D);
            if (Array.isArray(Y) && Y.length > 0) {
              const Fe = Y.filter((Vt) => Vt !== y.asyncValidator);
              Fe.length !== Y.length && ((g = !0), D.setAsyncValidators(Fe));
            }
          }
        }
        const S = () => {};
        return zn(y._rawValidators, S), zn(y._rawAsyncValidators, S), g;
      }
      function Kr(D, y) {
        D._pendingDirty && D.markAsDirty(),
          D.setValue(D._pendingValue, { emitModelToViewChange: !1 }),
          y.viewToModelUpdate(D._pendingValue),
          (D._pendingChange = !1);
      }
      function Xt(D, y) {
        const g = D.indexOf(y);
        g > -1 && D.splice(g, 1);
      }
      function rr(D) {
        return (
          "object" == typeof D &&
          null !== D &&
          2 === Object.keys(D).length &&
          "value" in D &&
          "disabled" in D
        );
      }
      const Pt = class extends k {
        constructor(y = null, g, S) {
          super(Ot(g), Lt(S, g)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(y),
            this._setUpdateStrategy(g),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            qt(g) &&
              (g.nonNullable || g.initialValueIsDefault) &&
              (this.defaultValue = rr(y) ? y.value : y);
        }
        setValue(y, g = {}) {
          (this.value = this._pendingValue = y),
            this._onChange.length &&
              !1 !== g.emitModelToViewChange &&
              this._onChange.forEach((S) =>
                S(this.value, !1 !== g.emitViewToModelChange)
              ),
            this.updateValueAndValidity(g);
        }
        patchValue(y, g = {}) {
          this.setValue(y, g);
        }
        reset(y = this.defaultValue, g = {}) {
          this._applyFormState(y),
            this.markAsPristine(g),
            this.markAsUntouched(g),
            this.setValue(this.value, g),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(y) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(y) {
          this._onChange.push(y);
        }
        _unregisterOnChange(y) {
          Xt(this._onChange, y);
        }
        registerOnDisabledChange(y) {
          this._onDisabledChange.push(y);
        }
        _unregisterOnDisabledChange(y) {
          Xt(this._onDisabledChange, y);
        }
        _forEachChild(y) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(y) {
          rr(y)
            ? ((this.value = this._pendingValue = y.value),
              y.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = y);
        }
      };
      let Do = (() => {
        class D {}
        return (
          (D.ɵfac = function (g) {
            return new (g || D)();
          }),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
            hostAttrs: ["novalidate", ""],
          })),
          D
        );
      })();
      const kt = { provide: Ve, useExisting: (0, d.Gpc)(() => zo), multi: !0 };
      let zo = (() => {
          class D extends ge {
            writeValue(g) {
              this.setProperty("value", g ?? "");
            }
            registerOnChange(g) {
              this.onChange = (S) => {
                g("" == S ? null : parseFloat(S));
              };
            }
          }
          return (
            (D.ɵfac = (function () {
              let y;
              return function (S) {
                return (y || (y = d.n5z(D)))(S || D);
              };
            })()),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["input", "type", "number", "formControlName", ""],
                ["input", "type", "number", "formControl", ""],
                ["input", "type", "number", "ngModel", ""],
              ],
              hostBindings: function (g, S) {
                1 & g &&
                  d.NdJ("input", function (Fe) {
                    return S.onChange(Fe.target.value);
                  })("blur", function () {
                    return S.onTouched();
                  });
              },
              features: [d._Bn([kt]), d.qOj],
            })),
            D
          );
        })(),
        Mr = (() => {
          class D {}
          return (
            (D.ɵfac = function (g) {
              return new (g || D)();
            }),
            (D.ɵmod = d.oAB({ type: D })),
            (D.ɵinj = d.cJS({})),
            D
          );
        })();
      const vn = new d.OlP("NgModelWithFormControlWarning"),
        ur = { provide: Ht, useExisting: (0, d.Gpc)(() => cn) };
      let cn = (() => {
        class D extends Ht {
          constructor(g, S, Y) {
            super(),
              (this.callSetDisabledState = Y),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new d.vpe()),
              this._setValidators(g),
              this._setAsyncValidators(S);
          }
          ngOnChanges(g) {
            this._checkFormPresent(),
              g.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (Dr(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(g) {
            const S = this.form.get(g.path);
            return (
              Gn(S, g, this.callSetDisabledState),
              S.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(g),
              S
            );
          }
          getControl(g) {
            return this.form.get(g.path);
          }
          removeControl(g) {
            tr(g.control || null, g, !1),
              (function Ne(D, y) {
                const g = D.indexOf(y);
                g > -1 && D.splice(g, 1);
              })(this.directives, g);
          }
          addFormGroup(g) {
            this._setUpFormContainer(g);
          }
          removeFormGroup(g) {
            this._cleanUpFormContainer(g);
          }
          getFormGroup(g) {
            return this.form.get(g.path);
          }
          addFormArray(g) {
            this._setUpFormContainer(g);
          }
          removeFormArray(g) {
            this._cleanUpFormContainer(g);
          }
          getFormArray(g) {
            return this.form.get(g.path);
          }
          updateModel(g, S) {
            this.form.get(g.path).setValue(S);
          }
          onSubmit(g) {
            return (
              (this.submitted = !0),
              (function ln(D, y) {
                D._syncPendingControls(),
                  y.forEach((g) => {
                    const S = g.control;
                    "submit" === S.updateOn &&
                      S._pendingChange &&
                      (g.viewToModelUpdate(S._pendingValue),
                      (S._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(g),
              "dialog" === g?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(g) {
            this.form.reset(g), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((g) => {
              const S = g.control,
                Y = this.form.get(g.path);
              S !== Y &&
                (tr(S || null, g),
                ((D) => D instanceof Pt)(Y) &&
                  (Gn(Y, g, this.callSetDisabledState), (g.control = Y)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(g) {
            const S = this.form.get(g.path);
            (function ar(D, y) {
              Sn(D, y);
            })(S, g),
              S.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(g) {
            if (this.form) {
              const S = this.form.get(g.path);
              S &&
                (function Pr(D, y) {
                  return Dr(D, y);
                })(S, g) &&
                S.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            Sn(this.form, this), this._oldForm && Dr(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (D.ɵfac = function (g) {
            return new (g || D)(d.Y36(J, 10), d.Y36(Ee, 10), d.Y36(At, 8));
          }),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (g, S) {
              1 & g &&
                d.NdJ("submit", function (Fe) {
                  return S.onSubmit(Fe);
                })("reset", function () {
                  return S.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [d._Bn([ur]), d.qOj, d.TTD],
          })),
          D
        );
      })();
      const ki = { provide: Jt, useExisting: (0, d.Gpc)(() => li) };
      let li = (() => {
        class D extends Jt {
          set isDisabled(g) {}
          constructor(g, S, Y, Fe, Vt) {
            super(),
              (this._ngModelWarningConfig = Vt),
              (this._added = !1),
              (this.update = new d.vpe()),
              (this._ngModelWarningSent = !1),
              (this._parent = g),
              this._setValidators(S),
              this._setAsyncValidators(Y),
              (this.valueAccessor = (function Tn(D, y) {
                if (!y) return null;
                let g, S, Y;
                return (
                  Array.isArray(y),
                  y.forEach((Fe) => {
                    Fe.constructor === Me
                      ? (g = Fe)
                      : (function Cr(D) {
                          return Object.getPrototypeOf(D.constructor) === ge;
                        })(Fe)
                      ? (S = Fe)
                      : (Y = Fe);
                  }),
                  Y || S || g || null
                );
              })(0, Fe));
          }
          ngOnChanges(g) {
            this._added || this._setUpControl(),
              (function rn(D, y) {
                if (!D.hasOwnProperty("model")) return !1;
                const g = D.model;
                return !!g.isFirstChange() || !Object.is(y, g.currentValue);
              })(g, this.viewModel) &&
                ((this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(g) {
            (this.viewModel = g), this.update.emit(g);
          }
          get path() {
            return (function $n(D, y) {
              return [...y.path, D];
            })(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              (this._added = !0);
          }
        }
        return (
          (D._ngModelWarningSentOnce = !1),
          (D.ɵfac = function (g) {
            return new (g || D)(
              d.Y36(Ht, 13),
              d.Y36(J, 10),
              d.Y36(Ee, 10),
              d.Y36(Ve, 10),
              d.Y36(vn, 8)
            );
          }),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [["", "formControlName", ""]],
            inputs: {
              name: ["formControlName", "name"],
              isDisabled: ["disabled", "isDisabled"],
              model: ["ngModel", "model"],
            },
            outputs: { update: "ngModelChange" },
            features: [d._Bn([ki]), d.qOj, d.TTD],
          })),
          D
        );
      })();
      const Co = { provide: Ve, useExisting: (0, d.Gpc)(() => to), multi: !0 };
      function Eo(D, y) {
        return null == D
          ? `${y}`
          : (y && "object" == typeof y && (y = "Object"),
            `${D}: ${y}`.slice(0, 50));
      }
      let to = (() => {
          class D extends ge {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(g) {
              this._compareWith = g;
            }
            writeValue(g) {
              this.value = g;
              const Y = Eo(this._getOptionId(g), g);
              this.setProperty("value", Y);
            }
            registerOnChange(g) {
              this.onChange = (S) => {
                (this.value = this._getOptionValue(S)), g(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(g) {
              for (const S of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(S), g)) return S;
              return null;
            }
            _getOptionValue(g) {
              const S = (function Wo(D) {
                return D.split(":")[0];
              })(g);
              return this._optionMap.has(S) ? this._optionMap.get(S) : g;
            }
          }
          return (
            (D.ɵfac = (function () {
              let y;
              return function (S) {
                return (y || (y = d.n5z(D)))(S || D);
              };
            })()),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["select", "formControlName", "", 3, "multiple", ""],
                ["select", "formControl", "", 3, "multiple", ""],
                ["select", "ngModel", "", 3, "multiple", ""],
              ],
              hostBindings: function (g, S) {
                1 & g &&
                  d.NdJ("change", function (Fe) {
                    return S.onChange(Fe.target.value);
                  })("blur", function () {
                    return S.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [d._Bn([Co]), d.qOj],
            })),
            D
          );
        })(),
        wo = (() => {
          class D {
            constructor(g, S, Y) {
              (this._element = g),
                (this._renderer = S),
                (this._select = Y),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(g) {
              null != this._select &&
                (this._select._optionMap.set(this.id, g),
                this._setElementValue(Eo(this.id, g)),
                this._select.writeValue(this._select.value));
            }
            set value(g) {
              this._setElementValue(g),
                this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(g) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                g
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (D.ɵfac = function (g) {
              return new (g || D)(d.Y36(d.SBq), d.Y36(d.Qsj), d.Y36(to, 9));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            D
          );
        })();
      const ui = { provide: Ve, useExisting: (0, d.Gpc)(() => ci), multi: !0 };
      function Vi(D, y) {
        return null == D
          ? `${y}`
          : ("string" == typeof y && (y = `'${y}'`),
            y && "object" == typeof y && (y = "Object"),
            `${D}: ${y}`.slice(0, 50));
      }
      let ci = (() => {
          class D extends ge {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(g) {
              this._compareWith = g;
            }
            writeValue(g) {
              let S;
              if (((this.value = g), Array.isArray(g))) {
                const Y = g.map((Fe) => this._getOptionId(Fe));
                S = (Fe, Vt) => {
                  Fe._setSelected(Y.indexOf(Vt.toString()) > -1);
                };
              } else
                S = (Y, Fe) => {
                  Y._setSelected(!1);
                };
              this._optionMap.forEach(S);
            }
            registerOnChange(g) {
              this.onChange = (S) => {
                const Y = [],
                  Fe = S.selectedOptions;
                if (void 0 !== Fe) {
                  const Vt = Fe;
                  for (let In = 0; In < Vt.length; In++) {
                    const yt = this._getOptionValue(Vt[In].value);
                    Y.push(yt);
                  }
                } else {
                  const Vt = S.options;
                  for (let In = 0; In < Vt.length; In++) {
                    const le = Vt[In];
                    if (le.selected) {
                      const yt = this._getOptionValue(le.value);
                      Y.push(yt);
                    }
                  }
                }
                (this.value = Y), g(Y);
              };
            }
            _registerOption(g) {
              const S = (this._idCounter++).toString();
              return this._optionMap.set(S, g), S;
            }
            _getOptionId(g) {
              for (const S of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(S)._value, g))
                  return S;
              return null;
            }
            _getOptionValue(g) {
              const S = (function bo(D) {
                return D.split(":")[0];
              })(g);
              return this._optionMap.has(S) ? this._optionMap.get(S)._value : g;
            }
          }
          return (
            (D.ɵfac = (function () {
              let y;
              return function (S) {
                return (y || (y = d.n5z(D)))(S || D);
              };
            })()),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["select", "multiple", "", "formControlName", ""],
                ["select", "multiple", "", "formControl", ""],
                ["select", "multiple", "", "ngModel", ""],
              ],
              hostBindings: function (g, S) {
                1 & g &&
                  d.NdJ("change", function (Fe) {
                    return S.onChange(Fe.target);
                  })("blur", function () {
                    return S.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [d._Bn([ui]), d.qOj],
            })),
            D
          );
        })(),
        Nr = (() => {
          class D {
            constructor(g, S, Y) {
              (this._element = g),
                (this._renderer = S),
                (this._select = Y),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(g) {
              null != this._select &&
                ((this._value = g),
                this._setElementValue(Vi(this.id, g)),
                this._select.writeValue(this._select.value));
            }
            set value(g) {
              this._select
                ? ((this._value = g),
                  this._setElementValue(Vi(this.id, g)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(g);
            }
            _setElementValue(g) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                g
              );
            }
            _setSelected(g) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "selected",
                g
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (D.ɵfac = function (g) {
              return new (g || D)(d.Y36(d.SBq), d.Y36(d.Qsj), d.Y36(ci, 9));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            D
          );
        })();
      let cr = (() => {
        class D {
          constructor() {
            this._validator = se;
          }
          ngOnChanges(g) {
            if (this.inputName in g) {
              const S = this.normalizeInput(g[this.inputName].currentValue);
              (this._enabled = this.enabled(S)),
                (this._validator = this._enabled
                  ? this.createValidator(S)
                  : se),
                this._onChange && this._onChange();
            }
          }
          validate(g) {
            return this._validator(g);
          }
          registerOnValidatorChange(g) {
            this._onChange = g;
          }
          enabled(g) {
            return null != g;
          }
        }
        return (
          (D.ɵfac = function (g) {
            return new (g || D)();
          }),
          (D.ɵdir = d.lG2({ type: D, features: [d.TTD] })),
          D
        );
      })();
      const ro = { provide: J, useExisting: (0, d.Gpc)(() => Yn), multi: !0 };
      let Yn = (() => {
          class D extends cr {
            constructor() {
              super(...arguments),
                (this.inputName = "min"),
                (this.normalizeInput = (g) =>
                  (function Mo(D) {
                    return "number" == typeof D ? D : parseFloat(D);
                  })(g)),
                (this.createValidator = (g) => Ge(g));
            }
          }
          return (
            (D.ɵfac = (function () {
              let y;
              return function (S) {
                return (y || (y = d.n5z(D)))(S || D);
              };
            })()),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["input", "type", "number", "min", "", "formControlName", ""],
                ["input", "type", "number", "min", "", "formControl", ""],
                ["input", "type", "number", "min", "", "ngModel", ""],
              ],
              hostVars: 1,
              hostBindings: function (g, S) {
                2 & g && d.uIk("min", S._enabled ? S.min : null);
              },
              inputs: { min: "min" },
              features: [d._Bn([ro]), d.qOj],
            })),
            D
          );
        })(),
        qo = (() => {
          class D {}
          return (
            (D.ɵfac = function (g) {
              return new (g || D)();
            }),
            (D.ɵmod = d.oAB({ type: D })),
            (D.ɵinj = d.cJS({ imports: [Mr] })),
            D
          );
        })();
      class dr extends k {
        constructor(y, g, S) {
          super(Ot(g), Lt(S, g)),
            (this.controls = y),
            this._initObservables(),
            this._setUpdateStrategy(g),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(y) {
          return this.controls[this._adjustIndex(y)];
        }
        push(y, g = {}) {
          this.controls.push(y),
            this._registerControl(y),
            this.updateValueAndValidity({ emitEvent: g.emitEvent }),
            this._onCollectionChange();
        }
        insert(y, g, S = {}) {
          this.controls.splice(y, 0, g),
            this._registerControl(g),
            this.updateValueAndValidity({ emitEvent: S.emitEvent });
        }
        removeAt(y, g = {}) {
          let S = this._adjustIndex(y);
          S < 0 && (S = 0),
            this.controls[S] &&
              this.controls[S]._registerOnCollectionChange(() => {}),
            this.controls.splice(S, 1),
            this.updateValueAndValidity({ emitEvent: g.emitEvent });
        }
        setControl(y, g, S = {}) {
          let Y = this._adjustIndex(y);
          Y < 0 && (Y = 0),
            this.controls[Y] &&
              this.controls[Y]._registerOnCollectionChange(() => {}),
            this.controls.splice(Y, 1),
            g && (this.controls.splice(Y, 0, g), this._registerControl(g)),
            this.updateValueAndValidity({ emitEvent: S.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(y, g = {}) {
          j(this, 0, y),
            y.forEach((S, Y) => {
              nn(this, !1, Y),
                this.at(Y).setValue(S, {
                  onlySelf: !0,
                  emitEvent: g.emitEvent,
                });
            }),
            this.updateValueAndValidity(g);
        }
        patchValue(y, g = {}) {
          null != y &&
            (y.forEach((S, Y) => {
              this.at(Y) &&
                this.at(Y).patchValue(S, {
                  onlySelf: !0,
                  emitEvent: g.emitEvent,
                });
            }),
            this.updateValueAndValidity(g));
        }
        reset(y = [], g = {}) {
          this._forEachChild((S, Y) => {
            S.reset(y[Y], { onlySelf: !0, emitEvent: g.emitEvent });
          }),
            this._updatePristine(g),
            this._updateTouched(g),
            this.updateValueAndValidity(g);
        }
        getRawValue() {
          return this.controls.map((y) => y.getRawValue());
        }
        clear(y = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((g) => g._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: y.emitEvent }));
        }
        _adjustIndex(y) {
          return y < 0 ? y + this.length : y;
        }
        _syncPendingControls() {
          let y = this.controls.reduce(
            (g, S) => !!S._syncPendingControls() || g,
            !1
          );
          return y && this.updateValueAndValidity({ onlySelf: !0 }), y;
        }
        _forEachChild(y) {
          this.controls.forEach((g, S) => {
            y(g, S);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((y) => y.enabled || this.disabled)
            .map((y) => y.value);
        }
        _anyControls(y) {
          return this.controls.some((g) => g.enabled && y(g));
        }
        _setUpControls() {
          this._forEachChild((y) => this._registerControl(y));
        }
        _allControlsDisabled() {
          for (const y of this.controls) if (y.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(y) {
          y.setParent(this),
            y._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(y) {
          return this.at(y) ?? null;
        }
      }
      function Ko(D) {
        return (
          !!D &&
          (void 0 !== D.asyncValidators ||
            void 0 !== D.validators ||
            void 0 !== D.updateOn)
        );
      }
      let fr = (() => {
          class D {
            constructor() {
              this.useNonNullable = !1;
            }
            get nonNullable() {
              const g = new D();
              return (g.useNonNullable = !0), g;
            }
            group(g, S = null) {
              const Y = this._reduceControls(g);
              let Fe = {};
              return (
                Ko(S)
                  ? (Fe = S)
                  : null !== S &&
                    ((Fe.validators = S.validator),
                    (Fe.asyncValidators = S.asyncValidator)),
                new R(Y, Fe)
              );
            }
            record(g, S = null) {
              const Y = this._reduceControls(g);
              return new ze(Y, S);
            }
            control(g, S, Y) {
              let Fe = {};
              return this.useNonNullable
                ? (Ko(S)
                    ? (Fe = S)
                    : ((Fe.validators = S), (Fe.asyncValidators = Y)),
                  new Pt(g, { ...Fe, nonNullable: !0 }))
                : new Pt(g, S, Y);
            }
            array(g, S, Y) {
              const Fe = g.map((Vt) => this._createControl(Vt));
              return new dr(Fe, S, Y);
            }
            _reduceControls(g) {
              const S = {};
              return (
                Object.keys(g).forEach((Y) => {
                  S[Y] = this._createControl(g[Y]);
                }),
                S
              );
            }
            _createControl(g) {
              return g instanceof Pt || g instanceof k
                ? g
                : Array.isArray(g)
                ? this.control(
                    g[0],
                    g.length > 1 ? g[1] : null,
                    g.length > 2 ? g[2] : null
                  )
                : this.control(g);
            }
          }
          return (
            (D.ɵfac = function (g) {
              return new (g || D)();
            }),
            (D.ɵprov = d.Yz7({
              token: D,
              factory: D.ɵfac,
              providedIn: "root",
            })),
            D
          );
        })(),
        ct = (() => {
          class D {
            static withConfig(g) {
              return {
                ngModule: D,
                providers: [
                  {
                    provide: vn,
                    useValue: g.warnOnNgModelWithFormControl ?? "always",
                  },
                  { provide: At, useValue: g.callSetDisabledState ?? et },
                ],
              };
            }
          }
          return (
            (D.ɵfac = function (g) {
              return new (g || D)();
            }),
            (D.ɵmod = d.oAB({ type: D })),
            (D.ɵinj = d.cJS({ imports: [qo] })),
            D
          );
        })();
    },
    1481: (qe, fe, I) => {
      I.d(fe, { Dx: () => Yt, b2: () => zt, q6: () => Ut });
      var d = I(6895),
        P = I(8256);
      class G extends d.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class X extends G {
        static makeCurrent() {
          (0, d.HT)(new X());
        }
        onAndCancel(k, R, z) {
          return (
            k.addEventListener(R, z, !1),
            () => {
              k.removeEventListener(R, z, !1);
            }
          );
        }
        dispatchEvent(k, R) {
          k.dispatchEvent(R);
        }
        remove(k) {
          k.parentNode && k.parentNode.removeChild(k);
        }
        createElement(k, R) {
          return (R = R || this.getDefaultDocument()).createElement(k);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(k) {
          return k.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(k) {
          return k instanceof DocumentFragment;
        }
        getGlobalEventTarget(k, R) {
          return "window" === R
            ? window
            : "document" === R
            ? k
            : "body" === R
            ? k.body
            : null;
        }
        getBaseHref(k) {
          const R = (function we() {
            return (
              (Z = Z || document.querySelector("base")),
              Z ? Z.getAttribute("href") : null
            );
          })();
          return null == R
            ? null
            : (function Ae(j) {
                (ye = ye || document.createElement("a")),
                  ye.setAttribute("href", j);
                const k = ye.pathname;
                return "/" === k.charAt(0) ? k : `/${k}`;
              })(R);
        }
        resetBaseElement() {
          Z = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(k) {
          return (0, d.Mx)(document.cookie, k);
        }
      }
      let ye,
        Z = null;
      const Oe = new P.OlP("TRANSITION_ID"),
        oe = [
          {
            provide: P.ip1,
            useFactory: function N(j, k, R) {
              return () => {
                R.get(P.CZH).donePromise.then(() => {
                  const z = (0, d.q)(),
                    ae = k.querySelectorAll(`style[ng-transition="${j}"]`);
                  for (let ze = 0; ze < ae.length; ze++) z.remove(ae[ze]);
                });
              };
            },
            deps: [Oe, d.K0, P.zs3],
            multi: !0,
          },
        ];
      let xe = (() => {
        class j {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (j.ɵfac = function (R) {
            return new (R || j)();
          }),
          (j.ɵprov = P.Yz7({ token: j, factory: j.ɵfac })),
          j
        );
      })();
      const ge = new P.OlP("EventManagerPlugins");
      let Ve = (() => {
        class j {
          constructor(R, z) {
            (this._zone = z),
              (this._eventNameToPlugin = new Map()),
              R.forEach((ae) => (ae.manager = this)),
              (this._plugins = R.slice().reverse());
          }
          addEventListener(R, z, ae) {
            return this._findPluginFor(z).addEventListener(R, z, ae);
          }
          addGlobalEventListener(R, z, ae) {
            return this._findPluginFor(z).addGlobalEventListener(R, z, ae);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(R) {
            const z = this._eventNameToPlugin.get(R);
            if (z) return z;
            const ae = this._plugins;
            for (let ze = 0; ze < ae.length; ze++) {
              const nt = ae[ze];
              if (nt.supports(R)) return this._eventNameToPlugin.set(R, nt), nt;
            }
            throw new Error(`No event manager plugin found for event ${R}`);
          }
        }
        return (
          (j.ɵfac = function (R) {
            return new (R || j)(P.LFG(ge), P.LFG(P.R0b));
          }),
          (j.ɵprov = P.Yz7({ token: j, factory: j.ɵfac })),
          j
        );
      })();
      class $e {
        constructor(k) {
          this._doc = k;
        }
        addGlobalEventListener(k, R, z) {
          const ae = (0, d.q)().getGlobalEventTarget(this._doc, k);
          if (!ae)
            throw new Error(`Unsupported event target ${ae} for event ${R}`);
          return this.addEventListener(ae, R, z);
        }
      }
      let Qe = (() => {
          class j {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(R) {
              const z = new Set();
              R.forEach((ae) => {
                this._stylesSet.has(ae) || (this._stylesSet.add(ae), z.add(ae));
              }),
                this.onStylesAdded(z);
            }
            onStylesAdded(R) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (j.ɵfac = function (R) {
              return new (R || j)();
            }),
            (j.ɵprov = P.Yz7({ token: j, factory: j.ɵfac })),
            j
          );
        })(),
        at = (() => {
          class j extends Qe {
            constructor(R) {
              super(),
                (this._doc = R),
                (this._hostNodes = new Map()),
                this._hostNodes.set(R.head, []);
            }
            _addStylesToHost(R, z, ae) {
              R.forEach((ze) => {
                const nt = this._doc.createElement("style");
                (nt.textContent = ze), ae.push(z.appendChild(nt));
              });
            }
            addHost(R) {
              const z = [];
              this._addStylesToHost(this._stylesSet, R, z),
                this._hostNodes.set(R, z);
            }
            removeHost(R) {
              const z = this._hostNodes.get(R);
              z && z.forEach(wt), this._hostNodes.delete(R);
            }
            onStylesAdded(R) {
              this._hostNodes.forEach((z, ae) => {
                this._addStylesToHost(R, ae, z);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((R) => R.forEach(wt));
            }
          }
          return (
            (j.ɵfac = function (R) {
              return new (R || j)(P.LFG(d.K0));
            }),
            (j.ɵprov = P.Yz7({ token: j, factory: j.ɵfac })),
            j
          );
        })();
      function wt(j) {
        (0, d.q)().remove(j);
      }
      const Te = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        Me = /%COMP%/g;
      function me(j, k) {
        return k.flat(100).map((R) => R.replace(Me, j));
      }
      function Ge(j) {
        return (k) => {
          if ("__ngUnwrap__" === k) return j;
          !1 === j(k) && (k.preventDefault(), (k.returnValue = !1));
        };
      }
      let lt = (() => {
        class j {
          constructor(R, z, ae) {
            (this.eventManager = R),
              (this.sharedStylesHost = z),
              (this.appId = ae),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Pe(R));
          }
          createRenderer(R, z) {
            if (!R || !z) return this.defaultRenderer;
            switch (z.encapsulation) {
              case P.ifc.Emulated: {
                let ae = this.rendererByCompId.get(z.id);
                return (
                  ae ||
                    ((ae = new he(
                      this.eventManager,
                      this.sharedStylesHost,
                      z,
                      this.appId
                    )),
                    this.rendererByCompId.set(z.id, ae)),
                  ae.applyToHost(R),
                  ae
                );
              }
              case P.ifc.ShadowDom:
                return new De(this.eventManager, this.sharedStylesHost, R, z);
              default:
                if (!this.rendererByCompId.has(z.id)) {
                  const ae = me(z.id, z.styles);
                  this.sharedStylesHost.addStyles(ae),
                    this.rendererByCompId.set(z.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (j.ɵfac = function (R) {
            return new (R || j)(P.LFG(Ve), P.LFG(at), P.LFG(P.AFp));
          }),
          (j.ɵprov = P.Yz7({ token: j, factory: j.ɵfac })),
          j
        );
      })();
      class Pe {
        constructor(k) {
          (this.eventManager = k),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(k, R) {
          return R
            ? document.createElementNS(Te[R] || R, k)
            : document.createElement(k);
        }
        createComment(k) {
          return document.createComment(k);
        }
        createText(k) {
          return document.createTextNode(k);
        }
        appendChild(k, R) {
          (re(k) ? k.content : k).appendChild(R);
        }
        insertBefore(k, R, z) {
          k && (re(k) ? k.content : k).insertBefore(R, z);
        }
        removeChild(k, R) {
          k && k.removeChild(R);
        }
        selectRootElement(k, R) {
          let z = "string" == typeof k ? document.querySelector(k) : k;
          if (!z)
            throw new Error(`The selector "${k}" did not match any elements`);
          return R || (z.textContent = ""), z;
        }
        parentNode(k) {
          return k.parentNode;
        }
        nextSibling(k) {
          return k.nextSibling;
        }
        setAttribute(k, R, z, ae) {
          if (ae) {
            R = ae + ":" + R;
            const ze = Te[ae];
            ze ? k.setAttributeNS(ze, R, z) : k.setAttribute(R, z);
          } else k.setAttribute(R, z);
        }
        removeAttribute(k, R, z) {
          if (z) {
            const ae = Te[z];
            ae ? k.removeAttributeNS(ae, R) : k.removeAttribute(`${z}:${R}`);
          } else k.removeAttribute(R);
        }
        addClass(k, R) {
          k.classList.add(R);
        }
        removeClass(k, R) {
          k.classList.remove(R);
        }
        setStyle(k, R, z, ae) {
          ae & (P.JOm.DashCase | P.JOm.Important)
            ? k.style.setProperty(R, z, ae & P.JOm.Important ? "important" : "")
            : (k.style[R] = z);
        }
        removeStyle(k, R, z) {
          z & P.JOm.DashCase ? k.style.removeProperty(R) : (k.style[R] = "");
        }
        setProperty(k, R, z) {
          k[R] = z;
        }
        setValue(k, R) {
          k.nodeValue = R;
        }
        listen(k, R, z) {
          return "string" == typeof k
            ? this.eventManager.addGlobalEventListener(k, R, Ge(z))
            : this.eventManager.addEventListener(k, R, Ge(z));
        }
      }
      function re(j) {
        return "TEMPLATE" === j.tagName && void 0 !== j.content;
      }
      class he extends Pe {
        constructor(k, R, z, ae) {
          super(k), (this.component = z);
          const ze = me(ae + "-" + z.id, z.styles);
          R.addStyles(ze),
            (this.contentAttr = (function Ee(j) {
              return "_ngcontent-%COMP%".replace(Me, j);
            })(ae + "-" + z.id)),
            (this.hostAttr = (function Q(j) {
              return "_nghost-%COMP%".replace(Me, j);
            })(ae + "-" + z.id));
        }
        applyToHost(k) {
          super.setAttribute(k, this.hostAttr, "");
        }
        createElement(k, R) {
          const z = super.createElement(k, R);
          return super.setAttribute(z, this.contentAttr, ""), z;
        }
      }
      class De extends Pe {
        constructor(k, R, z, ae) {
          super(k),
            (this.sharedStylesHost = R),
            (this.hostEl = z),
            (this.shadowRoot = z.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const ze = me(ae.id, ae.styles);
          for (let nt = 0; nt < ze.length; nt++) {
            const At = document.createElement("style");
            (At.textContent = ze[nt]), this.shadowRoot.appendChild(At);
          }
        }
        nodeOrShadowRoot(k) {
          return k === this.hostEl ? this.shadowRoot : k;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(k, R) {
          return super.appendChild(this.nodeOrShadowRoot(k), R);
        }
        insertBefore(k, R, z) {
          return super.insertBefore(this.nodeOrShadowRoot(k), R, z);
        }
        removeChild(k, R) {
          return super.removeChild(this.nodeOrShadowRoot(k), R);
        }
        parentNode(k) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(k))
          );
        }
      }
      let se = (() => {
        class j extends $e {
          constructor(R) {
            super(R);
          }
          supports(R) {
            return !0;
          }
          addEventListener(R, z, ae) {
            return (
              R.addEventListener(z, ae, !1),
              () => this.removeEventListener(R, z, ae)
            );
          }
          removeEventListener(R, z, ae) {
            return R.removeEventListener(z, ae);
          }
        }
        return (
          (j.ɵfac = function (R) {
            return new (R || j)(P.LFG(d.K0));
          }),
          (j.ɵprov = P.Yz7({ token: j, factory: j.ɵfac })),
          j
        );
      })();
      const Be = ["alt", "control", "meta", "shift"],
        dt = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        gt = {
          alt: (j) => j.altKey,
          control: (j) => j.ctrlKey,
          meta: (j) => j.metaKey,
          shift: (j) => j.shiftKey,
        };
      let He = (() => {
        class j extends $e {
          constructor(R) {
            super(R);
          }
          supports(R) {
            return null != j.parseEventName(R);
          }
          addEventListener(R, z, ae) {
            const ze = j.parseEventName(z),
              nt = j.eventCallback(ze.fullKey, ae, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, d.q)().onAndCancel(R, ze.domEventName, nt)
              );
          }
          static parseEventName(R) {
            const z = R.toLowerCase().split("."),
              ae = z.shift();
            if (0 === z.length || ("keydown" !== ae && "keyup" !== ae))
              return null;
            const ze = j._normalizeKey(z.pop());
            let nt = "",
              At = z.indexOf("code");
            if (
              (At > -1 && (z.splice(At, 1), (nt = "code.")),
              Be.forEach(($n) => {
                const Gn = z.indexOf($n);
                Gn > -1 && (z.splice(Gn, 1), (nt += $n + "."));
              }),
              (nt += ze),
              0 != z.length || 0 === ze.length)
            )
              return null;
            const et = {};
            return (et.domEventName = ae), (et.fullKey = nt), et;
          }
          static matchEventFullKeyCode(R, z) {
            let ae = dt[R.key] || R.key,
              ze = "";
            return (
              z.indexOf("code.") > -1 && ((ae = R.code), (ze = "code.")),
              !(null == ae || !ae) &&
                ((ae = ae.toLowerCase()),
                " " === ae ? (ae = "space") : "." === ae && (ae = "dot"),
                Be.forEach((nt) => {
                  nt !== ae && (0, gt[nt])(R) && (ze += nt + ".");
                }),
                (ze += ae),
                ze === z)
            );
          }
          static eventCallback(R, z, ae) {
            return (ze) => {
              j.matchEventFullKeyCode(ze, R) && ae.runGuarded(() => z(ze));
            };
          }
          static _normalizeKey(R) {
            return "esc" === R ? "escape" : R;
          }
        }
        return (
          (j.ɵfac = function (R) {
            return new (R || j)(P.LFG(d.K0));
          }),
          (j.ɵprov = P.Yz7({ token: j, factory: j.ɵfac })),
          j
        );
      })();
      const Ut = (0, P.eFA)(P._c5, "browser", [
          { provide: P.Lbi, useValue: d.bD },
          {
            provide: P.g9A,
            useValue: function tt() {
              X.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: d.K0,
            useFactory: function En() {
              return (0, P.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        Ye = new P.OlP(""),
        pn = [
          {
            provide: P.rWj,
            useClass: class _e {
              addToWindow(k) {
                (P.dqk.getAngularTestability = (z, ae = !0) => {
                  const ze = k.findTestabilityInTree(z, ae);
                  if (null == ze)
                    throw new Error("Could not find testability for element.");
                  return ze;
                }),
                  (P.dqk.getAllAngularTestabilities = () =>
                    k.getAllTestabilities()),
                  (P.dqk.getAllAngularRootElements = () =>
                    k.getAllRootElements()),
                  P.dqk.frameworkStabilizers ||
                    (P.dqk.frameworkStabilizers = []),
                  P.dqk.frameworkStabilizers.push((z) => {
                    const ae = P.dqk.getAllAngularTestabilities();
                    let ze = ae.length,
                      nt = !1;
                    const At = function (et) {
                      (nt = nt || et), ze--, 0 == ze && z(nt);
                    };
                    ae.forEach(function (et) {
                      et.whenStable(At);
                    });
                  });
              }
              findTestabilityInTree(k, R, z) {
                return null == R
                  ? null
                  : k.getTestability(R) ??
                      (z
                        ? (0, d.q)().isShadowRoot(R)
                          ? this.findTestabilityInTree(k, R.host, !0)
                          : this.findTestabilityInTree(k, R.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: P.lri, useClass: P.dDg, deps: [P.R0b, P.eoX, P.rWj] },
          { provide: P.dDg, useClass: P.dDg, deps: [P.R0b, P.eoX, P.rWj] },
        ],
        Rt = [
          { provide: P.zSh, useValue: "root" },
          {
            provide: P.qLn,
            useFactory: function en() {
              return new P.qLn();
            },
            deps: [],
          },
          { provide: ge, useClass: se, multi: !0, deps: [d.K0, P.R0b, P.Lbi] },
          { provide: ge, useClass: He, multi: !0, deps: [d.K0] },
          { provide: lt, useClass: lt, deps: [Ve, at, P.AFp] },
          { provide: P.FYo, useExisting: lt },
          { provide: Qe, useExisting: at },
          { provide: at, useClass: at, deps: [d.K0] },
          { provide: Ve, useClass: Ve, deps: [ge, P.R0b] },
          { provide: d.JF, useClass: xe, deps: [] },
          [],
        ];
      let zt = (() => {
          class j {
            constructor(R) {}
            static withServerTransition(R) {
              return {
                ngModule: j,
                providers: [
                  { provide: P.AFp, useValue: R.appId },
                  { provide: Oe, useExisting: P.AFp },
                  oe,
                ],
              };
            }
          }
          return (
            (j.ɵfac = function (R) {
              return new (R || j)(P.LFG(Ye, 12));
            }),
            (j.ɵmod = P.oAB({ type: j })),
            (j.ɵinj = P.cJS({
              providers: [...Rt, ...pn],
              imports: [d.ez, P.hGG],
            })),
            j
          );
        })(),
        Yt = (() => {
          class j {
            constructor(R) {
              this._doc = R;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(R) {
              this._doc.title = R || "";
            }
          }
          return (
            (j.ɵfac = function (R) {
              return new (R || j)(P.LFG(d.K0));
            }),
            (j.ɵprov = P.Yz7({
              token: j,
              factory: function (R) {
                let z = null;
                return (
                  (z = R
                    ? new R()
                    : (function wn() {
                        return new Yt((0, P.LFG)(d.K0));
                      })()),
                  z
                );
              },
              providedIn: "root",
            })),
            j
          );
        })();
      typeof window < "u" && window;
    },
    4940: (qe, fe, I) => {
      I.d(fe, {
        gz: () => Wn,
        F0: () => Un,
        rH: () => Di,
        Bz: () => Sc,
        lC: () => So,
      });
      var d = I(8256),
        P = I(2076),
        G = I(9646),
        X = I(1135),
        Z = I(6805),
        we = I(9751),
        ye = I(4742),
        Ae = I(4671),
        Oe = I(3268),
        N = I(7669),
        oe = I(1810),
        _e = I(5403),
        xe = I(9672);
      function ge(...l) {
        const u = (0, N.yG)(l),
          s = (0, N.jO)(l),
          { args: f, keys: v } = (0, ye.D)(l);
        if (0 === f.length) return (0, P.D)([], u);
        const E = new we.y(
          (function Ve(l, u, s = Ae.y) {
            return (f) => {
              $e(
                u,
                () => {
                  const { length: v } = l,
                    E = new Array(v);
                  let w = v,
                    U = v;
                  for (let q = 0; q < v; q++)
                    $e(
                      u,
                      () => {
                        const be = (0, P.D)(l[q], u);
                        let Re = !1;
                        be.subscribe(
                          (0, _e.x)(
                            f,
                            (Et) => {
                              (E[q] = Et),
                                Re || ((Re = !0), U--),
                                U || f.next(s(E.slice()));
                            },
                            () => {
                              --w || f.complete();
                            }
                          )
                        );
                      },
                      f
                    );
                },
                f
              );
            };
          })(f, u, v ? (w) => (0, oe.n)(v, w) : Ae.y)
        );
        return s ? E.pipe((0, Oe.Z)(s)) : E;
      }
      function $e(l, u, s) {
        l ? (0, xe.f)(s, l, u) : u();
      }
      var Qe = I(8189);
      function wt(...l) {
        return (function at() {
          return (0, Qe.J)(1);
        })()((0, P.D)(l, (0, N.yG)(l)));
      }
      var Te = I(8421);
      function Me(l) {
        return new we.y((u) => {
          (0, Te.Xf)(l()).subscribe(u);
        });
      }
      var Ce = I(9635),
        Ue = I(576);
      function ft(l, u) {
        const s = (0, Ue.m)(l) ? l : () => l,
          f = (v) => v.error(s());
        return new we.y(u ? (v) => u.schedule(f, 0, v) : f);
      }
      var J = I(515),
        Ee = I(727),
        Q = I(4482);
      function me() {
        return (0, Q.e)((l, u) => {
          let s = null;
          l._refCount++;
          const f = (0, _e.x)(u, void 0, void 0, void 0, () => {
            if (!l || l._refCount <= 0 || 0 < --l._refCount)
              return void (s = null);
            const v = l._connection,
              E = s;
            (s = null),
              v && (!E || v === E) && v.unsubscribe(),
              u.unsubscribe();
          });
          l.subscribe(f), f.closed || (s = l.connect());
        });
      }
      class Ge extends we.y {
        constructor(u, s) {
          super(),
            (this.source = u),
            (this.subjectFactory = s),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Q.A)(u) && (this.lift = u.lift);
        }
        _subscribe(u) {
          return this.getSubject().subscribe(u);
        }
        getSubject() {
          const u = this._subject;
          return (
            (!u || u.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: u } = this;
          (this._subject = this._connection = null), u?.unsubscribe();
        }
        connect() {
          let u = this._connection;
          if (!u) {
            u = this._connection = new Ee.w0();
            const s = this.getSubject();
            u.add(
              this.source.subscribe(
                (0, _e.x)(
                  s,
                  void 0,
                  () => {
                    this._teardown(), s.complete();
                  },
                  (f) => {
                    this._teardown(), s.error(f);
                  },
                  () => this._teardown()
                )
              )
            ),
              u.closed && ((this._connection = null), (u = Ee.w0.EMPTY));
          }
          return u;
        }
        refCount() {
          return me()(this);
        }
      }
      var lt = I(7579),
        Pe = I(6895),
        H = I(4004);
      function W(l, u) {
        return (0, Q.e)((s, f) => {
          let v = null,
            E = 0,
            w = !1;
          const U = () => w && !v && f.complete();
          s.subscribe(
            (0, _e.x)(
              f,
              (q) => {
                v?.unsubscribe();
                let be = 0;
                const Re = E++;
                (0, Te.Xf)(l(q, Re)).subscribe(
                  (v = (0, _e.x)(
                    f,
                    (Et) => f.next(u ? u(q, Et, Re, be++) : Et),
                    () => {
                      (v = null), U();
                    }
                  ))
                );
              },
              () => {
                (w = !0), U();
              }
            )
          );
        });
      }
      var re = I(5698),
        De = I(9300),
        se = I(5577),
        Be = I(590),
        dt = I(4351);
      function gt(l, u, s) {
        const f =
          (0, Ue.m)(l) || u || s ? { next: l, error: u, complete: s } : l;
        return f
          ? (0, Q.e)((v, E) => {
              var w;
              null === (w = f.subscribe) || void 0 === w || w.call(f);
              let U = !0;
              v.subscribe(
                (0, _e.x)(
                  E,
                  (q) => {
                    var be;
                    null === (be = f.next) || void 0 === be || be.call(f, q),
                      E.next(q);
                  },
                  () => {
                    var q;
                    (U = !1),
                      null === (q = f.complete) || void 0 === q || q.call(f),
                      E.complete();
                  },
                  (q) => {
                    var be;
                    (U = !1),
                      null === (be = f.error) || void 0 === be || be.call(f, q),
                      E.error(q);
                  },
                  () => {
                    var q, be;
                    U &&
                      (null === (q = f.unsubscribe) ||
                        void 0 === q ||
                        q.call(f)),
                      null === (be = f.finalize) || void 0 === be || be.call(f);
                  }
                )
              );
            })
          : Ae.y;
      }
      function He(l) {
        return (0, Q.e)((u, s) => {
          let E,
            f = null,
            v = !1;
          (f = u.subscribe(
            (0, _e.x)(s, void 0, void 0, (w) => {
              (E = (0, Te.Xf)(l(w, He(l)(u)))),
                f ? (f.unsubscribe(), (f = null), E.subscribe(s)) : (v = !0);
            })
          )),
            v && (f.unsubscribe(), (f = null), E.subscribe(s));
        });
      }
      function vt(l, u, s, f, v) {
        return (E, w) => {
          let U = s,
            q = u,
            be = 0;
          E.subscribe(
            (0, _e.x)(
              w,
              (Re) => {
                const Et = be++;
                (q = U ? l(q, Re, Et) : ((U = !0), Re)), f && w.next(q);
              },
              v &&
                (() => {
                  U && w.next(q), w.complete();
                })
            )
          );
        };
      }
      function Dt(l, u) {
        return (0, Q.e)(vt(l, u, arguments.length >= 2, !0));
      }
      function It(l) {
        return l <= 0
          ? () => J.E
          : (0, Q.e)((u, s) => {
              let f = [];
              u.subscribe(
                (0, _e.x)(
                  s,
                  (v) => {
                    f.push(v), l < f.length && f.shift();
                  },
                  () => {
                    for (const v of f) s.next(v);
                    s.complete();
                  },
                  void 0,
                  () => {
                    f = null;
                  }
                )
              );
            });
      }
      var tn = I(8068),
        Ft = I(6590);
      function tt(l, u) {
        const s = arguments.length >= 2;
        return (f) =>
          f.pipe(
            l ? (0, De.h)((v, E) => l(v, E, f)) : Ae.y,
            It(1),
            s ? (0, Ft.d)(u) : (0, tn.T)(() => new Z.K())
          );
      }
      function hn(l) {
        return (0, Q.e)((u, s) => {
          try {
            u.subscribe(s);
          } finally {
            s.add(l);
          }
        });
      }
      var Ut = I(1481);
      const Ye = "primary",
        pn = Symbol("RouteTitle");
      class Rt {
        constructor(u) {
          this.params = u || {};
        }
        has(u) {
          return Object.prototype.hasOwnProperty.call(this.params, u);
        }
        get(u) {
          if (this.has(u)) {
            const s = this.params[u];
            return Array.isArray(s) ? s[0] : s;
          }
          return null;
        }
        getAll(u) {
          if (this.has(u)) {
            const s = this.params[u];
            return Array.isArray(s) ? s : [s];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function zt(l) {
        return new Rt(l);
      }
      function Ht(l, u, s) {
        const f = s.path.split("/");
        if (
          f.length > l.length ||
          ("full" === s.pathMatch && (u.hasChildren() || f.length < l.length))
        )
          return null;
        const v = {};
        for (let E = 0; E < f.length; E++) {
          const w = f[E],
            U = l[E];
          if (w.startsWith(":")) v[w.substring(1)] = U;
          else if (w !== U.path) return null;
        }
        return { consumed: l.slice(0, f.length), posParams: v };
      }
      function Wt(l, u) {
        const s = l ? Object.keys(l) : void 0,
          f = u ? Object.keys(u) : void 0;
        if (!s || !f || s.length != f.length) return !1;
        let v;
        for (let E = 0; E < s.length; E++)
          if (((v = s[E]), !wn(l[v], u[v]))) return !1;
        return !0;
      }
      function wn(l, u) {
        if (Array.isArray(l) && Array.isArray(u)) {
          if (l.length !== u.length) return !1;
          const s = [...l].sort(),
            f = [...u].sort();
          return s.every((v, E) => f[E] === v);
        }
        return l === u;
      }
      function Yt(l) {
        return Array.prototype.concat.apply([], l);
      }
      function ce(l) {
        return l.length > 0 ? l[l.length - 1] : null;
      }
      function T(l, u) {
        for (const s in l) l.hasOwnProperty(s) && u(l[s], s);
      }
      function O(l) {
        return (0, d.CqO)(l)
          ? l
          : (0, d.QGY)(l)
          ? (0, P.D)(Promise.resolve(l))
          : (0, G.of)(l);
      }
      const ue = !1,
        Se = {
          exact: function Je(l, u, s) {
            if (
              !L(l.segments, u.segments) ||
              !Bn(l.segments, u.segments, s) ||
              l.numberOfChildren !== u.numberOfChildren
            )
              return !1;
            for (const f in u.children)
              if (!l.children[f] || !Je(l.children[f], u.children[f], s))
                return !1;
            return !0;
          },
          subset: vr,
        },
        je = {
          exact: function st(l, u) {
            return Wt(l, u);
          },
          subset: function bt(l, u) {
            return (
              Object.keys(u).length <= Object.keys(l).length &&
              Object.keys(u).every((s) => wn(l[s], u[s]))
            );
          },
          ignored: () => !0,
        };
      function Ke(l, u, s) {
        return (
          Se[s.paths](l.root, u.root, s.matrixParams) &&
          je[s.queryParams](l.queryParams, u.queryParams) &&
          !("exact" === s.fragment && l.fragment !== u.fragment)
        );
      }
      function vr(l, u, s) {
        return _t(l, u, u.segments, s);
      }
      function _t(l, u, s, f) {
        if (l.segments.length > s.length) {
          const v = l.segments.slice(0, s.length);
          return !(!L(v, s) || u.hasChildren() || !Bn(v, s, f));
        }
        if (l.segments.length === s.length) {
          if (!L(l.segments, s) || !Bn(l.segments, s, f)) return !1;
          for (const v in u.children)
            if (!l.children[v] || !vr(l.children[v], u.children[v], f))
              return !1;
          return !0;
        }
        {
          const v = s.slice(0, l.segments.length),
            E = s.slice(l.segments.length);
          return (
            !!(L(l.segments, v) && Bn(l.segments, v, f) && l.children[Ye]) &&
            _t(l.children[Ye], u, E, f)
          );
        }
      }
      function Bn(l, u, s) {
        return u.every((f, v) => je[s](l[v].parameters, f.parameters));
      }
      class gn {
        constructor(u = new ut([], {}), s = {}, f = null) {
          (this.root = u), (this.queryParams = s), (this.fragment = f);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = zt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Ze.serialize(this);
        }
      }
      class ut {
        constructor(u, s) {
          (this.segments = u),
            (this.children = s),
            (this.parent = null),
            T(s, (f, v) => (f.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return We(this);
        }
      }
      class jn {
        constructor(u, s) {
          (this.path = u), (this.parameters = s);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = zt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return k(this);
        }
      }
      function L(l, u) {
        return l.length === u.length && l.every((s, f) => s.path === u[f].path);
      }
      let de = (() => {
        class l {}
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = d.Yz7({
            token: l,
            factory: function () {
              return new ie();
            },
            providedIn: "root",
          })),
          l
        );
      })();
      class ie {
        parse(u) {
          const s = new Gn(u);
          return new gn(
            s.parseRootSegment(),
            s.parseQueryParams(),
            s.parseFragment()
          );
        }
        serialize(u) {
          const s = `/${Ot(u.root, !0)}`,
            f = (function z(l) {
              const u = Object.keys(l)
                .map((s) => {
                  const f = l[s];
                  return Array.isArray(f)
                    ? f.map((v) => `${Lt(s)}=${Lt(v)}`).join("&")
                    : `${Lt(s)}=${Lt(f)}`;
                })
                .filter((s) => !!s);
              return u.length ? `?${u.join("&")}` : "";
            })(u.queryParams);
          return `${s}${f}${
            "string" == typeof u.fragment
              ? `#${(function Hn(l) {
                  return encodeURI(l);
                })(u.fragment)}`
              : ""
          }`;
        }
      }
      const Ze = new ie();
      function We(l) {
        return l.segments.map((u) => k(u)).join("/");
      }
      function Ot(l, u) {
        if (!l.hasChildren()) return We(l);
        if (u) {
          const s = l.children[Ye] ? Ot(l.children[Ye], !1) : "",
            f = [];
          return (
            T(l.children, (v, E) => {
              E !== Ye && f.push(`${E}:${Ot(v, !1)}`);
            }),
            f.length > 0 ? `${s}(${f.join("//")})` : s
          );
        }
        {
          const s = (function B(l, u) {
            let s = [];
            return (
              T(l.children, (f, v) => {
                v === Ye && (s = s.concat(u(f, v)));
              }),
              T(l.children, (f, v) => {
                v !== Ye && (s = s.concat(u(f, v)));
              }),
              s
            );
          })(l, (f, v) =>
            v === Ye ? [Ot(l.children[Ye], !1)] : [`${v}:${Ot(f, !1)}`]
          );
          return 1 === Object.keys(l.children).length && null != l.children[Ye]
            ? `${We(l)}/${s[0]}`
            : `${We(l)}/(${s.join("//")})`;
        }
      }
      function ht(l) {
        return encodeURIComponent(l)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Lt(l) {
        return ht(l).replace(/%3B/gi, ";");
      }
      function qt(l) {
        return ht(l)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function nn(l) {
        return decodeURIComponent(l);
      }
      function j(l) {
        return nn(l.replace(/\+/g, "%20"));
      }
      function k(l) {
        return `${qt(l.path)}${(function R(l) {
          return Object.keys(l)
            .map((u) => `;${qt(u)}=${qt(l[u])}`)
            .join("");
        })(l.parameters)}`;
      }
      const ae = /^[^\/()?;=#]+/;
      function ze(l) {
        const u = l.match(ae);
        return u ? u[0] : "";
      }
      const nt = /^[^=?&#]+/,
        et = /^[^&#]+/;
      class Gn {
        constructor(u) {
          (this.url = u), (this.remaining = u);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new ut([], {})
              : new ut([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const u = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(u);
            } while (this.consumeOptional("&"));
          return u;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const u = [];
          for (
            this.peekStartsWith("(") || u.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), u.push(this.parseSegment());
          let s = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (s = this.parseParens(!0)));
          let f = {};
          return (
            this.peekStartsWith("(") && (f = this.parseParens(!1)),
            (u.length > 0 || Object.keys(s).length > 0) &&
              (f[Ye] = new ut(u, s)),
            f
          );
        }
        parseSegment() {
          const u = ze(this.remaining);
          if ("" === u && this.peekStartsWith(";")) throw new d.vHH(4009, ue);
          return this.capture(u), new jn(nn(u), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const u = {};
          for (; this.consumeOptional(";"); ) this.parseParam(u);
          return u;
        }
        parseParam(u) {
          const s = ze(this.remaining);
          if (!s) return;
          this.capture(s);
          let f = "";
          if (this.consumeOptional("=")) {
            const v = ze(this.remaining);
            v && ((f = v), this.capture(f));
          }
          u[nn(s)] = nn(f);
        }
        parseQueryParam(u) {
          const s = (function At(l) {
            const u = l.match(nt);
            return u ? u[0] : "";
          })(this.remaining);
          if (!s) return;
          this.capture(s);
          let f = "";
          if (this.consumeOptional("=")) {
            const w = (function $n(l) {
              const u = l.match(et);
              return u ? u[0] : "";
            })(this.remaining);
            w && ((f = w), this.capture(f));
          }
          const v = j(s),
            E = j(f);
          if (u.hasOwnProperty(v)) {
            let w = u[v];
            Array.isArray(w) || ((w = [w]), (u[v] = w)), w.push(E);
          } else u[v] = E;
        }
        parseParens(u) {
          const s = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const f = ze(this.remaining),
              v = this.remaining[f.length];
            if ("/" !== v && ")" !== v && ";" !== v) throw new d.vHH(4010, ue);
            let E;
            f.indexOf(":") > -1
              ? ((E = f.slice(0, f.indexOf(":"))),
                this.capture(E),
                this.capture(":"))
              : u && (E = Ye);
            const w = this.parseChildren();
            (s[E] = 1 === Object.keys(w).length ? w[Ye] : new ut([], w)),
              this.consumeOptional("//");
          }
          return s;
        }
        peekStartsWith(u) {
          return this.remaining.startsWith(u);
        }
        consumeOptional(u) {
          return (
            !!this.peekStartsWith(u) &&
            ((this.remaining = this.remaining.substring(u.length)), !0)
          );
        }
        capture(u) {
          if (!this.consumeOptional(u)) throw new d.vHH(4011, ue);
        }
      }
      function tr(l) {
        return l.segments.length > 0 ? new ut([], { [Ye]: l }) : l;
      }
      function zn(l) {
        const u = {};
        for (const f of Object.keys(l.children)) {
          const E = zn(l.children[f]);
          (E.segments.length > 0 || E.hasChildren()) && (u[f] = E);
        }
        return (function Jn(l) {
          if (1 === l.numberOfChildren && l.children[Ye]) {
            const u = l.children[Ye];
            return new ut(l.segments.concat(u.segments), u.children);
          }
          return l;
        })(new ut(l.segments, u));
      }
      function Sn(l) {
        return l instanceof gn;
      }
      function Go(l, u, s, f, v) {
        if (0 === s.length) return nr(u.root, u.root, u.root, f, v);
        const E = (function Tt(l) {
          if ("string" == typeof l[0] && 1 === l.length && "/" === l[0])
            return new _r(!0, 0, l);
          let u = 0,
            s = !1;
          const f = l.reduce((v, E, w) => {
            if ("object" == typeof E && null != E) {
              if (E.outlets) {
                const U = {};
                return (
                  T(E.outlets, (q, be) => {
                    U[be] = "string" == typeof q ? q.split("/") : q;
                  }),
                  [...v, { outlets: U }]
                );
              }
              if (E.segmentPath) return [...v, E.segmentPath];
            }
            return "string" != typeof E
              ? [...v, E]
              : 0 === w
              ? (E.split("/").forEach((U, q) => {
                  (0 == q && "." === U) ||
                    (0 == q && "" === U
                      ? (s = !0)
                      : ".." === U
                      ? u++
                      : "" != U && v.push(U));
                }),
                v)
              : [...v, E];
          }, []);
          return new _r(s, u, f);
        })(s);
        return E.toRoot()
          ? nr(u.root, u.root, new ut([], {}), f, v)
          : (function w(q) {
              const be = (function Cr(l, u, s, f) {
                  if (l.isAbsolute) return new Kt(u.root, !0, 0);
                  if (-1 === f) return new Kt(s, s === u.root, 0);
                  return (function ln(l, u, s) {
                    let f = l,
                      v = u,
                      E = s;
                    for (; E > v; ) {
                      if (((E -= v), (f = f.parent), !f))
                        throw new d.vHH(4005, !1);
                      v = f.segments.length;
                    }
                    return new Kt(f, !1, v - E);
                  })(s, f + (ar(l.commands[0]) ? 0 : 1), l.numberOfDoubleDots);
                })(E, u, l.snapshot?._urlSegment, q),
                Re = be.processChildren
                  ? rt(be.segmentGroup, be.index, E.commands)
                  : Ne(be.segmentGroup, be.index, E.commands);
              return nr(u.root, be.segmentGroup, Re, f, v);
            })(l.snapshot?._lastPathIndex);
      }
      function ar(l) {
        return (
          "object" == typeof l && null != l && !l.outlets && !l.segmentPath
        );
      }
      function Pr(l) {
        return "object" == typeof l && null != l && l.outlets;
      }
      function nr(l, u, s, f, v) {
        let w,
          E = {};
        f &&
          T(f, (q, be) => {
            E[be] = Array.isArray(q) ? q.map((Re) => `${Re}`) : `${q}`;
          }),
          (w = l === u ? s : Zr(l, u, s));
        const U = tr(zn(w));
        return new gn(U, E, v);
      }
      function Zr(l, u, s) {
        const f = {};
        return (
          T(l.children, (v, E) => {
            f[E] = v === u ? s : Zr(v, u, s);
          }),
          new ut(l.segments, f)
        );
      }
      class _r {
        constructor(u, s, f) {
          if (
            ((this.isAbsolute = u),
            (this.numberOfDoubleDots = s),
            (this.commands = f),
            u && f.length > 0 && ar(f[0]))
          )
            throw new d.vHH(4003, !1);
          const v = f.find(Pr);
          if (v && v !== ce(f)) throw new d.vHH(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Kt {
        constructor(u, s, f) {
          (this.segmentGroup = u), (this.processChildren = s), (this.index = f);
        }
      }
      function Ne(l, u, s) {
        if (
          (l || (l = new ut([], {})),
          0 === l.segments.length && l.hasChildren())
        )
          return rt(l, u, s);
        const f = (function $t(l, u, s) {
            let f = 0,
              v = u;
            const E = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; v < l.segments.length; ) {
              if (f >= s.length) return E;
              const w = l.segments[v],
                U = s[f];
              if (Pr(U)) break;
              const q = `${U}`,
                be = f < s.length - 1 ? s[f + 1] : null;
              if (v > 0 && void 0 === q) break;
              if (q && be && "object" == typeof be && void 0 === be.outlets) {
                if (!rr(q, be, w)) return E;
                f += 2;
              } else {
                if (!rr(q, {}, w)) return E;
                f++;
              }
              v++;
            }
            return { match: !0, pathIndex: v, commandIndex: f };
          })(l, u, s),
          v = s.slice(f.commandIndex);
        if (f.match && f.pathIndex < l.segments.length) {
          const E = new ut(l.segments.slice(0, f.pathIndex), {});
          return (
            (E.children[Ye] = new ut(
              l.segments.slice(f.pathIndex),
              l.children
            )),
            rt(E, 0, v)
          );
        }
        return f.match && 0 === v.length
          ? new ut(l.segments, {})
          : f.match && !l.hasChildren()
          ? on(l, u, s)
          : f.match
          ? rt(l, 0, v)
          : on(l, u, s);
      }
      function rt(l, u, s) {
        if (0 === s.length) return new ut(l.segments, {});
        {
          const f = (function Tn(l) {
              return Pr(l[0]) ? l[0].outlets : { [Ye]: l };
            })(s),
            v = {};
          return !f[Ye] &&
            l.children[Ye] &&
            1 === l.numberOfChildren &&
            0 === l.children[Ye].segments.length
            ? rt(l.children[Ye], u, s)
            : (T(f, (E, w) => {
                "string" == typeof E && (E = [E]),
                  null !== E && (v[w] = Ne(l.children[w], u, E));
              }),
              T(l.children, (E, w) => {
                void 0 === f[w] && (v[w] = E);
              }),
              new ut(l.segments, v));
        }
      }
      function on(l, u, s) {
        const f = l.segments.slice(0, u);
        let v = 0;
        for (; v < s.length; ) {
          const E = s[v];
          if (Pr(E)) {
            const q = Fn(E.outlets);
            return new ut(f, q);
          }
          if (0 === v && ar(s[0])) {
            f.push(new jn(l.segments[u].path, Xt(s[0]))), v++;
            continue;
          }
          const w = Pr(E) ? E.outlets[Ye] : `${E}`,
            U = v < s.length - 1 ? s[v + 1] : null;
          w && U && ar(U)
            ? (f.push(new jn(w, Xt(U))), (v += 2))
            : (f.push(new jn(w, {})), v++);
        }
        return new ut(f, {});
      }
      function Fn(l) {
        const u = {};
        return (
          T(l, (s, f) => {
            "string" == typeof s && (s = [s]),
              null !== s && (u[f] = on(new ut([], {}), 0, s));
          }),
          u
        );
      }
      function Xt(l) {
        const u = {};
        return T(l, (s, f) => (u[f] = `${s}`)), u;
      }
      function rr(l, u, s) {
        return l == s.path && Wt(u, s.parameters);
      }
      const Pt = "imperative";
      class Ln {
        constructor(u, s) {
          (this.id = u), (this.url = s);
        }
      }
      class lr extends Ln {
        constructor(u, s, f = "imperative", v = null) {
          super(u, s),
            (this.type = 0),
            (this.navigationTrigger = f),
            (this.restoredState = v);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ot extends Ln {
        constructor(u, s, f) {
          super(u, s), (this.urlAfterRedirects = f), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Jr extends Ln {
        constructor(u, s, f, v) {
          super(u, s), (this.reason = f), (this.code = v), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Xr extends Ln {
        constructor(u, s, f, v) {
          super(u, s), (this.reason = f), (this.code = v), (this.type = 16);
        }
      }
      class ii extends Ln {
        constructor(u, s, f, v) {
          super(u, s), (this.error = f), (this.target = v), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class mn extends Ln {
        constructor(u, s, f, v) {
          super(u, s),
            (this.urlAfterRedirects = f),
            (this.state = v),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class un extends Ln {
        constructor(u, s, f, v) {
          super(u, s),
            (this.urlAfterRedirects = f),
            (this.state = v),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Er extends Ln {
        constructor(u, s, f, v, E) {
          super(u, s),
            (this.urlAfterRedirects = f),
            (this.state = v),
            (this.shouldActivate = E),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class wr extends Ln {
        constructor(u, s, f, v) {
          super(u, s),
            (this.urlAfterRedirects = f),
            (this.state = v),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class kn extends Ln {
        constructor(u, s, f, v) {
          super(u, s),
            (this.urlAfterRedirects = f),
            (this.state = v),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class br {
        constructor(u) {
          (this.route = u), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Do {
        constructor(u) {
          (this.route = u), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class kt {
        constructor(u) {
          (this.snapshot = u), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class zo {
        constructor(u) {
          (this.snapshot = u), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class _o {
        constructor(u) {
          (this.snapshot = u), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class si {
        constructor(u) {
          (this.snapshot = u), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Mr {
        constructor(u, s, f) {
          (this.routerEvent = u),
            (this.position = s),
            (this.anchor = f),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let yn = (() => {
          class l {
            createUrlTree(s, f, v, E, w, U) {
              return Go(s || f.root, v, E, w, U);
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = d.Yz7({ token: l, factory: l.ɵfac })),
            l
          );
        })(),
        vn = (() => {
          class l {}
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = d.Yz7({
              token: l,
              factory: function (u) {
                return yn.ɵfac(u);
              },
              providedIn: "root",
            })),
            l
          );
        })();
      class Rn {
        constructor(u) {
          this._root = u;
        }
        get root() {
          return this._root.value;
        }
        parent(u) {
          const s = this.pathFromRoot(u);
          return s.length > 1 ? s[s.length - 2] : null;
        }
        children(u) {
          const s = Ir(u, this._root);
          return s ? s.children.map((f) => f.value) : [];
        }
        firstChild(u) {
          const s = Ir(u, this._root);
          return s && s.children.length > 0 ? s.children[0].value : null;
        }
        siblings(u) {
          const s = ur(u, this._root);
          return s.length < 2
            ? []
            : s[s.length - 2].children
                .map((v) => v.value)
                .filter((v) => v !== u);
        }
        pathFromRoot(u) {
          return ur(u, this._root).map((s) => s.value);
        }
      }
      function Ir(l, u) {
        if (l === u.value) return u;
        for (const s of u.children) {
          const f = Ir(l, s);
          if (f) return f;
        }
        return null;
      }
      function ur(l, u) {
        if (l === u.value) return [u];
        for (const s of u.children) {
          const f = ur(l, s);
          if (f.length) return f.unshift(u), f;
        }
        return [];
      }
      class cn {
        constructor(u, s) {
          (this.value = u), (this.children = s);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function dn(l) {
        const u = {};
        return l && l.children.forEach((s) => (u[s.value.outlet] = s)), u;
      }
      class eo extends Rn {
        constructor(u, s) {
          super(u), (this.snapshot = s), Wo(this, u);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ai(l, u) {
        const s = (function xr(l, u) {
            const w = new Co([], {}, {}, "", {}, Ye, u, null, l.root, -1, {});
            return new Eo("", new cn(w, []));
          })(l, u),
          f = new X.X([new jn("", {})]),
          v = new X.X({}),
          E = new X.X({}),
          w = new X.X({}),
          U = new X.X(""),
          q = new Wn(f, v, w, U, E, Ye, u, s.root);
        return (q.snapshot = s.root), new eo(new cn(q, []), s);
      }
      class Wn {
        constructor(u, s, f, v, E, w, U, q) {
          (this.url = u),
            (this.params = s),
            (this.queryParams = f),
            (this.fragment = v),
            (this.data = E),
            (this.outlet = w),
            (this.component = U),
            (this.title =
              this.data?.pipe((0, H.U)((be) => be[pn])) ?? (0, G.of)(void 0)),
            (this._futureSnapshot = q);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, H.U)((u) => zt(u)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, H.U)((u) => zt(u))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function ki(l, u = "emptyOnly") {
        const s = l.pathFromRoot;
        let f = 0;
        if ("always" !== u)
          for (f = s.length - 1; f >= 1; ) {
            const v = s[f],
              E = s[f - 1];
            if (v.routeConfig && "" === v.routeConfig.path) f--;
            else {
              if (E.component) break;
              f--;
            }
          }
        return (function li(l) {
          return l.reduce(
            (u, s) => ({
              params: { ...u.params, ...s.params },
              data: { ...u.data, ...s.data },
              resolve: {
                ...s.data,
                ...u.resolve,
                ...s.routeConfig?.data,
                ...s._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(s.slice(f));
      }
      class Co {
        get title() {
          return this.data?.[pn];
        }
        constructor(u, s, f, v, E, w, U, q, be, Re, Et) {
          (this.url = u),
            (this.params = s),
            (this.queryParams = f),
            (this.fragment = v),
            (this.data = E),
            (this.outlet = w),
            (this.component = U),
            (this.routeConfig = q),
            (this._urlSegment = be),
            (this._lastPathIndex = Re),
            (this._resolve = Et);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = zt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = zt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((f) => f.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Eo extends Rn {
        constructor(u, s) {
          super(s), (this.url = u), Wo(this, s);
        }
        toString() {
          return to(this._root);
        }
      }
      function Wo(l, u) {
        (u.value._routerState = l), u.children.forEach((s) => Wo(l, s));
      }
      function to(l) {
        const u =
          l.children.length > 0 ? ` { ${l.children.map(to).join(", ")} } ` : "";
        return `${l.value}${u}`;
      }
      function wo(l) {
        if (l.snapshot) {
          const u = l.snapshot,
            s = l._futureSnapshot;
          (l.snapshot = s),
            Wt(u.queryParams, s.queryParams) ||
              l.queryParams.next(s.queryParams),
            u.fragment !== s.fragment && l.fragment.next(s.fragment),
            Wt(u.params, s.params) || l.params.next(s.params),
            (function Jt(l, u) {
              if (l.length !== u.length) return !1;
              for (let s = 0; s < l.length; ++s) if (!Wt(l[s], u[s])) return !1;
              return !0;
            })(u.url, s.url) || l.url.next(s.url),
            Wt(u.data, s.data) || l.data.next(s.data);
        } else
          (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
      }
      function ui(l, u) {
        const s =
          Wt(l.params, u.params) &&
          (function te(l, u) {
            return (
              L(l, u) && l.every((s, f) => Wt(s.parameters, u[f].parameters))
            );
          })(l.url, u.url);
        return (
          s &&
          !(!l.parent != !u.parent) &&
          (!l.parent || ui(l.parent, u.parent))
        );
      }
      function bo(l, u, s) {
        if (s && l.shouldReuseRoute(u.value, s.value.snapshot)) {
          const f = s.value;
          f._futureSnapshot = u.value;
          const v = (function ma(l, u, s) {
            return u.children.map((f) => {
              for (const v of s.children)
                if (l.shouldReuseRoute(f.value, v.value.snapshot))
                  return bo(l, f, v);
              return bo(l, f);
            });
          })(l, u, s);
          return new cn(f, v);
        }
        {
          if (l.shouldAttach(u.value)) {
            const E = l.retrieve(u.value);
            if (null !== E) {
              const w = E.route;
              return (
                (w.value._futureSnapshot = u.value),
                (w.children = u.children.map((U) => bo(l, U))),
                w
              );
            }
          }
          const f = (function ci(l) {
              return new Wn(
                new X.X(l.url),
                new X.X(l.params),
                new X.X(l.queryParams),
                new X.X(l.fragment),
                new X.X(l.data),
                l.outlet,
                l.component,
                l
              );
            })(u.value),
            v = u.children.map((E) => bo(l, E));
          return new cn(f, v);
        }
      }
      const Nr = "ngNavigationCancelingError";
      function no(l, u) {
        const { redirectTo: s, navigationBehaviorOptions: f } = Sn(u)
            ? { redirectTo: u, navigationBehaviorOptions: void 0 }
            : u,
          v = Mo(!1, 0, u);
        return (v.url = s), (v.navigationBehaviorOptions = f), v;
      }
      function Mo(l, u, s) {
        const f = new Error("NavigationCancelingError: " + (l || ""));
        return (f[Nr] = !0), (f.cancellationCode = u), s && (f.url = s), f;
      }
      function cr(l) {
        return Ui(l) && Sn(l.url);
      }
      function Ui(l) {
        return l && l[Nr];
      }
      class or {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new ro()),
            (this.attachRef = null);
        }
      }
      let ro = (() => {
        class l {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(s, f) {
            const v = this.getOrCreateContext(s);
            (v.outlet = f), this.contexts.set(s, v);
          }
          onChildOutletDestroyed(s) {
            const f = this.getContext(s);
            f && ((f.outlet = null), (f.attachRef = null));
          }
          onOutletDeactivated() {
            const s = this.contexts;
            return (this.contexts = new Map()), s;
          }
          onOutletReAttached(s) {
            this.contexts = s;
          }
          getOrCreateContext(s) {
            let f = this.getContext(s);
            return f || ((f = new or()), this.contexts.set(s, f)), f;
          }
          getContext(s) {
            return this.contexts.get(s) || null;
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = d.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const Yn = !1;
      let So = (() => {
        class l {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Ye),
              (this.activateEvents = new d.vpe()),
              (this.deactivateEvents = new d.vpe()),
              (this.attachEvents = new d.vpe()),
              (this.detachEvents = new d.vpe()),
              (this.parentContexts = (0, d.f3M)(ro)),
              (this.location = (0, d.f3M)(d.s_b)),
              (this.changeDetector = (0, d.f3M)(d.sBO)),
              (this.environmentInjector = (0, d.f3M)(d.lqb));
          }
          ngOnChanges(s) {
            if (s.name) {
              const { firstChange: f, previousValue: v } = s.name;
              if (f) return;
              this.isTrackedInParentContexts(v) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(v)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          isTrackedInParentContexts(s) {
            return this.parentContexts.getContext(s)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const s = this.parentContexts.getContext(this.name);
            s?.route &&
              (s.attachRef
                ? this.attach(s.attachRef, s.route)
                : this.activateWith(s.route, s.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new d.vHH(4012, Yn);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new d.vHH(4012, Yn);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new d.vHH(4012, Yn);
            this.location.detach();
            const s = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(s.instance),
              s
            );
          }
          attach(s, f) {
            (this.activated = s),
              (this._activatedRoute = f),
              this.location.insert(s.hostView),
              this.attachEvents.emit(s.instance);
          }
          deactivate() {
            if (this.activated) {
              const s = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(s);
            }
          }
          activateWith(s, f) {
            if (this.isActivated) throw new d.vHH(4013, Yn);
            this._activatedRoute = s;
            const v = this.location,
              w = s.snapshot.component,
              U = this.parentContexts.getOrCreateContext(this.name).children,
              q = new di(s, U, v.injector);
            if (
              f &&
              (function Io(l) {
                return !!l.resolveComponentFactory;
              })(f)
            ) {
              const be = f.resolveComponentFactory(w);
              this.activated = v.createComponent(be, v.length, q);
            } else
              this.activated = v.createComponent(w, {
                index: v.length,
                injector: q,
                environmentInjector: f ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵdir = d.lG2({
            type: l,
            selectors: [["router-outlet"]],
            inputs: { name: "name" },
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [d.TTD],
          })),
          l
        );
      })();
      class di {
        constructor(u, s, f) {
          (this.route = u), (this.childContexts = s), (this.parent = f);
        }
        get(u, s) {
          return u === Wn
            ? this.route
            : u === ro
            ? this.childContexts
            : this.parent.get(u, s);
        }
      }
      let Fr = (() => {
        class l {}
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵcmp = d.Xpm({
            type: l,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [d.jDz],
            decls: 1,
            vars: 0,
            template: function (s, f) {
              1 & s && d._UZ(0, "router-outlet");
            },
            dependencies: [So],
            encapsulation: 2,
          })),
          l
        );
      })();
      function Lr(l, u) {
        return (
          l.providers &&
            !l._injector &&
            (l._injector = (0, d.MMx)(l.providers, u, `Route: ${l.path}`)),
          l._injector ?? u
        );
      }
      function Vr(l) {
        const u = l.children && l.children.map(Vr),
          s = u ? { ...l, children: u } : { ...l };
        return (
          !s.component &&
            !s.loadComponent &&
            (u || s.loadChildren) &&
            s.outlet &&
            s.outlet !== Ye &&
            (s.component = Fr),
          s
        );
      }
      function Gt(l) {
        return l.outlet || Ye;
      }
      function qo(l, u) {
        const s = l.filter((f) => Gt(f) === u);
        return s.push(...l.filter((f) => Gt(f) !== u)), s;
      }
      function dr(l) {
        if (!l) return null;
        if (l.routeConfig?._injector) return l.routeConfig._injector;
        for (let u = l.parent; u; u = u.parent) {
          const s = u.routeConfig;
          if (s?._loadedInjector) return s._loadedInjector;
          if (s?._injector) return s._injector;
        }
        return null;
      }
      class On {
        constructor(u, s, f, v) {
          (this.routeReuseStrategy = u),
            (this.futureState = s),
            (this.currState = f),
            (this.forwardEvent = v);
        }
        activate(u) {
          const s = this.futureState._root,
            f = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(s, f, u),
            wo(this.futureState.root),
            this.activateChildRoutes(s, f, u);
        }
        deactivateChildRoutes(u, s, f) {
          const v = dn(s);
          u.children.forEach((E) => {
            const w = E.value.outlet;
            this.deactivateRoutes(E, v[w], f), delete v[w];
          }),
            T(v, (E, w) => {
              this.deactivateRouteAndItsChildren(E, f);
            });
        }
        deactivateRoutes(u, s, f) {
          const v = u.value,
            E = s ? s.value : null;
          if (v === E)
            if (v.component) {
              const w = f.getContext(v.outlet);
              w && this.deactivateChildRoutes(u, s, w.children);
            } else this.deactivateChildRoutes(u, s, f);
          else E && this.deactivateRouteAndItsChildren(s, f);
        }
        deactivateRouteAndItsChildren(u, s) {
          u.value.component &&
          this.routeReuseStrategy.shouldDetach(u.value.snapshot)
            ? this.detachAndStoreRouteSubtree(u, s)
            : this.deactivateRouteAndOutlet(u, s);
        }
        detachAndStoreRouteSubtree(u, s) {
          const f = s.getContext(u.value.outlet),
            v = f && u.value.component ? f.children : s,
            E = dn(u);
          for (const w of Object.keys(E))
            this.deactivateRouteAndItsChildren(E[w], v);
          if (f && f.outlet) {
            const w = f.outlet.detach(),
              U = f.children.onOutletDeactivated();
            this.routeReuseStrategy.store(u.value.snapshot, {
              componentRef: w,
              route: u,
              contexts: U,
            });
          }
        }
        deactivateRouteAndOutlet(u, s) {
          const f = s.getContext(u.value.outlet),
            v = f && u.value.component ? f.children : s,
            E = dn(u);
          for (const w of Object.keys(E))
            this.deactivateRouteAndItsChildren(E[w], v);
          f &&
            f.outlet &&
            (f.outlet.deactivate(),
            f.children.onOutletDeactivated(),
            (f.attachRef = null),
            (f.resolver = null),
            (f.route = null));
        }
        activateChildRoutes(u, s, f) {
          const v = dn(s);
          u.children.forEach((E) => {
            this.activateRoutes(E, v[E.value.outlet], f),
              this.forwardEvent(new si(E.value.snapshot));
          }),
            u.children.length && this.forwardEvent(new zo(u.value.snapshot));
        }
        activateRoutes(u, s, f) {
          const v = u.value,
            E = s ? s.value : null;
          if ((wo(v), v === E))
            if (v.component) {
              const w = f.getOrCreateContext(v.outlet);
              this.activateChildRoutes(u, s, w.children);
            } else this.activateChildRoutes(u, s, f);
          else if (v.component) {
            const w = f.getOrCreateContext(v.outlet);
            if (this.routeReuseStrategy.shouldAttach(v.snapshot)) {
              const U = this.routeReuseStrategy.retrieve(v.snapshot);
              this.routeReuseStrategy.store(v.snapshot, null),
                w.children.onOutletReAttached(U.contexts),
                (w.attachRef = U.componentRef),
                (w.route = U.route.value),
                w.outlet && w.outlet.attach(U.componentRef, U.route.value),
                wo(U.route.value),
                this.activateChildRoutes(u, null, w.children);
            } else {
              const U = dr(v.snapshot),
                q = U?.get(d._Vd) ?? null;
              (w.attachRef = null),
                (w.route = v),
                (w.resolver = q),
                (w.injector = U),
                w.outlet && w.outlet.activateWith(v, w.injector),
                this.activateChildRoutes(u, null, w.children);
            }
          } else this.activateChildRoutes(u, null, f);
        }
      }
      class Ko {
        constructor(u) {
          (this.path = u), (this.route = this.path[this.path.length - 1]);
        }
      }
      class fr {
        constructor(u, s) {
          (this.component = u), (this.route = s);
        }
      }
      function ji(l, u, s) {
        const f = l._root;
        return Br(f, u ? u._root : null, s, [f.value]);
      }
      function Ar(l, u) {
        const s = Symbol(),
          f = u.get(l, s);
        return f === s
          ? "function" != typeof l || (0, d.Z0I)(l)
            ? u.get(l)
            : l
          : f;
      }
      function Br(
        l,
        u,
        s,
        f,
        v = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const E = dn(u);
        return (
          l.children.forEach((w) => {
            (function ct(
              l,
              u,
              s,
              f,
              v = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const E = l.value,
                w = u ? u.value : null,
                U = s ? s.getContext(l.value.outlet) : null;
              if (w && E.routeConfig === w.routeConfig) {
                const q = (function D(l, u, s) {
                  if ("function" == typeof s) return s(l, u);
                  switch (s) {
                    case "pathParamsChange":
                      return !L(l.url, u.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !L(l.url, u.url) || !Wt(l.queryParams, u.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !ui(l, u) || !Wt(l.queryParams, u.queryParams);
                    default:
                      return !ui(l, u);
                  }
                })(w, E, E.routeConfig.runGuardsAndResolvers);
                q
                  ? v.canActivateChecks.push(new Ko(f))
                  : ((E.data = w.data), (E._resolvedData = w._resolvedData)),
                  Br(l, u, E.component ? (U ? U.children : null) : s, f, v),
                  q &&
                    U &&
                    U.outlet &&
                    U.outlet.isActivated &&
                    v.canDeactivateChecks.push(new fr(U.outlet.component, w));
              } else
                w && y(u, U, v),
                  v.canActivateChecks.push(new Ko(f)),
                  Br(l, null, E.component ? (U ? U.children : null) : s, f, v);
            })(w, E[w.value.outlet], s, f.concat([w.value]), v),
              delete E[w.value.outlet];
          }),
          T(E, (w, U) => y(w, s.getContext(U), v)),
          v
        );
      }
      function y(l, u, s) {
        const f = dn(l),
          v = l.value;
        T(f, (E, w) => {
          y(E, v.component ? (u ? u.children.getContext(w) : null) : u, s);
        }),
          s.canDeactivateChecks.push(
            new fr(
              v.component && u && u.outlet && u.outlet.isActivated
                ? u.outlet.component
                : null,
              v
            )
          );
      }
      function g(l) {
        return "function" == typeof l;
      }
      function pr(l) {
        return l instanceof Z.K || "EmptyError" === l?.name;
      }
      const Qt = Symbol("INITIAL_VALUE");
      function jr() {
        return W((l) =>
          ge(
            l.map((u) =>
              u.pipe(
                (0, re.q)(1),
                (function he(...l) {
                  const u = (0, N.yG)(l);
                  return (0, Q.e)((s, f) => {
                    (u ? wt(l, s, u) : wt(l, s)).subscribe(f);
                  });
                })(Qt)
              )
            )
          ).pipe(
            (0, H.U)((u) => {
              for (const s of u)
                if (!0 !== s) {
                  if (s === Qt) return Qt;
                  if (!1 === s || s instanceof gn) return s;
                }
              return !0;
            }),
            (0, De.h)((u) => u !== Qt),
            (0, re.q)(1)
          )
        );
      }
      function Zo(l) {
        return (0, Ce.z)(
          gt((u) => {
            if (Sn(u)) throw no(0, u);
          }),
          (0, H.U)((u) => !0 === u)
        );
      }
      const ir = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Ps(l, u, s, f, v) {
        const E = pi(l, u, s);
        return E.matched
          ? (function Ao(l, u, s, f) {
              const v = u.canMatch;
              if (!v || 0 === v.length) return (0, G.of)(!0);
              const E = v.map((w) => {
                const U = Ar(w, l);
                return O(
                  (function le(l) {
                    return l && g(l.canMatch);
                  })(U)
                    ? U.canMatch(u, s)
                    : l.runInContext(() => U(u, s))
                );
              });
              return (0, G.of)(E).pipe(jr(), Zo());
            })((f = Lr(u, f)), u, s).pipe(
              (0, H.U)((w) => (!0 === w ? E : { ...ir }))
            )
          : (0, G.of)(E);
      }
      function pi(l, u, s) {
        if ("" === u.path)
          return "full" === u.pathMatch && (l.hasChildren() || s.length > 0)
            ? { ...ir }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: s,
                parameters: {},
                positionalParamSegments: {},
              };
        const v = (u.matcher || Ht)(s, l, u);
        if (!v) return { ...ir };
        const E = {};
        T(v.posParams, (U, q) => {
          E[q] = U.path;
        });
        const w =
          v.consumed.length > 0
            ? { ...E, ...v.consumed[v.consumed.length - 1].parameters }
            : E;
        return {
          matched: !0,
          consumedSegments: v.consumed,
          remainingSegments: s.slice(v.consumed.length),
          parameters: w,
          positionalParamSegments: v.posParams ?? {},
        };
      }
      function gi(l, u, s, f) {
        if (
          s.length > 0 &&
          (function Wi(l, u, s) {
            return s.some((f) => To(l, u, f) && Gt(f) !== Ye);
          })(l, s, f)
        ) {
          const E = new ut(
            u,
            (function zi(l, u, s, f) {
              const v = {};
              (v[Ye] = f),
                (f._sourceSegment = l),
                (f._segmentIndexShift = u.length);
              for (const E of s)
                if ("" === E.path && Gt(E) !== Ye) {
                  const w = new ut([], {});
                  (w._sourceSegment = l),
                    (w._segmentIndexShift = u.length),
                    (v[Gt(E)] = w);
                }
              return v;
            })(l, u, f, new ut(s, l.children))
          );
          return (
            (E._sourceSegment = l),
            (E._segmentIndexShift = u.length),
            { segmentGroup: E, slicedSegments: [] }
          );
        }
        if (
          0 === s.length &&
          (function xs(l, u, s) {
            return s.some((f) => To(l, u, f));
          })(l, s, f)
        ) {
          const E = new ut(
            l.segments,
            (function ya(l, u, s, f, v) {
              const E = {};
              for (const w of f)
                if (To(l, s, w) && !v[Gt(w)]) {
                  const U = new ut([], {});
                  (U._sourceSegment = l),
                    (U._segmentIndexShift = u.length),
                    (E[Gt(w)] = U);
                }
              return { ...v, ...E };
            })(l, u, s, f, l.children)
          );
          return (
            (E._sourceSegment = l),
            (E._segmentIndexShift = u.length),
            { segmentGroup: E, slicedSegments: s }
          );
        }
        const v = new ut(l.segments, l.children);
        return (
          (v._sourceSegment = l),
          (v._segmentIndexShift = u.length),
          { segmentGroup: v, slicedSegments: s }
        );
      }
      function To(l, u, s) {
        return (
          (!(l.hasChildren() || u.length > 0) || "full" !== s.pathMatch) &&
          "" === s.path
        );
      }
      function Yi(l, u, s, f) {
        return (
          !!(Gt(l) === f || (f !== Ye && To(u, s, l))) &&
          ("**" === l.path || pi(u, l, s).matched)
        );
      }
      function qi(l, u, s) {
        return 0 === u.length && !l.children[s];
      }
      const so = !1;
      class Ro {
        constructor(u) {
          this.segmentGroup = u || null;
        }
      }
      class Ki {
        constructor(u) {
          this.urlTree = u;
        }
      }
      function Oo(l) {
        return ft(new Ro(l));
      }
      function Zi(l) {
        return ft(new Ki(l));
      }
      class Nn {
        constructor(u, s, f, v, E) {
          (this.injector = u),
            (this.configLoader = s),
            (this.urlSerializer = f),
            (this.urlTree = v),
            (this.config = E),
            (this.allowRedirects = !0);
        }
        apply() {
          const u = gi(this.urlTree.root, [], [], this.config).segmentGroup,
            s = new ut(u.segments, u.children);
          return this.expandSegmentGroup(this.injector, this.config, s, Ye)
            .pipe(
              (0, H.U)((E) =>
                this.createUrlTree(
                  zn(E),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              He((E) => {
                if (E instanceof Ki)
                  return (this.allowRedirects = !1), this.match(E.urlTree);
                throw E instanceof Ro ? this.noMatchError(E) : E;
              })
            );
        }
        match(u) {
          return this.expandSegmentGroup(this.injector, this.config, u.root, Ye)
            .pipe(
              (0, H.U)((v) =>
                this.createUrlTree(zn(v), u.queryParams, u.fragment)
              )
            )
            .pipe(
              He((v) => {
                throw v instanceof Ro ? this.noMatchError(v) : v;
              })
            );
        }
        noMatchError(u) {
          return new d.vHH(4002, so);
        }
        createUrlTree(u, s, f) {
          const v = tr(u);
          return new gn(v, s, f);
        }
        expandSegmentGroup(u, s, f, v) {
          return 0 === f.segments.length && f.hasChildren()
            ? this.expandChildren(u, s, f).pipe((0, H.U)((E) => new ut([], E)))
            : this.expandSegment(u, f, s, f.segments, v, !0);
        }
        expandChildren(u, s, f) {
          const v = [];
          for (const E of Object.keys(f.children))
            "primary" === E ? v.unshift(E) : v.push(E);
          return (0, P.D)(v).pipe(
            (0, dt.b)((E) => {
              const w = f.children[E],
                U = qo(s, E);
              return this.expandSegmentGroup(u, U, w, E).pipe(
                (0, H.U)((q) => ({ segment: q, outlet: E }))
              );
            }),
            Dt((E, w) => ((E[w.outlet] = w.segment), E), {}),
            tt()
          );
        }
        expandSegment(u, s, f, v, E, w) {
          return (0, P.D)(f).pipe(
            (0, dt.b)((U) =>
              this.expandSegmentAgainstRoute(u, s, f, U, v, E, w).pipe(
                He((be) => {
                  if (be instanceof Ro) return (0, G.of)(null);
                  throw be;
                })
              )
            ),
            (0, Be.P)((U) => !!U),
            He((U, q) => {
              if (pr(U)) return qi(s, v, E) ? (0, G.of)(new ut([], {})) : Oo(s);
              throw U;
            })
          );
        }
        expandSegmentAgainstRoute(u, s, f, v, E, w, U) {
          return Yi(v, s, E, w)
            ? void 0 === v.redirectTo
              ? this.matchSegmentAgainstRoute(u, s, v, E, w)
              : U && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(u, s, f, v, E, w)
              : Oo(s)
            : Oo(s);
        }
        expandSegmentAgainstRouteUsingRedirect(u, s, f, v, E, w) {
          return "**" === v.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(u, f, v, w)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                u,
                s,
                f,
                v,
                E,
                w
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(u, s, f, v) {
          const E = this.applyRedirectCommands([], f.redirectTo, {});
          return f.redirectTo.startsWith("/")
            ? Zi(E)
            : this.lineralizeSegments(f, E).pipe(
                (0, se.z)((w) => {
                  const U = new ut(w, {});
                  return this.expandSegment(u, U, s, w, v, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(u, s, f, v, E, w) {
          const {
            matched: U,
            consumedSegments: q,
            remainingSegments: be,
            positionalParamSegments: Re,
          } = pi(s, v, E);
          if (!U) return Oo(s);
          const Et = this.applyRedirectCommands(q, v.redirectTo, Re);
          return v.redirectTo.startsWith("/")
            ? Zi(Et)
            : this.lineralizeSegments(v, Et).pipe(
                (0, se.z)((bn) =>
                  this.expandSegment(u, s, f, bn.concat(be), w, !1)
                )
              );
        }
        matchSegmentAgainstRoute(u, s, f, v, E) {
          return "**" === f.path
            ? ((u = Lr(f, u)),
              f.loadChildren
                ? (f._loadedRoutes
                    ? (0, G.of)({
                        routes: f._loadedRoutes,
                        injector: f._loadedInjector,
                      })
                    : this.configLoader.loadChildren(u, f)
                  ).pipe(
                    (0, H.U)(
                      (U) => (
                        (f._loadedRoutes = U.routes),
                        (f._loadedInjector = U.injector),
                        new ut(v, {})
                      )
                    )
                  )
                : (0, G.of)(new ut(v, {})))
            : Ps(s, f, v, u).pipe(
                W(({ matched: w, consumedSegments: U, remainingSegments: q }) =>
                  w
                    ? this.getChildConfig((u = f._injector ?? u), f, v).pipe(
                        (0, se.z)((Re) => {
                          const Et = Re.injector ?? u,
                            bn = Re.routes,
                            { segmentGroup: co, slicedSegments: $r } = gi(
                              s,
                              U,
                              q,
                              bn
                            ),
                            Uo = new ut(co.segments, co.children);
                          if (0 === $r.length && Uo.hasChildren())
                            return this.expandChildren(Et, bn, Uo).pipe(
                              (0, H.U)((Hs) => new ut(U, Hs))
                            );
                          if (0 === bn.length && 0 === $r.length)
                            return (0, G.of)(new ut(U, {}));
                          const mr = Gt(f) === E;
                          return this.expandSegment(
                            Et,
                            Uo,
                            bn,
                            $r,
                            mr ? Ye : E,
                            !0
                          ).pipe(
                            (0, H.U)(
                              (ti) => new ut(U.concat(ti.segments), ti.children)
                            )
                          );
                        })
                      )
                    : Oo(s)
                )
              );
        }
        getChildConfig(u, s, f) {
          return s.children
            ? (0, G.of)({ routes: s.children, injector: u })
            : s.loadChildren
            ? void 0 !== s._loadedRoutes
              ? (0, G.of)({
                  routes: s._loadedRoutes,
                  injector: s._loadedInjector,
                })
              : (function gr(l, u, s, f) {
                  const v = u.canLoad;
                  if (void 0 === v || 0 === v.length) return (0, G.of)(!0);
                  const E = v.map((w) => {
                    const U = Ar(w, l);
                    return O(
                      (function Y(l) {
                        return l && g(l.canLoad);
                      })(U)
                        ? U.canLoad(u, s)
                        : l.runInContext(() => U(u, s))
                    );
                  });
                  return (0, G.of)(E).pipe(jr(), Zo());
                })(u, s, f).pipe(
                  (0, se.z)((v) =>
                    v
                      ? this.configLoader.loadChildren(u, s).pipe(
                          gt((E) => {
                            (s._loadedRoutes = E.routes),
                              (s._loadedInjector = E.injector);
                          })
                        )
                      : (function va(l) {
                          return ft(Mo(so, 3));
                        })()
                  )
                )
            : (0, G.of)({ routes: [], injector: u });
        }
        lineralizeSegments(u, s) {
          let f = [],
            v = s.root;
          for (;;) {
            if (((f = f.concat(v.segments)), 0 === v.numberOfChildren))
              return (0, G.of)(f);
            if (v.numberOfChildren > 1 || !v.children[Ye])
              return ft(new d.vHH(4e3, so));
            v = v.children[Ye];
          }
        }
        applyRedirectCommands(u, s, f) {
          return this.applyRedirectCreateUrlTree(
            s,
            this.urlSerializer.parse(s),
            u,
            f
          );
        }
        applyRedirectCreateUrlTree(u, s, f, v) {
          const E = this.createSegmentGroup(u, s.root, f, v);
          return new gn(
            E,
            this.createQueryParams(s.queryParams, this.urlTree.queryParams),
            s.fragment
          );
        }
        createQueryParams(u, s) {
          const f = {};
          return (
            T(u, (v, E) => {
              if ("string" == typeof v && v.startsWith(":")) {
                const U = v.substring(1);
                f[E] = s[U];
              } else f[E] = v;
            }),
            f
          );
        }
        createSegmentGroup(u, s, f, v) {
          const E = this.createSegments(u, s.segments, f, v);
          let w = {};
          return (
            T(s.children, (U, q) => {
              w[q] = this.createSegmentGroup(u, U, f, v);
            }),
            new ut(E, w)
          );
        }
        createSegments(u, s, f, v) {
          return s.map((E) =>
            E.path.startsWith(":")
              ? this.findPosParam(u, E, v)
              : this.findOrReturn(E, f)
          );
        }
        findPosParam(u, s, f) {
          const v = f[s.path.substring(1)];
          if (!v) throw new d.vHH(4001, so);
          return v;
        }
        findOrReturn(u, s) {
          let f = 0;
          for (const v of s) {
            if (v.path === u.path) return s.splice(f), v;
            f++;
          }
          return u;
        }
      }
      class h {}
      class M {
        constructor(u, s, f, v, E, w, U) {
          (this.injector = u),
            (this.rootComponentType = s),
            (this.config = f),
            (this.urlTree = v),
            (this.url = E),
            (this.paramsInheritanceStrategy = w),
            (this.urlSerializer = U);
        }
        recognize() {
          const u = gi(
            this.urlTree.root,
            [],
            [],
            this.config.filter((s) => void 0 === s.redirectTo)
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            u,
            Ye
          ).pipe(
            (0, H.U)((s) => {
              if (null === s) return null;
              const f = new Co(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  Ye,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                v = new cn(f, s),
                E = new Eo(this.url, v);
              return this.inheritParamsAndData(E._root), E;
            })
          );
        }
        inheritParamsAndData(u) {
          const s = u.value,
            f = ki(s, this.paramsInheritanceStrategy);
          (s.params = Object.freeze(f.params)),
            (s.data = Object.freeze(f.data)),
            u.children.forEach((v) => this.inheritParamsAndData(v));
        }
        processSegmentGroup(u, s, f, v) {
          return 0 === f.segments.length && f.hasChildren()
            ? this.processChildren(u, s, f)
            : this.processSegment(u, s, f, f.segments, v);
        }
        processChildren(u, s, f) {
          return (0, P.D)(Object.keys(f.children)).pipe(
            (0, dt.b)((v) => {
              const E = f.children[v],
                w = qo(s, v);
              return this.processSegmentGroup(u, w, E, v);
            }),
            Dt((v, E) => (v && E ? (v.push(...E), v) : null)),
            (function en(l, u = !1) {
              return (0, Q.e)((s, f) => {
                let v = 0;
                s.subscribe(
                  (0, _e.x)(f, (E) => {
                    const w = l(E, v++);
                    (w || u) && f.next(E), !w && f.complete();
                  })
                );
              });
            })((v) => null !== v),
            (0, Ft.d)(null),
            tt(),
            (0, H.U)((v) => {
              if (null === v) return null;
              const E = Le(v);
              return (
                (function x(l) {
                  l.sort((u, s) =>
                    u.value.outlet === Ye
                      ? -1
                      : s.value.outlet === Ye
                      ? 1
                      : u.value.outlet.localeCompare(s.value.outlet)
                  );
                })(E),
                E
              );
            })
          );
        }
        processSegment(u, s, f, v, E) {
          return (0, P.D)(s).pipe(
            (0, dt.b)((w) =>
              this.processSegmentAgainstRoute(w._injector ?? u, w, f, v, E)
            ),
            (0, Be.P)((w) => !!w),
            He((w) => {
              if (pr(w)) return qi(f, v, E) ? (0, G.of)([]) : (0, G.of)(null);
              throw w;
            })
          );
        }
        processSegmentAgainstRoute(u, s, f, v, E) {
          if (s.redirectTo || !Yi(s, f, v, E)) return (0, G.of)(null);
          let w;
          if ("**" === s.path) {
            const U = v.length > 0 ? ce(v).parameters : {},
              q = xt(f) + v.length,
              be = new Co(
                v,
                U,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                Bt(s),
                Gt(s),
                s.component ?? s._loadedComponent ?? null,
                s,
                St(f),
                q,
                Nt(s)
              );
            w = (0, G.of)({
              snapshot: be,
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            w = Ps(f, s, v, u).pipe(
              (0, H.U)(
                ({
                  matched: U,
                  consumedSegments: q,
                  remainingSegments: be,
                  parameters: Re,
                }) => {
                  if (!U) return null;
                  const Et = xt(f) + q.length;
                  return {
                    snapshot: new Co(
                      q,
                      Re,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      Bt(s),
                      Gt(s),
                      s.component ?? s._loadedComponent ?? null,
                      s,
                      St(f),
                      Et,
                      Nt(s)
                    ),
                    consumedSegments: q,
                    remainingSegments: be,
                  };
                }
              )
            );
          return w.pipe(
            W((U) => {
              if (null === U) return (0, G.of)(null);
              const {
                snapshot: q,
                consumedSegments: be,
                remainingSegments: Re,
              } = U;
              u = s._injector ?? u;
              const Et = s._loadedInjector ?? u,
                bn = (function K(l) {
                  return l.children
                    ? l.children
                    : l.loadChildren
                    ? l._loadedRoutes
                    : [];
                })(s),
                { segmentGroup: co, slicedSegments: $r } = gi(
                  f,
                  be,
                  Re,
                  bn.filter((mr) => void 0 === mr.redirectTo)
                );
              if (0 === $r.length && co.hasChildren())
                return this.processChildren(Et, bn, co).pipe(
                  (0, H.U)((mr) => (null === mr ? null : [new cn(q, mr)]))
                );
              if (0 === bn.length && 0 === $r.length)
                return (0, G.of)([new cn(q, [])]);
              const Uo = Gt(s) === E;
              return this.processSegment(Et, bn, co, $r, Uo ? Ye : E).pipe(
                (0, H.U)((mr) => (null === mr ? null : [new cn(q, mr)]))
              );
            })
          );
        }
      }
      function ne(l) {
        const u = l.value.routeConfig;
        return u && "" === u.path && void 0 === u.redirectTo;
      }
      function Le(l) {
        const u = [],
          s = new Set();
        for (const f of l) {
          if (!ne(f)) {
            u.push(f);
            continue;
          }
          const v = u.find((E) => f.value.routeConfig === E.value.routeConfig);
          void 0 !== v ? (v.children.push(...f.children), s.add(v)) : u.push(f);
        }
        for (const f of s) {
          const v = Le(f.children);
          u.push(new cn(f.value, v));
        }
        return u.filter((f) => !s.has(f));
      }
      function St(l) {
        let u = l;
        for (; u._sourceSegment; ) u = u._sourceSegment;
        return u;
      }
      function xt(l) {
        let u = l,
          s = u._segmentIndexShift ?? 0;
        for (; u._sourceSegment; )
          (u = u._sourceSegment), (s += u._segmentIndexShift ?? 0);
        return s - 1;
      }
      function Bt(l) {
        return l.data || {};
      }
      function Nt(l) {
        return l.resolve || {};
      }
      function mi(l) {
        return "string" == typeof l.title || null === l.title;
      }
      function yi(l) {
        return W((u) => {
          const s = l(u);
          return s ? (0, P.D)(s).pipe((0, H.U)(() => u)) : (0, G.of)(u);
        });
      }
      const Po = new d.OlP("ROUTES");
      let xo = (() => {
        class l {
          constructor(s, f) {
            (this.injector = s),
              (this.compiler = f),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(s) {
            if (this.componentLoaders.get(s))
              return this.componentLoaders.get(s);
            if (s._loadedComponent) return (0, G.of)(s._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(s);
            const f = O(s.loadComponent()).pipe(
                (0, H.U)(Ls),
                gt((E) => {
                  this.onLoadEndListener && this.onLoadEndListener(s),
                    (s._loadedComponent = E);
                }),
                hn(() => {
                  this.componentLoaders.delete(s);
                })
              ),
              v = new Ge(f, () => new lt.x()).pipe(me());
            return this.componentLoaders.set(s, v), v;
          }
          loadChildren(s, f) {
            if (this.childrenLoaders.get(f)) return this.childrenLoaders.get(f);
            if (f._loadedRoutes)
              return (0, G.of)({
                routes: f._loadedRoutes,
                injector: f._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(f);
            const E = this.loadModuleFactoryOrRoutes(f.loadChildren).pipe(
                (0, H.U)((U) => {
                  this.onLoadEndListener && this.onLoadEndListener(f);
                  let q,
                    be,
                    Re = !1;
                  Array.isArray(U)
                    ? (be = U)
                    : ((q = U.create(s).injector),
                      (be = Yt(q.get(Po, [], d.XFs.Self | d.XFs.Optional))));
                  return { routes: be.map(Vr), injector: q };
                }),
                hn(() => {
                  this.childrenLoaders.delete(f);
                })
              ),
              w = new Ge(E, () => new lt.x()).pipe(me());
            return this.childrenLoaders.set(f, w), w;
          }
          loadModuleFactoryOrRoutes(s) {
            return O(s()).pipe(
              (0, H.U)(Ls),
              (0, se.z)((v) =>
                v instanceof d.YKP || Array.isArray(v)
                  ? (0, G.of)(v)
                  : (0, P.D)(this.compiler.compileModuleAsync(v))
              )
            );
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(d.LFG(d.zs3), d.LFG(d.Sil));
          }),
          (l.ɵprov = d.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      function Ls(l) {
        return (function _a(l) {
          return l && "object" == typeof l && "default" in l;
        })(l)
          ? l.default
          : l;
      }
      let Xi = (() => {
        class l {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new lt.x()),
              (this.configLoader = (0, d.f3M)(xo)),
              (this.environmentInjector = (0, d.f3M)(d.lqb)),
              (this.urlSerializer = (0, d.f3M)(de)),
              (this.rootContexts = (0, d.f3M)(ro)),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, G.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (v) =>
                this.events.next(new Do(v))),
              (this.configLoader.onLoadStartListener = (v) =>
                this.events.next(new br(v)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(s) {
            const f = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...s, id: f });
          }
          setupNavigations(s) {
            return (
              (this.transitions = new X.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: s.currentUrlTree,
                currentRawUrl: s.currentUrlTree,
                extractedUrl: s.urlHandlingStrategy.extract(s.currentUrlTree),
                urlAfterRedirects: s.urlHandlingStrategy.extract(
                  s.currentUrlTree
                ),
                rawUrl: s.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: Pt,
                restoredState: null,
                currentSnapshot: s.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: s.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, De.h)((f) => 0 !== f.id),
                (0, H.U)((f) => ({
                  ...f,
                  extractedUrl: s.urlHandlingStrategy.extract(f.rawUrl),
                })),
                W((f) => {
                  let v = !1,
                    E = !1;
                  return (0, G.of)(f).pipe(
                    gt((w) => {
                      this.currentNavigation = {
                        id: w.id,
                        initialUrl: w.rawUrl,
                        extractedUrl: w.extractedUrl,
                        trigger: w.source,
                        extras: w.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    W((w) => {
                      const U = s.browserUrlTree.toString(),
                        q =
                          !s.navigated ||
                          w.extractedUrl.toString() !== U ||
                          U !== s.currentUrlTree.toString();
                      if (
                        !q &&
                        "reload" !==
                          (w.extras.onSameUrlNavigation ??
                            s.onSameUrlNavigation)
                      ) {
                        const Re = "";
                        return (
                          this.events.next(
                            new Xr(w.id, s.serializeUrl(f.rawUrl), Re, 0)
                          ),
                          (s.rawUrlTree = w.rawUrl),
                          w.resolve(null),
                          J.E
                        );
                      }
                      if (s.urlHandlingStrategy.shouldProcessUrl(w.rawUrl))
                        return (
                          vi(w.source) && (s.browserUrlTree = w.extractedUrl),
                          (0, G.of)(w).pipe(
                            W((Re) => {
                              const Et = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new lr(
                                    Re.id,
                                    this.urlSerializer.serialize(
                                      Re.extractedUrl
                                    ),
                                    Re.source,
                                    Re.restoredState
                                  )
                                ),
                                Et !== this.transitions?.getValue()
                                  ? J.E
                                  : Promise.resolve(Re)
                              );
                            }),
                            (function ao(l, u, s, f) {
                              return W((v) =>
                                (function Da(l, u, s, f, v) {
                                  return new Nn(l, u, s, f, v).apply();
                                })(l, u, s, v.extractedUrl, f).pipe(
                                  (0, H.U)((E) => ({
                                    ...v,
                                    urlAfterRedirects: E,
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.urlSerializer,
                              s.config
                            ),
                            gt((Re) => {
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: Re.urlAfterRedirects,
                              }),
                                (f.urlAfterRedirects = Re.urlAfterRedirects);
                            }),
                            (function Dn(l, u, s, f, v) {
                              return (0, se.z)((E) =>
                                (function m(l, u, s, f, v, E, w = "emptyOnly") {
                                  return new M(l, u, s, f, v, w, E)
                                    .recognize()
                                    .pipe(
                                      W((U) =>
                                        null === U
                                          ? (function C(l) {
                                              return new we.y((u) =>
                                                u.error(l)
                                              );
                                            })(new h())
                                          : (0, G.of)(U)
                                      )
                                    );
                                })(
                                  l,
                                  u,
                                  s,
                                  E.urlAfterRedirects,
                                  f.serialize(E.urlAfterRedirects),
                                  f,
                                  v
                                ).pipe(
                                  (0, H.U)((w) => ({ ...E, targetSnapshot: w }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.rootComponentType,
                              s.config,
                              this.urlSerializer,
                              s.paramsInheritanceStrategy
                            ),
                            gt((Re) => {
                              if (
                                ((f.targetSnapshot = Re.targetSnapshot),
                                "eager" === s.urlUpdateStrategy)
                              ) {
                                if (!Re.extras.skipLocationChange) {
                                  const bn = s.urlHandlingStrategy.merge(
                                    Re.urlAfterRedirects,
                                    Re.rawUrl
                                  );
                                  s.setBrowserUrl(bn, Re);
                                }
                                s.browserUrlTree = Re.urlAfterRedirects;
                              }
                              const Et = new mn(
                                Re.id,
                                this.urlSerializer.serialize(Re.extractedUrl),
                                this.urlSerializer.serialize(
                                  Re.urlAfterRedirects
                                ),
                                Re.targetSnapshot
                              );
                              this.events.next(Et);
                            })
                          )
                        );
                      if (
                        q &&
                        s.urlHandlingStrategy.shouldProcessUrl(s.rawUrlTree)
                      ) {
                        const {
                            id: Re,
                            extractedUrl: Et,
                            source: bn,
                            restoredState: co,
                            extras: $r,
                          } = w,
                          Uo = new lr(
                            Re,
                            this.urlSerializer.serialize(Et),
                            bn,
                            co
                          );
                        this.events.next(Uo);
                        const mr = ai(Et, this.rootComponentType).snapshot;
                        return (
                          (f = {
                            ...w,
                            targetSnapshot: mr,
                            urlAfterRedirects: Et,
                            extras: {
                              ...$r,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          }),
                          (0, G.of)(f)
                        );
                      }
                      {
                        const Re = "";
                        return (
                          this.events.next(
                            new Xr(w.id, s.serializeUrl(f.extractedUrl), Re, 1)
                          ),
                          (s.rawUrlTree = w.rawUrl),
                          w.resolve(null),
                          J.E
                        );
                      }
                    }),
                    gt((w) => {
                      const U = new un(
                        w.id,
                        this.urlSerializer.serialize(w.extractedUrl),
                        this.urlSerializer.serialize(w.urlAfterRedirects),
                        w.targetSnapshot
                      );
                      this.events.next(U);
                    }),
                    (0, H.U)(
                      (w) =>
                        (f = {
                          ...w,
                          guards: ji(
                            w.targetSnapshot,
                            w.currentSnapshot,
                            this.rootContexts
                          ),
                        })
                    ),
                    (function Hr(l, u) {
                      return (0, se.z)((s) => {
                        const {
                          targetSnapshot: f,
                          currentSnapshot: v,
                          guards: {
                            canActivateChecks: E,
                            canDeactivateChecks: w,
                          },
                        } = s;
                        return 0 === w.length && 0 === E.length
                          ? (0, G.of)({ ...s, guardsResult: !0 })
                          : (function Pn(l, u, s, f) {
                              return (0, P.D)(l).pipe(
                                (0, se.z)((v) =>
                                  (function xn(l, u, s, f, v) {
                                    const E =
                                      u && u.routeConfig
                                        ? u.routeConfig.canDeactivate
                                        : null;
                                    if (!E || 0 === E.length)
                                      return (0, G.of)(!0);
                                    const w = E.map((U) => {
                                      const q = dr(u) ?? v,
                                        be = Ar(U, q);
                                      return O(
                                        (function In(l) {
                                          return l && g(l.canDeactivate);
                                        })(be)
                                          ? be.canDeactivate(l, u, s, f)
                                          : q.runInContext(() => be(l, u, s, f))
                                      ).pipe((0, Be.P)());
                                    });
                                    return (0, G.of)(w).pipe(jr());
                                  })(v.component, v.route, s, u, f)
                                ),
                                (0, Be.P)((v) => !0 !== v, !0)
                              );
                            })(w, f, v, l).pipe(
                              (0, se.z)((U) =>
                                U &&
                                (function S(l) {
                                  return "boolean" == typeof l;
                                })(U)
                                  ? (function Hi(l, u, s, f) {
                                      return (0, P.D)(u).pipe(
                                        (0, dt.b)((v) =>
                                          wt(
                                            (function Gi(l, u) {
                                              return (
                                                null !== l && u && u(new kt(l)),
                                                (0, G.of)(!0)
                                              );
                                            })(v.route.parent, f),
                                            (function $i(l, u) {
                                              return (
                                                null !== l && u && u(new _o(l)),
                                                (0, G.of)(!0)
                                              );
                                            })(v.route, f),
                                            (function Os(l, u, s) {
                                              const f = u[u.length - 1],
                                                E = u
                                                  .slice(0, u.length - 1)
                                                  .reverse()
                                                  .map((w) =>
                                                    (function hr(l) {
                                                      const u = l.routeConfig
                                                        ? l.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return u && 0 !== u.length
                                                        ? { node: l, guards: u }
                                                        : null;
                                                    })(w)
                                                  )
                                                  .filter((w) => null !== w)
                                                  .map((w) =>
                                                    Me(() => {
                                                      const U = w.guards.map(
                                                        (q) => {
                                                          const be =
                                                              dr(w.node) ?? s,
                                                            Re = Ar(q, be);
                                                          return O(
                                                            (function Vt(l) {
                                                              return (
                                                                l &&
                                                                g(
                                                                  l.canActivateChild
                                                                )
                                                              );
                                                            })(Re)
                                                              ? Re.canActivateChild(
                                                                  f,
                                                                  l
                                                                )
                                                              : be.runInContext(
                                                                  () => Re(f, l)
                                                                )
                                                          ).pipe((0, Be.P)());
                                                        }
                                                      );
                                                      return (0, G.of)(U).pipe(
                                                        jr()
                                                      );
                                                    })
                                                  );
                                              return (0, G.of)(E).pipe(jr());
                                            })(l, v.path, s),
                                            (function Rs(l, u, s) {
                                              const f = u.routeConfig
                                                ? u.routeConfig.canActivate
                                                : null;
                                              if (!f || 0 === f.length)
                                                return (0, G.of)(!0);
                                              const v = f.map((E) =>
                                                Me(() => {
                                                  const w = dr(u) ?? s,
                                                    U = Ar(E, w);
                                                  return O(
                                                    (function Fe(l) {
                                                      return (
                                                        l && g(l.canActivate)
                                                      );
                                                    })(U)
                                                      ? U.canActivate(u, l)
                                                      : w.runInContext(() =>
                                                          U(u, l)
                                                        )
                                                  ).pipe((0, Be.P)());
                                                })
                                              );
                                              return (0, G.of)(v).pipe(jr());
                                            })(l, v.route, s)
                                          )
                                        ),
                                        (0, Be.P)((v) => !0 !== v, !0)
                                      );
                                    })(f, E, l, u)
                                  : (0, G.of)(U)
                              ),
                              (0, H.U)((U) => ({ ...s, guardsResult: U }))
                            );
                      });
                    })(this.environmentInjector, (w) => this.events.next(w)),
                    gt((w) => {
                      if (
                        ((f.guardsResult = w.guardsResult), Sn(w.guardsResult))
                      )
                        throw no(0, w.guardsResult);
                      const U = new Er(
                        w.id,
                        this.urlSerializer.serialize(w.extractedUrl),
                        this.urlSerializer.serialize(w.urlAfterRedirects),
                        w.targetSnapshot,
                        !!w.guardsResult
                      );
                      this.events.next(U);
                    }),
                    (0, De.h)(
                      (w) =>
                        !!w.guardsResult ||
                        (s.restoreHistory(w),
                        this.cancelNavigationTransition(w, "", 3),
                        !1)
                    ),
                    yi((w) => {
                      if (w.guards.canActivateChecks.length)
                        return (0, G.of)(w).pipe(
                          gt((U) => {
                            const q = new wr(
                              U.id,
                              this.urlSerializer.serialize(U.extractedUrl),
                              this.urlSerializer.serialize(U.urlAfterRedirects),
                              U.targetSnapshot
                            );
                            this.events.next(q);
                          }),
                          W((U) => {
                            let q = !1;
                            return (0, G.of)(U).pipe(
                              (function lo(l, u) {
                                return (0, se.z)((s) => {
                                  const {
                                    targetSnapshot: f,
                                    guards: { canActivateChecks: v },
                                  } = s;
                                  if (!v.length) return (0, G.of)(s);
                                  let E = 0;
                                  return (0, P.D)(v).pipe(
                                    (0, dt.b)((w) =>
                                      (function qn(l, u, s, f) {
                                        const v = l.routeConfig,
                                          E = l._resolve;
                                        return (
                                          void 0 !== v?.title &&
                                            !mi(v) &&
                                            (E[pn] = v.title),
                                          (function uo(l, u, s, f) {
                                            const v = (function Tr(l) {
                                              return [
                                                ...Object.keys(l),
                                                ...Object.getOwnPropertySymbols(
                                                  l
                                                ),
                                              ];
                                            })(l);
                                            if (0 === v.length)
                                              return (0, G.of)({});
                                            const E = {};
                                            return (0, P.D)(v).pipe(
                                              (0, se.z)((w) =>
                                                (function Jo(l, u, s, f) {
                                                  const v = dr(u) ?? f,
                                                    E = Ar(l, v);
                                                  return O(
                                                    E.resolve
                                                      ? E.resolve(u, s)
                                                      : v.runInContext(() =>
                                                          E(u, s)
                                                        )
                                                  );
                                                })(l[w], u, s, f).pipe(
                                                  (0, Be.P)(),
                                                  gt((U) => {
                                                    E[w] = U;
                                                  })
                                                )
                                              ),
                                              It(1),
                                              (function En(l) {
                                                return (0, H.U)(() => l);
                                              })(E),
                                              He((w) => (pr(w) ? J.E : ft(w)))
                                            );
                                          })(E, l, u, f).pipe(
                                            (0, H.U)(
                                              (w) => (
                                                (l._resolvedData = w),
                                                (l.data = ki(l, s).resolve),
                                                v &&
                                                  mi(v) &&
                                                  (l.data[pn] = v.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(w.route, f, l, u)
                                    ),
                                    gt(() => E++),
                                    It(1),
                                    (0, se.z)((w) =>
                                      E === v.length ? (0, G.of)(s) : J.E
                                    )
                                  );
                                });
                              })(
                                s.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              gt({
                                next: () => (q = !0),
                                complete: () => {
                                  q ||
                                    (s.restoreHistory(U),
                                    this.cancelNavigationTransition(U, "", 2));
                                },
                              })
                            );
                          }),
                          gt((U) => {
                            const q = new kn(
                              U.id,
                              this.urlSerializer.serialize(U.extractedUrl),
                              this.urlSerializer.serialize(U.urlAfterRedirects),
                              U.targetSnapshot
                            );
                            this.events.next(q);
                          })
                        );
                    }),
                    yi((w) => {
                      const U = (q) => {
                        const be = [];
                        q.routeConfig?.loadComponent &&
                          !q.routeConfig._loadedComponent &&
                          be.push(
                            this.configLoader.loadComponent(q.routeConfig).pipe(
                              gt((Re) => {
                                q.component = Re;
                              }),
                              (0, H.U)(() => {})
                            )
                          );
                        for (const Re of q.children) be.push(...U(Re));
                        return be;
                      };
                      return ge(U(w.targetSnapshot.root)).pipe(
                        (0, Ft.d)(),
                        (0, re.q)(1)
                      );
                    }),
                    yi(() => this.afterPreactivation()),
                    (0, H.U)((w) => {
                      const U = (function Vi(l, u, s) {
                        const f = bo(l, u._root, s ? s._root : void 0);
                        return new eo(f, u);
                      })(
                        s.routeReuseStrategy,
                        w.targetSnapshot,
                        w.currentRouterState
                      );
                      return (f = { ...w, targetRouterState: U });
                    }),
                    gt((w) => {
                      (s.currentUrlTree = w.urlAfterRedirects),
                        (s.rawUrlTree = s.urlHandlingStrategy.merge(
                          w.urlAfterRedirects,
                          w.rawUrl
                        )),
                        (s.routerState = w.targetRouterState),
                        "deferred" === s.urlUpdateStrategy &&
                          (w.extras.skipLocationChange ||
                            s.setBrowserUrl(s.rawUrlTree, w),
                          (s.browserUrlTree = w.urlAfterRedirects));
                    }),
                    ((l, u, s) =>
                      (0, H.U)(
                        (f) => (
                          new On(
                            u,
                            f.targetRouterState,
                            f.currentRouterState,
                            s
                          ).activate(l),
                          f
                        )
                      ))(this.rootContexts, s.routeReuseStrategy, (w) =>
                      this.events.next(w)
                    ),
                    gt({
                      next: (w) => {
                        (v = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (s.navigated = !0),
                          this.events.next(
                            new ot(
                              w.id,
                              this.urlSerializer.serialize(w.extractedUrl),
                              this.urlSerializer.serialize(s.currentUrlTree)
                            )
                          ),
                          s.titleStrategy?.updateTitle(
                            w.targetRouterState.snapshot
                          ),
                          w.resolve(!0);
                      },
                      complete: () => {
                        v = !0;
                      },
                    }),
                    hn(() => {
                      v || E || this.cancelNavigationTransition(f, "", 1),
                        this.currentNavigation?.id === f.id &&
                          (this.currentNavigation = null);
                    }),
                    He((w) => {
                      if (((E = !0), Ui(w))) {
                        cr(w) || ((s.navigated = !0), s.restoreHistory(f, !0));
                        const U = new Jr(
                          f.id,
                          this.urlSerializer.serialize(f.extractedUrl),
                          w.message,
                          w.cancellationCode
                        );
                        if ((this.events.next(U), cr(w))) {
                          const q = s.urlHandlingStrategy.merge(
                              w.url,
                              s.rawUrlTree
                            ),
                            be = {
                              skipLocationChange: f.extras.skipLocationChange,
                              replaceUrl:
                                "eager" === s.urlUpdateStrategy || vi(f.source),
                            };
                          s.scheduleNavigation(q, Pt, null, be, {
                            resolve: f.resolve,
                            reject: f.reject,
                            promise: f.promise,
                          });
                        } else f.resolve(!1);
                      } else {
                        s.restoreHistory(f, !0);
                        const U = new ii(
                          f.id,
                          this.urlSerializer.serialize(f.extractedUrl),
                          w,
                          f.targetSnapshot ?? void 0
                        );
                        this.events.next(U);
                        try {
                          f.resolve(s.errorHandler(w));
                        } catch (q) {
                          f.reject(q);
                        }
                      }
                      return J.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(s, f, v) {
            const E = new Jr(
              s.id,
              this.urlSerializer.serialize(s.extractedUrl),
              f,
              v
            );
            this.events.next(E), s.resolve(!1);
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = d.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      function vi(l) {
        return l !== Pt;
      }
      let Qi = (() => {
          class l {
            buildTitle(s) {
              let f,
                v = s.root;
              for (; void 0 !== v; )
                (f = this.getResolvedTitleForRoute(v) ?? f),
                  (v = v.children.find((E) => E.outlet === Ye));
              return f;
            }
            getResolvedTitleForRoute(s) {
              return s.data[pn];
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = d.Yz7({
              token: l,
              factory: function () {
                return (0, d.f3M)(es);
              },
              providedIn: "root",
            })),
            l
          );
        })(),
        es = (() => {
          class l extends Qi {
            constructor(s) {
              super(), (this.title = s);
            }
            updateTitle(s) {
              const f = this.buildTitle(s);
              void 0 !== f && this.title.setTitle(f);
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(d.LFG(Ut.Dx));
            }),
            (l.ɵprov = d.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: "root",
            })),
            l
          );
        })(),
        Cc = (() => {
          class l {}
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = d.Yz7({
              token: l,
              factory: function () {
                return (0, d.f3M)(Ea);
              },
              providedIn: "root",
            })),
            l
          );
        })();
      class Ca {
        shouldDetach(u) {
          return !1;
        }
        store(u, s) {}
        shouldAttach(u) {
          return !1;
        }
        retrieve(u) {
          return null;
        }
        shouldReuseRoute(u, s) {
          return u.routeConfig === s.routeConfig;
        }
      }
      let Ea = (() => {
        class l extends Ca {}
        return (
          (l.ɵfac = (function () {
            let u;
            return function (f) {
              return (u || (u = d.n5z(l)))(f || l);
            };
          })()),
          (l.ɵprov = d.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const Xn = new d.OlP("", { providedIn: "root", factory: () => ({}) });
      let ml = (() => {
          class l {}
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = d.Yz7({
              token: l,
              factory: function () {
                return (0, d.f3M)(ts);
              },
              providedIn: "root",
            })),
            l
          );
        })(),
        ts = (() => {
          class l {
            shouldProcessUrl(s) {
              return !0;
            }
            extract(s) {
              return s;
            }
            merge(s, f) {
              return s;
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = d.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: "root",
            })),
            l
          );
        })();
      function wa(l) {
        throw l;
      }
      function ks(l, u, s) {
        return u.parse("/");
      }
      const Vs = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        yl = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let Un = (() => {
          class l {
            get navigationId() {
              return this.navigationTransitions.navigationId;
            }
            get browserPageId() {
              return this.location.getState()?.ɵrouterPageId;
            }
            get events() {
              return this.navigationTransitions.events;
            }
            constructor() {
              (this.disposed = !1),
                (this.currentPageId = 0),
                (this.console = (0, d.f3M)(d.c2e)),
                (this.isNgZoneEnabled = !1),
                (this.options = (0, d.f3M)(Xn, { optional: !0 }) || {}),
                (this.errorHandler = this.options.errorHandler || wa),
                (this.malformedUriErrorHandler =
                  this.options.malformedUriErrorHandler || ks),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.urlHandlingStrategy = (0, d.f3M)(ml)),
                (this.routeReuseStrategy = (0, d.f3M)(Cc)),
                (this.urlCreationStrategy = (0, d.f3M)(vn)),
                (this.titleStrategy = (0, d.f3M)(Qi)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || "ignore"),
                (this.paramsInheritanceStrategy =
                  this.options.paramsInheritanceStrategy || "emptyOnly"),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || "deferred"),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || "replace"),
                (this.config = Yt((0, d.f3M)(Po, { optional: !0 }) ?? [])),
                (this.navigationTransitions = (0, d.f3M)(Xi)),
                (this.urlSerializer = (0, d.f3M)(de)),
                (this.location = (0, d.f3M)(Pe.Ye)),
                (this.isNgZoneEnabled =
                  (0, d.f3M)(d.R0b) instanceof d.R0b &&
                  d.R0b.isInAngularZone()),
                this.resetConfig(this.config),
                (this.currentUrlTree = new gn()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = ai(this.currentUrlTree, null)),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (s) => {
                    (this.lastSuccessfulId = s.id),
                      (this.currentPageId = s.targetPageId);
                  },
                  (s) => {
                    this.console.warn(`Unhandled Navigation Error: ${s}`);
                  }
                );
            }
            resetRootComponentType(s) {
              (this.routerState.root.component = s),
                (this.navigationTransitions.rootComponentType = s);
            }
            initialNavigation() {
              if (
                (this.setUpLocationChangeListener(),
                !this.navigationTransitions.hasRequestedNavigation)
              ) {
                const s = this.location.getState();
                this.navigateToSyncWithBrowser(this.location.path(!0), Pt, s);
              }
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((s) => {
                  const f = "popstate" === s.type ? "popstate" : "hashchange";
                  "popstate" === f &&
                    setTimeout(() => {
                      this.navigateToSyncWithBrowser(s.url, f, s.state);
                    }, 0);
                }));
            }
            navigateToSyncWithBrowser(s, f, v) {
              const E = { replaceUrl: !0 },
                w = v?.navigationId ? v : null;
              if (v) {
                const q = { ...v };
                delete q.navigationId,
                  delete q.ɵrouterPageId,
                  0 !== Object.keys(q).length && (E.state = q);
              }
              const U = this.parseUrl(s);
              this.scheduleNavigation(U, f, w, E);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            resetConfig(s) {
              (this.config = s.map(Vr)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(s, f = {}) {
              const {
                  relativeTo: v,
                  queryParams: E,
                  fragment: w,
                  queryParamsHandling: U,
                  preserveFragment: q,
                } = f,
                be = q ? this.currentUrlTree.fragment : w;
              let Re = null;
              switch (U) {
                case "merge":
                  Re = { ...this.currentUrlTree.queryParams, ...E };
                  break;
                case "preserve":
                  Re = this.currentUrlTree.queryParams;
                  break;
                default:
                  Re = E || null;
              }
              return (
                null !== Re && (Re = this.removeEmptyProps(Re)),
                this.urlCreationStrategy.createUrlTree(
                  v,
                  this.routerState,
                  this.currentUrlTree,
                  s,
                  Re,
                  be ?? null
                )
              );
            }
            navigateByUrl(s, f = { skipLocationChange: !1 }) {
              const v = Sn(s) ? s : this.parseUrl(s),
                E = this.urlHandlingStrategy.merge(v, this.rawUrlTree);
              return this.scheduleNavigation(E, Pt, null, f);
            }
            navigate(s, f = { skipLocationChange: !1 }) {
              return (
                (function ba(l) {
                  for (let u = 0; u < l.length; u++) {
                    if (null == l[u]) throw new d.vHH(4008, !1);
                  }
                })(s),
                this.navigateByUrl(this.createUrlTree(s, f), f)
              );
            }
            serializeUrl(s) {
              return this.urlSerializer.serialize(s);
            }
            parseUrl(s) {
              let f;
              try {
                f = this.urlSerializer.parse(s);
              } catch (v) {
                f = this.malformedUriErrorHandler(v, this.urlSerializer, s);
              }
              return f;
            }
            isActive(s, f) {
              let v;
              if (
                ((v = !0 === f ? { ...Vs } : !1 === f ? { ...yl } : f), Sn(s))
              )
                return Ke(this.currentUrlTree, s, v);
              const E = this.parseUrl(s);
              return Ke(this.currentUrlTree, E, v);
            }
            removeEmptyProps(s) {
              return Object.keys(s).reduce((f, v) => {
                const E = s[v];
                return null != E && (f[v] = E), f;
              }, {});
            }
            scheduleNavigation(s, f, v, E, w) {
              if (this.disposed) return Promise.resolve(!1);
              let U, q, be, Re;
              return (
                w
                  ? ((U = w.resolve), (q = w.reject), (be = w.promise))
                  : (be = new Promise((Et, bn) => {
                      (U = Et), (q = bn);
                    })),
                (Re =
                  "computed" === this.canceledNavigationResolution
                    ? v && v.ɵrouterPageId
                      ? v.ɵrouterPageId
                      : E.replaceUrl || E.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1
                    : 0),
                this.navigationTransitions.handleNavigationRequest({
                  targetPageId: Re,
                  source: f,
                  restoredState: v,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: s,
                  extras: E,
                  resolve: U,
                  reject: q,
                  promise: be,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                be.catch((Et) => Promise.reject(Et))
              );
            }
            setBrowserUrl(s, f) {
              const v = this.urlSerializer.serialize(s),
                E = {
                  ...f.extras.state,
                  ...this.generateNgRouterState(f.id, f.targetPageId),
                };
              this.location.isCurrentPathEqualTo(v) || f.extras.replaceUrl
                ? this.location.replaceState(v, "", E)
                : this.location.go(v, "", E);
            }
            restoreHistory(s, f = !1) {
              if ("computed" === this.canceledNavigationResolution) {
                const v = this.currentPageId - s.targetPageId;
                ("popstate" !== s.source &&
                  "eager" !== this.urlUpdateStrategy &&
                  this.currentUrlTree !==
                    this.getCurrentNavigation()?.finalUrl) ||
                0 === v
                  ? this.currentUrlTree ===
                      this.getCurrentNavigation()?.finalUrl &&
                    0 === v &&
                    (this.resetState(s),
                    (this.browserUrlTree = s.currentUrlTree),
                    this.resetUrlToCurrentUrlTree())
                  : this.location.historyGo(v);
              } else
                "replace" === this.canceledNavigationResolution &&
                  (f && this.resetState(s), this.resetUrlToCurrentUrlTree());
            }
            resetState(s) {
              (this.routerState = s.currentRouterState),
                (this.currentUrlTree = s.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  s.rawUrl
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId
                )
              );
            }
            generateNgRouterState(s, f) {
              return "computed" === this.canceledNavigationResolution
                ? { navigationId: s, ɵrouterPageId: f }
                : { navigationId: s };
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = d.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: "root",
            })),
            l
          );
        })(),
        Di = (() => {
          class l {
            constructor(s, f, v, E, w, U) {
              (this.router = s),
                (this.route = f),
                (this.tabIndexAttribute = v),
                (this.renderer = E),
                (this.el = w),
                (this.locationStrategy = U),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new lt.x());
              const q = w.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = "a" === q || "area" === q),
                this.isAnchorElement
                  ? (this.subscription = s.events.subscribe((be) => {
                      be instanceof ot && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl("0");
            }
            set preserveFragment(s) {
              this._preserveFragment = (0, d.D6c)(s);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(s) {
              this._skipLocationChange = (0, d.D6c)(s);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(s) {
              this._replaceUrl = (0, d.D6c)(s);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(s) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue("tabindex", s);
            }
            ngOnChanges(s) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(s) {
              null != s
                ? ((this.commands = Array.isArray(s) ? s : [s]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(s, f, v, E, w) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== s ||
                      f ||
                      v ||
                      E ||
                      w ||
                      ("string" == typeof this.target &&
                        "_self" != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
              const s =
                null === this.href
                  ? null
                  : (0, d.P3R)(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      "href"
                    );
              this.applyAttributeValue("href", s);
            }
            applyAttributeValue(s, f) {
              const v = this.renderer,
                E = this.el.nativeElement;
              null !== f ? v.setAttribute(E, s, f) : v.removeAttribute(E, s);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(
                d.Y36(Un),
                d.Y36(Wn),
                d.$8M("tabindex"),
                d.Y36(d.Qsj),
                d.Y36(d.SBq),
                d.Y36(Pe.S$)
              );
            }),
            (l.ɵdir = d.lG2({
              type: l,
              selectors: [["", "routerLink", ""]],
              hostVars: 1,
              hostBindings: function (s, f) {
                1 & s &&
                  d.NdJ("click", function (E) {
                    return f.onClick(
                      E.button,
                      E.ctrlKey,
                      E.shiftKey,
                      E.altKey,
                      E.metaKey
                    );
                  }),
                  2 & s && d.uIk("target", f.target);
              },
              inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                relativeTo: "relativeTo",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                routerLink: "routerLink",
              },
              standalone: !0,
              features: [d.TTD],
            })),
            l
          );
        })();
      class _i {}
      let Sa = (() => {
        class l {
          constructor(s, f, v, E, w) {
            (this.router = s),
              (this.injector = v),
              (this.preloadingStrategy = E),
              (this.loader = w);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                (0, De.h)((s) => s instanceof ot),
                (0, dt.b)(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(s, f) {
            const v = [];
            for (const E of f) {
              E.providers &&
                !E._injector &&
                (E._injector = (0, d.MMx)(E.providers, s, `Route: ${E.path}`));
              const w = E._injector ?? s,
                U = E._loadedInjector ?? w;
              (E.loadChildren && !E._loadedRoutes && void 0 === E.canLoad) ||
              (E.loadComponent && !E._loadedComponent)
                ? v.push(this.preloadConfig(w, E))
                : (E.children || E._loadedRoutes) &&
                  v.push(this.processRoutes(U, E.children ?? E._loadedRoutes));
            }
            return (0, P.D)(v).pipe((0, Qe.J)());
          }
          preloadConfig(s, f) {
            return this.preloadingStrategy.preload(f, () => {
              let v;
              v =
                f.loadChildren && void 0 === f.canLoad
                  ? this.loader.loadChildren(s, f)
                  : (0, G.of)(null);
              const E = v.pipe(
                (0, se.z)((w) =>
                  null === w
                    ? (0, G.of)(void 0)
                    : ((f._loadedRoutes = w.routes),
                      (f._loadedInjector = w.injector),
                      this.processRoutes(w.injector ?? s, w.routes))
                )
              );
              if (f.loadComponent && !f._loadedComponent) {
                const w = this.loader.loadComponent(f);
                return (0, P.D)([E, w]).pipe((0, Qe.J)());
              }
              return E;
            });
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(
              d.LFG(Un),
              d.LFG(d.Sil),
              d.LFG(d.lqb),
              d.LFG(_i),
              d.LFG(xo)
            );
          }),
          (l.ɵprov = d.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const rs = new d.OlP("");
      let Fo = (() => {
        class l {
          constructor(s, f, v, E, w = {}) {
            (this.urlSerializer = s),
              (this.transitions = f),
              (this.viewportScroller = v),
              (this.zone = E),
              (this.options = w),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (w.scrollPositionRestoration =
                w.scrollPositionRestoration || "disabled"),
              (w.anchorScrolling = w.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((s) => {
              s instanceof lr
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = s.navigationTrigger),
                  (this.restoredId = s.restoredState
                    ? s.restoredState.navigationId
                    : 0))
                : s instanceof ot &&
                  ((this.lastId = s.id),
                  this.scheduleScrollEvent(
                    s,
                    this.urlSerializer.parse(s.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((s) => {
              s instanceof Mr &&
                (s.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(s.position)
                  : s.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(s.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(s, f) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new Mr(
                      s,
                      "popstate" === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      f
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
        }
        return (
          (l.ɵfac = function (s) {
            d.$Z();
          }),
          (l.ɵprov = d.Yz7({ token: l, factory: l.ɵfac })),
          l
        );
      })();
      function Lo(l, u) {
        return { ɵkind: l, ɵproviders: u };
      }
      function ko() {
        const l = (0, d.f3M)(d.zs3);
        return (u) => {
          const s = l.get(d.z2F);
          if (u !== s.components[0]) return;
          const f = l.get(Un),
            v = l.get(Bs);
          1 === l.get(wi) && f.initialNavigation(),
            l.get(jt, null, d.XFs.Optional)?.setUpPreloading(),
            l.get(rs, null, d.XFs.Optional)?.init(),
            f.resetRootComponentType(s.componentTypes[0]),
            v.closed || (v.next(), v.unsubscribe());
        };
      }
      const Bs = new d.OlP("", { factory: () => new lt.x() }),
        wi = new d.OlP("", { providedIn: "root", factory: () => 1 });
      const jt = new d.OlP("");
      function bc(l) {
        return Lo(0, [
          { provide: jt, useExisting: Sa },
          { provide: _i, useExisting: l },
        ]);
      }
      const Cl = new d.OlP("ROUTER_FORROOT_GUARD"),
        Mc = [
          Pe.Ye,
          { provide: de, useClass: ie },
          Un,
          ro,
          {
            provide: Wn,
            useFactory: function os(l) {
              return l.routerState.root;
            },
            deps: [Un],
          },
          xo,
          [],
        ];
      function bi() {
        return new d.PXZ("Router", Un);
      }
      let Sc = (() => {
        class l {
          constructor(s) {}
          static forRoot(s, f) {
            return {
              ngModule: l,
              providers: [
                Mc,
                [],
                { provide: Po, multi: !0, useValue: s },
                {
                  provide: Cl,
                  useFactory: Mi,
                  deps: [[Un, new d.FiY(), new d.tp0()]],
                },
                { provide: Xn, useValue: f || {} },
                f?.useHash
                  ? { provide: Pe.S$, useClass: Pe.Do }
                  : { provide: Pe.S$, useClass: Pe.b0 },
                {
                  provide: rs,
                  useFactory: () => {
                    const l = (0, d.f3M)(Pe.EM),
                      u = (0, d.f3M)(d.R0b),
                      s = (0, d.f3M)(Xn),
                      f = (0, d.f3M)(Xi),
                      v = (0, d.f3M)(de);
                    return (
                      s.scrollOffset && l.setOffset(s.scrollOffset),
                      new Fo(v, f, l, u, s)
                    );
                  },
                },
                f?.preloadingStrategy
                  ? bc(f.preloadingStrategy).ɵproviders
                  : [],
                { provide: d.PXZ, multi: !0, useFactory: bi },
                f?.initialNavigation ? El(f) : [],
                [
                  { provide: Qn, useFactory: ko },
                  { provide: d.tb, multi: !0, useExisting: Qn },
                ],
              ],
            };
          }
          static forChild(s) {
            return {
              ngModule: l,
              providers: [{ provide: Po, multi: !0, useValue: s }],
            };
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(d.LFG(Cl, 8));
          }),
          (l.ɵmod = d.oAB({ type: l })),
          (l.ɵinj = d.cJS({ imports: [Fr] })),
          l
        );
      })();
      function Mi(l) {
        return "guarded";
      }
      function El(l) {
        return [
          "disabled" === l.initialNavigation
            ? Lo(3, [
                {
                  provide: d.ip1,
                  multi: !0,
                  useFactory: () => {
                    const u = (0, d.f3M)(Un);
                    return () => {
                      u.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: wi, useValue: 2 },
              ]).ɵproviders
            : [],
          "enabledBlocking" === l.initialNavigation
            ? Lo(2, [
                { provide: wi, useValue: 0 },
                {
                  provide: d.ip1,
                  multi: !0,
                  deps: [d.zs3],
                  useFactory: (u) => {
                    const s = u.get(Pe.V_, Promise.resolve());
                    return () =>
                      s.then(
                        () =>
                          new Promise((v) => {
                            const E = u.get(Un),
                              w = u.get(Bs);
                            (function f(v) {
                              u.get(Un)
                                .events.pipe(
                                  (0, De.h)(
                                    (w) =>
                                      w instanceof ot ||
                                      w instanceof Jr ||
                                      w instanceof ii
                                  ),
                                  (0, H.U)(
                                    (w) =>
                                      w instanceof ot ||
                                      (w instanceof Jr &&
                                        (0 === w.code || 1 === w.code) &&
                                        null)
                                  ),
                                  (0, De.h)((w) => null !== w),
                                  (0, re.q)(1)
                                )
                                .subscribe(() => {
                                  v();
                                });
                            })(() => {
                              v(!0);
                            }),
                              (u.get(Xi).afterPreactivation = () => (
                                v(!0), w.closed ? (0, G.of)(void 0) : w
                              )),
                              E.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const Qn = new d.OlP("");
    },
  },
  (qe) => {
    qe((qe.s = 4250));
  },
]);
