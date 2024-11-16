from flask import Flask, render_template, jsonify
import mysql.connector
import webbrowser


app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/data")
def get_data():
    conn = mysql.connector.connect(
        host='47.93.241.186',
        user='root',
        password='123456',
        database='pyproject',
        port=3306
    )
    cur = conn.cursor()
    #数量
    # 苹果
    sql_apple_count = 'SELECT sum(defect_count) AS total_apple_defect_count ' \
                      'FROM images_detection_results ' \
                      'WHERE defect_category = "苹果黑星病";'
    cur.execute(sql_apple_count)
    defect_count_apple_result = cur.fetchall()
    defect_count_apple = defect_count_apple_result[0][0]
    # 葡萄
    sql_grape_count = 'SELECT sum(defect_count) AS total_grape_defect_count ' \
                      'FROM images_detection_results ' \
                      'WHERE defect_category = "葡萄黑腐病";'
    cur.execute(sql_grape_count)
    defect_count_grape_result = cur.fetchall()
    defect_count_grape = defect_count_grape_result[0][0]
    # 番茄
    sql_tomato_count = 'SELECT sum(defect_count) AS total_tomato_defect_count ' \
                       'FROM images_detection_results ' \
                       'WHERE defect_category = "番茄叶斑病";'
    cur.execute(sql_tomato_count)
    defect_count_tomato_result = cur.fetchall()
    defect_count_tomato = defect_count_tomato_result[0][0]

    #检测时间
    sql_detection_time = 'SELECT detection_time FROM images_detection_results'
    cur.execute(sql_detection_time)
    detection_time_result = cur.fetchall()
    detection_time = round(detection_time_result[0][0], 3)
    detection_time_num = []
    for result_time in detection_time_result:
        detection_time_num.append(result_time[0])

    #苹果黑星病
    sql_apple_results = 'SELECT average_perimeter, average_area, total_area FROM images_detection_results WHERE defect_category = "苹果黑星病";'
    cur.execute(sql_apple_results)
    apple_results = cur.fetchall()
    apple_data = [[str(i + 1), result[0], result[1], result[2]] for i, result in enumerate(apple_results)]

    # 葡萄黑腐病
    sql_grape_results = 'SELECT average_perimeter, average_area, total_area FROM images_detection_results WHERE defect_category = "葡萄黑腐病";'
    cur.execute(sql_grape_results)
    grape_results = cur.fetchall()
    grape_data = [[str(i + 1), result[0], result[1], result[2]] for i, result in enumerate(grape_results)]

    #番茄叶斑病
    sql_tomato_results = 'SELECT average_perimeter, average_area, total_area FROM images_detection_results WHERE defect_category = "番茄叶斑病";'
    cur.execute(sql_tomato_results)
    tomato_results = cur.fetchall()
    tomato_data = [[str(i + 1), result[0], result[1], result[2]] for i, result in enumerate(tomato_results)]

    #数据展示
    sql_total_quantity = 'SELECT id FROM images_detection_results;'
    cur.execute(sql_total_quantity)
    total_quantity_result = cur.fetchall()
    total_quantity_num = []
    for total_quantity in total_quantity_result:
        total_quantity_num.append(total_quantity[0])



    cur.close()
    conn.close()
    data = {
        'defect_count_num_apple': defect_count_apple,
        'defect_count_num_grape': defect_count_grape,
        'defect_count_num_tomato': defect_count_tomato,
        'detection_time_all': detection_time_num,
        'apple_data' : apple_data,
        'grape_data': grape_data,
        'tomato_data' : tomato_data,
        'total_quantity' : total_quantity_num
    }

    return jsonify(data)

@app.route("/realtime_data")
def get_realtime_data():
    #连接数据库
    conn = mysql.connector.connect(
        host='47.93.241.186',
        user='root',
        password='123456',
        database='pyproject',
        port=3306
    )
    cur = conn.cursor()

    # 数量
    # 苹果
    sql_apple_count = 'SELECT sum(defect_count) AS total_apple_defect_count ' \
                      'FROM realtime_detection_results ' \
                      'WHERE defect_category = "苹果黑星病";'
    cur.execute(sql_apple_count)
    defect_count_apple_result = cur.fetchall()
    defect_count_apple = defect_count_apple_result[0][0]
    # 葡萄
    sql_grape_count = 'SELECT sum(defect_count) AS total_grape_defect_count ' \
                      'FROM realtime_detection_results ' \
                      'WHERE defect_category = "葡萄黑腐病";'
    cur.execute(sql_grape_count)
    defect_count_grape_result = cur.fetchall()
    defect_count_grape = defect_count_grape_result[0][0]
    # 番茄
    sql_tomato_count = 'SELECT sum(defect_count) AS total_tomato_defect_count ' \
                       'FROM realtime_detection_results ' \
                       'WHERE defect_category = "番茄叶斑病";'
    cur.execute(sql_tomato_count)
    defect_count_tomato_result = cur.fetchall()
    defect_count_tomato = defect_count_tomato_result[0][0]

    # 检测时间
    sql_detection_time = 'SELECT detection_time FROM realtime_detection_results'
    cur.execute(sql_detection_time)
    detection_time_result = cur.fetchall()
    detection_time = round(detection_time_result[0][0], 3)
    detection_time_num = []
    for result_time in detection_time_result:
        detection_time_num.append(result_time[0])

    # 苹果黑星病
    sql_apple_results = 'SELECT average_perimeter, average_area, total_area FROM realtime_detection_results WHERE defect_category = "苹果黑星病";'
    cur.execute(sql_apple_results)
    apple_results = cur.fetchall()
    apple_data = [[str(i + 1), result[0], result[1], result[2]] for i, result in enumerate(apple_results)]

    # 葡萄黑腐病
    sql_grape_results = 'SELECT average_perimeter, average_area, total_area FROM realtime_detection_results WHERE defect_category = "葡萄黑腐病";'
    cur.execute(sql_grape_results)
    grape_results = cur.fetchall()
    grape_data = [[str(i + 1), result[0], result[1], result[2]] for i, result in enumerate(grape_results)]

    # 番茄叶斑病
    sql_tomato_results = 'SELECT average_perimeter, average_area, total_area FROM realtime_detection_results WHERE defect_category = "番茄叶斑病";'
    cur.execute(sql_tomato_results)
    tomato_results = cur.fetchall()
    tomato_data = [[str(i + 1), result[0], result[1], result[2]] for i, result in enumerate(tomato_results)]

    # 数据展示
    sql_total_quantity = 'SELECT id FROM realtime_detection_results;'
    cur.execute(sql_total_quantity)
    total_quantity_result = cur.fetchall()
    total_quantity_num = []
    for total_quantity in total_quantity_result:
        total_quantity_num.append(total_quantity[0])

    cur.close()
    conn.close()
    data = {
        'defect_count_num_apple': defect_count_apple,
        'defect_count_num_grape': defect_count_grape,
        'defect_count_num_tomato': defect_count_tomato,
        'detection_time_all': detection_time_num,
        'apple_data': apple_data,
        'grape_data': grape_data,
        'tomato_data': tomato_data,
        'total_quantity': total_quantity_num
    }

    return jsonify(data)

webbrowser.open_new_tab('http://127.0.0.1:5000')

if __name__ == '__main__':
    app.run(debug=True)

