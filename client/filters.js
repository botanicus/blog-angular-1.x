// Modified version of https://github.com/vpegado/angular-markdown-filter
angular.module('markdown', []).
  filter('markdown', function ($sce) {
      var converter = new Showdown.converter();
      return function (text) {
          var markdown = text || '';
          var html = converter.makeHtml(markdown);
          return $sce.trustAsHtml(html);
      };
  });
;
