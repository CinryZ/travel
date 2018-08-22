var myCalendar = new SimpleCalendar('.date-con');
var myCalendar1 = new SimpleCalendar('.date-con1');
	var options = {
     	  width: '434px',
	      height: '339px',
	      language: 'CH', //语言
	      showLunarCalendar: true, //阴历
	      showHoliday: true, //休假
	      showFestival: true, //节日
	      showLunarFestival: true, //农历节日
	      showSolarTerm: true, //节气
	      showMark: true, //标记
	      timeRange: {
	        startYear: 1900,
	        endYear: 2049
	      },
	      mark: {
	        '2016-5-5': '上学'
	      },
	      theme: {
	        changeAble: false,
	        weeks: {
	          backgroundColor: '#FBEC9C',
	          fontColor: '#4A4A4A',
	          fontSize: '20px',
	        },
	        days: {
	          backgroundColor: '#ffffff',
	          fontColor: '#565555',
	          fontSize: '24px'
	        },
	        todaycolor: 'orange',
	        activeSelectColor: 'orange',
	      }
	  }
	myCalendar.updateSize('434px', '339px');
	myCalendar.addMark('2016-3-7', 'test');
	myCalendar.showFestival(false);
	myCalendar.showLunarCalendar(false);
	myCalendar.showHoliday(false);
	myCalendar.showSolarTerm(false);
	myCalendar.showLunarFestival(false);
	myCalendar.showMark(false);
	

	myCalendar1.updateSize('434px', '339px');
	myCalendar1.addMark('2016-3-7', 'test');
	myCalendar1.showFestival(false);
	myCalendar1.showLunarCalendar(false);
	myCalendar1.showHoliday(false);
	myCalendar1.showSolarTerm(false);
	myCalendar1.showLunarFestival(false);
	myCalendar1.showMark(false);