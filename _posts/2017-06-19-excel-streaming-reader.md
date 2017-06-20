# Excel Streaming Reader 1.2.0

The latest version of [Excel Streaming Reader](https://github.com/monitorjbl/excel-streaming-reader) is now available on Maven Central. Thanks to [DoctorGester](https://github.com/DoctorGester), [alvaroAndresCarral](https://github.com/alvaroAndresCarral), [ms1111](https://github.com/ms1111), [rvdwenden](https://github.com/rvdwenden), [ttardy](https://github.com/ttardy), and [whicken](https://github.com/whicken) for their contributions to this release!

* Support for Apache poi 3.15 ([#81](https://github.com/monitorjbl/excel-streaming-reader/issues/81))
* Support for Cell.getRichStringCellValue() ([#82](https://github.com/monitorjbl/excel-streaming-reader/issues/82))
* NullPointerException in StreamingRow.getCell when policy is RETURN_BLANK_AS_NULL ([#85](https://github.com/monitorjbl/excel-streaming-reader/issues/85))
* NPE when retrieving missing r attrs for cell and row in sheetreader ([#87](https://github.com/monitorjbl/excel-streaming-reader/issues/87))
* error during read file java.lang.IndexOutOfBoundsException ([#91](https://github.com/monitorjbl/excel-streaming-reader/issues/91))

If you run into any issues after upgrading to the latest version, please [open an issue](https://github.com/monitorjbl/excel-streaming-reader/issues) for it.
