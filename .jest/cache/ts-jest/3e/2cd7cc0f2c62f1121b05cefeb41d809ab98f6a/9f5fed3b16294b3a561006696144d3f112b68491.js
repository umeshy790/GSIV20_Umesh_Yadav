"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types = __importStar(require("../src/types/types"));
var actions = __importStar(require("../src/action/actions"));
describe('actions', function () {
    it('should create a actions', function () {
        var error = 'Some error';
        var movies = [];
        var movie = {
            id: 1212,
            original_language: 'en',
            original_title: 'dummy',
            overview: 121,
            release_date: 112,
            title: 'dummy',
            vote_average: 1212,
            adult: false,
            backdrop_path: '',
            genre_ids: [121, 22],
            popularity: 4.3,
            poster_path: 'fjfjd',
            video: false,
            vote_count: 121,
        };
        var id = 1212;
        describe('request movie action', function () {
            var page = 1;
            var requestUpcomingMovieAction = {
                type: types.REQUEST_UPCOMING_MOVIES_ACTION,
                page: page,
            };
            expect(actions.requestUpcomingMoviesAction(page)).toEqual(requestUpcomingMovieAction);
        });
        describe('request movie success action', function () {
            var requestUpcomingMovieSuccessAction = {
                type: types.REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION,
                payload: {
                    data: movies,
                    isFetchedMore: false,
                },
            };
            expect(actions.requestUpcomingMoviesSuccessAction({
                data: movies,
                isFetchedMore: false,
            })).toEqual(requestUpcomingMovieSuccessAction);
        });
        describe('request movie failed action', function () {
            var requestUpcomingMovieFailedAction = {
                type: types.REQUEST_UPCOMING_MOVIES_FAILED_ACTION,
                error: error,
            };
            expect(actions.requestUpcomingMoviesFailedAction(error)).toEqual(requestUpcomingMovieFailedAction);
        });
        describe('request movie detail action', function () {
            var requestMovieDetailAction = {
                type: types.REQUEST_MOVIE_DETAILS_ACTION,
                id: id,
            };
            expect(actions.requestMovieDetailAction(id)).toEqual(requestMovieDetailAction);
        });
        describe('request movie detail success action', function () {
            var requestMovieDetailSuccessAction = {
                type: types.REQUEST_MOVIE_DETAILS_SUCCESS_ACTION,
                data: movie,
            };
            expect(actions.requestMovieDetailSuccessAction(movie)).toEqual(requestMovieDetailSuccessAction);
        });
        describe('request movie detail failed action', function () {
            var requestMovieDetailFailedAction = {
                type: types.REQUEST_MOVIE_DETAILS_FAILED_ACTION,
                error: error,
            };
            expect(actions.requestMovieDetailFailedAction(error)).toEqual(requestMovieDetailFailedAction);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdW1lc2gvRG9jdW1lbnRzL2Rldi9HU3luZXJneS9pbWRiL19fdGVzdHNfXy9hY3Rpb25zLXRlc3QudHMiLCJzb3VyY2VzIjpbIi9ob21lL3VtZXNoL0RvY3VtZW50cy9kZXYvR1N5bmVyZ3kvaW1kYi9fX3Rlc3RzX18vYWN0aW9ucy10ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdEQUE0QztBQUM1Qyw2REFBaUQ7QUFHakQsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUNsQixFQUFFLENBQUMseUJBQXlCLEVBQUU7UUFDNUIsSUFBTSxLQUFLLEdBQVcsWUFBWSxDQUFDO1FBQ25DLElBQU0sTUFBTSxHQUFZLEVBQUUsQ0FBQztRQUMzQixJQUFNLEtBQUssR0FBVTtZQUNuQixFQUFFLEVBQUUsSUFBSTtZQUNSLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsY0FBYyxFQUFFLE9BQU87WUFDdkIsUUFBUSxFQUFFLEdBQUc7WUFDYixZQUFZLEVBQUUsR0FBRztZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1lBQ1osYUFBYSxFQUFFLEVBQUU7WUFDakIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNwQixVQUFVLEVBQUUsR0FBRztZQUNmLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLEtBQUssRUFBRSxLQUFLO1lBQ1osVUFBVSxFQUFFLEdBQUc7U0FDaEIsQ0FBQztRQUNGLElBQU0sRUFBRSxHQUFXLElBQUksQ0FBQztRQUV4QixRQUFRLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBTSwwQkFBMEIsR0FBRztnQkFDakMsSUFBSSxFQUFFLEtBQUssQ0FBQyw4QkFBOEI7Z0JBQzFDLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztZQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQ3ZELDBCQUEwQixDQUMzQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsOEJBQThCLEVBQUU7WUFDdkMsSUFBTSxpQ0FBaUMsR0FBRztnQkFDeEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxzQ0FBc0M7Z0JBQ2xELE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsTUFBTTtvQkFDWixhQUFhLEVBQUUsS0FBSztpQkFDckI7YUFDRixDQUFDO1lBQ0YsTUFBTSxDQUNKLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDekMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQyxDQUNILENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsNkJBQTZCLEVBQUU7WUFDdEMsSUFBTSxnQ0FBZ0MsR0FBRztnQkFDdkMsSUFBSSxFQUFFLEtBQUssQ0FBQyxxQ0FBcUM7Z0JBQ2pELEtBQUssT0FBQTthQUNOLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUM5RCxnQ0FBZ0MsQ0FDakMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLDZCQUE2QixFQUFFO1lBQ3RDLElBQU0sd0JBQXdCLEdBQUc7Z0JBQy9CLElBQUksRUFBRSxLQUFLLENBQUMsNEJBQTRCO2dCQUN4QyxFQUFFLEVBQUUsRUFBRTthQUNQLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUNsRCx3QkFBd0IsQ0FDekIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLHFDQUFxQyxFQUFFO1lBQzlDLElBQU0sK0JBQStCLEdBQUc7Z0JBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsb0NBQW9DO2dCQUNoRCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUM1RCwrQkFBK0IsQ0FDaEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLG9DQUFvQyxFQUFFO1lBQzdDLElBQU0sOEJBQThCLEdBQUc7Z0JBQ3JDLElBQUksRUFBRSxLQUFLLENBQUMsbUNBQW1DO2dCQUMvQyxLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUMzRCw4QkFBOEIsQ0FDL0IsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3NyYy90eXBlcy90eXBlcyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3NyYy9hY3Rpb24vYWN0aW9ucyc7XG5pbXBvcnQge01vdmllfSBmcm9tICcuLi9zcmMvbW9kYWwvbW9kYWxzJztcblxuZGVzY3JpYmUoJ2FjdGlvbnMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgY3JlYXRlIGEgYWN0aW9ucycsICgpID0+IHtcbiAgICBjb25zdCBlcnJvcjogc3RyaW5nID0gJ1NvbWUgZXJyb3InO1xuICAgIGNvbnN0IG1vdmllczogTW92aWVbXSA9IFtdO1xuICAgIGNvbnN0IG1vdmllOiBNb3ZpZSA9IHtcbiAgICAgIGlkOiAxMjEyLFxuICAgICAgb3JpZ2luYWxfbGFuZ3VhZ2U6ICdlbicsXG4gICAgICBvcmlnaW5hbF90aXRsZTogJ2R1bW15JyxcbiAgICAgIG92ZXJ2aWV3OiAxMjEsXG4gICAgICByZWxlYXNlX2RhdGU6IDExMixcbiAgICAgIHRpdGxlOiAnZHVtbXknLFxuICAgICAgdm90ZV9hdmVyYWdlOiAxMjEyLFxuICAgICAgYWR1bHQ6IGZhbHNlLFxuICAgICAgYmFja2Ryb3BfcGF0aDogJycsXG4gICAgICBnZW5yZV9pZHM6IFsxMjEsIDIyXSxcbiAgICAgIHBvcHVsYXJpdHk6IDQuMyxcbiAgICAgIHBvc3Rlcl9wYXRoOiAnZmpmamQnLFxuICAgICAgdmlkZW86IGZhbHNlLFxuICAgICAgdm90ZV9jb3VudDogMTIxLFxuICAgIH07XG4gICAgY29uc3QgaWQ6IG51bWJlciA9IDEyMTI7XG5cbiAgICBkZXNjcmliZSgncmVxdWVzdCBtb3ZpZSBhY3Rpb24nLCAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdlID0gMTtcbiAgICAgIGNvbnN0IHJlcXVlc3RVcGNvbWluZ01vdmllQWN0aW9uID0ge1xuICAgICAgICB0eXBlOiB0eXBlcy5SRVFVRVNUX1VQQ09NSU5HX01PVklFU19BQ1RJT04sXG4gICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICB9O1xuICAgICAgZXhwZWN0KGFjdGlvbnMucmVxdWVzdFVwY29taW5nTW92aWVzQWN0aW9uKHBhZ2UpKS50b0VxdWFsKFxuICAgICAgICByZXF1ZXN0VXBjb21pbmdNb3ZpZUFjdGlvbixcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgncmVxdWVzdCBtb3ZpZSBzdWNjZXNzIGFjdGlvbicsICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RVcGNvbWluZ01vdmllU3VjY2Vzc0FjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogdHlwZXMuUkVRVUVTVF9VUENPTUlOR19NT1ZJRVNfU1VDQ0VTU19BQ1RJT04sXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBkYXRhOiBtb3ZpZXMsXG4gICAgICAgICAgaXNGZXRjaGVkTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgZXhwZWN0KFxuICAgICAgICBhY3Rpb25zLnJlcXVlc3RVcGNvbWluZ01vdmllc1N1Y2Nlc3NBY3Rpb24oe1xuICAgICAgICAgIGRhdGE6IG1vdmllcyxcbiAgICAgICAgICBpc0ZldGNoZWRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSksXG4gICAgICApLnRvRXF1YWwocmVxdWVzdFVwY29taW5nTW92aWVTdWNjZXNzQWN0aW9uKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdyZXF1ZXN0IG1vdmllIGZhaWxlZCBhY3Rpb24nLCAoKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0VXBjb21pbmdNb3ZpZUZhaWxlZEFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogdHlwZXMuUkVRVUVTVF9VUENPTUlOR19NT1ZJRVNfRkFJTEVEX0FDVElPTixcbiAgICAgICAgZXJyb3IsXG4gICAgICB9O1xuICAgICAgZXhwZWN0KGFjdGlvbnMucmVxdWVzdFVwY29taW5nTW92aWVzRmFpbGVkQWN0aW9uKGVycm9yKSkudG9FcXVhbChcbiAgICAgICAgcmVxdWVzdFVwY29taW5nTW92aWVGYWlsZWRBY3Rpb24sXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3JlcXVlc3QgbW92aWUgZGV0YWlsIGFjdGlvbicsICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RNb3ZpZURldGFpbEFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogdHlwZXMuUkVRVUVTVF9NT1ZJRV9ERVRBSUxTX0FDVElPTixcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgfTtcbiAgICAgIGV4cGVjdChhY3Rpb25zLnJlcXVlc3RNb3ZpZURldGFpbEFjdGlvbihpZCkpLnRvRXF1YWwoXG4gICAgICAgIHJlcXVlc3RNb3ZpZURldGFpbEFjdGlvbixcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgncmVxdWVzdCBtb3ZpZSBkZXRhaWwgc3VjY2VzcyBhY3Rpb24nLCAoKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0TW92aWVEZXRhaWxTdWNjZXNzQWN0aW9uID0ge1xuICAgICAgICB0eXBlOiB0eXBlcy5SRVFVRVNUX01PVklFX0RFVEFJTFNfU1VDQ0VTU19BQ1RJT04sXG4gICAgICAgIGRhdGE6IG1vdmllLFxuICAgICAgfTtcbiAgICAgIGV4cGVjdChhY3Rpb25zLnJlcXVlc3RNb3ZpZURldGFpbFN1Y2Nlc3NBY3Rpb24obW92aWUpKS50b0VxdWFsKFxuICAgICAgICByZXF1ZXN0TW92aWVEZXRhaWxTdWNjZXNzQWN0aW9uLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdyZXF1ZXN0IG1vdmllIGRldGFpbCBmYWlsZWQgYWN0aW9uJywgKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdE1vdmllRGV0YWlsRmFpbGVkQWN0aW9uID0ge1xuICAgICAgICB0eXBlOiB0eXBlcy5SRVFVRVNUX01PVklFX0RFVEFJTFNfRkFJTEVEX0FDVElPTixcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgfTtcbiAgICAgIGV4cGVjdChhY3Rpb25zLnJlcXVlc3RNb3ZpZURldGFpbEZhaWxlZEFjdGlvbihlcnJvcikpLnRvRXF1YWwoXG4gICAgICAgIHJlcXVlc3RNb3ZpZURldGFpbEZhaWxlZEFjdGlvbixcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=