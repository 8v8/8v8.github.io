/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","0ac8b3e15ad367fc5fb24faad6fb3983"],["archives/2016/08/index.html","cb9a207ace6cfc173626336e838aac02"],["archives/2016/index.html","03238d449f62e31539986ab8fcb60409"],["archives/2017/05/index.html","2516390423b4fdbf2676fd0e47669345"],["archives/2017/06/index.html","677bcd5ed18a387c4c7988796160c1ef"],["archives/2017/index.html","2ddcb9d31b572bb89e87d46d027ed0f3"],["archives/2018/03/index.html","4ae4851b834d7dfdcda5dee5a5ea3078"],["archives/2018/04/index.html","9048339cd3ad470919f947619ddf5273"],["archives/2018/06/index.html","3168c7c3cc32009a231a39b75dfaebea"],["archives/2018/10/index.html","502d89e3294fad49bcb8c4410c0ce407"],["archives/2018/index.html","baa41279b6b27f0170246cf5e1bbfc26"],["archives/2019/03/index.html","0831b0d7ccb0ac2b596e28fbb05b38aa"],["archives/2019/05/index.html","1060398dd72c2638cd80e4186b8e3e14"],["archives/2019/06/index.html","57f89a854b3e25368eaaac4e268bc63a"],["archives/2019/index.html","c91b74af1dac3bbb592a01592f7939e6"],["archives/index.html","5b1516ba14e343ebdfdda2e1e2124bc4"],["categories/index.html","4337e9d1cdb8f014eb4503c261fb1753"],["categories/test/index.html","c8815c012f6b96ec875bebfc13c07dec"],["categories/技术/index.html","c1fab7ba92092d9c181c90318a9a646b"],["categories/杂谈/index.html","db3df2b44e81275ce5470133e1eae335"],["css/about.css","c5037986d75a485be854d68a21684d78"],["css/common.css","628fb62d7010b6b6f13f92567e462e77"],["css/material-components-web.min.css","021cd6e6cf5a4bd5946861effa3dd8dd"],["img/1.png","9f1914138052c3a631e1f2b2cf674a46"],["img/10.png","5d127887b6d043259f7e2fb99cd08175"],["img/11.png","84c21a53679bddbe415fdae1d3c02163"],["img/12.png","41127baf9a286e968a63653dee50ba21"],["img/13.png","39a5dca2dc2de60bd5dd191f205db7d6"],["img/14.png","069b687b7f1069254c816a56317bfaad"],["img/15.png","30a855e361dcf170aecdce04ce564c68"],["img/16.png","c004830c8683856939dc83b75b230b66"],["img/17.png","ec116546453394cc0d78e580d6d52dd5"],["img/18.png","584900ff821930a8b093b4c0a58be34b"],["img/19.png","db810792edf3d40de5baf5401a9a0626"],["img/2.png","418c3457b6792eb732844d41d2501294"],["img/3.png","e521776cb427f848546e20d784888a55"],["img/4.png","99898b727359e568759eebbb2c9e4a8b"],["img/5.png","fa4f4588b9fab07979acd61b94d34fa0"],["img/6.png","d7e9fe3e0e3db6b841ab12fad331daed"],["img/7.png","2263d9d1cc9b0724e6331374c33f988b"],["img/8.png","2507dbe92186b0b39df6331347aa2c27"],["img/9.png","0c4e486759ad62e3415f8f197f0311f7"],["img/avatar.png","70dd035536c7de6366ac58fbff528156"],["img/bg1.jpg","b2f2569231db0cb04844f9e91222c234"],["img/bg2.jpg","af6c754059e88627ee6be3e6d065205e"],["img/bg3.jpg","dc978b70ec430487633740cebdf1ca31"],["img/bg4.jpg","c1adfa2d35d0b4005e5caa7a90c6e963"],["img/bg5.jpg","ba00c2fa1a8845b795990d3309bc8174"],["img/bg6.jpg","033a888a42b63841a46cffbbfe213457"],["img/bg7.jpg","14d144b4f9abeac5fae7406fee86151b"],["img/dot.png","61ad04e2ad8af7b5850e3f06a7fb9376"],["index.html","39408eb1408ec6a46e52b14a384e82a6"],["js/Valine.min.js","e95b036f9255e864805afad5bd5b75d8"],["js/about.js","fe5adf21411ac824cb2e71eac922ddcd"],["js/archives.js","9b234f50c29d452865573ae0e7bae27f"],["js/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["js/common.js","c2e5a7bee89d3358dcc033e8ae3d2db7"],["js/material-components-web.min.js","126c90928096a1524b84c0580305f89e"],["resume/css/flex.css","e2692e3aa160ead62dc8877b1d929190"],["resume/css/index.css","8f40a5c05065395a2acb6361016d539b"],["resume/css/kfont.css","2842efecb192c48cc7be0dcf4b3e6a0f"],["resume/css/media.css","aa6c2dbfda0eae825744eb1e91bd7866"],["resume/fonts/kfont.eot","599f64a3ee888a21017703cfe5dd31fe"],["resume/fonts/kfont.svg","03055352974ccb10edbf2f26868e081f"],["resume/fonts/kfont.ttf","02663002fdc69ea9e5a1208d5242f665"],["resume/fonts/kfont.woff","97230a09e82bcd3b42a32d6a5bc71961"],["resume/img/bg.jpg","3b852dc16ae611469ae03ebcacd7c0d2"],["resume/img/border.jpg","652effe825f5b56f15222339209fa417"],["resume/img/clip.png","a71dd2db4211e0413132ae2cb79b0b1b"],["resume/img/k.png","f447bbf5ddc07f46de2d73d312e17b1f"],["resume/index.html","1f9b6195d6b4cf3813388e1e30cc339c"],["resume/js/resume.js","c02f2f7051feacbc20d7ea733a027ead"],["tags/angular/index.html","634d6e3d77ccd241bb0704b3c03bc4d5"],["tags/css/index.html","4cba7ce12c736512d873cc817e12e61c"],["tags/electron/index.html","a4357c934571bc5d88e4cdc824d60bf0"],["tags/gulp/index.html","10da4270c686baba3bebb3a034c04fc3"],["tags/index.html","a003eaf6463c444d6503f18b904eb0e3"],["tags/matrix/index.html","fad227fabdbe0d35ca7b9010cb64d219"],["tags/react/index.html","0005fb964df4693543a8e2ad0cd4e860"],["tags/shadow-dom/index.html","d9afc580cdb0100dac7adf6484e7cfd3"],["tags/vue/index.html","f1845dc518736ad5b0835f94e6182bd8"],["tags/正则表达式/index.html","86c8073f0c865093c29de4fc779500e8"],["tags/生活/index.html","d73d9db077f5a93bc11e0559ace8f2a5"],["tags/算法/index.html","8b468f3b98cec259c204148f6deb6f4c"],["tags/职业/index.html","5642a6e5bd7d32695416291fbec3b1e4"],["test/hello-word/index.html","38dbd4bfd179a3ca61288f3a54ed4bfb"],["uncategorized/Vue-two-way-binding/index.html","259afb5e6c45c9fca3dfe39024372e9e"],["技术/About-the-css-transform/index.html","60cacbebc1d4a33139e836d374731fe3"],["技术/Bubble-sorting/index.html","b6b6f1904cfa85f33379ca884318fea3"],["技术/Electron-vue-bug-adventure/index.html","d3179dd27a64a520fda534b08ccbd5a6"],["技术/My-regular-memo/index.html","dcd3c850c94b0e67434967e1578fbfa7"],["技术/Three-major-framework-and-shadow-dom/index.html","879e30b04d176aaac4b63c1dd93027cb"],["技术/Upgrade-gulp-to-v4/index.html","4a065508a5ce9b93c442e43f58a6ce10"],["杂谈/About-the-cold/index.html","61cc70e94bcf10308b1895da50bf75d1"],["杂谈/My-career-direction/index.html","0fae585baee954c3c91535bd4e397b4f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







