
const INSERT_tusers = 'INSERT INTO tusers set ?'



const SELECT_events = 'SELECT * FROM `t_events` ORDER BY `evid` DESC LIMIT 4';
const SELECT_ALLMIN = 'SELECT * FROM `tmin`';
const SELECT_MIN = 'SELECT `minlibrary`.`id`,`tmin`.`minname`,`minlibrary`.`image`,`minlibrary`.`imginfo`,`tmin`.`minid`,`tmin`.`mindes`,`tmin`.`minimg` FROM `tmin` JOIN `minlibrary` ON `minlibrary`.`minid`=`tmin`.`minid` WHERE `tmin`.`minid`=';

const SELECT_content_ALL = 'SELECT `tpost`.`id`,`tpost`.`post`,`tpost`.`desc`,`tpost`.`autor`,`tipos`.`tipo`,`conlibrary`.`image1` FROM `tpost` JOIN `conlibrary` ON `conlibrary`.`id`=`tpost`.`id` JOIN `tipos` ON `tipos`.`id`=`tpost`.`idtipo` WHERE `tpost`.`idtipo`=';

const SELECT_OPv1='SELECT `tpost`.`id`,`tpost`.`post`,`tpost`.`desc` FROM `tpost` WHERE `tpost`.`idtipo`=';


exports.INSERT_tusers = INSERT_tusers;
exports.SELECT_events= SELECT_events;
exports.SELECT_MIN= SELECT_MIN;
exports.SELECT_ALLMIN=SELECT_ALLMIN;
exports.SELECT_content_ALL=SELECT_content_ALL;
exports.SELECT_OPv1=SELECT_OPv1;