

//寿命を計算するメソッド
//引数はstAge=タバコを吸い始めた年齢、num＝一日に吸う本数、aveLifespan＝平均寿命
public double calcLifespan(int stAge, int num, int aveLifespan)
{
	//寿命
	double Lifespan;
	
	//寿命の計算
	Lifespan = stAge + (1 - num * 5.5 / 60 / 24) * (aveLifespan - stAge);
	
	return lifespan;
}

//余命を計算するメソッド
//引数はstAge=タバコを吸い始めた年齢、age=現在の年齢、num=一日に吸う本数、aveLifespan＝平均寿命
public double calcRestOfLife(int stAge, int age, int num, int aveLifespan)
{
	//余命
	double restOfLife;
	
	//余命の計算
	restOfLife = calcLifespan(int stAge, int num) - age;
	
	return restOfLife;
}

//現在から死ぬまでにかかるタバコ代を計算するメソッド
//引数はstAge=タバコを吸い始めた年齢、age=現在の年齢、num=一日に吸う本数、aveLifespan＝平均寿命、money=タバコ1箱の値段
public int calcMoney(int stAge, int age, int num, int aveLifespan, int money)
{
	//死ぬまでのタバコ代
	int totalMoney;
	//1箱のタバコの本数
	int numOfBox = 20;
	
	//タバコ代の計算
	totalMoney = num * calcRestOfLife(stAge, age, num) * 365 / numOfBox * money;
	
	return totalMoney;
}

//現在から死ぬまでにタバコにかかる時間
//引数はstAge=タバコを吸い始めた年齢、age=現在の年齢、num=一日に吸う本数、aveLifespan＝平均寿命
public double calcTime(int stAge, int age, int num, int aveLifespan)
{
	//タバコ一本にかかる平均時間(分)
	int time = 4;
	//しぬまでにタバコにかかる時間(時)
	double totalTime;
	
	//タバコにかかる時間の計算
	totalTime = 4 * num * 365 * calcRestOfLife(stAge, age, num);
	
	return totalTime;
}