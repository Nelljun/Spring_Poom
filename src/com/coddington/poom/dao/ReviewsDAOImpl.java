package com.coddington.poom.dao;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.session.SqlSession;
import com.coddington.poom.vo.Review;

public class ReviewsDAOImpl implements ReviewsDAO {

	private SqlSession session;

	public void setSession(SqlSession session) {
		this.session = session;
	}// setSession() end

	@Override
	public Review selectOne(int no) {
		// TODO Auto-generated method stub
		return session.selectOne("reviews.selectOne", no);
	}

	@Override
	public List<Review> selectList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return session.selectList("reviews.selectList", map);
	}

	@Override
	public int selectCountTotal(int serviceNo) {
		// TODO Auto-generated method stub
		return session.selectOne("reviews.selectCountTotal", serviceNo);
	}

	@Override
	public int update(Review review) {
		// TODO Auto-generated method stub
		return session.update("reviews.update", review);
	}

	@Override
	public int insertReview(Review review) {
		// TODO Auto-generated method stub
		return session.insert("reviews.insertReview", review);
	}
}
