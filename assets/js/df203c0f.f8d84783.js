"use strict";(self.webpackChunkultraschall_manuel=self.webpackChunkultraschall_manuel||[]).push([[9924],{7068:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var l=a(7294),r=a(6010),n=a(9960),c=a(2263),o=["zero","one","two","few","many","other"];function s(e){return o.filter((function(t){return e.includes(t)}))}var u={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function i(){var e=(0,c.Z)().i18n.currentLocale;return(0,l.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:s(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(l){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+l.message+"\n"),u}var t,a}),[e])}function m(){var e=i();return{selectMessage:function(t,a){return function(e,t,a){var l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+l.length+": "+e);var r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}var g=a(1944),d=a(5281),h=a(5999),p=a(7709),f=a(197);function E(e){var t=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(n.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function v(e){var t,a=e.tag,c=(t=m().selectMessage,function(e){return t(e,(0,h.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),o=(0,h.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:c(a.count),tagName:a.label});return l.createElement(g.FG,{className:(0,r.Z)(d.k.wrapper.docsPages,d.k.page.docsTagDocListPage)},l.createElement(g.d,{title:o}),l.createElement(f.Z,{tag:"doc_tag_doc_list"}),l.createElement(p.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(n.Z,{href:a.allTagsPath},l.createElement(h.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},a.items.map((function(e){return l.createElement(E,{key:e.id,doc:e})}))))))))}}}]);