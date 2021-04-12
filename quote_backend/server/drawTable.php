<?php
function draw_table($rows) {
        echo "<table border=5 cellspacing=5>";
        echo "<tr>";
        foreach($rows[0] as $key => $item) {
            echo "<th>$key</th>";
        }
        echo "</tr>";
        foreach($rows as $row) {
            echo "<tr>";
            foreach($row as $item) {
                echo "<td>$item</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    }
?>
