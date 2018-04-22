use films

 db.film.find();	
	
	db.film.aggregate(
	[
	{$group:
		{_id:'$year',
		total:{$sum:1
		}
	}
	}
	]
	)
	
	
	
	