<?php
$arr = [5,8,1,4,2,7,3,9];


for($i = 0; $i < count($arr); ++$i) {
    for($j = $i+1; $j < count($arr); ++$j) {
        if($arr[$j] > $arr[$i]) {
            $min = $arr[$j];
            $arr[$j] = $arr[$i];
            $arr[$i] = $min;
        }
    }
}
print_r($arr);

$arr = array(4,3,2,1);
$i=0;
while ($arr[$i]) {
echo $arr[$i] ."";
$i++;
}

?>
