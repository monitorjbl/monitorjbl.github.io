# Excel Streaming Reader 1.2.1

The latest version of [Excel Streaming Reader](https://github.com/monitorjbl/excel-streaming-reader) is now available in Maven Central! Thanks to [jymigeon](https://github.com/jymigeon), [torerefsnes](https://github.com/torerefsnes), [pjfanning](https://github.com/pjfanning), [cmuchinsky](https://github.com/cmuchinsky), [shawnsmith](https://github.com/shawnsmith), and [daniell](https://github.com/daniell) for their contributions to this release!

Fixes:

* Fix an issue causing errors about bad return types [#109](https://github.com/monitorjbl/excel-streaming-reader/pull/109)
* Fix Shared Strings Table parsing when using SST cache [#105](https://github.com/monitorjbl/excel-streaming-reader/pull/105)
* Ignore formula tag that isn't within a cell [#128](https://github.com/monitorjbl/excel-streaming-reader/pull/128)
* Updated POI dependency to 3.17 [#120](https://github.com/monitorjbl/excel-streaming-reader/pull/120)
* Optimized based on output from profiler on large sheets [#112](https://github.com/monitorjbl/excel-streaming-reader/pull/112)
* Update xerces2 dependency to 2.11.1 due to CVE-2013-4002 [#113](https://github.com/monitorjbl/excel-streaming-reader/pull/113)

If you run into any issues after upgrading to the latest version of the library, please [open an issue](https://github.com/monitorjbl/excel-streaming-reader/issues) for it.
