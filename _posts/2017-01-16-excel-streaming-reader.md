# Excel Streaming Reader 1.0.2

The latest version of [Excel Streaming Reader](https://github.com/monitorjbl/excel-streaming-reader) is now available on Maven Central. Thanks to [Scatee](https://github.com/Scatee), [edgraaff](https://github.com/edgraaff), [bhdrk](https://github.com/bhdrk), [ToddWarwaruk](https://github.com/ToddWarwaruk), and [ms1111](https://github.com/ms1111) for their contributions to this release!

Fixes:

* Support for Workbook.isSheetHidden() and Workbook.isSheetVeryHidden() ([#26](https://github.com/monitorjbl/excel-streaming-reader/issues/26))
* Support for Row.getFirstCellNum() ([#49](https://github.com/monitorjbl/excel-streaming-reader/issues/49))
* Support for StreamingRow.getPhysicalNumberOfCells() ([#61](https://github.com/monitorjbl/excel-streaming-reader/pull/61))
* Support for Sheet.getLastRowNum() ([#56](https://github.com/monitorjbl/excel-streaming-reader/pull/56))
* Support for Cell.getBooleanCellValue() ([#50](https://github.com/monitorjbl/excel-streaming-reader/pull/50))
* Fix for Row.getLastCellNum() return value ([#61](https://github.com/monitorjbl/excel-streaming-reader/pull/61))
* Avoid NPE on spreadsheetDrawing row tags ([#59](https://github.com/monitorjbl/excel-streaming-reader/issues/59))
* Correctly throwing IllegalStateException on Cell.getDateCellValue() when type is CELL_TYPE_STRING ([#53](https://github.com/monitorjbl/excel-streaming-reader/issues/53))

If you run into any issues after upgrading to the latest version of the library, please [open an issue](https://github.com/monitorjbl/excel-streaming-reader/issues) for it.
