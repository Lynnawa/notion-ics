import { ICalEventBusyStatus } from 'ical-generator';
import type { QueryDataSourceParameters } from '@notionhq/client/build/src/api-endpoints';

export default {
	filter: {
		and: [
		]
	},
	dateProperty: '日期',
	titleProperty: '名称',
	busy: ICalEventBusyStatus.FREE
} as {
	filter: Readonly<QueryDataSourceParameters['filter']>;
	dateProperty: Readonly<string>;
	titleProperty: Readonly<string>;
	busy: Readonly<ICalEventBusyStatus>;
};
